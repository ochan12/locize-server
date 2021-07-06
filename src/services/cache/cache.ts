import { ApplanguageCode } from "../../types";
import { LANGUAGE_PREFIX } from "..";
import { CacheClient, createCacheClient } from "./CacheClient";
import { ENV } from "../env";

const memoryObject: Map<ApplanguageCode | string, any> = new Map();
const Client: CacheClient = createCacheClient(ENV.CACHE_CLIENT);
/**
 * Set the value in the key in the current cache service
 * @param key Unique name of the key
 * @param value Unique value of the key
 * @param ttl Time to live in seconds
 */
export async function setKey(
  key: ApplanguageCode | string,
  value: any,
  ttl = 3600
) {
  Client.setKey(`${LANGUAGE_PREFIX}${key}`, value, ttl);
}

/**
 *
 * @param key Unique name to get the key
 * @param force_refresh If we want to refresh the value before getting it
 */
export async function getKey(key: string, force_refresh = false, fetchData?: () => Promise<any>) {
  return Client.getKey(`${LANGUAGE_PREFIX}${key}`, force_refresh, fetchData);
}
