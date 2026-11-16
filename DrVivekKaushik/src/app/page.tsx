import Link from "next/link";
import Icon from "@/components/Icon";
import CardGrid from "@/components/CardGrid";
import CheckList from "@/components/CheckList";
import Tabs from "@/components/Tabs";
import Gallery from "@/components/Gallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoEmbed from "@/components/VideoEmbed";
import { SITE, tel } from "@/config/site";
import { galleryImages, homeAchievements, homeVideo, testimonials } from "@/config/content";

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

      {/* ===== CONTACT STRIP (overlaps hero) ===== */}
      <section className="contact-strip">
        <div className="container">
          <div className="box">
            <h2>Open 7 Days For Your Bone &amp; Joint Care</h2>
            <a className="phone" href={tel(SITE.phone)}><Icon name="phone" />{SITE.phone}</a>
            <p>{SITE.hours}. Call ahead for appointments, or walk in during OPD hours.</p>
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

      {/* ===== FEATURE BAND ===== */}
      <section className="feature-band">
        <div className="container">
          <div className="media reveal">
            <img src="/img/feature.jpg" alt="Doctor reviewing a knee X-ray" width={800} height={640} />
          </div>
          <div className="body reveal">
            <h2>Getting You Back On Your Feet</h2>
            <CheckList
              items={[
                "Careful examination and X-ray review",
                "Conservative treatment first, surgery only if needed",
                "Clear explanations in Hindi or English",
                "Open all 7 days, including Sunday mornings",
              ]}
            />
            <p>
              Whether it is a fracture, a painful knee or a back that won&apos;t settle, the aim is the same: an accurate
              diagnosis, a clear plan and steady follow-up until you are moving comfortably again.
            </p>
            <Link className="btn btn-red" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Why Choose Dr. Vivek Kaushik</span>
            <h2>Honest, Patient-First Orthopaedic Care</h2>
            <p>Patients choose {SITE.clinic} for a doctor who listens, explains and treats with care — close to home in Ballabhgarh, with long OPD hours all week.</p>
          </div>
          <div className="why-items">
            <div className="why-item reveal">
              <img src="/img/why-1.svg" alt="" width={64} height={64} />
              <div>
                <h3>Dedicated &amp; Caring</h3>
                <p>Reviewers describe him as soft-spoken, humble and caring, with polite, helpful staff.</p>
              </div>
            </div>
            <div className="why-item reveal">
              <img src="/img/why-2.svg" alt="" width={64} height={64} />
              <div>
                <h3>Personalised Plans</h3>
                <p>Treatment is matched to your age, work and activity — and he recommends only what you actually need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACADEMIC ACHIEVEMENTS ===== */}
      <section className="tabs-section">
        <div className="container">
          <h2 className="tabs-title">Expertise &amp; Practice</h2>
          <Tabs tabs={homeAchievements} />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery-section">
        <div className="container">
          <h2>Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Testimonials</span>
            <h2>What Our Patients Say</h2>
            <p>{SITE.clinic} is rated {SITE.rating.score} / 5 from {SITE.rating.count}+ reviews on Google. A few of the things patients say:</p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ===== CLINIC CARD ===== */}
      <section className="video-section">
        <div className="container">
          {homeVideo ? <VideoEmbed src={homeVideo} /> : (
            <div className="video-frame">
              <iframe src={SITE.mapEmbed} title="Clinic location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          )}
          <div className="hospital-card">
            <img src="/img/clinic-card.jpg" alt={SITE.clinic} width={600} height={420} />
            <p>Consulting at <strong>{SITE.clinic}</strong>, Jain Colony, Ballabhgarh · <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
