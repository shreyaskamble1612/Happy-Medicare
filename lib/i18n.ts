export const locales = ["mr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "mr";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeNames: Record<Locale, string> = {
  mr: "मराठी",
  en: "English",
};

/** Routes that exist under every locale (used by nav + sitemap). */
export const routes = ["", "/about", "/therapies", "/products", "/centres", "/contact"] as const;
