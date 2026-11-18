// Static (server-rendered) sections of the one-page site.
import {
  clinics,
  copy,
  credentials,
  navLinks,
  services,
  site,
} from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src={site.heroImage} alt="" fetchPriority="high" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow" style={{ color: "#fde68a" }}>
            {copy.heroEyebrow}
          </span>
          <h1>{copy.heroTitle}</h1>
          <p>{copy.heroText}</p>
          <p className="hero-extra">{copy.heroExtra}</p>
          <div className="hero-badges">
            {copy.heroBadges.map((b) => (
              <span key={b}>{b}</span>
            ))}
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
            <strong>{site.experienceYears}</strong>
            {copy.aboutBadge}
          </div>
        </div>
        <div className="about-text">
          <span className="eyebrow">About the Doctor</span>
          <h2>
            {site.name} – <span className="accent">{copy.aboutTitle}</span>
          </h2>
          {copy.aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
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
          <p>{copy.footerText}</p>
          <p style={{ fontSize: "0.85em", opacity: 0.8 }}>{site.registration}</p>
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
