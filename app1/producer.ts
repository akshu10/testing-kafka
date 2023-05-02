import {
  Producer,
  KafkaClient,
  ProducerOptions,
  CustomPartitioner,
  ProduceRequest,
} from "kafka-node";

class LocalProducer extends Producer {
  private client: KafkaClient;

  constructor(
    client: KafkaClient,
    options?: ProducerOptions,
    customPartitioner?: CustomPartitioner
  ) {
    super(client, options, customPartitioner);
  }

  getKafkaClient() {
    return this.client;
  }

  createTopics(topics: string[]): void {
    super.createTopics(topics, (error, result) => {
      if (error) {
        console.error("Error while creating topics ", error);
      }
      console.log("Success creating Topics ", result);
    });
  }

  send(request: ProduceRequest[], cb: (error: any, data: any) => any): void {
    super.send(request, cb);
  }
}

export default LocalProducer;
