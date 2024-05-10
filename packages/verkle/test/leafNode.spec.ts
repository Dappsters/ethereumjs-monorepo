import { equalsBytes, randomBytes } from '@ethereumjs/util'
import { assert, describe, it } from 'vitest'

import { VerkleNodeType } from '../src/node/index.js'
import { LeafNode } from '../src/node/leafNode.js'

import type { Point } from '../src/types.js'

const keys = [
  Uint8Array.from([
    245, 110, 100, 66, 36, 244, 87, 100, 144, 207, 224, 222, 20, 36, 164, 83, 34, 18, 82, 155, 254,
    55, 71, 19, 216, 78, 125, 126, 142, 146, 114, 0,
  ]),
  Uint8Array.from([
    245, 110, 100, 66, 36, 244, 87, 100, 144, 207, 224, 222, 20, 36, 164, 83, 34, 18, 82, 155, 254,
    55, 71, 19, 216, 78, 125, 126, 142, 146, 114, 1,
  ]),
  Uint8Array.from([
    245, 110, 100, 66, 36, 244, 87, 100, 144, 207, 224, 222, 20, 36, 164, 83, 34, 18, 82, 155, 254,
    55, 71, 19, 216, 78, 125, 126, 142, 146, 114, 2,
  ]),
  Uint8Array.from([
    245, 110, 100, 66, 36, 244, 87, 100, 144, 207, 224, 222, 20, 36, 164, 83, 34, 18, 82, 155, 254,
    55, 71, 19, 216, 78, 125, 126, 142, 146, 114, 3,
  ]),
  Uint8Array.from([
    245, 110, 100, 66, 36, 244, 87, 100, 144, 207, 224, 222, 20, 36, 164, 83, 34, 18, 82, 155, 254,
    55, 71, 19, 216, 78, 125, 126, 142, 146, 114, 4,
  ]),
]

const values = [
  Uint8Array.from([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  Uint8Array.from([
    0, 0, 100, 167, 179, 182, 224, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ]),
  Uint8Array.from([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  Uint8Array.from([
    197, 210, 70, 1, 134, 247, 35, 60, 146, 126, 125, 178, 220, 199, 3, 192, 229, 0, 182, 83, 202,
    130, 39, 59, 123, 250, 216, 4, 93, 133, 164, 112,
  ]),
  Uint8Array.from([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
]

describe('verkle node - leaf', () => {
  it('constructor should create an leaf node', async () => {
    const commitment = randomBytes(32)
    const c1 = randomBytes(32)
    const c2 = randomBytes(32)
    const stem = randomBytes(32)
    const values = [randomBytes(32), randomBytes(32)]
    const depth = 2
    const node = new LeafNode({
      c1: c1 as unknown as Point,
      c2: c2 as unknown as Point,
      commitment,
      depth,
      stem,
      values,
    })

    assert.equal(node.type, VerkleNodeType.Leaf, 'type should be set')
    assert.ok(
      equalsBytes(node.commitment as unknown as Uint8Array, commitment),
      'commitment should be set'
    )
    assert.ok(equalsBytes(node.c1 as unknown as Uint8Array, c1), 'c1 should be set')
    assert.ok(equalsBytes(node.c2 as unknown as Uint8Array, c2), 'c2 should be set')
    assert.ok(equalsBytes(node.stem, stem), 'stem should be set')
    assert.ok(
      values.every((value, index) => equalsBytes(value, node.values[index])),
      'values should be set'
    )
    assert.equal(node.depth, depth, 'depth should be set')
  })

  it.only('create method should create an leaf node', () => {
    const nodeData = keys[0]
    const node = LeafNode.create()
  })
})
