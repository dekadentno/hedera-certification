import { Wallet, PrivateKey, AccountCreateTransaction, Hbar, LocalProvider } from "@hashgraph/sdk";
import Accounts from './accounts.mjs';
import dotenv from "dotenv";
dotenv.config('.env');

(async function () {
  console.log('\nStart Task 1!\n');

  const accountId = Accounts.myAccountId;
  const privateKey = PrivateKey.fromString(Accounts.myPrivateKey);

  // https://github.com/hashgraph/hedera-sdk-js/blob/develop/examples/account-alias.js
  const wallet = new Wallet(
    accountId,
    privateKey,
    new LocalProvider()
  );

  for (let i = 0; i < 5; i++) {

    const newKey = PrivateKey.generateED25519();

    let transaction = await new AccountCreateTransaction()
      .setInitialBalance(new Hbar(1900))
      .setKey(newKey.publicKey)
      .freezeWithSigner(wallet);

    transaction = await transaction.signWithSigner(wallet);

    const response = await transaction.executeWithSigner(wallet);

    const receipt = await response.getReceiptWithSigner(wallet);

    console.log(`Generate account ${i}`);
    console.log(`Private key: ${newKey.toString()}`);
    console.log(`Public key: ${newKey.publicKey.toString()}`);
    console.log(`Account id: ${receipt.accountId.toString()}`);
    console.log('\n');

    Accounts.setAccount(i + 1, {
      id: receipt.accountId.toString(),
      privateKey: newKey.toString(),
      publicKey: newKey.publicKey.toString()
    })
  }

  // copy/paste the result of this line into accounts.mjs before executing anything else
  console.log('All accounts: ', Accounts.derivatedAccounts);
})();