window.BENCHMARK_DATA = {
  "lastUpdate": 1692562104083,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14e7bbacad603088feafff1d8be2c81cf193d0ab",
          "message": "Fix rpc custom address bug (#2930)\n\n* Add custom address parameters to RPC server startup\r\n\r\n* Adjust port numbers in cli tests\r\n\r\n* custom dir fixes\r\n\r\n* clean up tempdir after test\r\n\r\n* Remove duplicate rpc tests with colliding ports\r\n\r\n* Update rpc custom address test\r\n\r\n* Fix custom address test\r\n\r\n* lint\r\n\r\n* Manual wait before connecting client\r\n\r\n---------\r\n\r\nCo-authored-by: Amir <indigophi@protonmail.com>",
          "timestamp": "2023-08-01T13:42:23-07:00",
          "tree_id": "7b822bb7f5756cc5a2d0aef143e074a7463760b4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/14e7bbacad603088feafff1d8be2c81cf193d0ab"
        },
        "date": 1690922736209,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 33031,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32402,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31994,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27754,
            "range": "±8.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30228,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "88 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9843f911bfc446db93b3b93c5d49fff4e4c623a",
          "message": "Reuse proof trie for statemanager (#2932)",
          "timestamp": "2023-08-01T14:22:06-07:00",
          "tree_id": "ca35f1f07834ed57306d25a2e68b6beaa728760b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f9843f911bfc446db93b3b93c5d49fff4e4c623a"
        },
        "date": 1690925375394,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22101,
            "range": "±4.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23092,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22581,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21656,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20179,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05bc2b9da1782e1db89feeb3b88d376867fb04b0",
          "message": "Use version 12.3 of ethereum/test (#2933)\n\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2023-08-02T09:51:27+02:00",
          "tree_id": "fb764b5b2948b0bb815f0d1c242600771a68c72c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05bc2b9da1782e1db89feeb3b88d376867fb04b0"
        },
        "date": 1690962887953,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32818,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32025,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422907",
            "value": 32032,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27496,
            "range": "±8.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30468,
            "range": "±2.66%",
            "unit": "ops/sec",
            "extra": "89 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6eb9532ddfe50acfcc1b4e35791d6b91c38b5a67",
          "message": "client: test and update devnet 8 integration sims (#2934)\n\n* client: test and update devnet 8 integration sims\r\n\r\n* Client test import fix\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-08-02T21:49:20+02:00",
          "tree_id": "adaa1286de978a66643f3329f4b3d106c332de8e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6eb9532ddfe50acfcc1b4e35791d6b91c38b5a67"
        },
        "date": 1691006212841,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19797,
            "range": "±6.05%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20473,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20221,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20019,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19322,
            "range": "±3.87%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ff4c8accc50085ac8ab414690c93e5058020cc8",
          "message": "Reintegrate Skipped vm Tests (#2937)\n\n* Remove duplicate test skips\r\n\r\n* Remove tests that finish all assertions in roughly less than 10 seconds\r\n\r\n* Remove nonexistant tests",
          "timestamp": "2023-08-04T06:42:05+02:00",
          "tree_id": "6c5b0153dec493a76cc8ebbc966858be70d0c957",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7ff4c8accc50085ac8ab414690c93e5058020cc8"
        },
        "date": 1691124508214,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30807,
            "range": "±5.24%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30832,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30990,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25671,
            "range": "±11.35%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29158,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d13804dc381c00881686e47cb4e56e60a9f20133",
          "message": "Update instructions for running snap sync sim tests (#2936)",
          "timestamp": "2023-08-04T10:26:56+02:00",
          "tree_id": "72ec1575baf49de103810314aae3a6901fc10dac",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d13804dc381c00881686e47cb4e56e60a9f20133"
        },
        "date": 1691138033990,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32739,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32242,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31739,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27507,
            "range": "±9.14%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30366,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "845a26bb1adbaaa65cef4b3f222e0d6a0fc9620e",
          "message": "client: add support for multiple same-type messages over devp2p (#2940)\n\n* client: add support for multiple same-type messages over devp2p\r\n\r\n* client/net/sync/boundprotocol: fix timeout deadlock",
          "timestamp": "2023-08-05T20:48:44+02:00",
          "tree_id": "162a97b7ba65c6324a43fe3a5b9c53cae1d22bc1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/845a26bb1adbaaa65cef4b3f222e0d6a0fc9620e"
        },
        "date": 1691261554451,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 27538,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26452,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26157,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26483,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21496,
            "range": "±11.27%",
            "unit": "ops/sec",
            "extra": "66 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f28ddcd586237135a9c2c25359ca0218037dd00b",
          "message": "client: update prerequisites to run sim tests (#2942)",
          "timestamp": "2023-08-07T18:01:36+05:30",
          "tree_id": "48fb322d4374aa58d2e24f6d9cb2e256df56594b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f28ddcd586237135a9c2c25359ca0218037dd00b"
        },
        "date": 1691411706231,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31551,
            "range": "±4.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30998,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31073,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25907,
            "range": "±10.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29591,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a612d0c37a2ecbe037569ce31fda8094eee6ed7",
          "message": "Collapse `EthereumService` abstraction service (#2943)\n\n* Collapse ethereumservice into service\r\n\r\n* Clean up ethereumservice references",
          "timestamp": "2023-08-07T22:24:51+02:00",
          "tree_id": "1f2e9ec43b6096ae74733495ad63e40f93bd0649",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0a612d0c37a2ecbe037569ce31fda8094eee6ed7"
        },
        "date": 1691440216845,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20761,
            "range": "±5.42%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21730,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20508,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20647,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19904,
            "range": "±3.76%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8605a07e5e0ef7a87952c68085214beabf6ba32",
          "message": "Fix block validation order for EIP4844 (#2946)\n\n* block: optimize validator\r\n\r\n* header: correctly choose inferred type (support `null` as excessBlobGas / blobGasUsed)",
          "timestamp": "2023-08-08T23:06:39+05:30",
          "tree_id": "3a3bfcb900d337782a0371bbb5791b4c0c07422f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f8605a07e5e0ef7a87952c68085214beabf6ba32"
        },
        "date": 1691516418304,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30674,
            "range": "±5.44%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30063,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29843,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25235,
            "range": "±10.75%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 28809,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74f2a1522459a980a640dfe76ad6b8b43f57ea4f",
          "message": "tx/block/vm: update maxFeePerBlobGas casing (#2947)\n\n* tx/block/vm: update maxFeePerBlobGas casing\r\n\r\n* client: fix maxFeePerBlobGas casing\r\ntests: also fix casing",
          "timestamp": "2023-08-08T22:10:25+02:00",
          "tree_id": "00b359d66fce130dc550091ed7cc28afcd1274bc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/74f2a1522459a980a640dfe76ad6b8b43f57ea4f"
        },
        "date": 1691525703262,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21041,
            "range": "±6.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20936,
            "range": "±3.55%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21193,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20838,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19999,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f704378efa913f793ab01f1a2ab2acb1f02ed3b8",
          "message": "Client: If \"dev\" option is used, it should have a value and not be defaulted to mainnet (#2948)\n\n* Throw error if \"dev\" option is passed in without a value\r\n\r\n* Remove log statements\r\n\r\n* Add test for \"dev\" option being passed in without a value\r\n\r\n* Update test",
          "timestamp": "2023-08-09T11:30:55+02:00",
          "tree_id": "91424e153ed1dd5d8e6b41f8a51ef0e215e7de62",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f704378efa913f793ab01f1a2ab2acb1f02ed3b8"
        },
        "date": 1691573730387,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19830,
            "range": "±7.17%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19769,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20568,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19819,
            "range": "±3.65%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19594,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "23524378+KoningR@users.noreply.github.com",
            "name": "KoningR",
            "username": "KoningR"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa8a518f9a34bf1effaf3d69d521ae20e1dde763",
          "message": "Client/StateManager: storageRangeAt() RPC call / EVMStateManager Interface Extension (#2922)\n\n* Initial version of storageRangeAt().\r\n\r\n* Update input validation of storageRangeAt().\r\n\r\n* Add validator for unsigned integers.\r\n\r\n* remove return await\r\n\r\n---------\r\n\r\nCo-authored-by: KoningR <KoningR@users.noreply.github.com>\r\nCo-authored-by: Scotty <66335769+ScottyPoi@users.noreply.github.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-08-09T12:30:08+02:00",
          "tree_id": "2c7a840a3082ce0c1154d32a1c7f268640f400d8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fa8a518f9a34bf1effaf3d69d521ae20e1dde763"
        },
        "date": 1691578028509,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18853,
            "range": "±6.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19496,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19789,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19822,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19131,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "85 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c47d2c7351f04f35744de0f2082c37d5f2d2afd0",
          "message": "Breaking Releases (#2945)\n\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Block)\r\n\r\n* Correct Block dependency version to include ^\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Blockchain)\r\n\r\n* Bump client version\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Common)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (devp2p)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Ethash)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (EVM)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Genesis)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (RLP)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (StateManager)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Trie)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Tx)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Util)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (VM)\r\n\r\n* Add CHANGELOG base entry, bump version number, update upstream dependency versions (Wallet)\r\n\r\n* Rebuild package-lock.json\r\n\r\n* CHANGELOG updates with change diff since RC1 (partly RC2)\r\n\r\n* Rebuild docs\r\n\r\n* Small fixes\r\n\r\n* Additional README updates\r\n\r\n* Update packages/client/CHANGELOG.md\r\n\r\n* Update packages/devp2p/CHANGELOG.md\r\n\r\n* Small release note additions\r\n\r\n---------\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>",
          "timestamp": "2023-08-09T13:22:37+02:00",
          "tree_id": "12f5b78da957e94c0328ee3afcf2651a6867e33a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c47d2c7351f04f35744de0f2082c37d5f2d2afd0"
        },
        "date": 1691580374177,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31774,
            "range": "±5.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31181,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31268,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26060,
            "range": "±10.53%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29816,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f46bbec0c9808cbe317136e81cce4744bd21f9d",
          "message": "client: await dumpStorageRange in storageRangeAt rpc for errors to be properly handled (#2952)",
          "timestamp": "2023-08-09T20:30:46+05:30",
          "tree_id": "06e60f92a89d8d3ae48ccbebe031429a8eb898e6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4f46bbec0c9808cbe317136e81cce4744bd21f9d"
        },
        "date": 1691593466617,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31096,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31083,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30721,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26184,
            "range": "±10.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29608,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "292b16ddb3a472c927ea32ec59cb6191081f1b87",
          "message": "client: fix newPayloadV2 having PayloadV3 params (#2954)\n\n* client: fix newPayloadV2 having PayloadV3 params\r\n\r\n* Update packages/client/src/rpc/modules/engine.ts\r\n\r\nCo-authored-by: spencer <spencer.taylor-brown@ethereum.org>\r\n\r\n---------\r\n\r\nCo-authored-by: spencer <spencer.taylor-brown@ethereum.org>",
          "timestamp": "2023-08-10T10:55:43-04:00",
          "tree_id": "9841247cfa322b6c94e695fcc33ba21aec00bd47",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/292b16ddb3a472c927ea32ec59cb6191081f1b87"
        },
        "date": 1691679570088,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 29754,
            "range": "±7.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29358,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30986,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26888,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 28618,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "466b6f2c0a600ea9fad87b78707dd3822e12f31a",
          "message": "trie: improve util types and handling (#2951)\n\n* trie: improve util types and handling\r\n\r\n* trie: undo some trie modifications\r\n\r\n* trie: redo trie simplifications\r\n\r\n* trie: remove null return from lookup node",
          "timestamp": "2023-08-11T14:22:46-04:00",
          "tree_id": "d61aa17b86269d97e20fc9e34f6ce5d25f4c8ee5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/466b6f2c0a600ea9fad87b78707dd3822e12f31a"
        },
        "date": 1691778446726,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20161,
            "range": "±6.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20157,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20385,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20000,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19755,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f73936572919e35a5e46a10938ef608585dcbb5",
          "message": "client: update shanghai/cancun engine api specs (#2955)\n\n* client: fix newPayloadV2 having PayloadV3 params\r\n\r\n* client: update shanghai/cancun engine api specs\r\n\r\n* evm/vm/common: remove beacon root precompile\r\n\r\n* tx: fix 4844 not charging for access list gas in vm\r\n\r\n* vm: fix eip4788 tests",
          "timestamp": "2023-08-13T09:23:33+02:00",
          "tree_id": "32433364f1a52b3cb078ce0cb4174462d8a64aea",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1f73936572919e35a5e46a10938ef608585dcbb5"
        },
        "date": 1691911670856,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20871,
            "range": "±10.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21239,
            "range": "±3.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20949,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21450,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21571,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "125a6964080e184eaf63fca5260a14bee96bda83",
          "message": "trie: allow trie put/del ops to skip transforming key for snapsync (#2950)\n\n* trie: allow trie put/del ops to skip transforming key\r\n\r\n* add ability to test against the synced snap trie\r\n\r\n* fix spec\r\n\r\n* match entire state\r\n\r\n* add spec to trie test\r\n\r\n* fix and edge case\r\n\r\n---------\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>",
          "timestamp": "2023-08-13T11:08:31-07:00",
          "tree_id": "dc6952f1379fee72b440c1797b883cf9cca0c214",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/125a6964080e184eaf63fca5260a14bee96bda83"
        },
        "date": 1691950321548,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31917,
            "range": "±4.26%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31096,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30955,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25904,
            "range": "±10.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29748,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "simon@klein-homepage.de",
            "name": "box25",
            "username": "simone1999"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b54a05cba582f0c1530f52f6c95b3535db571470",
          "message": "fixed kademlia kbucket add (#2957)\n\nin the kbucket implementation the dontSplit attribute of KBucketNode is typed as bool, but was checked wit \"!== undefined\" which always was true. This caused KBucket.add to never split the leaf node and therefore kept the kbucket as a single level tree with a maximum of _numberOfNodesPerKBucket entrys in total.",
          "timestamp": "2023-08-14T15:08:58+02:00",
          "tree_id": "0ee53854d75d78c246798369682c552dc62f02e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b54a05cba582f0c1530f52f6c95b3535db571470"
        },
        "date": 1692018913076,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32790,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31848,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 32222,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27696,
            "range": "±9.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30296,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "985575c257a29213116435edfb3002686d0d7819",
          "message": "Update statemanager tests (#2960)\n\n* Test that error is thrown\r\n\r\n* Test if account exists\r\n\r\n* Test clearContractStorage\r\n\r\n* Remove unused import",
          "timestamp": "2023-08-15T08:37:16+02:00",
          "tree_id": "0055f2a3213eb6f5d690e5e378fdaae9a7745df5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/985575c257a29213116435edfb3002686d0d7819"
        },
        "date": 1692081658492,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28903,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28226,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28805,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 24689,
            "range": "±9.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25417,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d283b19d98ae4daa6d85e8af7f9192d6280c4b3",
          "message": "common: handle forkHash on timestamp == genesis timestamp (#2959)\n\n* common: handle forkHash on timestamp == genesis timestamp\r\n\r\n* Update packages/common/src/utils.ts\r\n\r\nCo-authored-by: g11tech <gajinder@g11.in>\r\n\r\n---------\r\n\r\nCo-authored-by: g11tech <gajinder@g11.in>",
          "timestamp": "2023-08-15T09:10:09+02:00",
          "tree_id": "66fa70aec95cf0936e9c4914b67868b6b520759f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6d283b19d98ae4daa6d85e8af7f9192d6280c4b3"
        },
        "date": 1692083647758,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 26422,
            "range": "±6.01%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25788,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26322,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25568,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20611,
            "range": "±11.48%",
            "unit": "ops/sec",
            "extra": "67 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6dc9dba6bc76e3476da65ace0d503db84190ede",
          "message": "Snap Sync Fetchers: Highest-Known-Hash Optimization (#2941)\n\n* Add assert to check if account trie root matches expected\r\n\r\n* Use hashed tries\r\n\r\n* Skip tasks with limit lower than the highest known account key hash\r\n\r\n* Remove log statements\r\n\r\n* Update test\r\n\r\n* Use a object that is different from null object for termination check\r\n\r\n* Add tests for highestKnownHash optimization for account fetcher\r\n\r\n* Revert \"Use hashed tries\"\r\n\r\nThis reverts commit d026655f192823010cc2effd22d6aa9331e0b7bf.\r\n\r\n---------\r\n\r\nCo-authored-by: g11tech <gajinder@g11.in>",
          "timestamp": "2023-08-15T13:27:57+05:30",
          "tree_id": "fa637f189957117a534e3500b3685e41ac874531",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e6dc9dba6bc76e3476da65ace0d503db84190ede"
        },
        "date": 1692086480647,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31631,
            "range": "±5.09%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31196,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31237,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26290,
            "range": "±10.78%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29656,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cde93db3224c5b982bf141f6c2bc254f85b87bd",
          "message": "devp2p: optimize eth debug (#2958)",
          "timestamp": "2023-08-15T10:53:36+02:00",
          "tree_id": "1ef00cbbcb624b050e8854be533a37254ff89efe",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8cde93db3224c5b982bf141f6c2bc254f85b87bd"
        },
        "date": 1692089849461,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 27862,
            "range": "±6.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28892,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 27846,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23864,
            "range": "±10.12%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422910",
            "value": 26932,
            "range": "±4.22%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b153bc6bcf2fd243feadbdffdd5b47f72782b081",
          "message": "common: add forkHash tests (#2961)",
          "timestamp": "2023-08-15T15:53:13+05:30",
          "tree_id": "bbc072b32e4953b2b4945532cf27d02c65c4da41",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b153bc6bcf2fd243feadbdffdd5b47f72782b081"
        },
        "date": 1692095248754,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21166,
            "range": "±5.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21707,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21777,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20857,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20532,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04412bcae5bf7380061f2b39838057de6e3a6485",
          "message": "Replace testdouble with vitest test helpers (#2953)\n\n* Refactor headerfetcher.spec.ts to use vi instead of td\r\n\r\n* Refactor skeleton.spec.ts to use vi instead of td\r\n\r\n* Refactor newPayloadV2.spec.ts to use vi instead of td\r\n\r\n* Refactor newPayloadV1.spec.ts.spec.ts to use vi instead of td\r\n\r\n* Remove unused variable\r\n\r\n* Use longer timeout for locally failing tests\r\n\r\n* Refactor client.spec.ts to use vi instead of td\r\n\r\n* Remove commented out code\r\n\r\n* Refactor pendingBlock.spec.ts to use vi instead of td\r\n\r\n* Refactor beaconsync.spec.ts to use vi instead of td\r\n\r\n* Refactor peerpool.spec.ts to use vi instead of td\r\n\r\n* Refactor snapsync.spec.ts to use vi instead of td\r\n\r\n* Remove unused variable\r\n\r\n* Refactor fullsync.spec.ts to use vi instead of td\r\n\r\n* Remove commented code\r\n\r\n* Refactor rlpxserver.spec.ts to use vi instead of td\r\n\r\n* Refactor miner.spec.ts to use vi instead of td\r\n\r\n* fix rlpxserver test\r\n\r\n* Increate timeout for ethash PoW test\r\n\r\n* Fix linting issues\r\n\r\n* Remove extraneous td reference\r\n\r\n* Add some any to skip typing errors\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-08-16T13:49:03-07:00",
          "tree_id": "3957afb6f6fbd6464564557a4918ee1560a60afd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/04412bcae5bf7380061f2b39838057de6e3a6485"
        },
        "date": 1692219160434,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31938,
            "range": "±5.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31656,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30961,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25877,
            "range": "±10.89%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422910",
            "value": 28600,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1c1e7adc9783eaedb0312b663bc0d709d8ed0b5",
          "message": "client: include parent beacon block root for proposal payload uniquness (#2967)",
          "timestamp": "2023-08-17T13:06:23+02:00",
          "tree_id": "4d3ba428a5f97f455151181704e4b0b0848d7482",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e1c1e7adc9783eaedb0312b663bc0d709d8ed0b5"
        },
        "date": 1692270872218,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 26469,
            "range": "±5.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26156,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26387,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25807,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21213,
            "range": "±9.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7cb22f02881b87c79d7297cb0ed4913cc1dab15",
          "message": "Fix the Trie Package Benchmarks (#2969)\n\n* Refactor esm to cjs and db usage\n\n* Update level implementation to match current api\n\n---------\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-08-17T22:44:24-04:00",
          "tree_id": "8dc381cefeb479cccd194ab04b4dc1be81efa014",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b7cb22f02881b87c79d7297cb0ed4913cc1dab15"
        },
        "date": 1692326870065,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31460,
            "range": "±5.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31015,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31034,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26045,
            "range": "±10.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29611,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66335769+ScottyPoi@users.noreply.github.com",
            "name": "Scotty",
            "username": "ScottyPoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85b8aa430d8bc97ad01b6f0ac3140e287076ee01",
          "message": "Trie: decouple walk test from demo (#2966)\n\n* trie: remove console logs from test\r\n\r\n* add debug package\r\n\r\n* walk log helper functions\r\n\r\n* add walk demo\r\n\r\n* commit lock\r\n\r\n* Clean up demo and turn on debug logs during run\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-08-18T12:11:23-04:00",
          "tree_id": "e5d1bf94f389254cefd64feb909b5a2e145d19c7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/85b8aa430d8bc97ad01b6f0ac3140e287076ee01"
        },
        "date": 1692375359749,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21359,
            "range": "±5.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21390,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21132,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21278,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20472,
            "range": "±3.75%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1129f01fc454fff1bb9387f784fc66c1eae83d8",
          "message": "trie: fix broken import (#2976)",
          "timestamp": "2023-08-20T16:04:48-04:00",
          "tree_id": "823de9b676528fd1ee5fdf4604513d7812b4e8e5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b1129f01fc454fff1bb9387f784fc66c1eae83d8"
        },
        "date": 1692562103380,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31574,
            "range": "±5.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31484,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31172,
            "range": "±3.16%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26416,
            "range": "±10.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30283,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      }
    ]
  }
}