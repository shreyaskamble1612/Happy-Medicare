// Single source of truth for business details — edit here to update the whole site.
export const site = {
  brand: "Happy Medicare",
  phone: "7767959571",
  phoneDisplay: "+91 77679 59571",
  whatsapp: "917767959571",
  tollFree: "1800 120 2425",
  // TODO: replace with the real domain before going live
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.happymedicarekolhapur.in",
  mapQuery: "Bindu Chowk, Kolhapur, Maharashtra 416005",
  address: {
    street:
      "Goldan Plaza Building, First Floor, Above Dipak Electrical, Aram Corner, Chh. Shivaji Maharaj Road, Bindu Chowk, C Ward",
    city: "Kolhapur",
    pin: "416005",
    state: "Maharashtra",
  },
} as const;

export const telHref = `tel:+91${site.phone}`;

export const waHref = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapQuery,
)}&output=embed`;
