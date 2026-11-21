import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

/** Prefix every page URL with a locale: /about → /mr/about (or /en/about). */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) return NextResponse.next();

  const cookie = request.cookies.get("NEXT_LOCALE")?.value ?? "";
  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale: Locale = isLocale(cookie)
    ? cookie
    : accept.startsWith("en") && !accept.includes("mr")
      ? "en"
      : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals and any file with an extension (images, sitemap.xml, robots.txt…)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
