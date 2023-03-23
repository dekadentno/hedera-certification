import {
  Client,
  PrivateKey,
  Hbar,
  Transaction,
  TransferTransaction,
  ScheduleCreateTransaction
} from "@hashgraph/sdk";
import Accounts from './accounts.mjs'
import dotenv from "dotenv";
dotenv.config('.env');


(async function () {
  console.log('\nStart Task 4\n');

  const account1 = Accounts.getAccountByIndex(1);
  const account2 = Accounts.getAccountByIndex(2);

  console.log('Debug: account1', account1.id, account1.privateKey);

  const client = Client.forName('testnet');
  client.setOperator(account1.id, PrivateKey.fromString(account1.privateKey));

  const tx = new TransferTransaction()
    .addHbarTransfer(account1.id, new Hbar(-10)) // take 10 from acc1
    .addHbarTransfer(account2.id, new Hbar(10)); // give to acc2

  console.log('Debug: TX created!');

  const scheduledTransaction = new ScheduleCreateTransaction()
    .setScheduledTransaction(tx)
    .setScheduleMemo("Scheduled tx")
    .setAdminKey(PrivateKey.fromString(account1.privateKey))
    .freezeWith(client);

  console.log('Debug: Schedule created for TX!');

  const serializedTx = Buffer.from(scheduledTransaction.toBytes()).toString('hex');

  console.log(`Serialized TX: ${serializedTx}`);

  // Deserialize the scheduled transaction
  const deserializedTx = Transaction.fromBytes(Buffer.from(serializedTx, 'hex'));

  deserializedTx.sign(PrivateKey.fromString(account1.privateKey));

  const executed = await deserializedTx.execute(client);

})();