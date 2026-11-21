import Link from "next/link";

// Rendered inside the [lang] layout. Bilingual because not-found pages don't receive params.
export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-bold">पान सापडले नाही · Page not found</h1>
      <p className="mt-2 text-muted">
        तुम्ही शोधत असलेले पान अस्तित्वात नाही. · The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/mr" className="btn-primary">मुख्यपृष्ठ</Link>
        <Link href="/en" className="btn-ghost">Home</Link>
      </div>
    </section>
  );
}
