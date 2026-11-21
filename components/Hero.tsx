import Link from "next/link";
import { Phone, Flame, Hand, ShieldCheck } from "lucide-react";
import { BedIllustration } from "./Illustrations";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/mr";
import { telHref } from "@/lib/site";

export default function Hero({ lang, t }: { lang: Locale; t: Dictionary }) {
  const chipIcons = [Flame, Hand, ShieldCheck];
  const chipPos = ["top-[6%] left-0", "top-0 right-[4%]", "bottom-[4%] right-[10%]"];

  return (
    <section className="overflow-hidden bg-[radial-gradient(800px_400px_at_85%_20%,#FFE3EC_0%,transparent_60%),radial-gradient(600px_300px_at_0%_100%,#FFF0DC_0%,transparent_60%)] py-10 sm:py-16 lg:py-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="inline-block rounded-md bg-brand px-4 py-1 text-[0.95rem] font-bold tracking-wide text-white">
            {t.common.freeDemo}
          </p>
          <h1 className="mt-5 text-[2.4rem] font-extrabold sm:text-5xl lg:text-6xl">
            {t.hero.title1}
            <br />
            <span className="text-brand">{t.hero.title2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{t.hero.sub}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/${lang}/contact#book`} className="btn-primary px-7 py-3.5 text-lg">
              {t.nav.book}
            </Link>
            <a href={telHref} className="btn-ghost px-7 py-3.5 text-lg">
              <Phone className="size-5" /> 77679 59571
            </a>
          </div>

          <dl className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 text-sm text-muted">{s.label}</dt>
                <dd className="text-3xl leading-none font-extrabold text-brand">{s.n}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:order-none">
          <div className="absolute inset-[10%_5%] rounded-full bg-[radial-gradient(circle,rgb(242_163_58/0.35),transparent_65%)] blur-md" />
          <BedIllustration className="relative w-full" />
          {t.hero.chips.map((c, i) => {
            const Icon = chipIcons[i];
            return (
              <span
                key={c}
                className={`absolute ${chipPos[i]} flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold whitespace-nowrap shadow-soft`}
              >
                <Icon className="size-4 text-brand" /> {c}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
