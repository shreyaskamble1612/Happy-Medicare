import { NextResponse } from "next/server";
import { normalisePhone, validateBooking, type Booking } from "@/lib/booking";

const clip = (v: unknown, max = 300) => (typeof v === "string" ? v.slice(0, max) : undefined);

/**
 * Receives demo bookings.
 * Set BOOKING_WEBHOOK_URL (e.g. a Google Apps Script web app that appends to a Google Sheet,
 * or a Zapier / Make webhook) to store every booking. Without it, bookings are only logged.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot filled → silently accept and drop (bots).
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const booking: Booking = {
    name: clip(body.name, 80) ?? "",
    phone: clip(body.phone, 20) ?? "",
    date: clip(body.date, 10),
    time: clip(body.time, 40),
    people: clip(body.people, 4),
    message: clip(body.message, 500),
    lang: clip(body.lang, 2),
  };

  const invalid = validateBooking(booking);
  if (invalid) {
    return NextResponse.json({ ok: false, error: invalid }, { status: 422 });
  }

  const record = {
    ...booking,
    phone: normalisePhone(booking.phone),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) console.error("[booking] webhook responded", res.status);
    } catch (err) {
      console.error("[booking] webhook failed", err);
    }
  } else {
    console.log("[booking]", record);
  }

  return NextResponse.json({ ok: true });
}
