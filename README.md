# Hedera Certification

This document will explain the steps taken in order to finish the HEDERA certification exam.

Useful links:
* https://docs.hedera.com/
* https://portal.hedera.com/
* https://github.com/hashgraph/hedera-sdk-js/
* https://github.com/The-Hashgraph-Association/tha-hedera-course/
* https://hashscan.io/testnet/

## Prerequisites and initial configuration for running locally

```
mlazarevic @ OS442 ~/certification/hedera-certification 
└─ $ ▶ node -v
v16.7.0

mlazarevic @ OS442 ~/playground/hedera-certification 
└─ $ ▶ npm -v
7.20.3
```

In order to run tasks locally:
```
nvm use 16 
git clone [https://link-to-project-repo](https://github.com/dekadentno/hedera-certification.git)
cd hedera-certification
npm i
``` 

### Task 1 - Setup

This task is implemented in `src/setup.mjs`.

To run this task, execute `npm run task:setup`.

```
mlazarevic @ OS442 ~/playground/hedera-certification (master)
└─ $ ▶ npm run task:setup 

> hedera-certification@1.0.0 task:setup
> node src/setup.mjs


Start Task 1!

Generate account 0
Private key: 302e020100300506032b6570042204208c6be37d406d89b75ba07046e21d668bdff4c3038acdd3440da192f4579e76db
Public key: 302a300506032b657003210035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e9
Account id: 0.0.3904546


Generate account 1
Private key: 302e020100300506032b657004220420d72b186f115d7148021290340fc171fa9ca37c6b8c611b2faaaa564c5cecfab7
Public key: 302a300506032b65700321003e790a190f6635378b81dd05dbc0f839b006035dbeea1cc1a6dde9da388fae6f
Account id: 0.0.3904547


Generate account 2
Private key: 302e020100300506032b65700422042084c84b7f91338f8e9daaf79746d7244f01f6614a3de12eae6658661dd5406c1f
Public key: 302a300506032b65700321004197805009ea279cd09f682c993ff2d3349609368b600db3cdb0e1276ff0a795
Account id: 0.0.3904549


Generate account 3
Private key: 302e020100300506032b657004220420eb87428eaa2595a107484610548a805d7516a72428f575a3f1dc392a5a782d81
Public key: 302a300506032b6570032100f9db8d677945a6e55af0db79315328879f291e234cbf69e8e9d90d6bec86f8b9
Account id: 0.0.3904552


Generate account 4
Private key: 302e020100300506032b6570042204208afa87a8a2c512af2d215ea18e122e5ae977b93c21aae55ae91f46bb33edccc5
Public key: 302a300506032b6570032100af40846fb063511ba79d3a4994bcc38ca56ce9498b9bdf3caa4bbd383a6e446e
Account id: 0.0.3904555


All accounts:  {
  '1': {
    id: '0.0.3904546',
    privateKey: '302e020100300506032b6570042204208c6be37d406d89b75ba07046e21d668bdff4c3038acdd3440da192f4579e76db',
    publicKey: '302a300506032b657003210035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e9'
  },
  '2': {
    id: '0.0.3904547',
    privateKey: '302e020100300506032b657004220420d72b186f115d7148021290340fc171fa9ca37c6b8c611b2faaaa564c5cecfab7',
    publicKey: '302a300506032b65700321003e790a190f6635378b81dd05dbc0f839b006035dbeea1cc1a6dde9da388fae6f'
  },
  '3': {
    id: '0.0.3904549',
    privateKey: '302e020100300506032b65700422042084c84b7f91338f8e9daaf79746d7244f01f6614a3de12eae6658661dd5406c1f',
    publicKey: '302a300506032b65700321004197805009ea279cd09f682c993ff2d3349609368b600db3cdb0e1276ff0a795'
  },
  '4': {
    id: '0.0.3904552',
    privateKey: '302e020100300506032b657004220420eb87428eaa2595a107484610548a805d7516a72428f575a3f1dc392a5a782d81',
    publicKey: '302a300506032b6570032100f9db8d677945a6e55af0db79315328879f291e234cbf69e8e9d90d6bec86f8b9'
  },
  '5': {
    id: '0.0.3904555',
    privateKey: '302e020100300506032b6570042204208afa87a8a2c512af2d215ea18e122e5ae977b93c21aae55ae91f46bb33edccc5',
    publicKey: '302a300506032b6570032100af40846fb063511ba79d3a4994bcc38ca56ce9498b9bdf3caa4bbd383a6e446e'
  }
}
```


### Task - Scheduled transaction

This task is implemented in `src/scheduled-transaction.mjs`.

To run this task, execute `npm run task:scheduled-transaction`.

```
mlazarevic @ OS442 ~/playground/hedera-certification (master)
└─ $ ▶ npm run task:scheduled-transaction 

> hedera-certification@1.0.0 task:scheduled-transaction
> node src/scheduled-transaction.mjs


Start Task 4

Debug: account1 0.0.3904546 302e020100300506032b6570042204208c6be37d406d89b75ba07046e21d668bdff4c3038acdd3440da192f4579e76db
Debug: TX created!
Debug: Schedule created for TX!
Serialized TX: 0aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018091880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e912000aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018061880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e912000aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018041880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e912000aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018071880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e912000aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018041880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e912000aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018051880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e912000aa5012aa2010a9d010a1b0a0c08efb5f0a00610c39fa0e30112090800100018a2a8ee01180012060800100018051880cab5ee01220208783200d202690a350880c2d72f12004a2c0a2a0a130a090800100018a2a8ee0110ffa7d6b90718000a130a090800100018a3a8ee011080a8d6b9071800120c5363686564756c65642074781a22122035cfc0cb0094c2d15298b2e657da9eb97b79eae31e9368490f29a223270df4e91200
```

### Task - Token Service

This task is implemented in `src/token-service.mjs`.

To run this task, execute `npm run task:token-service`.

```
mlazarevic @ OS442 ~/playground/hedera-certification (master)
└─ $ ▶ npm run task:token-service 

> hedera-certification@1.0.0 task:token-service
> node src/token-service.mjs


Start Task 2!

init
- Created NFT with Token ID: 0.0.3905185 

Debug: transaction status: SUCCESS

- Created NFT 0.0.3905185 with serial: 1 

- Created NFT 0.0.3905185 with serial: 2 

- Created NFT 0.0.3905185 with serial: 3 

- Created NFT 0.0.3905185 with serial: 4 

- Created NFT 0.0.3905185 with serial: 5 

Debug: receipts:  [
  TransactionReceipt {
    status: Status { _code: 22 },
    accountId: null,
    fileId: null,
    contractId: null,
    topicId: null,
    tokenId: null,
    scheduleId: null,
    exchangeRate: ExchangeRate {
      hbars: 30000,
      cents: 183600,
      expirationTime: 2023-03-23T11:00:00.000Z,
      exchangeRateInCents: 6.12
    },
    topicSequenceNumber: Long { low: 0, high: 0, unsigned: false },
    topicRunningHash: Uint8Array(0) [],
    totalSupply: Long { low: 1, high: 0, unsigned: false },
    scheduledTransactionId: null,
    serials: [ [Long] ],
    duplicates: [],
    children: []
  },
  TransactionReceipt {
    status: Status { _code: 22 },
    accountId: null,
    fileId: null,
    contractId: null,
    topicId: null,
    tokenId: null,
    scheduleId: null,
    exchangeRate: ExchangeRate {
      hbars: 30000,
      cents: 183600,
      expirationTime: 2023-03-23T11:00:00.000Z,
      exchangeRateInCents: 6.12
    },
    topicSequenceNumber: Long { low: 0, high: 0, unsigned: false },
    topicRunningHash: Uint8Array(0) [],
    totalSupply: Long { low: 2, high: 0, unsigned: false },
    scheduledTransactionId: null,
    serials: [ [Long] ],
    duplicates: [],
    children: []
  },
  TransactionReceipt {
    status: Status { _code: 22 },
    accountId: null,
    fileId: null,
    contractId: null,
    topicId: null,
    tokenId: null,
    scheduleId: null,
    exchangeRate: ExchangeRate {
      hbars: 30000,
      cents: 183600,
      expirationTime: 2023-03-23T11:00:00.000Z,
      exchangeRateInCents: 6.12
    },
    topicSequenceNumber: Long { low: 0, high: 0, unsigned: false },
    topicRunningHash: Uint8Array(0) [],
    totalSupply: Long { low: 3, high: 0, unsigned: false },
    scheduledTransactionId: null,
    serials: [ [Long] ],
    duplicates: [],
    children: []
  },
  TransactionReceipt {
    status: Status { _code: 22 },
    accountId: null,
    fileId: null,
    contractId: null,
    topicId: null,
    tokenId: null,
    scheduleId: null,
    exchangeRate: ExchangeRate {
      hbars: 30000,
      cents: 183600,
      expirationTime: 2023-03-23T11:00:00.000Z,
      exchangeRateInCents: 6.12
    },
    topicSequenceNumber: Long { low: 0, high: 0, unsigned: false },
    topicRunningHash: Uint8Array(0) [],
    totalSupply: Long { low: 4, high: 0, unsigned: false },
    scheduledTransactionId: null,
    serials: [ [Long] ],
    duplicates: [],
    children: []
  },
  TransactionReceipt {
    status: Status { _code: 22 },
    accountId: null,
    fileId: null,
    contractId: null,
    topicId: null,
    tokenId: null,
    scheduleId: null,
    exchangeRate: ExchangeRate {
      hbars: 30000,
      cents: 183600,
      expirationTime: 2023-03-23T11:00:00.000Z,
      exchangeRateInCents: 6.12
    },
    topicSequenceNumber: Long { low: 0, high: 0, unsigned: false },
    topicRunningHash: Uint8Array(0) [],
    totalSupply: Long { low: 5, high: 0, unsigned: false },
    scheduledTransactionId: null,
    serials: [ [Long] ],
    duplicates: [],
    children: []
  }
]
```

### Task 5 - Multi signature
This task is implemented in `src/multi-signature.mjs`.

To run this task, execute `npm run task:multi-signature`.

```
mlazarevic @ OS442 ~/playground/hedera-certification (master)
└─ $ ▶ npm run task:multi-signature 

> hedera-certification@1.0.0 task:multi-signature
> node src/multi-signature.mjs


Start Task 5!

Debug: new account :  TransactionResponse {
  nodeId: AccountId {
    shard: Long { low: 0, high: 0, unsigned: false },
    realm: Long { low: 0, high: 0, unsigned: false },
    num: Long { low: 8, high: 0, unsigned: false },
    aliasKey: null,
    evmAddress: null,
    _checksum: null
  },
  transactionHash: <Buffer e9 63 fe 95 cb 9d bb f6 91 f2 9d 4b 53 e9 0e 85 d1 15 ca 77 b4 32 58 95 93 22 43 d6 8c ea 9c 7f 32 58 12 fe ec a5 ad 2d 03 a5 b3 cd f2 4a cc a7>,
  transactionId: TransactionId {
    accountId: AccountId {
      shard: [Long],
      realm: [Long],
      num: [Long],
      aliasKey: null,
      evmAddress: null,
      _checksum: null
    },
    validStart: Timestamp { seconds: [Long], nanos: [Long] },
    scheduled: false,
    nonce: null
  }
} AccountId {
  shard: Long { low: 0, high: 0, unsigned: false },
  realm: Long { low: 0, high: 0, unsigned: false },
  num: Long { low: 3906638, high: 0, unsigned: false },
  aliasKey: null,
  evmAddress: null,
  _checksum: null
}
file:///home/mlazarevic/playground/hedera-certification/node_modules/@hashgraph/sdk/src/ReceiptStatusError.js:37
        super(
        ^

ReceiptStatusError: receipt for transaction 0.0.3904546@1679571424.674709546 contained error status INVALID_SIGNATURE
    at new ReceiptStatusError (file:///home/mlazarevic/playground/hedera-certification/node_modules/@hashgraph/sdk/src/ReceiptStatusError.js:37:9)
    at TransactionReceiptQuery._mapStatusError (file:///home/mlazarevic/playground/hedera-certification/node_modules/@hashgraph/sdk/src/transaction/TransactionReceiptQuery.js:329:16)
    at TransactionReceiptQuery.execute (file:///home/mlazarevic/playground/hedera-certification/node_modules/@hashgraph/sdk/src/Executable.js:692:32)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async TransactionResponse.getReceipt (file:///home/mlazarevic/playground/hedera-certification/node_modules/@hashgraph/sdk/src/transaction/TransactionResponse.js:81:25)
    at async file:///home/mlazarevic/playground/hedera-certification/src/multi-signature.mjs:43:25 {
  status: Status { _code: 7 },
  transactionId: TransactionId {
    accountId: AccountId {
      shard: Long { low: 0, high: 0, unsigned: false },
      realm: Long { low: 0, high: 0, unsigned: false },
      num: Long { low: 3904546, high: 0, unsigned: false },
      aliasKey: null,
      evmAddress: null,
      _checksum: null
    },
    validStart: Timestamp {
      seconds: Long { low: 1679571424, high: 0, unsigned: false },
      nanos: Long { low: 674709546, high: 0, unsigned: false }
    },
    scheduled: false,
    nonce: null
  },
  transactionReceipt: TransactionReceipt {
    status: Status { _code: 7 },
    accountId: null,
    fileId: null,
    contractId: null,
    topicId: null,
    tokenId: null,
    scheduleId: null,
    exchangeRate: ExchangeRate {
      hbars: 30000,
      cents: 184198,
      expirationTime: 2023-03-23T12:00:00.000Z,
      exchangeRateInCents: 6.1399333333333335
    },
    topicSequenceNumber: Long { low: 0, high: 0, unsigned: false },
    topicRunningHash: Uint8Array(0) [],
    totalSupply: Long { low: 0, high: 0, unsigned: false },
    scheduledTransactionId: null,
    serials: [],
    duplicates: [],
    children: []
  }
}
```

### Task 6 - Consensus service

This task is implemented in `src/consensus-service.mjs`.

To run this task, execute `npm run task:consensus-service`.

```
mlazarevic @ OS442 ~/playground/hedera-certification (master)
└─ $ ▶ npm run task:consensus-service 

> hedera-certification@1.0.0 task:consensus-service
> node src/consensus-service.mjs


Start Task 6

Debug: Topic id: 0.0.3906939
Debug: receipt: {
    "status": {
        "_code": 22
    },
    "accountId": null,
    "fileId": null,
    "contractId": null,
    "topicId": null,
    "tokenId": null,
    "scheduleId": null,
    "exchangeRate": {
        "hbars": 30000,
        "cents": 184198,
        "expirationTime": "2023-03-23T12:00:00.000Z",
        "exchangeRateInCents": 6.1399333333333335
    },
    "topicSequenceNumber": {
        "low": 1,
        "high": 0,
        "unsigned": false
    },
    "topicRunningHash": {
        "0": 197,
        "1": 126,
        "2": 158,
        "3": 232,
        "4": 248,
        "5": 151,
        "6": 137,
        "7": 29,
        "8": 189,
        "9": 4,
        "10": 96,
        "11": 235,
        "12": 173,
        "13": 148,
        "14": 223,
        "15": 230,
        "16": 93,
        "17": 44,
        "18": 18,
        "19": 195,
        "20": 81,
        "21": 139,
        "22": 44,
        "23": 77,
        "24": 196,
        "25": 198,
        "26": 171,
        "27": 244,
        "28": 111,
        "29": 93,
        "30": 69,
        "31": 213,
        "32": 142,
        "33": 23,
        "34": 133,
        "35": 93,
        "36": 49,
        "37": 50,
        "38": 159,
        "39": 236,
        "40": 110,
        "41": 187,
        "42": 11,
        "43": 182,
        "44": 71,
        "45": 166,
        "46": 183,
        "47": 187
    },
    "totalSupply": {
        "low": 0,
        "high": 0,
        "unsigned": false
    },
    "scheduledTransactionId": null,
    "serials": [],
    "duplicates": [],
    "children": []
}
Link to topic: https://hashscan.io/testnet/topic/0.0.3906939
Current date: 12:46:57 GMT+0100 (Central European Standard Time)
```