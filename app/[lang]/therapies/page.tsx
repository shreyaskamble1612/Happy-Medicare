import { Benefits, CtaBand, PageHeader, Therapies } from "@/components/Sections";
import { getPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("/therapies", "therapies");

export default async function TherapiesPage({ params }: PageProps) {
  const { lang, t } = await getPage(params);
  return (
    <>
      <PageHeader eyebrow={t.therapies.eyebrow} title={t.therapies.title} sub={t.therapies.sub} />
      <Therapies lang={lang} t={t} tinted={false} />
      <div className="bg-tint">
        <Benefits lang={lang} t={t} />
      </div>
      <CtaBand lang={lang} t={t} />
    </>
  );
}
