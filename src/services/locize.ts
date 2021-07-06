import Axios from "axios";
import { ApplanguageCode, LocizeLanguage } from "../types/language";
import { ENV } from "./env";
export const axiosLocize = Axios.create({ baseURL: "https://api.locize.app" });

export async function fetchLocizeLanguages() {
  if (ENV.LANGUAGES && ENV.LANGUAGES.length !== 0) return ENV.LANGUAGES;
  const response = await axiosLocize.get(`/languages/${ENV.PROJECT_ID}`);
  return Object.keys(response.data) as Array<ApplanguageCode>;
}

export async function getLocizeLanguage(
  language = "en",
  version = "latest",
  namespace = "translation"
) {
  const { PROJECT_ID, VERSION, NAMESPACE } = ENV;
  return axiosLocize.get<LocizeLanguage>(
    `/${PROJECT_ID}/${VERSION || version}/${language}/${NAMESPACE || namespace}`
  );
}
