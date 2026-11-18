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
            <span className="eyebrow">Orthopaedic Care in Ballabhgarh</span>
            <h1>Strong Bones, Healthy Joints, Pain-Free Movement</h1>
            <p>
              {SITE.name} treats fractures, joint pain, arthritis, back and neck pain and sports injuries at {SITE.clinic},
              Jain Colony, Ballabhgarh — rated {SITE.rating.score}★ by {SITE.rating.count}+ patients on Google.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-red" href="/contact">Book Appointment</Link>
              <a className="btn btn-white" href={tel(SITE.phone)}>Call Now</a>
            </div>
          </div>
          <div className="hero-img">
            <img src="/img/hero.jpg" alt="Orthopaedic knee examination" width={600} height={760} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className="about-intro">
        <div className="container">
          <div className="media reveal">
            <img src="/img/consult.jpg" alt={`Consultation at ${SITE.clinic}`} width={800} height={600} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Meet Your Doctor</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.title}</p>
            <p>{SITE.name} is an orthopaedic doctor at {SITE.clinic}, near Ahir Haveli, Jain Colony, Ballabhgarh. He treats bone, joint, spine and muscle problems for patients of all ages — from children with fractures to older adults with arthritis.</p>
            <p>Patients describe him as polite, patient and clear: he listens carefully, explains the problem in simple words and recommends only what you actually need. That approach has earned the clinic a {SITE.rating.score}★ rating from {SITE.rating.count}+ Google reviews.</p>
            <Link className="btn btn-red" href="/about">Know More</Link>
          </div>
        </div>
      </section>

      {/* ===== SPECIALITIES ===== */}
      <section className="cards-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Specialities</span>
            <h2 className="section-title">Complete Bone, Joint &amp; Spine Care</h2>
          </div>
          <CardGrid items={SITE.services} limit={8} />
        </div>
      </section>

    </>
  );
}
