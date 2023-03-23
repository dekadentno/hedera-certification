import { TransferTransaction, Wallet, Client, TokenCreateTransaction, TokenMintTransaction, CustomRoyaltyFee, CustomFixedFee, AccountBalanceQuery, TokenUnpauseTransaction, TokenPauseTransaction, TokenType, TokenSupplyType, TokenAssociateTransaction, PrivateKey, Hbar } from "@hashgraph/sdk";
import Accounts from './accounts.mjs';
import dotenv from "dotenv";
dotenv.config('.env');

(async function () {
  console.log('\nStart Task 2!\n');

  var App = {

    tokenId: null,

    init: async function () {

      await this.createToken({
        name: 'Matej Token',
        symbol: 'MTJ',
        initialSupply: new Hbar(0),
        maxSupply: 5
      }, Accounts.getAccountByIndex(1), Accounts.getAccountByIndex(2))

      await this.associateAccountWithNFT({
        signingAccount: Accounts.getAccountByIndex(2),
        treasuryAccount: Accounts.getAccountByIndex(1)
      });

      await this.mintNFTs({
        supplyAccount: Accounts.getAccountByIndex(2),
        treasuryAccount: Accounts.getAccountByIndex(1)
      })
    },

    createToken: async function ({ name, symbol, initialSupply, maxSupply }, treasuryAccount, supplyAccount) {
      const client = Client.forName('testnet');
      client.setOperator(treasuryAccount.id, PrivateKey.fromString(treasuryAccount.privateKey));
      const supplyUser = new Wallet(
        supplyAccount.id,
        supplyAccount.privateKey
      )

      // Create the NFT
      // https://docs.hedera.com/hedera/tutorials/token/create-and-transfer-your-first-nft#1.-create-a-non-fungible-token-nft
      let nftCreate = await new TokenCreateTransaction()
        .setTokenName(name)
        .setTokenSymbol(symbol)
        .setTokenType(TokenType.NonFungibleUnique)
        .setDecimals(0)
        .setInitialSupply(initialSupply)
        .setTreasuryAccountId(treasuryAccount.id)
        .setSupplyType(TokenSupplyType.Finite)
        .setMaxSupply(maxSupply)
        .setSupplyKey(supplyUser.publicKey)
        .setCustomFees([
          new CustomRoyaltyFee({
            numerator: 1,
            denominator: 10,
            feeCollectorAccountId: supplyAccount.id,
            fallbackFee: new CustomFixedFee().setHbarAmount(new Hbar(200))
          })
        ]) // The account that will receive the royalty fee])
        .freezeWith(client);

      //Sign the transaction with the treasury key
      let nftCreateTxSign = await nftCreate.sign(PrivateKey.fromString(treasuryAccount.privateKey));

      //Submit the transaction to a Hedera network
      let nftCreateSubmit = await nftCreateTxSign.execute(client);

      //Get the transaction receipt
      let nftCreateRx = await nftCreateSubmit.getReceipt(client);

      //Get the token ID
      this.tokenId = nftCreateRx.tokenId;

      //Log the token ID
      console.log(`Debug: Created NFT with Token ID: ${this.tokenId} \n`);
    },

    associateAccountWithNFT: async function ({ signingAccount, treasuryAccount }) {
      const client = Client.forName('testnet');
      client.setOperator(treasuryAccount.id, treasuryAccount.privateKey);
      // Create the associate transaction and sign with Alice's key 
      // https://docs.hedera.com/hedera/tutorials/token/create-and-transfer-your-first-nft#3.-associate-user-accounts-with-the-nft
      let associateAliceTx = await new TokenAssociateTransaction()
        .setAccountId(signingAccount.id)
        .setTokenIds([this.tokenId])
        .freezeWith(client)
        .sign(PrivateKey.fromString(signingAccount.privateKey));

      //Submit the transaction to a Hedera network
      let associateAliceTxSubmit = await associateAliceTx.execute(client);

      //Get the transaction receipt
      let receipt = await associateAliceTxSubmit.getReceipt(client);

      //Confirm the transaction was successful
      console.log(`Debug: transaction status: ${receipt.status}\n`);
    },

    mintNFTs: async function ({ supplyAccount, treasuryAccount }) {
      const client = Client.forName('testnet');
      client.setOperator(treasuryAccount.id, treasuryAccount.privateKey);

      const supplyUser = new Wallet(
        supplyAccount.id,
        supplyAccount.privateKey
      )

      const receipts = [];

      for await (const i of Array.from(Array(5).keys())) {
        // Mint new NFT
        let mintTx = await new TokenMintTransaction()
          .setTokenId(this.tokenId)
          .setMetadata([Buffer.from([`NFT ${i}`])])
          .freezeWith(client);

        //Sign the transaction with the supply key
        let mintTxSign = await mintTx.sign(PrivateKey.fromString(supplyAccount.privateKey));

        //Submit the transaction to a Hedera network
        let mintTxSubmit = await mintTxSign.execute(client);

        //Get the transaction receipt
        let mintRx = await mintTxSubmit.getReceipt(client);

        //Log the serial number
        console.log(`Debug: Created NFT ${this.tokenId} with serial: ${mintRx.serials[0].low} \n`);
        receipts.push(mintRx)
      }

      console.log('Debug: receipts: ', receipts);
    }
  }

  App.init()
})()