import KafkaClient from "../kafka/client";

const main = (async () => {
  const kafkaClient = new KafkaClient();

  await kafkaClient.initConsumer();

  kafkaClient.subscribe();

  await kafkaClient.consume();
})();
