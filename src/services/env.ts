import { ApplanguageCode, APP_ENV } from "../types";
export const ENV: APP_ENV = {
  LOCIZE_KEY: process.env.LOCIZE_KEY,
  PROJECT_ID: process.env.PROJECT_ID,
  PORT: parseInt(process.env.PORT),
  LANGUAGES: (process.env.LANGUAGES || "")
    .split(",")
    .filter((e) => e !== "") as Array<ApplanguageCode>,
  VERSION: process.env.VERSION,
  NAMESPACE: process.env.NAMESPACE,
  TARGET_ENV: process.env.TARGET_ENV,
  CACHE_CLIENT: process.env.CACHE_CLIENT,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: parseInt(process.env.REDIS_PORT),
  REDIS_PASS: process.env.REDIS_PASS,
  SELF_UPDATE_RATE: parseInt(process.env.SELF_UPDATE_RATE),
  SELF_UPDATE: process.env.SELF_UPDATE
    ? process.env.SELF_UPDATE === "true"
    : true,
};