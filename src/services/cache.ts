import { ApplanguageCode } from "../types";
import { LANGUAGE_PREFIX } from "./";

const memoryObject: Map<ApplanguageCode | string, any> = new Map();

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
  memoryObject.set(`${LANGUAGE_PREFIX}${key}`, value);
  console.log("Cache updated", `${LANGUAGE_PREFIX}${key}`);
}

/**
 *
 * @param key Unique name to get the key
 * @param force_refresh If we want to refresh the value before getting it
 */
export async function getKey(key: string, force_refresh = false) {
  return memoryObject.get(`${LANGUAGE_PREFIX}${key}`);
}
