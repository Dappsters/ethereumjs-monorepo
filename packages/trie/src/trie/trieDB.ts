import { bytesToPrefixedHexString } from '@ethereumjs/util'
import { MerklePatriciaTrie } from './merklePatricia'
import { NullNode } from './node'
import { ROOT_DB_KEY } from '../types'
import { TrieDatabase } from '../db'
import * as LRUCache from 'lru-cache'
import type { Debugger } from 'debug'
import type { TrieDBOptions } from '../types'
import {
  _garbageCollect,
  _markReachableNodes,
  _verifyPrunedIntegrity,
} from './operations/garbageCollection'
import { TNode } from './node/types'

export class TrieWithDB extends MerklePatriciaTrie {
  static async create(options: TrieDBOptions): Promise<TrieWithDB> {
    const trie = new TrieWithDB(options)
    if (trie.persistent && options.rootNodeRLP) {
      await trie.database().put(trie.hashFunction(options.rootNodeRLP), options.rootNodeRLP)
      await trie.database().put(trie.keySecure(ROOT_DB_KEY), options.rootNodeRLP)
      await trie.setRootByHash(trie.keySecure(ROOT_DB_KEY))
    }
    trie.debug(`Created new Trie`)
    trie.debug(`root: ${bytesToPrefixedHexString(trie.root())}`)
    trie.debug(`secure: ${trie.secure}`)
    trie.debug(`persistent: ${trie.persistent}`)
    trie.debug(`hashFunction: ${trie.hashFunction.name}`)
    trie.debug(`useNodePruning: ${trie.useNodePruning}`)
    trie.debug(`maxCheckpoints: ${trie.maxCheckpoints}`)
    return trie
  }
  private db: TrieDatabase
  cache: LRUCache<Uint8Array, TNode>
  checkpoints: Uint8Array[]
  maxCheckpoints: number
  secure: boolean
  persistent: boolean
  useNodePruning: boolean
  keySecure: (key: Uint8Array) => Uint8Array

  constructor(options: TrieDBOptions = {}) {
    super(options)
    this.cache = options.cache ?? new LRUCache({ max: 1000 })
    this.db = options.db ?? new TrieDatabase({ _debug: this.debug })
    this.checkpoints = options.checkpoints ?? []
    this.maxCheckpoints = options.maxCheckpoints ?? 1000
    this.useNodePruning = options.useNodePruning ?? false
    this.persistent = options.persistent ?? false
    this.secure = options.secure ?? false
    this.keySecure = this.secure ? this.hashFunction : (key: Uint8Array) => key
    this.EMPTY_TRIE_ROOT = this.keySecure(this.EMPTY_TRIE_ROOT)
  }

  database(): TrieDatabase {
    return this.db
  }
  setDataBase(db: TrieDatabase): void {
    this.db = db
  }
  checkpoint(): void {
    this.debug.extend('checkpoint')(`${bytesToPrefixedHexString(this.rootNode.hash())}`)
    this.checkpoints.push(this.rootNode.hash())
  }
  hasCheckpoints(): boolean {
    return this.checkpoints.length > 0
  }
  async lookupNodeByHash(
    hash: Uint8Array,
    debug: Debugger = this.debug
  ): Promise<TNode | undefined> {
    debug = debug.extend('lookupNodeByHash')
    debug(`${bytesToPrefixedHexString(hash)}`)

    //  Check if node in cache
    let node = this.cache.get(hash)
    if (node === undefined) {
      //  Check if node in db
      const encoded = await this.db.get(hash)
      if (!encoded) {
        return undefined
      }
      node = await this._decodeToNode(encoded)
    }
    debug(`node ${node ? `found: ${node.getType()}` : `not found`}`)
    node = await this.resolveProofNode(node)
    this.cache.set(hash, node)
    return node
  }
  async storeNode(node: TNode, debug: Debugger = this.debug): Promise<void> {
    debug = debug
    debug.extend('storeNode')(`${node.getType()}: ${bytesToPrefixedHexString(node.hash())}}`)
    const serializedNode = node.rlpEncode()
    const nodeHash = node.hash()
    this.cache.set(nodeHash, node)
    await this.db.put(nodeHash, serializedNode)
  }
  async persistRoot(rootDbKey: Uint8Array = ROOT_DB_KEY): Promise<void> {
    this.debug.extend('persistRoot')(bytesToPrefixedHexString(rootDbKey))
    await this._withLock(async () => {
      await this.db.put(rootDbKey, this.rootNode.hash())
    })
  }
  async commit(): Promise<void> {
    const checkpoint = this.checkpoints.pop()
    if (checkpoint === undefined) {
      return
    }
    this.debug.extend('commit')(
      `Committing changes from checkpoint: ${bytesToPrefixedHexString(checkpoint)}`
    )
    await this.garbageCollect()
  }
  async revert(): Promise<void> {
    const fromRoot = this.rootNode
    await this._withLock(async () => {
      if (this.checkpoints.length > 0) {
        const checkpoint = this.checkpoints.pop()
        const newRoot = await this.lookupNodeByHash(checkpoint!, this.debug.extend('revert'))
        if (newRoot) {
          this.rootNode = newRoot
        } else {
          this.rootNode = new NullNode({ hashFunction: this.hashFunction })
        }
      }
    })
    await this._deleteAtNode(fromRoot, fromRoot.getPartialKey(), this.debug.extend('revert'))
    this.debug.extend('revert')(
      `from: ${bytesToPrefixedHexString(fromRoot.hash())} to: ${bytesToPrefixedHexString(
        this.rootNode.hash()
      )}`
    )
    await this.garbageCollect()
  }
  async _pruneCheckpoints(): Promise<void> {
    while (this.checkpoints.length > this.maxCheckpoints) {
      this.checkpoints.shift()
    }
    await this.garbageCollect()
  }
  async flushCheckpoints(): Promise<void> {
    this.checkpoints = []
    await this.garbageCollect()
  }

  /** {@link _garbageCollect } */
  garbageCollect = _garbageCollect.bind(this)
  /** {@link _verifyPrunedIntegrity } */
  verifyPrunedIntegrity = _verifyPrunedIntegrity.bind(this)
  /** {@link _markReachableNodes } */
  markReachableNodes = _markReachableNodes.bind(this)
}
