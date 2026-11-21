"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./FloatingActions";
import { validateBooking, whatsappMessage, type Booking } from "@/lib/booking";
import { waHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/mr";

type Status = "idle" | "sending" | "done" | "error";

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export default function BookingForm({ lang, t }: { lang: Locale; t: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const b: Booking = {
      name: data.name ?? "",
      phone: data.phone ?? "",
      date: data.date || undefined,
      time: data.time,
      people: data.people,
      message: data.message,
      lang,
    };

    const invalid = validateBooking(b);
    if (invalid) {
      setError(invalid === "sunday" ? t.sundayClosed : t.required);
      return;
    }

    setError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...b, company: data.company }), // `company` = honeypot
      });
      if (!res.ok) throw new Error(String(res.status));
      setBooking(b);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done" && booking) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center text-ink shadow-lift" role="status">
        <CheckCircle2 className="mx-auto mb-3 size-14 text-wa" />
        <h3 className="mb-2 text-2xl font-bold">{t.success}</h3>
        <p className="mb-6 text-muted">{t.successSub}</p>
        <a
          href={waHref(whatsappMessage(booking, t.waIntro))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa w-full py-3.5 text-lg"
        >
          <WhatsAppIcon /> {t.sendWhatsapp}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl bg-white p-6 text-ink shadow-lift sm:p-8">
      {/* Honeypot: hidden from people, bots fill it in */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className="grid gap-1 text-[0.95rem] font-semibold">
        {t.name} *
        <input name="name" required autoComplete="name" className="field" />
      </label>
      <label className="grid gap-1 text-[0.95rem] font-semibold">
        {t.phone} *
        <input name="phone" type="tel" required inputMode="numeric" autoComplete="tel" placeholder="98XXXXXXXX" className="field" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-[0.95rem] font-semibold">
          {t.date}
          <input name="date" type="date" min={todayISO()} className="field" />
        </label>
        <label className="grid gap-1 text-[0.95rem] font-semibold">
          {t.time}
          <select name="time" className="field">
            {t.times.map((tm) => (
              <option key={tm}>{tm}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-[0.95rem] font-semibold">
        {t.people}
        <select name="people" className="field">
          {["1", "2", "3", "4+"].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-[0.95rem] font-semibold">
        {t.message}
        <textarea name="message" rows={3} className="field" />
      </label>

      {(error || status === "error") && (
        <p role="alert" className="font-semibold text-red-700">
          {error ?? t.error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3.5 text-lg disabled:opacity-60">
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p className="text-center text-sm text-muted">{t.hint}</p>
    </form>
  );
}
