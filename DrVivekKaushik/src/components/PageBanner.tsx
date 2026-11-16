import Link from "next/link";

export default function PageBanner({ title, crumb = title }: { title: string; crumb?: string }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{crumb}</span>
        </div>
      </div>
    </section>
  );
}
