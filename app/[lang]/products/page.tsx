import { CtaBand, Faq, PageHeader, Products } from "@/components/Sections";
import { getPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("/products", "products");

export default async function ProductsPage({ params }: PageProps) {
  const { lang, t } = await getPage(params);
  return (
    <>
      <PageHeader eyebrow={t.products.eyebrow} title={t.products.title} sub={t.products.sub} />
      <Products lang={lang} t={t} tinted={false} />
      <Faq lang={lang} t={t} />
      <CtaBand lang={lang} t={t} />
    </>
  );
}
