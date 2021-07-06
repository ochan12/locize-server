import { ApplanguageCode } from "../../types";
import { LANGUAGE_PREFIX } from "../languages";
import JSONClient from "./JSONClient";

import RedisClient from "./RedisClient";

export interface CacheClient {
  setKey: (key: string, value: any, ttl: number) => any;
  getKey: (
    key: string,
    force_refresh: boolean,
    fetchData: () => Promise<any>
  ) => Promise<any>;
}


export function createCacheClient(client: "JSON" | "REDIS" | string = "JSON") {
  switch (client) {
    case "REDIS":
      return new RedisClient();
    default:
      return new JSONClient();
  }
}
