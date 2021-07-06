export type ApplanguageCode =
  | "en-GB"
  | "sv-SE"
  | "fr-FR"
  | "ro-RO"
  | "de-DE"
  | "ca-ES"
  | "es-ES"
  | "ru-RU"
  | "nl-NL"
  | "it-IT"
  | "zh-Hans-CN"
  | "zh-Hant"
  | "pt-PT";

export interface LocizeLanguage {
  name: string;
  nativeName: string;
  isReferenceLanguage: boolean;
  translated: {
    latest: number;
    production: number;
  };
}
