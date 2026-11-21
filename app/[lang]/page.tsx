import Hero from "@/components/Hero";
import {
  AboutGermanium, Benefits, CtaBand, Faq, Products, Steps, Therapies,
} from "@/components/Sections";
import { getPage, type PageProps } from "@/lib/page";

export default async function HomePage({ params }: PageProps) {
  const { lang, t } = await getPage(params);
  return (
    <>
      <Hero lang={lang} t={t} />
      <AboutGermanium lang={lang} t={t} />
      <Therapies lang={lang} t={t} showLink />
      <Benefits lang={lang} t={t} />
      <Products lang={lang} t={t} />
      <Steps lang={lang} t={t} />
      <CtaBand lang={lang} t={t} />
      <Faq lang={lang} t={t} />
    </>
  );
}
