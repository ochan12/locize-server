import { APP_ENV } from "../types/config";

export const ENV: APP_ENV = {
    LOCIZE_KEY: process.env.LOCIZE_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    PORT: parseInt(process.env.PORT),
    LANGUAGES: process.env.LANGAUGES.split(","),
    VERSION: process.env.VERSION,
    NAMESPACE: process.env.NAMESPACE
}