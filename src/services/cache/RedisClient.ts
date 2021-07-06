import { CacheClient } from "./CacheClient";
import { createNodeRedisClient, WrappedNodeRedisClient } from "handy-redis";
import { ENV } from "../env";

export default class RedisClient implements CacheClient {
  client: WrappedNodeRedisClient;
  constructor() {
    const redisOptions = {};
    if (ENV.REDIS_PASS && ENV.REDIS_PASS !== "") {
      redisOptions["password"] = ENV.REDIS_PASS;
    }
    this.client = createNodeRedisClient(
      ENV.REDIS_PORT || 6379,
      ENV.REDIS_HOST,
      redisOptions
    );
    console.log("Connected to redis")
  }
  setKey(key: string, value: any, ttl: number) {
    if (ttl) {
      this.client.set(key, JSON.stringify(value), ["EX", ttl]);
    } else {
      this.client.set(key, JSON.stringify(value));
    }
    console.log("Cache updated", `${key}`);
  }
  async getKey(
    key: string,
    force_refresh: boolean,
    fetchData: () => Promise<any>
  ) {
    if (force_refresh) {
      await fetchData().then((data) => {
        this.setKey(`${key}`, data, 3600);
      });
    }
    if (key) {
      const string_data = await this.client.get(key);
      return JSON.parse(string_data);
    }
    return "";
  }
}
