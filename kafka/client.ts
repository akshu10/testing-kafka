import { Kafka, Producer, Consumer, EachMessagePayload } from "kafkajs";
import Config from "../config";

console.log(Config.config);

class KafkaClient {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor() {
    this.kafka = new Kafka({
      brokers: Config.brokersList,
    });
  }

  public async initProducer(): Promise<void> {
    this.producer = this.kafka.producer();
    await this.producer.connect();
  }

  public async initConsumer(): Promise<void> {
    this.consumer = this.kafka.consumer({
      groupId: "kafka-client",
    });

    await this.consumer.connect();
  }

  getKafka(): Kafka {
    return this.kafka;
  }

  public sendMessages(topic: string, messages: string[]): void {
    messages.forEach(async (message) => {
      await this.producer.send({
        topic,
        messages: [{ value: message }],
      });
    });
  }

  public subscribe(): void {
    this.consumer.subscribe({ topics: [...Config.topicsList] });
  }

  public async consume(): Promise<void> {
    console.log("Consuming...");
    try {
      await this.consumer.run({
        eachMessage: async (messagePayload: EachMessagePayload) => {
          const { topic, partition, message } = messagePayload;
          const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
          console.log(`- ${prefix} ${message.key}#${message.value}`);
        },
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

export default KafkaClient;
