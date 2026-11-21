import { AboutGermanium, CtaBand, PageHeader, Steps, Values } from "@/components/Sections";
import { getPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("/about", "about");

export default async function AboutPage({ params }: PageProps) {
  const { lang, t } = await getPage(params);
  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.dealerTitle} sub={t.about.pageSub} />
      <AboutGermanium lang={lang} t={t} withDealer />
      <Values lang={lang} t={t} />
      <Steps lang={lang} t={t} />
      <CtaBand lang={lang} t={t} />
    </>
  );
}
