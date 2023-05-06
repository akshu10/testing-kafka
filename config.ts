import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export interface KafkaConfig {
  topics: string[];
  brokers: string[];
  clientId?: string;
}

class Config {
  private topics: string[] = [];
  private brokers: string[] = [];

  constructor() {
    console.log("Loading config.....");

    if (!process.env.TOPICS || !process.env.BROKERS) {
      console.warn("TOPICS or BROKERS not set on ENV");
      return process.exit(1);
    }

    this.topics = process.env.TOPICS.split(",") || [];
    this.brokers = process.env.BROKERS.split(",");
  }

  get config(): KafkaConfig {
    return {
      brokers: this.brokers,
      clientId: "kafka-client",
      topics: this.topics,
    };
  }

  get topicsList(): string[] {
    return this.topics;
  }

  get brokersList(): string[] {
    return this.brokers;
  }
}

export default new Config();
