// Static (server-rendered) sections of the one-page site.
import {
  areasOfInterest,
  blogs,
  clinics,
  credentials,
  faqs,
  navLinks,
  qualities,
  services,
  site,
  testimonials,
  visitSteps,
  whyChoose,
} from "@/data/content";

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

export function AreasOfInterest() {
  return (
    <section id="conditions" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Common Concerns</span>
          <h2>
            Conditions <span>We Treat Most</span>
          </h2>
          <p>Some of the skin and hair problems patients most often come to {site.shortName} for.</p>
        </div>
        <div className="areas">
          {areasOfInterest.map((a, i) => (
            <div className="area" key={a}>
              <span className="area-num">{i + 1}</span>
              <h3>{a}</h3>
            </div>
          ))}
        </div>
        <div className="cta-band">
          <div>
            <h2>Worried about a skin or hair problem?</h2>
            <p>
              Meet {site.name} for an accurate diagnosis and a treatment plan that suits your skin. Open Monday to
              Saturday, 10 AM – 7 PM, by appointment.
            </p>
          </div>
          <a href="#contact" className="btn light">
            Book Skin Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export function Qualities() {
  return (
    <section className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Approach</span>
          <h2>
            Skin Care You Can <span>Trust</span>
          </h2>
          <p>Every recommendation follows a proper examination, with clear guidance at each step.</p>
        </div>
        <div className="qualities-grid">
          {qualities.map((q) => (
            <div className="quality" key={q.title}>
              <div className="quality-icon">
                <span aria-hidden>{q.icon}</span>
              </div>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section id="why-us" className="section">
      <div className="container why-grid">
        <div>
          <span className="eyebrow">Why Choose {site.shortName}</span>
          <h2>
            Why Choose {site.name} – <span className="accent">Experienced Dermatologist</span>
          </h2>
          <p>
            Two decades of medical practice, specialist training in skin and hair, and a clinic built around
            unhurried, appointment-based consultations.
          </p>
          <ul className="why-list">
            {whyChoose.map((w) => (
              <li key={w.title}>
                <strong>{w.title}</strong>
                <span>{w.text}</span>
              </li>
            ))}
          </ul>
          <div className="surgical-note">
            <strong>Preventive skin check-ups:</strong> regular examination of moles, spots and skin changes, along
            with routine dermatological care for every member of the family.{" "}
            <a href={site.phoneHref} className="accent">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className="why-media">
          <img src={site.commitmentImage} alt="Dermatology consultation at the clinic" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Your Visit</span>
          <h2>
            What to Expect at <span>the Clinic</span>
          </h2>
          <p>
            {clinics[0].hours[0]} · {clinics[0].hours[1]}
          </p>
        </div>
        <div className="qualities-grid visit-grid">
          {visitSteps.map((s, i) => (
            <div className="quality" key={s.title}>
              <div className="quality-icon">
                <span aria-hidden>{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Renders only when real reviews have been added to `testimonials` in data/content.ts.
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Patient Reviews</span>
          <h2>
            What Our <span>Patients Say</span>
          </h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure className="testimonial" key={t.name}>
              <span className="stars" aria-hidden>
                ★★★★★
              </span>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="reviewer">
                <span className="avatar">{t.name.charAt(0)}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>Patient</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq" key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blogs() {
  return (
    <section id="skin-tips" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skin &amp; Hair Tips</span>
          <h2>
            Advice From <span>{site.shortName}</span>
          </h2>
          <p>
            Short, practical tips for everyday skin and hair care. Follow{" "}
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="accent">
              {site.social.instagramHandle}
            </a>{" "}
            on Instagram for more.
          </p>
        </div>
        <div className="blog-grid">
          {blogs.map((b) => (
            <article className="blog-card" key={b.title}>
              <img src={b.image} alt="" loading="lazy" />
              <div className="blog-body">
                <span className="blog-tag">{b.tag}</span>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
              </div>
            </article>
          ))}
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
    </footer>
  );
}
