import { RLP } from '@ethereumjs/rlp'
import {
  KECCAK256_NULL,
  KECCAK256_RLP_S,
  bytesToHex,
  hexStringToBytes,
  utf8ToBytes,
} from '@ethereumjs/util'
import { blake2b } from 'ethereum-cryptography/blake2b'
import { bytesToUtf8, concatBytes } from 'ethereum-cryptography/utils'
import * as tape from 'tape'

import { LeafNode, Trie } from '../src'
import { bytesToNibbles } from '../src/util/nibbles'

import type { HashKeysFunction } from '../src'

tape('simple save and retrieve', function (tester) {
  const it = tester.test

  it('should not crash if given a non-existent root', async function (t) {
    if (
      typeof (<any>globalThis).window !== 'undefined' &&
      (<any>globalThis).window.__karma__ !== undefined
    ) {
      t.skip('skip test when running in karma')
      return t.end()
    }
    const rootHash = hexStringToBytes(
      '3f4399b08efe68945c1cf90ffe85bbe3ce978959da753f9e649f034015b8817d'
    )
    const trie = new Trie({ rootHash })
    const value = await trie.get(utf8ToBytes('test'))
    t.equal(value, null)
    t.end()
  })

  const trie = new Trie({ secure: false, useKeyHashing: false })

  it('save a value', async function (t) {
    await trie.put(utf8ToBytes('test'), utf8ToBytes('one'))
    t.end()
  })

  it('should get a value', async function (t) {
    const value = await trie.get(utf8ToBytes('test'))
    t.equal(bytesToUtf8(value!), 'one')
    t.end()
  })

  it('should update a value', async function (t) {
    await trie.put(utf8ToBytes('test'), utf8ToBytes('two'))
    const value = await trie.get(utf8ToBytes('test'))

    t.equal(bytesToUtf8(value!), 'two')
    t.end()
  })

  it('should delete a value', async function (t) {
    await trie.del(utf8ToBytes('test'))
    const value = await trie.get(utf8ToBytes('test'))
    t.notok(value)
    t.end()
  })

  it('should recreate a value', async function (t) {
    await trie.put(utf8ToBytes('test'), utf8ToBytes('one'))
    t.end()
  })

  it('should get updated a value', async function (t) {
    const value = await trie.get(utf8ToBytes('test'))
    t.equal(bytesToUtf8(value!), 'one')
    t.end()
  })

  it('should create a branch here', async function (t) {
    await trie.put(utf8ToBytes('doge'), utf8ToBytes('coin'))
    t.equal(
      'de8a34a8c1d558682eae1528b47523a483dd8685d6db14b291451a66066bf0fc',
      bytesToHex(trie.root())
    )
    t.end()
  })

  it('should get a value that is in a branch', async function (t) {
    const value = await trie.get(utf8ToBytes('doge'))
    t.equal(bytesToUtf8(value!), 'coin')
    t.end()
  })

  it('should delete from a branch', async function (t) {
    await trie.del(utf8ToBytes('doge'))
    const value = await trie.get(utf8ToBytes('doge'))
    t.equal(value, null)
    t.end()
  })
})

tape('storing longer values', async function (tester) {
  const it = tester.test
  const trie = new Trie()
  const longString = 'this will be a really really really long value'
  const longStringRoot = 'b173e2db29e79c78963cff5196f8a983fbe0171388972106b114ef7f5c24dfa3'

  it('should store a longer string', async function (t) {
    await trie.put(utf8ToBytes('done'), utf8ToBytes(longString))
    await trie.put(utf8ToBytes('doge'), utf8ToBytes('coin'))
    t.equal(longStringRoot, bytesToHex(trie.root()))
    t.end()
  })

  it('should retrieve a longer value', async function (t) {
    const value = await trie.get(utf8ToBytes('done'))
    t.equal(bytesToUtf8(value!), longString)
    t.end()
  })

  it('should when being modified delete the old value', async function (t) {
    await trie.put(utf8ToBytes('done'), utf8ToBytes('test'))
    t.end()
  })
})

tape('testing extensions and branches', function (tester) {
  const it = tester.test
  const trie = new Trie({})

  it('should store a value', async function (t) {
    await trie.put(utf8ToBytes('doge'), utf8ToBytes('coin'))
    t.end()
  })

  it('should create extension to store this value', async function (t) {
    await trie.put(utf8ToBytes('do'), utf8ToBytes('verb'))
    t.equal(
      'f803dfcb7e8f1afd45e88eedb4699a7138d6c07b71243d9ae9bff720c99925f9',
      bytesToHex(trie.root())
    )
    t.end()
  })

  it('should store this value under the extension', async function (t) {
    await trie.put(utf8ToBytes('done'), utf8ToBytes('finished'))
    t.equal(
      '409cff4d820b394ed3fb1cd4497bdd19ffa68d30ae34157337a7043c94a3e8cb',
      bytesToHex(trie.root())
    )
    t.end()
  })
})

tape('testing extensions and branches - reverse', function (tester) {
  const it = tester.test
  const trie = new Trie()

  it('should create extension to store this value', async function (t) {
    await trie.put(utf8ToBytes('do'), utf8ToBytes('verb'))
    t.end()
  })

  it('should store a value', async function (t) {
    await trie.put(utf8ToBytes('doge'), utf8ToBytes('coin'))
    t.end()
  })

  it('should store this value under the extension', async function (t) {
    await trie.put(utf8ToBytes('done'), utf8ToBytes('finished'))
    t.equal(
      '409cff4d820b394ed3fb1cd4497bdd19ffa68d30ae34157337a7043c94a3e8cb',
      bytesToHex(trie.root())
    )
    t.end()
  })
})

tape('testing deletion cases', function (tester) {
  const it = tester.test
  const trieSetup = {
    trie: new Trie(),
    msg: 'without DB delete',
  }

  it('should delete from a branch->branch-branch', async function (t) {
    await trieSetup.trie.put(new Uint8Array([11, 11, 11]), utf8ToBytes('first'))
    await trieSetup.trie.put(new Uint8Array([12, 22, 22]), utf8ToBytes('create the first branch'))
    await trieSetup.trie.put(new Uint8Array([12, 34, 44]), utf8ToBytes('create the last branch'))

    await trieSetup.trie.del(new Uint8Array([12, 22, 22]))
    const val = await trieSetup.trie.get(new Uint8Array([12, 22, 22]))
    t.equal(null, val, trieSetup.msg)
    t.end()
  })

  it('should delete from a branch->branch-extension', async function (t) {
    await trieSetup.trie.put(new Uint8Array([11, 11, 11]), utf8ToBytes('first'))
    await trieSetup.trie.put(new Uint8Array([12, 22, 22]), utf8ToBytes('create the first branch'))
    await trieSetup.trie.put(new Uint8Array([12, 33, 33]), utf8ToBytes('create the middle branch'))
    await trieSetup.trie.put(new Uint8Array([12, 34, 44]), utf8ToBytes('create the last branch'))

    await trieSetup.trie.del(new Uint8Array([12, 22, 22]))
    const val = await trieSetup.trie.get(new Uint8Array([12, 22, 22]))
    t.equal(null, val, trieSetup.msg)

    t.end()
  })

  it('should delete from a extension->branch-extension', async function (t) {
    await trieSetup.trie.put(new Uint8Array([11, 11, 11]), utf8ToBytes('first'))
    await trieSetup.trie.put(new Uint8Array([12, 22, 22]), utf8ToBytes('create the first branch'))
    await trieSetup.trie.put(new Uint8Array([12, 33, 33]), utf8ToBytes('create the middle branch'))
    await trieSetup.trie.put(new Uint8Array([12, 34, 44]), utf8ToBytes('create the last branch'))

    // delete the middle branch
    await trieSetup.trie.del(new Uint8Array([11, 11, 11]))
    const val = await trieSetup.trie.get(new Uint8Array([11, 11, 11]))
    t.equal(null, val, trieSetup.msg)

    t.end()
  })

  it('should delete from a extension->branch-branch', async function (t) {
    await trieSetup.trie.put(new Uint8Array([11, 11, 11]), utf8ToBytes('first'))
    await trieSetup.trie.put(new Uint8Array([12, 22, 22]), utf8ToBytes('create the first branch'))
    await trieSetup.trie.put(new Uint8Array([12, 33, 33]), utf8ToBytes('create the middle branch'))
    await trieSetup.trie.put(new Uint8Array([12, 34, 44]), utf8ToBytes('create the last branch'))
    // delete the middle branch
    await trieSetup.trie.del(new Uint8Array([11, 11, 11]))
    const val = await trieSetup.trie.get(new Uint8Array([11, 11, 11]))
    t.equal(null, val, trieSetup.msg)

    t.end()
  })
})

tape('shall handle the case of node not found correctly', async (t) => {
  const trie = new Trie({ useNodePruning: false })
  await trie.put(utf8ToBytes('a'), utf8ToBytes('value1'))
  await trie.put(utf8ToBytes('aa'), utf8ToBytes('value2'))
  await trie.put(utf8ToBytes('aaa'), utf8ToBytes('value3'))

  /* Setups a trie which consists of
    ExtensionNode ->
    BranchNode -> value1
    ExtensionNode ->
    BranchNode -> value2
    LeafNode -> value3
  */

  let path = await trie.getPath(utf8ToBytes('aaa'))
  t.ok(path.path.pop() !== null, 'getPath should find a node')
  path = await trie.getPath(utf8ToBytes('aaa'))
  await trie.del(utf8ToBytes('aaa'))
  path = await trie.getPath(utf8ToBytes('aaa'))
  t.equal(path.path[0].getValue(), null, 'getPath should not return a node now')
  t.equal(
    path.path[0].getType(),
    'ExtensionNode',
    'getPath should find the first extension node which is still in the DB'
  )
  t.end()
})

tape('it should create the genesis state root from ethereum', function (tester) {
  const it = tester.test
  const trie4 = new Trie({})

  const g = hexStringToBytes('8a40bfaa73256b60764c1bf40675a99083efb075')
  const j = hexStringToBytes('e6716f9544a56c530d868e4bfbacb172315bdead')
  const v = hexStringToBytes('1e12515ce3e0f817a4ddef9ca55788a1d66bd2df')
  const a = hexStringToBytes('1a26338f0d905e295fccb71fa9ea849ffa12aaf4')

  const storageRoot = new Uint8Array(32)
  storageRoot.fill(0)

  const startAmount = new Uint8Array(26)
  startAmount.fill(0)
  startAmount[0] = 1

  const account = [startAmount, 0, storageRoot, KECCAK256_NULL]
  const rlpAccount = RLP.encode(account)
  const cppRlp =
    'f85e9a010000000000000000000000000000000000000000000000000080a00000000000000000000000000000000000000000000000000000000000000000a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'

  const genesisStateRoot = '2f4399b08efe68945c1cf90ffe85bbe3ce978959da753f9e649f034015b8817d'
  tester.equal(cppRlp, bytesToHex(rlpAccount))

  it('shall match the root', async function (t) {
    await trie4.put(g, rlpAccount)
    await trie4.put(j, rlpAccount)
    await trie4.put(v, rlpAccount)
    await trie4.put(a, rlpAccount)
    t.equal(bytesToHex(trie4.root()), genesisStateRoot)
    t.end()
  })
})

tape('setting back state root (deleteFromDB)', async (t) => {
  const k1 = utf8ToBytes('1')
  /* Testing with longer value due to `rlpNode.length >= 32` check in `_formatNode()`
   * Reasoning from https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/:
   * "When one node is referenced inside another node, what is included is `H(rlp.encode(x))`,
   * where `H(x) = sha3(x) if len(x) >= 32 else x`"
   */
  const v1 = utf8ToBytes('this-is-some-longer-value-to-test-the-delete-operation-value1')
  const k2 = utf8ToBytes('2')
  const v2 = utf8ToBytes('this-is-some-longer-value-to-test-the-delete-operation-value2')

  const rootAfterK1 = hexStringToBytes(
    '63e76a0007e6729f4b7ca6ade20e3ed8633d1108587fd68a1aecea8210a67d78'
  )
  const trieSetup = {
    trie: new Trie({ useNodePruning: false }),
    expected: v1,
    msg: 'should return v1 when setting back the state root when deleteFromDB=false',
  }

  await trieSetup.trie.put(k1, v1)
  await trieSetup.trie.put(k2, v2)
  await trieSetup.trie.del(k1)
  t.equal(
    await trieSetup.trie.get(k1),
    null,
    'should return null on latest state root independently from deleteFromDB setting'
  )

  trieSetup.trie.root(rootAfterK1)
  t.deepEqual(await trieSetup.trie.get(k1), trieSetup.expected, trieSetup.msg)

  t.end()
})

tape('dummy hash', async (t) => {
  const hashFunction: HashKeysFunction = (msg) => {
    const hashLen = 32
    if (msg.length <= hashLen - 5) {
      return concatBytes(utf8ToBytes('hash_'), new Uint8Array(hashLen - msg.length).fill(0), msg)
    } else {
      return concatBytes(utf8ToBytes('hash_'), msg.slice(0, hashLen - 5))
    }
  }

  const [k, v] = [utf8ToBytes('foo'), utf8ToBytes('bar')]
  const expectedRoot = hashFunction(new LeafNode({ key: bytesToNibbles(k), value: v }).rlpEncode())

  const trie = new Trie({ hashFunction })
  await trie.put(k, v)
  t.equal(bytesToHex(trie.root()), bytesToHex(expectedRoot))

  t.end()
})

tape('blake2b256 trie root', async (t) => {
  const trie = new Trie({ hashFunction: (msg) => blake2b(msg, 32) })
  await trie.put(utf8ToBytes('foo'), utf8ToBytes('bar'))
  t.end()
})
tape('blake2b256 trie root', async (t) => {
  const trie = new Trie({ hashFunction: (msg) => blake2b(msg, 32) })
  await trie.put(utf8ToBytes('foo'), utf8ToBytes('bar'))

  t.equal(
    bytesToHex(trie.root()),
    'e118db4e01512253df38daafa16fc1d69e03e755595b5847d275d7404ebdc74a'
  )
  t.end()
})

tape('empty root', async (t) => {
  const trie = new Trie({})

  t.equal(bytesToHex(trie.root()), KECCAK256_RLP_S)
  t.end()
})
