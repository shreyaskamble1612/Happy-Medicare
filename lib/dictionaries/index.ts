import "server-only";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./mr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  mr: () => import("./mr").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
export type { Dictionary };
