import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";

export type PageProps = { params: Promise<{ lang: string }> };

export async function getPage(params: PageProps["params"]): Promise<{ lang: Locale; t: Dictionary }> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return { lang, t: await getDictionary(lang) };
}

/** Per-page <title>, description and hreflang alternates. */
export function pageMetadata(
  path: string,
  pageKey: keyof Dictionary["meta"]["pages"],
) {
  return async ({ params }: PageProps): Promise<Metadata> => {
    const { lang, t } = await getPage(params);
    const title = t.meta.pages[pageKey];
    return {
      title,
      alternates: {
        canonical: `/${lang}${path}`,
        languages: { "mr-IN": `/mr${path}`, "en-IN": `/en${path}` },
      },
      openGraph: { title: `${title} | ${t.meta.siteName}`, description: t.meta.description },
    };
  };
}
