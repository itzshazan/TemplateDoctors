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
  whyChoose,
} from "@/data/content";

export function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src={site.heroImage} alt="" fetchPriority="high" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow" style={{ color: "#bff0eb" }}>
            Fertility Centre in Gurugram
          </span>
          <h1>
            IVF Specialist in {site.city} – {site.name}
          </h1>
          <p>
            Expert, compassionate fertility care built around you. From IVF and IUI to fertility preservation and
            complete infertility evaluation, every plan is personalised and grounded in evidence.
          </p>
          <p>
            Transparent guidance, ethical practice and steady support help couples understand their options and move
            forward with confidence.
          </p>
          <div className="hero-badges">
            <span>{site.experienceYears}+ Years Experience</span>
            <span>Gold Medallist</span>
            <span>Fellowship in Reproductive Medicine</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn light">
              Book Your Consultation
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
            {site.name} – <span className="accent">IVF Doctor in {site.city}</span>
          </h2>
          <p>
            {site.name} leads {site.brand}, a practice devoted to ethical, compassionate and evidence-based care in
            obstetrics, gynecology and reproductive medicine. With more than {site.experienceYears} years of
            experience, she offers IVF, IUI, ICSI and complete infertility treatment to couples across {site.city}.
          </p>
          <p>
            Her approach pairs modern reproductive technology with honest communication and emotional support, so
            every woman and couple feels informed at each step towards parenthood.
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
          <span className="eyebrow">Specialities</span>
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
            <h2>Need to discuss a gynecological concern?</h2>
            <p>
              Connect with {site.name} for an accurate diagnosis and trusted, personalised solutions for
              women&apos;s health.
            </p>
          </div>
          <a href="#contact" className="btn light">
            Take Gynae Appointment
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
          <span className="eyebrow">IVF Treatments at Our Fertility Centre</span>
          <h2>
            Care You Can <span>Trust</span>
          </h2>
          <p>
            Every recommendation follows a detailed fertility assessment, with clear guidance throughout the process.
          </p>
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
          <span className="eyebrow">Why Choose Us</span>
          <h2>
            Why Choose {site.name} – <span className="accent">Trusted Fertility Specialist</span>
          </h2>
          <p>
            Personalised fertility care for IVF, IUI, ICSI and assisted reproduction, delivered with clear
            communication, ethical treatment and compassionate support.
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
            <strong>Expert gynecological surgical care:</strong> advanced surgical management of gynecological
            cancers, fibroids and uterine conditions, plus specialised high-risk pregnancy care.{" "}
            <a href={site.phoneHref} className="accent">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className="why-media">
          <img src={site.commitmentImage} alt="Commitment to patient care" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>
            What Our <span>Patients Say</span>
          </h2>
        </div>
        <div className="reviews-summary">
          <span className="stars" aria-label={`${site.rating.score} out of 5 stars`}>
            ★★★★★
          </span>
          <span>
            Rated {site.rating.score}/5 by {site.rating.count}+ patients
          </span>
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
    <section id="blogs" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Blogs</span>
          <h2>
            Latest <span>Articles</span>
          </h2>
        </div>
        <div className="blog-grid">
          {blogs.map((b) => (
            <article className="blog-card" key={b.title}>
              <img src={b.image} alt="" loading="lazy" />
              <div className="blog-body">
                <time>{b.date}</time>
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
            Fertility expertise in {site.city}: IVF, IUI, fertility preservation and complete infertility evaluation
            with compassionate, personalised care.
          </p>
          <div className="socials">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h4>Useful Links</h4>
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
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {clinics.map((c) => (
              <li key={c.name}>
                <strong style={{ color: "#fff" }}>{c.name}</strong>
                <br />
                {c.address}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
        <br />
        Demo website: all names, contact details, images and testimonials are fictional placeholders.
      </div>
    </footer>
  );
}
