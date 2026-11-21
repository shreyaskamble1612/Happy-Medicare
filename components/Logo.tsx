import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function Logo({
  lang,
  subtitle = "Happy Dream · Kolhapur",
  light = false,
}: {
  lang: Locale;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={`/${lang}`}
      className={`flex items-center gap-2.5 ${light ? "text-white" : "text-brand"}`}
      aria-label="Happy Medicare home"
    >
      <span
        aria-hidden
        className="size-9 shrink-0 rounded-t-full rounded-b-lg bg-[radial-gradient(circle_at_50%_40%,var(--color-brand-light),var(--color-brand-dark))] shadow-[inset_0_-6px_0_rgb(0_0_0/0.15)]"
      />
      <span className="flex flex-col leading-none">
        <strong className="text-[1.05rem] tracking-wider">HAPPY MEDICARE</strong>
        <small className={`mt-1 text-xs italic ${light ? "text-pink-200" : "text-muted"}`}>
          {subtitle}
        </small>
      </span>
    </Link>
  );
}
