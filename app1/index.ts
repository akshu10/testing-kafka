import KafkaClient from "../kafka/client";

const main = (async () => {
  const kafkaClient = new KafkaClient();

  await kafkaClient.initProducer();

  kafkaClient.sendMessages("test", ["test message"]);
})();
