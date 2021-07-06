import { ApplanguageCode } from "../../types";
import { CacheClient } from "./CacheClient";

export default class JSONClient implements CacheClient {
  memoryObject: Map<ApplanguageCode | string, any>;
  constructor() {
    this.memoryObject = new Map();
  }
  setKey(key: string, value: any, ttl: number) {
    this.memoryObject.set(`${key}`, value);
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
    return this.memoryObject.get(`${key}`);
  }
}
