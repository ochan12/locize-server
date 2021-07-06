import { ApplanguageCode } from "../types";
import { getKey, setKey } from "./cache";
import { ENV } from "./env";
import { getLocizeLanguage, fetchLocizeLanguages } from "./locize";
const LANGUAGE_PREFIX = "language::";

/**
 *
 * @returns An Array of AppLanguageCode according to the specifiend on env, or on the server
 */
export async function fetchLanguages(): Promise<Array<ApplanguageCode>> {
  if (ENV.LANGUAGES && ENV.LANGUAGES.length !== 0) {
    return ENV.LANGUAGES;
  } else {
    const languages = await fetchLocizeLanguages();
    return languages;
  }
}

/**
 * Function to fetch the locize server languages described in .env or available in the
 * in the server
 */
export function recurrentFetchServer() {
  fetchLanguages().then((languages) => {
    return Promise.all(
      languages.map((lang) =>
        getLocizeLanguage(lang, ENV.VERSION, ENV.NAMESPACE).then((locizeData) =>{
          setKey(`${LANGUAGE_PREFIX}${lang}`, locizeData.data)
        }
        )
      )
    );
  });
}

export async function getCurrentLanguage(language: ApplanguageCode) {
  let cacheLanguage: any = await getKey(`${LANGUAGE_PREFIX}${language}`);
  if (!cacheLanguage) {
    let response = await getLocizeLanguage(
      language,
      ENV.VERSION,
      ENV.NAMESPACE
    );
    setKey(`${LANGUAGE_PREFIX}${language}`, response.data);
    cacheLanguage = response.data;
  }
  return cacheLanguage;
}
