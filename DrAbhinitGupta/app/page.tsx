import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import {
  about,
  contact,
  expertise,
  navLinks,
  clinics,
  gallery,
} from "@/data/site";

function SectionHeading({ eyebrow, title, text, light }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "is-light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* About */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-media">
              <div className="about-photo">
                <Image src="/images/abhinit-portrait.jpg" alt={contact.doctorName} fill sizes="(max-width: 900px) 90vw, 460px" />
              </div>
              <div className="about-experience">
                <strong>3×</strong>
                <span>Gold Medalist</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="About" title="AIIMS-trained heart specialist" />
              <p className="lead">{about.intro}</p>
              <p>{about.body}</p>
              <p>{about.philosophy}</p>
              <ul className="check-list stacked">
                {about.career.map((c) => (
                  <li key={c}>
                    <Icon name="check" size={18} /> {c}
                  </li>
                ))}
              </ul>
              <div className="pillars">
                {about.pillars.map((p) => (
                  <div key={p.title} className="pillar">
                    <h4>{p.title}</h4>
                    <ul>
                      {p.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="Services"
              title="Complete interventional heart care"
              text="From diagnosis to angioplasty, devices and rhythm treatment — under one specialist."
            />
            <div className="services-grid">
              {expertise.map((s) => (
                <article key={s.title} className="service-card">
                  <span className="icon-circle">
                    <Icon name={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section">
          <div className="container">
            <SectionHeading eyebrow="Gallery" title="In the clinic and the news" />
            <div className="photo-grid">
              {gallery.map((g) => (
                <figure key={g.src} className="photo-item">
                  <div className="photo-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.src} alt={g.alt} loading="lazy" style={{ objectPosition: g.position }} />
                  </div>
                  <figcaption>{g.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-dark">
          <div className="container contact-grid">
            <div>
              <SectionHeading
                light
                eyebrow="Appointments"
                title="Get in touch"
                text="Call to book an OPD appointment, or send a request and it will open in WhatsApp."
              />
              <ul className="contact-list">
                {contact.email && (
                  <li>
                    <span className="icon-circle">
                      <Icon name="mail" />
                    </span>
                    <div>
                      <small>Email</small>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </div>
                  </li>
                )}
                <li>
                  <span className="icon-circle">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <small>Phone</small>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </div>
                </li>
                <li>
                  <span className="icon-circle">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <small>Hospital</small>
                    <span>{contact.address}</span>
                  </div>
                </li>
                {clinics.map((c) => (
                  <li key={c.name}>
                    <span className="icon-circle">
                      <Icon name="clock" />
                    </span>
                    <div>
                      <small>OPD timings · {c.name}</small>
                      {c.hours.map((h) => (
                        <span key={h} style={{ display: "block" }}>{h}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="disclaimer">
                This website is not for clinical consultation. In an emergency, go to the nearest hospital emergency
                department or call 112.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand brand-footer">
              <span className="brand-logo">
                <Image src={contact.photo} alt="" width={52} height={52} />
              </span>
              <span className="brand-text">
                <strong>{contact.doctorName}</strong>
                <small>{contact.title}</small>
              </span>
            </div>
            <p>
              {contact.role}, {contact.hospital}. MBBS, MD, DM Cardiology (AIIMS) — Gold Medalist.
            </p>
            <div className="footer-social">
              <a href={contact.phoneHref} aria-label="Call">
                <Icon name="phone" size={18} />
              </a>
              <a href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Regency profile">
                <Icon name="external" size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {expertise.map((s) => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Find Dr. Gupta On</h4>
            <ul>
              {contact.profiles.map((p) => (
                <li key={p.label}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} {contact.doctorName}. Educational content only, not a substitute for individual
            medical advice.
          </div>
        </div>
        <div className="powered-by">
          <a href="https://doctorrating.in/" target="_blank" rel="noopener">
            Powered by <strong>DoctorRating</strong>
          </a>
        </div>
      </footer>
    </>
  );
}
