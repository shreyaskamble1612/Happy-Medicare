import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import Logo from "./Logo";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/mr";
import { site, telHref } from "@/lib/site";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/therapies", label: t.nav.therapies },
    { href: "/products", label: t.nav.products },
    { href: "/centres", label: t.nav.centres },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-night pt-14 pb-28 text-pink-100 sm:pb-14">
      <div className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo lang={lang} light subtitle="Bindu Chowk, Kolhapur" />
          <p className="mt-4 max-w-md text-pink-200/70">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">{t.footer.quickLinks}</h3>
          <ul className="space-y-1.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={`/${lang}${l.href}`} className="text-pink-200 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">{t.footer.contactTitle}</h3>
          <ul className="space-y-3 text-pink-200">
            <li className="flex gap-2.5">
              <MapPin className="mt-1 size-4 shrink-0" />
              <span className="text-sm">{t.contact.addr}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-1 size-4 shrink-0" />
              <span>
                <a href={telHref} className="font-bold text-white">{site.phoneDisplay}</a>
                <br />
                <span className="text-sm">
                  {t.footer.tollFree}: <a href="tel:18001202425">{site.tollFree}</a>
                </span>
              </span>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-1 size-4 shrink-0" />
              <span className="text-sm">
                {t.contact.hours}
                <br />
                {t.contact.closed}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-10 border-t border-white/10 pt-6 text-sm">
        <p className="text-pink-200/60">{t.footer.disclaimer}</p>
        <p className="mt-2 text-pink-200/40">
          © {new Date().getFullYear()} {site.brand}, Kolhapur. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
