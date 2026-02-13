import type { Locale } from "./config";
import en from "./dictionaries/en.json";
import pt from "./dictionaries/pt.json";

const dictionaries = { en, pt } as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
