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
  SELF_UPDATE_RATE: parseInt(process.env.SELF_UPDATE_RATE),
  SELF_UPDATE: process.env.SELF_UPDATE
    ? process.env.SELF_UPDATE === "true"
    : true,
};