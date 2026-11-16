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

  return (
    <>
      <PageBanner title={s.title} crumbs={[{ href: "/services", label: "Services" }, { label: s.title }]} />
      <section className="section detail">
        <div className="container detail-grid">
          <article className="detail-body">
            <span className="detail-icon"><Icon name={s.icon} size={56} /></span>
            <h2>{s.title}</h2>
            <p className="lead">{s.intro}</p>

            <h3>Who should get this checked?</h3>
            <ul className="check-list">
              {s.whoNeeds.map((w) => (
                <li key={w}><Icon name="check" size={18} /> {w}</li>
              ))}
            </ul>

            <h3>What to expect</h3>
            <ol className="steps">
              {s.whatToExpect.map((st, i) => (
                <li key={st.title}>
                  <span className="step-no">{i + 1}</span>
                  <div>
                    <h4>{st.title}</h4>
                    <p>{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3>Aftercare & tips</h3>
            <ul className="check-list">
              {s.aftercare.map((a) => (
                <li key={a}><Icon name="check" size={18} /> {a}</li>
              ))}
            </ul>

            <h3>Frequently asked questions</h3>
            <div className="faq-list">
              {s.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q} <Icon name="chevron" size={18} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </article>

          <aside className="sidebar">
            <div className="side-card">
              <h3>All Services</h3>
              <ul>
                {services.map((x) => (
                  <li key={x.slug}>
                    <Link className={x.slug === s.slug ? "active" : ""} href={`/services/${x.slug}`}>
                      {x.title} <Icon name="arrow" size={15} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-card side-cta">
              <h3>Need an eye check-up?</h3>
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
