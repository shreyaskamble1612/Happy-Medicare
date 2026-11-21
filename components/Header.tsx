"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { localeNames, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/mr";

export default function Header({ lang, t }: { lang: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/therapies", label: t.nav.therapies },
    { href: "/products", label: t.nav.products },
    { href: "/centres", label: t.nav.centres },
    { href: "/contact", label: t.nav.contact },
  ];

  const other: Locale = lang === "mr" ? "en" : "mr";
  const switchHref = pathname.replace(/^\/(mr|en)(?=\/|$)/, `/${other}`);
  const rememberLocale = () => {
    document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=31536000; samesite=lax`;
  };

  const isActive = (href: string) => pathname === `/${lang}${href}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="container-x flex h-[70px] items-center justify-between gap-4">
        <Logo lang={lang} />

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={`/${lang}${l.href}`}
              className={`font-semibold transition hover:text-brand ${
                isActive(l.href) ? "text-brand" : "text-ink"
              }`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href={switchHref}
            onClick={rememberLocale}
            hrefLang={other}
            className="rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-bold text-brand"
          >
            {localeNames[other]}
          </Link>
          <Link href={`/${lang}/contact#book`} className="btn-primary hidden !px-5 !py-2 text-[0.95rem] sm:inline-flex">
            {t.nav.book}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 lg:hidden"
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-cream lg:hidden">
          {[{ href: "", label: t.nav.home }, ...links].map((l) => (
            <Link
              key={l.href}
              href={`/${lang}${l.href}`}
              className={`block border-b border-line px-5 py-3.5 font-semibold ${
                pathname === `/${lang}${l.href}` ? "text-brand" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="p-4">
            <Link href={`/${lang}/contact#book`} className="btn-primary w-full">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
