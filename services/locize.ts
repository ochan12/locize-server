import Axios from "axios";
import { ApplanguageCode, LocizeLanguage } from "../types/language";
import { ENV } from "./env";
const axios = Axios.create({ baseURL: "https://api.locize.app" });

export async function fetchLocizeLanguages() {
  if (ENV.LANGUAGES && ENV.LANGUAGES.length !== 0) return ENV.LANGUAGES;
  const response = await axios.get<Map<ApplanguageCode, LocizeLanguage>>(
    `/languages/${ENV.PROJECT_ID}`
  );
  return response.data.keys();
}

export async function buildLocizeURL(
  language = "en",
  version = "latest",
  namespace = "translation"
) {
  const { PROJECT_ID, VERSION, NAMESPACE } = ENV;
  return axios.get<LocizeLanguage>(
    `/${PROJECT_ID}/${VERSION || version}/${language}/${NAMESPACE || namespace}`
  );
}
