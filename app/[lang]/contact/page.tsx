import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { Faq } from "@/components/Sections";
import { getPage, pageMetadata, type PageProps } from "@/lib/page";
import { mapEmbedSrc, site, telHref } from "@/lib/site";

export const generateMetadata = pageMetadata("/contact", "contact");

export default async function ContactPage({ params }: PageProps) {
  const { lang, t } = await getPage(params);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;

  const rows = [
    { Icon: MapPin, label: t.contact.addrLabel, body: <p>{t.contact.addr}</p> },
    {
      Icon: Phone,
      label: t.contact.phoneLabel,
      body: (
        <a href={telHref} className="text-xl font-bold text-white">
          {site.phoneDisplay}
        </a>
      ),
    },
    {
      Icon: Clock,
      label: t.contact.hoursLabel,
      body: (
        <p>
          {t.contact.hours}
          <br />
          <span className="text-amber-200">{t.contact.closed}</span>
        </p>
      ),
    },
  ];

  return (
    <>
      <section id="book" className="bg-gradient-to-br from-brand-dark to-brand py-14 text-white sm:py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold tracking-widest text-amber-200 uppercase">{t.contact.eyebrow}</p>
            <h1 className="text-4xl font-extrabold sm:text-5xl">{t.contact.title}</h1>
            <p className="mt-4 text-lg text-pink-100">{t.contact.sub}</p>

            <ul className="mt-8 space-y-5">
              {rows.map(({ Icon, label, body }) => (
                <li key={label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                    <Icon className="size-5" />
                  </span>
                  <div className="text-pink-50">
                    <p className="text-sm font-bold text-pink-200">{label}</p>
                    {body}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 border-2 border-white/60 text-white"
            >
              <Navigation className="size-5" /> {t.contact.directions}
            </a>
          </div>

          <BookingForm lang={lang} t={t.contact.form} />
        </div>
      </section>

      <section aria-label="Map">
        <iframe
          title="Happy Medicare Kolhapur – Bindu Chowk"
          src={mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[380px] w-full border-0"
        />
      </section>

      <Faq lang={lang} t={t} />
    </>
  );
}
