import { ENV } from "./env";
import { fetchLocizeLanguages } from "./locize";

export async function fetchLanguages() {
  if (ENV.LANGUAGES && ENV.LANGUAGES.length !== 0) {
    return ENV.LANGUAGES;
  } else {
    const languages = await fetchLocizeLanguages();
    return languages;
  }
}
