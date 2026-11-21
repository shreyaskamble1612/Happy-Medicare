import Link from "next/link";
import {
  Waves, Hand, Flame, Sun, Bone, Thermometer, Check,
  CalendarCheck, MapPin, Smile, ShieldCheck, Gift, ArrowRight, Phone,
} from "lucide-react";
import { BedIllustration, MatIllustration, StoneArt } from "./Illustrations";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/mr";
import { telHref } from "@/lib/site";

type P = { lang: Locale; t: Dictionary };

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-11 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {sub && <p className="mt-3 text-muted">{sub}</p>}
    </div>
  );
}

/** Coloured banner at the top of inner pages. */
export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand py-14 text-center text-white sm:py-20">
      <div className="container-x">
        <p className="mb-2 text-sm font-bold tracking-widest text-amber-200 uppercase">{eyebrow}</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {sub && <p className="mx-auto mt-4 max-w-2xl text-lg text-pink-100">{sub}</p>}
      </div>
    </section>
  );
}

/* ---------------- About / Germanium ---------------- */
export function AboutGermanium({ t, withDealer = false }: P & { withDealer?: boolean }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
        <div className="text-center">
          <StoneArt />
          <p className="mt-3 font-semibold text-muted">{t.about.stoneCaption}</p>
        </div>
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="h2 mb-4">{t.about.title}</h2>
          <p className="mb-4">{t.about.p1}</p>
          <p className="mb-4">{t.about.p2}</p>
          {withDealer && (
            <div className="mt-6 rounded-2xl border border-line bg-tint p-6">
              <h3 className="mb-2 text-xl font-bold text-brand">{t.about.dealerTitle}</h3>
              <p>{t.about.dealerP}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Values({ t }: P) {
  const icons = [ShieldCheck, Gift, MapPin];
  return (
    <section className="bg-tint py-16 sm:py-20">
      <div className="container-x">
        <SectionHead eyebrow={t.about.eyebrow} title={t.about.valuesTitle} />
        <div className="grid gap-5 md:grid-cols-3">
          {t.about.values.map((v, i) => {
            const Icon = icons[i];
            return (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-7 text-center">
                <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="size-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{v.title}</h3>
                <p className="text-muted">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Therapies ---------------- */
const therapyIcons = [Waves, Hand, Flame, Sun, Bone, Thermometer];

export function Therapies({ lang, t, tinted = true, showLink = false }: P & { tinted?: boolean; showLink?: boolean }) {
  return (
    <section className={`py-16 sm:py-20 ${tinted ? "bg-tint" : ""}`}>
      <div className="container-x">
        <SectionHead eyebrow={t.therapies.eyebrow} title={t.therapies.title} sub={t.therapies.sub} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.therapies.items.map((item, i) => {
            const Icon = therapyIcons[i];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="size-7" />
                </div>
                <h3 className="mb-1.5 text-xl font-bold">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
        {showLink && (
          <div className="mt-10 text-center">
            <Link href={`/${lang}/therapies`} className="inline-flex items-center gap-1.5 font-bold text-brand">
              {t.common.learnMore} <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
export function Benefits({ t }: P) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <SectionHead eyebrow={t.benefits.eyebrow} title={t.benefits.title} />
        <ul className="grid gap-3.5 md:grid-cols-2 md:gap-x-7">
          {t.benefits.items.map((b) => (
            <li key={b} className="flex items-center gap-3.5 rounded-2xl border border-line bg-white px-5 py-4 font-semibold">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Check className="size-4" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{t.benefits.note}</p>
      </div>
    </section>
  );
}

/* ---------------- Products ---------------- */
export function Products({ lang, t, tinted = true }: P & { tinted?: boolean }) {
  const art = [
    { el: <BedIllustration className="w-4/5" />, bg: "from-[#FFE3EC] to-[#FFD3A0]" },
    { el: <MatIllustration className="w-4/5" />, bg: "from-[#F7D6E2] to-[#E8B7C9]" },
  ];
  return (
    <section className={`py-16 sm:py-20 ${tinted ? "bg-tint" : ""}`}>
      <div className="container-x">
        <SectionHead eyebrow={t.products.eyebrow} title={t.products.title} sub={t.products.sub} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.products.items.map((p, i) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
              <div className={`grid h-60 place-items-center bg-gradient-to-br ${art[i].bg}`}>{art[i].el}</div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mb-4 font-semibold text-brand">{p.tagline}</p>
                <ul className="mb-6 space-y-1.5 text-muted">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={3} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/${lang}/contact#book`} className="btn-primary mt-auto self-start">
                  {t.common.tryFree}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">{t.products.priceNote}</p>
      </div>
    </section>
  );
}

/* ---------------- Steps ---------------- */
export function Steps({ t }: P) {
  const icons = [CalendarCheck, MapPin, Smile];
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} />
        <ol className="grid gap-8 md:grid-cols-3">
          {t.steps.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title} className="text-center">
                <div className="relative mx-auto mb-4 grid size-16 place-items-center rounded-full bg-brand text-white shadow-[0_0_0_8px_var(--color-brand-soft)]">
                  <Icon className="size-7" />
                  <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-accent text-xs font-extrabold text-ink">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-1.5 text-xl font-bold">{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq({ t }: P) {
  return (
    <section className="bg-tint py-16 sm:py-20">
      <div className="container-x max-w-3xl">
        <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="space-y-3">
          {t.faq.items.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-line bg-white px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4.5 font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA band ---------------- */
export function CtaBand({ lang, t }: P) {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand py-16 text-white">
      <div className="container-x flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.cta.title}</h2>
          <p className="mt-2 text-lg text-pink-100">{t.cta.sub}</p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <Link href={`/${lang}/contact#book`} className="btn bg-white px-7 py-3.5 text-lg text-brand">
            {t.nav.book}
          </Link>
          <a href={telHref} className="btn border-2 border-white/60 px-7 py-3.5 text-lg text-white">
            <Phone className="size-5" /> {t.common.call}
          </a>
        </div>
      </div>
    </section>
  );
}
