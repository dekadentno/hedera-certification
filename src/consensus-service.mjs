import {
  Client,
  PrivateKey,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction,
  TopicMessageQuery
} from "@hashgraph/sdk";
import Accounts from './accounts.mjs';
import dotenv from "dotenv";
dotenv.config('.env');

(async function () {
  console.log('\nStart Task 6\n');

  const account1 = Accounts.getAccountByIndex(1);

  const client = Client.forName('testnet');
  client.setOperator(account1.id, account1.privateKey);

  // Create your first topic
  // https://docs.hedera.com/hedera/tutorials/consensus/submit-your-first-message#1.-create-your-first-topic
  let txResponse = await new TopicCreateTransaction().execute(client);
  let receipt = await txResponse.getReceipt(client);
  let topicId = receipt.topicId;

  console.log(`Debug: Topic id: ${topicId}`);

  // Timeout to get the network time to process this request before continuing with another action
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Submit a message to the topic
  // https://docs.hedera.com/hedera/tutorials/consensus/submit-your-first-message#3.-submit-a-message
  const sendResponse = await new TopicMessageSubmitTransaction({
    topicId,
    message: "Current date: " + new Date().toTimeString() // defined in the task
  })
    .execute(client);

  const getReceipt = await sendResponse.getReceipt(client);

  console.log(`Debug: receipt: ${JSON.stringify(getReceipt, null, 4)}`);

  console.log(`Link to topic: https://hashscan.io/testnet/topic/${topicId}`);

  // Subscribing to a topic via a Hedera mirror node allows you to receive the stream of messages that are being submitted to it.
  // https://docs.hedera.com/hedera/tutorials/consensus/submit-your-first-message#2.-subscribe-to-a-topic
  // https://docs.hedera.com/hedera/sdks-and-apis/sdks/consensus-service/get-topic-message#javascript
  new TopicMessageQuery()
    .setTopicId(topicId)
    .setStartTime(0)
    .subscribe(
      client,
      (message) => console.log(Buffer.from(message.contents, "utf8").toString())
    );

})();