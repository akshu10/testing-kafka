import kafka from "kafka-node";
import * as dotenv from "dotenv";

import LocalConsumer from "./consumer";

dotenv.config({ path: "../.env" });

const topics = process.env.TOPICS?.split(",") || [];

console.log("TOPICS:: ", topics);

console.log("Starting consumer");

const kafkaClient = new kafka.KafkaClient({
  kafkaHost: "localhost:9092",
});

const consuemer = new LocalConsumer(kafkaClient);
