import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { CtaBand, PageBanner, PrimaryCta } from "@/components/Sections";
import { conditions, site } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = conditions.find((x) => x.slug === slug);
  return c ? { title: c.title, description: c.short } : {};
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = conditions.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <PageBanner title={c.title} crumbs={[{ href: "/conditions", label: "Eye Conditions" }, { label: c.title }]} />
      <section className="section detail">
        <div className="container detail-grid">
          <article className="detail-body">
            <h2>{c.title}</h2>
            <p className="lead">{c.about}</p>
            <div className="two-col">
              <div className="info-box">
                <h3>Common symptoms</h3>
                <ul className="check-list">
                  {c.symptoms.map((s) => (
                    <li key={s}><Icon name="check" size={18} /> {s}</li>
                  ))}
                </ul>
              </div>
              <div className="info-box">
                <h3>Treatment options</h3>
                <ul className="check-list">
                  {c.treatment.map((s) => (
                    <li key={s}><Icon name="check" size={18} /> {s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="note">
              This page is for general awareness only. The right treatment depends on a proper eye examination by {site.name}.
            </p>
          </article>
          <aside className="sidebar">
            <div className="side-card">
              <h3>Eye Conditions</h3>
              <ul>
                {conditions.map((x) => (
                  <li key={x.slug}>
                    <Link className={x.slug === c.slug ? "active" : ""} href={`/conditions/${x.slug}`}>
                      {x.title} <Icon name="arrow" size={15} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-card side-cta">
              <h3>Get your eyes examined</h3>
              <p>{site.clinic}<br />{site.address}</p>
              <PrimaryCta />
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
