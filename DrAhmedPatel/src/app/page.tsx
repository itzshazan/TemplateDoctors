import CardGrid from "@/components/CardGrid";
import CheckList from "@/components/CheckList";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import { SITE, tel } from "@/config/site";
import { galleryImages, highlights } from "@/config/content";

export default function HomePage() {
  return (
    <>
      {/* ===== HOME ===== */}
      <section className="hero" id="home">
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
              <a className="btn btn-red" href="#contact">Book a Consultation</a>
              <a className="btn btn-white" href={tel(SITE.phone)}>Call Now</a>
            </div>
          </div>
          <div className="hero-img">
            <img src="/img/dr-ahmed-patel.jpg" alt="Dr. Ahmed Patel, Prosthodontist" width={600} height={760} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about-page" id="about">
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
              smile with confidence again. Since July 2026 Dr. Patel has been a full-time Specialist Prosthodontist at
              LOLDENT Speciality Clinic in Jumeirah Lake Towers, Dubai.
            </p>
            <p>
              Since 2017 Dr. Patel has run Khalil Dental Studio in Mumbai, using advanced software for prosthetic
              planning and 3D printing, and has visited clinics as a consultant for implants and full mouth
              rehabilitation: fixed full-mouth implants, cast partial dentures and smile correction, with clinical
              examination, diagnosis and treatment planning for each patient.
            </p>
            <p>
              Patients can expect clear communication, motivation through long treatments and patient-centred care,
              including surgery and treatment for people with oral disabilities and disorders.
            </p>
            <CheckList dark items={highlights} />
            <a className="btn btn-red" href="#contact">Book a Consultation</a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="cards-section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Services</span>
            <h2 className="section-title">Implants, Rehabilitation &amp; Smile Care</h2>
          </div>
          <CardGrid items={SITE.services} />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Gallery</span>
            <h2 className="section-title">Implant &amp; Prosthodontic Care</h2>
          </div>
          <Gallery images={galleryImages} className="cols-3" />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section contact-wrap" id="contact">
        <div className="container">
          <div className="contact-info reveal">
            <span className="eyebrow">Get in Touch</span>
            <h2>Book a Consultation</h2>
            <p>Call or send a request to book a consultation for implants, full mouth rehabilitation or smile correction.</p>
            <ul className="info-list">
              <li>
                <span className="badge"><Icon name="phone" /></span>
                <div><strong>Phone</strong><a href={tel(SITE.phone)}>{SITE.phone}</a><span style={{ display: "block" }}>{SITE.phoneNote}</span></div>
              </li>
              {SITE.email && (
                <li>
                  <span className="badge"><Icon name="mail" /></span>
                  <div><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                </li>
              )}
              {SITE.locations.map((l) => (
                <li key={l.name}>
                  <span className="badge"><Icon name="pin" /></span>
                  <div>
                    <strong>{l.name}</strong>
                    <span style={{ display: "block" }}>{l.address}</span>
                    <span style={{ display: "block" }}>{l.role} · {l.since}</span>
                  </div>
                </li>
              ))}
              <li>
                <span className="badge"><Icon name="clock" /></span>
                <div>
                  <strong>Consultation Timings</strong>
                  {SITE.hoursList.length > 0
                    ? SITE.hoursList.map((h) => <span key={h} style={{ display: "block" }}>{h}</span>)
                    : <span>Please call to confirm the days and times.</span>}
                </div>
              </li>
              {SITE.socials.linkedin && (
                <li>
                  <span className="badge"><Icon name="linkedin" /></span>
                  <div><strong>LinkedIn</strong><a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">View profile</a></div>
                </li>
              )}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
