import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { CtaBand, PageBanner, PrimaryCta } from "@/components/Sections";
import { services, site } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageBanner title={s.title} crumbs={[{ href: "/services", label: "Services" }, { label: s.title }]} />
      <section className="section detail">
        <div className="container detail-grid">
          <article>
            <span className="detail-icon"><Icon name={s.icon} size={40} /></span>
            <h2>{s.title}</h2>
            <p className="lead">{s.intro}</p>
            <div className="detail-cols">
              <div className="detail-box">
                <h3>When to see the doctor</h3>
                <ul className="tick-list">
                  {s.signs.map((x) => <li key={x}><Icon name="check" size={16} /> {x}</li>)}
                </ul>
              </div>
              <div className="detail-box alt">
                <h3>How we help</h3>
                <ul className="tick-list">
                  {s.care.map((x) => <li key={x}><Icon name="check" size={16} /> {x}</li>)}
                </ul>
              </div>
            </div>
            <div className="tip-box">
              <Icon name="sparkle" size={22} />
              <p><strong>Health tip:</strong> {s.tip}</p>
            </div>
            <p className="note">This page is for general awareness. Treatment is decided only after a consultation with {site.name}.</p>
          </article>
          <aside className="sidebar">
            <div className="side-card">
              <h3>Other Services</h3>
              <ul>
                {others.map((x) => (
                  <li key={x.slug}><Link href={`/services/${x.slug}`}><Icon name={x.icon} size={18} /> {x.title}</Link></li>
                ))}
              </ul>
            </div>
            <div className="side-card side-cta">
              <h3>Visit the clinic</h3>
              <p>{site.clinic}<br />{site.shortAddress}<br />{site.landmark}</p>
              <PrimaryCta className="btn btn-white" />
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
