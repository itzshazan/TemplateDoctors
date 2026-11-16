import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { SITE } from "@/config/site";

/**
 * Shared detail page for every service and condition: /treatment/<id>/
 * One static HTML page is generated per item in SITE.services and SITE.conditions.
 * For unique content per treatment, add fields to the Treatment type
 * (e.g. intro, benefits[]) and render them here.
 */

const ALL = [...SITE.services, ...SITE.conditions];

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = ALL.find((t) => t.id === id);
  return item ? { title: item.title, description: item.desc } : {};
}

export default async function TreatmentPage({ params }: Props) {
  const { id } = await params;
  const item = ALL.find((t) => t.id === id);
  if (!item) notFound();

  const isCondition = SITE.conditions.includes(item);
  const parent = isCondition ? { label: "Conditions", href: "/conditions" } : { label: "Services", href: "/services" };

  return (
    <>
      <section className="t-hero">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <div className="breadcrumb" style={{ justifyContent: "center", marginTop: "1.4em" }}>
          <Link href="/">Home</Link><span>/</span>
          <Link href={parent.href}>{parent.label}</Link><span>/</span>
          <span>{item.title}</span>
        </div>
      </section>

      <section className="t-about">
        <div className="reveal">
          <h2>{item.title}</h2>
          {item.intro.map((para) => <p key={para}>{para}</p>)}
          <div className="tags">
            {item.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
          <Link className="btn btn-red" href="/contact">Book Consultation</Link>
        </div>
        <div className="reveal">
          <img src="/img/treatment-1.jpg" alt="" width={800} height={600} />
        </div>
      </section>

      <section className="t-info">
        <h2>{isCondition ? "Understanding The Condition" : "Understanding The Treatment"}</h2>
        <p className="sub">What it is, when to see the doctor, and what to expect at {SITE.clinic}.</p>
        <div className="info-grid">
          {[
            { heading: isCondition ? "What Is It?" : "What It Involves", items: item.what },
            { heading: "When To See The Doctor", items: item.when },
            { heading: "What To Expect", items: item.expect },
          ].map((card) => (
            <div className="info-card reveal" key={card.heading}>
              <h3>{card.heading}</h3>
              <ul>{card.items.map((li) => <li key={li}>{li}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="t-benefits">
        <div className="reveal">
          <img src="/img/treatment-2.jpg" alt="" width={800} height={600} />
        </div>
        <div className="reveal">
          <h2>Benefits Of Timely Treatment</h2>
          <div className="benefit-grid">
            {item.benefits.map((b) => (
              <div className="benefit" key={b}><Icon name="check" /><span>{b}</span></div>
            ))}
          </div>
          <Link className="btn btn-red" href="/contact">Talk To The Doctor</Link>
        </div>
      </section>
    </>
  );
}
