// Static (server-rendered) sections of the one-page site.
import { clinics, credentials, navLinks, services, site } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src={site.heroImage} alt="" fetchPriority="high" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow" style={{ color: "#f1d9b0" }}>
            Hair &amp; Skin Clinic · Sector 46, {site.city}
          </span>
          <h1>
            Dermatologist &amp; Cosmetologist in {site.city} – {site.name}
          </h1>
          <p>
            Expert care for your skin, hair and nails, from acne, pigmentation and hair fall to eczema, infections
            and cosmetic skin concerns. Every treatment starts with a careful diagnosis.
          </p>
          <p className="hero-extra">
            With {site.experienceYears} years of experience, including {site.specialistYears} years as a specialist,{" "}
            {site.shortName} offers honest, evidence-based dermatology for the whole family.
          </p>
          <div className="hero-badges">
            <span>{site.experienceYears}+ Years Experience</span>
            <span>{site.specialistYears} Years as Specialist</span>
            <span>M.B.B.S. – Kasturba Medical College</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn light">
              Book an Appointment
            </a>
            <a href={site.phoneHref} className="btn teal">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-media">
          <img src={site.doctorImage} alt={`${site.name}, ${site.tagline}`} loading="lazy" />
          <div className="about-badge">
            <strong>{site.experienceYears}+</strong>
            Years of care
          </div>
        </div>
        <div className="about-text">
          <span className="eyebrow">About the Doctor</span>
          <h2>
            {site.name} – <span className="accent">Skin &amp; Hair Specialist in {site.city}</span>
          </h2>
          <p>
            {site.name} is a {site.tagline} with {site.experienceYears} years of overall experience, including{" "}
            {site.specialistYears} years as a specialist. He earned his M.B.B.S. from Kasturba Medical College, and his
            career includes regional hospitals across Delhi NCR.
          </p>
          <p>
            Today he practises at his own clinic, <strong>{site.brand}</strong>, in Sector 46, {site.city}. His practice
            covers outpatient dermatology, diagnostic evaluations, consultations, preventive skin check-ups and routine
            dermatological care, alongside cosmetology. He consults in English and Hindi.
          </p>
          <ul className="credentials">
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">
            Talk to us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <span className="footer-logo">
            <img src={site.logo} alt={site.brand} />
          </span>
          <p>
            {site.tagline} in {site.city}. Diagnosis-led care for skin, hair and nails, with {site.experienceYears}{" "}
            years of experience.
          </p>
          <div className="socials">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram {site.social.instagramHandle}
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Treatments</h4>
          <ul>
            {services.slice(0, 8).map((s) => (
              <li key={s.id}>
                <a href="#treatments">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {clinics.map((c) => (
              <li key={c.name}>
                <strong style={{ color: "#fff" }}>{c.name}</strong>
                <br />
                {c.address}
                {c.hours.map((h) => (
                  <span key={h}>
                    <br />
                    {h}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
        <br />
        The information on this website is for general awareness only and is not a substitute for a consultation with
        a qualified doctor.
      </div>
      <div className="powered-by">
        <a href="https://doctorrating.in/" target="_blank" rel="noopener">
          Powered by <strong>DoctorRating</strong>
        </a>
      </div>
    </footer>
  );
}
