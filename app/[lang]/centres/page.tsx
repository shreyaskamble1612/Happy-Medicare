import CentreFinder from "@/components/CentreFinder";
import { CtaBand, PageHeader } from "@/components/Sections";
import { getPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("/centres", "centres");

export default async function CentresPage({ params }: PageProps) {
  const { lang, t } = await getPage(params);
  return (
    <>
      <PageHeader eyebrow={t.centres.eyebrow} title={t.centres.title} sub={t.centres.sub} />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <CentreFinder lang={lang} t={t.centres} />
        </div>
      </section>
      <CtaBand lang={lang} t={t} />
    </>
  );
}
