import kafka from "kafka-node";
import * as dotenv from "dotenv";

import LocalProducer from "./producer";

dotenv.config({ path: "../.env" });

const topics = process.env.TOPICS?.split(",") || [];

console.log("TOPICS:: ", topics);

const kafkaClient = new kafka.KafkaClient({
  kafkaHost: "localhost:9092",
});

const producer = new LocalProducer(kafkaClient);

producer.on("ready", () => {
  console.log("Producer is ready");

  producer.createTopics(topics);

  const sendMessageRequest = [
    {
      topic: "Test",
      messages: "Hello World",
      key: "key1",
      partition: 0,
    },
  ];

  producer.send(sendMessageRequest, (error, result) => {
    if (error) {
      console.error("Producer Error", error);
    }
    console.log("Producer Result", result);
  });

  producer.on("error", (error: any) => {
    console.error("Producer Error", error);
  });
});
