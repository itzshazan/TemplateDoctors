import Link from "next/link";
import CardGrid from "@/components/CardGrid";
import { SITE, tel } from "@/config/site";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="eyebrow">Prosthodontist · Dubai &amp; Mumbai</span>
            <h1>Implants &amp; Full Mouth Rehabilitation, Planned Precisely</h1>
            <p>
              {SITE.name}, {SITE.qualification}, restores missing and worn teeth with immediate implants, fixed
              full-mouth implants and smile correction. Practising since 2017, now at LOLDENT Speciality Clinic, Dubai,
              and Khalil Dental Studio, Mumbai.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-red" href="/contact">Book a Consultation</Link>
              <a className="btn btn-white" href={tel(SITE.phone)}>Call Now</a>
            </div>
          </div>
          <div className="hero-img">
            <img src="/img/dr-ahmed-patel.jpg" alt="Dr. Ahmed Patel, Prosthodontist" width={600} height={760} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className="about-intro">
        <div className="container">
          <div className="media reveal">
            <img src="/img/consult.jpg" alt="Explaining a dental implant to a patient" width={800} height={600} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Meet Your Prosthodontist</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.qualification} · Implants &amp; Full Mouth Rehabilitation</p>
            <p>
              {SITE.name} is a prosthodontist with proven expertise in immediate implant dentistry and full mouth
              rehabilitation: replacing missing teeth and rebuilding worn or damaged ones so patients can chew, speak and
              smile with confidence again.
            </p>
            <p>
              Every case starts with a careful examination, a clear diagnosis and a step-by-step plan, supported by
              digital prosthetic planning and 3D printing. Dr. Patel also performs surgery and provides treatment for
              patients with oral disabilities and disorders.
            </p>
            <Link className="btn btn-red" href="/about">Know More</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="cards-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Treatments</span>
            <h2 className="section-title">Restoring Teeth, Bite &amp; Smile</h2>
          </div>
          <CardGrid items={SITE.services} limit={8} />
        </div>
      </section>
    </>
  );
}
