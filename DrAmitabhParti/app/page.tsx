import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import {
  about,
  clinic,
  contact,
  expertise,
  navLinks,
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
                <Image src="/images/parti-portrait.png" alt={contact.doctorName} fill sizes="(max-width: 900px) 90vw, 460px" />
              </div>
              <div className="about-experience">
                <strong>38</strong>
                <span>Years of practice</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="About" title="A life in internal medicine" />
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
              title="The breadth of adult medicine"
              text="Everyday illness and complex, multi-system problems, assessed with the same care."
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

        {/* Contact */}
        <section id="contact" className="section section-dark">
          <div className="container contact-grid">
            <div>
              <SectionHeading
                light
                eyebrow="Professional Correspondence"
                title="Get in touch"
                text="Media, teaching, speaking and corporate health enquiries are welcome by email."
              />
              <ul className="contact-list">
                <li>
                  <span className="icon-circle">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <small>Email</small>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </li>
                <li>
                  <span className="icon-circle">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <small>Fortis switchboard</small>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </div>
                </li>
                <li>
                  <span className="icon-circle">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <small>In clinic</small>
                    <span>{contact.address}</span>
                  </div>
                </li>
                <li>
                  <span className="icon-circle">
                    <Icon name="clock" />
                  </span>
                  <div>
                    <small>Clinic hours</small>
                    <span>{clinic.hours}</span>
                  </div>
                </li>
              </ul>
              <p className="disclaimer">
                This website is not for clinical consultation. Patient care, appointments and medical records are handled
                through Fortis Memorial&apos;s official channels. In an emergency, go to the nearest hospital or call
                emergency services.
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
              {contact.role}, {contact.hospital}, Gurugram. MBBS (Gold Medallist), MD Internal Medicine.
            </p>
            <div className="footer-social">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Icon name="mail" size={18} />
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
            <h4>Find Dr. Parti On</h4>
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
      </footer>
    </>
  );
}
