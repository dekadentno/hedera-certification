const Accounts = {

  // generated on https://portal.hedera.com/?network=testnet
  myAccountId: "0.0.3904455",
  myPrivateKey: "302e020100300506032b657004220420167580cd57f85f697ead7a272fd163e1a677332df8b92ed9c4838f5d56f5b9aa",
  myPublicKey: "302a300506032b6570032100acbb755a0ed562fdc84addc58abaa1054805ef92257f03a4a10aee695aadb41d",

  // here we will store our generated accounts and key pairs
  derivatedAccounts: {
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
  },

  setAccount(accountIndex, accountObject) {
    // set the new account index in the accounts store
    this.derivatedAccounts[accountIndex] = accountObject;
  },
  getAccountByIndex(accountIndex) {
    // fetch the account by its index
    return this.derivatedAccounts[accountIndex];
  }
}

export default Accounts;
