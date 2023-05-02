import { Consumer, KafkaClient, OffsetFetchRequest, Topic } from "kafka-node";

class LocalConsumer extends Consumer {
  constructor(
    client: KafkaClient,
    fetchRequests: OffsetFetchRequest[] | string[],
    options: any
  ) {
    super(client, fetchRequests, options);
  }

  addTopics<T extends string[] | Topic[]>(
    topics: T,
    cb: (error: any, added: T) => any,
    fromOffset?: boolean | undefined
  ): void {
    super.addTopics(topics, cb, fromOffset);
  }

  removeTopics(
    topics: string | string[],
    cb: (error: any, removed: number) => any
  ): void {
    super.removeTopics(topics, cb);
  }
}

export default LocalConsumer;
