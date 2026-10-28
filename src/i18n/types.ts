export const SUPPORTED_LOCALES = ["en-US", "pt-BR", "es-ES", "zh-CN"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

/** Each locale is named in its own language, so the labels are never translated. */
export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  "en-US": "English",
  "pt-BR": "Português",
  "es-ES": "Español",
  "zh-CN": "简体中文",
};

export interface LocaleMessages {
  [key: string]: string;
}
