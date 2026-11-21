// Shared booking validation — used by the form (client) and the API route (server).

export type Booking = {
  name: string;
  phone: string;
  date?: string;
  time?: string;
  people?: string;
  message?: string;
  lang?: string;
};

export const normalisePhone = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
};

export const isValidPhone = (raw: string) => /^[6-9]\d{9}$/.test(normalisePhone(raw));

/** The centre is closed on Sundays. Dates arrive as YYYY-MM-DD. */
export const isSunday = (date?: string) => {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay() === 0;
};

export type BookingError = "required" | "sunday";

export function validateBooking(b: Partial<Booking>): BookingError | null {
  if (!b.name?.trim() || !b.phone || !isValidPhone(b.phone)) return "required";
  if (isSunday(b.date)) return "sunday";
  return null;
}

export function whatsappMessage(b: Booking, intro: string) {
  return [
    intro,
    "",
    `Name: ${b.name.trim()}`,
    `Mobile: ${normalisePhone(b.phone)}`,
    b.date && `Date: ${b.date}`,
    b.time && `Time: ${b.time}`,
    b.people && `People: ${b.people}`,
    b.message?.trim() && `Note: ${b.message.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
}
