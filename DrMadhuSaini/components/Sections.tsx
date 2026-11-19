// Static (server-rendered) sections of the one-page site.
import { clinics, credentials, experience, navLinks, services, site } from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src={site.heroImage} alt="" fetchPriority="high" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow" style={{ color: "#fbcfe8" }}>
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
      <div className="powered-by">
        <a href="https://doctorrating.in/" target="_blank" rel="noopener">
          Powered by <strong>DoctorRating</strong>
        </a>
      </div>
    </footer>
  );
}
