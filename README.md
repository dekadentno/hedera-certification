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