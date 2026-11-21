# Happy Medicare Kolhapur — Website

Bilingual (मराठी / English) website for **Happy Medicare**, the demo centre at Bindu Chowk, Kolhapur.
Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /mr
npm run build && npm start   # production
```

## Pages

| Route | Content |
|---|---|
| `/mr`, `/en` | Home: hero, germanium, therapies, benefits, products, how it works, FAQ |
| `/[lang]/about` | About germanium + the Kolhapur centre, values |
| `/[lang]/therapies` | 6 therapies + benefits |
| `/[lang]/products` | Thermal massage bed, germanium mat |
| `/[lang]/centres` | Searchable list of 45 Maharashtra demo centres (tap to call) |
| `/[lang]/contact` | Booking form, address, hours, map, directions |
| `/api/book` | Booking endpoint (validates, rejects Sundays, honeypot anti-spam) |

`middleware.ts` sends visitors without a language prefix to `/mr` (or `/en` for English browsers, or their last choice).

## Where to edit

- **Phone, address, WhatsApp, domain** → `lib/site.ts`
- **All text (both languages)** → `lib/dictionaries/mr.ts` and `en.ts` (English is type-checked against Marathi, so a missing translation fails the build)
- **Demo centres** → `lib/centres.ts`
- **Colours / fonts** → `app/globals.css` (`@theme` block)
- **Illustrations** → `components/Illustrations.tsx`. Replace with real product photos in `public/images/` using `next/image`.

## Bookings

The form POSTs to `/api/book`, then offers a one-tap **Send on WhatsApp** with the details pre-filled.
To also store every booking, set `BOOKING_WEBHOOK_URL` (see `.env.example`) to a Google Apps Script web app that appends to a Google Sheet, or a Zapier/Make webhook.

## Deploy

Vercel (free tier is enough): import the repo, set `NEXT_PUBLIC_SITE_URL` (and optionally `BOOKING_WEBHOOK_URL`), deploy, then point the domain at it.

## Before going live — confirm with the client

- Real domain name
- Product photos, and prices if they want them shown
- Two centre numbers that are misprinted on the flyer: **Boisar** (9 digits) and **Girgaon** (11 digits). They're flagged `verify: true` in `lib/centres.ts`.
- Exact Google Maps pin for the shop (currently searches "Bindu Chowk, Kolhapur")
- Whether to list all 45 centres or only Kolhapur
