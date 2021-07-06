import { ApplanguageCode } from "./index";

export interface APP_ENV {
  LOCIZE_KEY: string;
  PROJECT_ID: string;
  PORT: number;
  LANGUAGES: Array<ApplanguageCode>;
  VERSION: string;
  NAMESPACE: string;
  SELF_UPDATE?: boolean
  SELF_UPDATE_RATE?: number
  TARGET_ENV?: string;
}
