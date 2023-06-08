import { Readable } from 'readable-stream'

import { nibblestoBytes } from '../../util/nibbles'
import { BranchNode, LeafNode } from '../node'

import type { FoundNodeFunction, WalkFilterFunction } from '../../types'
import type { TNode } from '../node/types'
import type { TrieWrap } from '../trieWrapper'
import { bytesToPrefixedHexString } from '@ethereumjs/util'

export class TrieReadStream extends Readable {
  private trie: TrieWrap
  private _started: boolean
  private nodeStream: AsyncIterator<{ node: TNode; currentKey: number[] }>
  private _nextValuePromise: Promise<IteratorResult<{ node: TNode; currentKey: number[] }>>
  constructor(trie: TrieWrap) {
    super({ objectMode: true })

    this.trie = trie
    this._started = false
    this.nodeStream = this.trie
      ._walkTrieRecursively(this.trie.rootNode, this.trie.rootNode.getPartialKey())
      [Symbol.asyncIterator]()
    this._nextValuePromise = this.nodeStream.next()
  }

  async _read() {
    this.trie.debug.extend(`readStream`)('_read')

    this.trie.debug.extend(`readStream`)('starting')
    this._started = true
    let result: IteratorResult<{ node: TNode; currentKey: number[] }> = await this._nextValuePromise
    let done: boolean | undefined
    let value: { node: TNode; currentKey: Uint8Array }
    do {
      result = await this._nextValuePromise
      done = result.done
      value = result.value
      this.trie.debug.extend(`readStream`)(
        `${
          done ? 'done' : `value: currentKey: ${value.currentKey}, node: ${value.node.getType()}}`
        }`
      )
      this._nextValuePromise = this.nodeStream.next()
      if (done) {
        this.push(null)
      } else if (value.node.getValue() !== null) {
        this.trie.debug.extend(`readStream`).extend(`${value.node.getType()}`)(
          `key: ${value.currentKey}, value: ${value.node.getValue()}`
        )

        const keyValue = {
          key: [...value.currentKey, ...value.node.getPartialKey()],
          value: value.node.getValue(),
        }
        this.push(keyValue)
      }
    } while (result.value && result.value.node.getValue() === null)
  }

  /**
   * Finds all nodes that store k,v values
   * called by {@link TrieReadStream}
   * @private
   */
  async _findValueNodes(onFound: (key: number[], value: Uint8Array) => Promise<void>) {
    const filter: WalkFilterFunction = async (node: TNode, _key: number[]) => {
      return node instanceof BranchNode || node instanceof LeafNode
    }

    const onFoundDuringWalk: FoundNodeFunction = async (node: TNode, key: number[]) => {
      const value = node.getValue()
      if (value !== null) {
        await onFound(key, value)
      }
    }

    const walk = async (node: TNode, currentKey: number[] = []) => {
      const fullKey = [...currentKey, ...nibblestoBytes(node.getPartialKey())]

      if (await filter(node, fullKey)) {
        await onFoundDuringWalk(node, fullKey)
      }

      if (node.type === 'BranchNode') {
        for (const [nibble, childNode] of (node as BranchNode).childNodes().entries()) {
          await walk(childNode, [...fullKey, nibble])
        }
      } else if (node.type === 'ExtensionNode') {
        await walk(node.child, fullKey)
      }
    }

    await walk(this.trie.rootNode)
  }
}