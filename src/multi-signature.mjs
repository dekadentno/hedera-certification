import { Hbar, PrivateKey, Client, KeyList, TransferTransaction, AccountCreateTransaction} from '@hashgraph/sdk';
import Accounts from './accounts.mjs'
import dotenv from "dotenv";
dotenv.config('.env');

(async function () {

  console.log('\nStart Task 5!\n');

  const client = Client.forTestnet();
  client.setOperator(Accounts.getAccountByIndex(1).id, PrivateKey.fromString(Accounts.getAccountByIndex(1).privateKey));

  // new wallet
  const newAccountPrivateKey = PrivateKey.generateECDSA();
  const newAccountPublicKey = newAccountPrivateKey.publicKey;

  // https://docs.hedera.com/hedera/sdks-and-apis/sdks/keys/create-a-threshold-key
  const thresholdKey = new KeyList([
    PrivateKey.fromString(Accounts.getAccountByIndex(1).privateKey),
    PrivateKey.fromString(Accounts.getAccountByIndex(2).privateKey),
    PrivateKey.fromString(Accounts.getAccountByIndex(3).privateKey),
  ], 2);

  const newAccount = await new AccountCreateTransaction()
    .setKey(thresholdKey)
    .setInitialBalance(new Hbar(20))
    .execute(client);

  // get receipt
  const receipt = await newAccount.getReceipt(client);
  const newAccountId = receipt.accountId;

  console.log('Debug: new account : ', newAccount, newAccountId)

  // this transfer will fail
  const transactionFail = await (await new TransferTransaction()
    .addHbarTransfer(newAccountId, new Hbar(-10))
    .addHbarTransfer(Accounts.getAccountByIndex(4).id, new Hbar(10))
    .freezeWith(client)
    .sign(PrivateKey.fromString(Accounts.getAccountByIndex(1).privateKey)))
    .execute(client);

  const receiptFailed = await transactionFail.getReceipt(client);

  console.log("Debug: (should fail): Receipt: ", receiptFailed);
  
  // this transfer will succeed
  const transactionSuccess = await (await (await new TransferTransaction()
  .addHbarTransfer(newAccountId, new Hbar(-10))
  .addHbarTransfer(Accounts.getAccountByIndex(4).id, new Hbar(10))
  .freezeWith(client)
  .sign(PrivateKey.fromString(Accounts.getAccountByIndex(1).privateKey)))
  .sign(PrivateKey.fromString(Accounts.getAccountByIndex(2).privateKey)))
  .execute(client);
  
  const receiptSucceed = await transactionSuccess.getReceipt(client);
  console.log("Debug: (should fail): Receipt: ", receiptSucceed);

})();