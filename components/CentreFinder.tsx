"use client";

import { useMemo, useState } from "react";
import { Search, Phone } from "lucide-react";
import { centres, formatPhone, type Region } from "@/lib/centres";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/mr";

type Filter = "all" | Region;

export default function CentreFinder({ lang, t }: { lang: Locale; t: Dictionary["centres"] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Filter>("all");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return centres.filter(
      (c) =>
        (region === "all" || c.region === region) &&
        (!q || c.en.toLowerCase().includes(q) || c.mr.includes(q)),
    );
  }, [query, region]);

  const filters: Filter[] = ["all", "mumbai", "pune", "other"];
  const regionLabel = (r: Region) => (r === "other" ? "" : t.regions[r]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">{t.search}</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search}
            className="w-full rounded-full border-[1.5px] border-line bg-white py-2.5 pr-4 pl-11 outline-none focus:border-brand"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setRegion(f)}
              aria-pressed={region === f}
              className={`rounded-full border-[1.5px] px-4 py-1.5 text-[0.95rem] font-semibold transition ${
                region === f ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-brand"
              }`}
            >
              {t.regions[f]}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 text-sm text-muted">
        {list.length} {t.count}
      </p>

      {list.length === 0 ? (
        <p className="py-10 text-center text-muted">{t.empty}</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => {
            const home = c.en === "Kolhapur";
            return (
              <li
                key={c.en}
                className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 ${
                  home ? "border-brand bg-brand-soft" : "border-line bg-white"
                }`}
              >
                <span>
                  <span className="block font-bold">{lang === "mr" ? c.mr : c.en}</span>
                  <small className="text-muted">
                    {home ? t.yourCentre : regionLabel(c.region)}
                  </small>
                </span>
                <a
                  href={`tel:${c.phone}`}
                  className="flex items-center gap-1.5 text-[0.95rem] font-bold whitespace-nowrap text-brand"
                >
                  <Phone className="size-4" /> {formatPhone(c.phone)}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
