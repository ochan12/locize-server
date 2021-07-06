import { ApplanguageCode } from "../types";
import { getKey, setKey } from "./cache/cache";
import { ENV } from "./env";
import { getLocizeLanguage, fetchLocizeLanguages } from "./locize";
export const LANGUAGE_PREFIX = "language::";

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
 * in the server, and update keys
 */
export function recurrentFetchServer() {
  return fetchLanguages().then((languages) => {
    return Promise.all(
      languages.map(async (lang) =>
        getLocizeLanguage(lang, ENV.VERSION, ENV.NAMESPACE).then(
          (locizeData) => {
            setKey(`${lang}`, locizeData);
          }
        )
      )
    );
  });
}

export async function getCurrentLanguage(
  language: ApplanguageCode,
  version = ENV.VERSION,
  namespace = ENV.NAMESPACE
) {
  let cacheLanguage: any = await getKey(`${language}`, false, () =>
    getLocizeLanguage(language, version, namespace)
  );
  if (!cacheLanguage) {
    let response = await getLocizeLanguage(language, version, namespace);
    setKey(`${language}`, response);
    cacheLanguage = response;
  }
  return cacheLanguage;
}
