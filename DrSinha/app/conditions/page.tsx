import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, PageBanner } from "@/components/Sections";
import { conditions } from "@/data/content";

export const metadata: Metadata = {
  title: "Eye Conditions We Treat",
  description: "Cataract, glaucoma, refractive errors, diabetic retinopathy, conjunctivitis, dry eye, eyelid problems and keratoconus.",
};

export default function ConditionsPage() {
  return (
    <>
      <PageBanner title="Eye Conditions" crumbs={[{ label: "Eye Conditions" }]} />
      <section className="section specialities">
        <div className="container">
          <div className="section-head reveal">
            <h4 className="eyebrow">Spectrum of Eye Conditions</h4>
            <h2>Conditions Diagnosed & Treated</h2>
          </div>
          <div className="spec-grid">
            {conditions.map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`} className="spec-card reveal">
                <span className="spec-icon"><Icon name="eye" size={46} /></span>
                <h3>{c.title}</h3>
                <p>{c.short}</p>
                <span className="read-more">Read More <Icon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
