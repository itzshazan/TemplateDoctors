// Static (server-rendered) sections of the one-page site.
import {
  areasOfInterest,
  blogs,
  clinics,
  credentials,
  experience,
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
          <span className="eyebrow" style={{ color: "#ffd2a8" }}>
            {site.hospital} · Sector 16-17, {site.city}
          </span>
          <h1>
            General Physician &amp; Diabetologist in {site.city} – {site.name}
          </h1>
          <p>
            Expert care for diabetes, blood pressure, thyroid, fever and infections, and all adult medical problems.
            Every treatment starts with a careful diagnosis and a plan you understand.
          </p>
          <p className="hero-extra">
            {site.degrees} from {site.institute}, with {site.experienceYears} years of experience including Fortis
            Hospital, Mohali.
          </p>
          <div className="hero-badges">
            <span>{site.experienceYears}+ Years Experience</span>
            <span>MD Medicine – {site.institute}</span>
            <span>{site.role}</span>
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
            {site.name} – <span className="accent">Physician &amp; Diabetologist in {site.city}</span>
          </h2>
          <p>
            {site.name} is {site.role} at {site.hospital}, Sector 16-17, {site.city}. She completed her MBBS and MD
            in Medicine at {site.institute} and has {site.experienceYears} years of experience in adult medicine and
            diabetes care.
          </p>
          <p>
            Before joining {site.hospital}, she worked as a physician at Fortis Hospital, Mohali, and as a consultant
            physician at Adhar Hospital and Sapra Multispeciality Hospital in {site.city}. She is known for a calm,
            thorough approach: listening carefully, explaining clearly, and treating the cause rather than only the
            symptoms.
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
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Special Interests</span>
          <h2>
            Areas of <span>Interest</span>
          </h2>
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
            <h2>Worried about your sugar or BP readings?</h2>
            <p>
              Consult {site.name} for a clear diagnosis and a practical plan to bring diabetes, blood pressure and
              thyroid under control.
            </p>
          </div>
          <a href="#contact" className="btn light">
            Book an Appointment
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
          <span className="eyebrow">How {site.shortName} Practises</span>
          <h2>
            Care You Can <span>Trust</span>
          </h2>
          <p>Every recommendation follows a careful assessment, with clear guidance at each step.</p>
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
            Why Choose {site.name} – <span className="accent">Trusted Physician in {site.city}</span>
          </h2>
          <p>
            Hospital-based general medicine and diabetes care, delivered with clear communication, ethical treatment
            and long-term follow-up.
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
            <strong>Career journey:</strong>{" "}
            {experience.map((e, i) => (
              <span key={e.place}>
                {i > 0 && " · "}
                {e.current ? "Now " : "Ex. "}
                {e.role}, {e.place}
              </span>
            ))}
            .{" "}
            <a href={site.phoneHref} className="accent">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className="why-media">
          <img src={site.commitmentImage} alt={`The ${site.hospital} team, ${site.city}`} loading="lazy" />
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
            What to Expect at <span>the OPD</span>
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
          <span className="eyebrow">Testimonials</span>
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
    <section id="health-tips" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Health Tips</span>
          <h2>
            Know Your <span>Health</span>
          </h2>
          <p>Short, practical guidance on common conditions. Always consult a doctor for advice specific to you.</p>
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
            {site.tagline} in {site.city}. {site.degrees} ({site.institute}), {site.experienceYears} years of
            experience in adult medicine and diabetes care.
          </p>
          <div className="socials">
            <a href={site.hospitalUrl} target="_blank" rel="noopener noreferrer">
              {site.hospital}
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
          <h4>Services</h4>
          <ul>
            {services.slice(0, 8).map((s) => (
              <li key={s.id}>
                <a href="#services">{s.title}</a>
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
            <li>
              Hospital emergency (24×7): <a href={site.hospitalPhoneHref}>{site.hospitalPhone}</a>
            </li>
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
