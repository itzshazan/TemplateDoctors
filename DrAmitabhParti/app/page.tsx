import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import {
  about,
  clinic,
  contact,
  corporatePartners,
  expertise,
  keyFacts,
  navLinks,
  presentation,
  pressClippings,
  pressOutlets,
  publications,
  speaking,
  writing,
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

        {/* Key facts */}
        <section className="features">
          <div className="container features-grid">
            {keyFacts.map((f) => (
              <div key={f.title} className="feature-card">
                <span className="icon-circle">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

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

        {/* Stats */}
        <section className="stats-band">
          <div className="container">
            <Stats />
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="Areas of Clinical Expertise"
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

        {/* Publications & research */}
        <section id="research" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Publications & Research"
              title="Contributions to the literature"
              text="Clinical trials, original research and case reports across three decades."
            />
            <div className="pub-grid">
              {publications.map((p) => (
                <article key={p.title} className="pub-card">
                  <div className="pub-meta">
                    <Icon name="book" size={18} />
                    <span>{p.journal}</span>
                    <span className="pub-year">{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.note}</p>
                </article>
              ))}
            </div>
            <p className="pub-extra">
              <Icon name="mic" size={18} /> Presentation: <strong>{presentation.title}</strong>, {presentation.venue}
            </p>
          </div>
        </section>

        {/* Media */}
        <section id="media" className="section section-dark">
          <div className="container">
            <SectionHeading
              light
              eyebrow="In the Press"
              title="A trusted voice on public health"
              text="Regularly quoted in national media on dengue, chikungunya, stress and patient care."
            />
            <ul className="outlets">
              {pressOutlets.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <div className="benefits-list press-list">
              {pressClippings.map((c) => (
                <div key={c.headline} className="benefit">
                  <span className="icon-circle">
                    <Icon name="news" />
                  </span>
                  <div>
                    <small className="press-outlet">{c.outlet}</small>
                    <h3>{c.headline}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking & corporate health */}
        <section id="speaking" className="section">
          <div className="container speaking-grid">
            <div className="speaking-card">
              <div className="speaking-image">
                <Image src={speaking.image} alt={`${speaking.event} panel discussion`} fill sizes="(max-width: 900px) 90vw, 560px" />
              </div>
              <div className="speaking-thumb">
                <Image src={speaking.gallery} alt={`${speaking.event} speakers`} fill sizes="200px" />
              </div>
              <div className="speaking-body">
                <span className="eyebrow">Speaking & Forums</span>
                <h3>
                  {speaking.event}, {speaking.place}
                </h3>
                <p className="speaking-date">{speaking.date}</p>
                <p>{speaking.topic}.</p>
                <p className="muted">{speaking.extra}</p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Corporate Health"
                title="Empanelled visiting physician"
                text="Two decades of building health surveillance, emergency triage and annual screening programmes for organisations."
              />
              <ul className="partner-list">
                {corporatePartners.map((p) => (
                  <li key={p}>
                    <Icon name="building" size={20} /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="video-cta">
          <div className="container video-cta-inner">
            <div className="statement">
              <Icon name="quote" size={36} />
              <h2>Evidence guides the treatment. Empathy guides the conversation.</h2>
              <p>Good care needs both: the latest science, and time to understand the person in front of you.</p>
            </div>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-white">
              <Icon name="linkedin" size={18} /> Follow on LinkedIn
            </a>
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="section section-tint">
          <div className="container">
            <SectionHeading
              eyebrow="Writing & Insights"
              title="Essays, guides and published insights"
              text="Plain-language writing on everyday health, metabolic medicine and public health in India."
            />
            <div className="blog-grid">
              {writing.map((post) => (
                <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card">
                  {post.image && (
                    <div className="blog-image">
                      <Image src={post.image} alt="" fill sizes="(max-width: 900px) 90vw, 300px" />
                    </div>
                  )}
                  <div className={`blog-banner ${post.type === "LinkedIn" ? "is-linkedin" : ""}`}>
                    <span>{post.type}</span>
                    <Icon name={post.type === "LinkedIn" ? "linkedin" : "book"} size={22} />
                  </div>
                  <div className="blog-body">
                    <time>{post.date}</time>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <span className="read-more">
                      Read <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="center">
              <a href={contact.linkedinActivity} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                More on LinkedIn <Icon name="external" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container faq-grid">
            <div>
              <SectionHeading
                eyebrow="FAQs"
                title="Frequently asked questions"
                text="For appointments and medical queries, please contact Fortis Memorial directly."
              />
              <a href={contact.phoneHref} className="btn btn-outline">
                <Icon name="phone" size={18} /> {contact.phone}
              </a>
            </div>
            <Faq />
          </div>
        </section>

        {/* Clinic */}
        <section id="clinic" className="section section-tint">
          <div className="container">
            <SectionHeading eyebrow="In Clinic" title="Where to consult Dr. Parti" />
            <article className="location-card location-wide">
              <iframe src={clinic.embed} title={`Map of ${clinic.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="location-body">
                <h3>{clinic.name}</h3>
                <p>
                  <Icon name="pin" size={18} /> {clinic.address}
                </p>
                <p>
                  <Icon name="phone" size={18} />
                  <span>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                    <br />
                    <small>{contact.phoneNote}</small>
                  </span>
                </p>
                <p>
                  <Icon name="clock" size={18} /> {clinic.hours}
                </p>
                <div className="location-actions">
                  <a href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Book at Fortis <Icon name="external" size={16} />
                  </a>
                  <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    Get Directions <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
            </article>
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
            <h4>Expertise</h4>
            <ul>
              {expertise.map((s) => (
                <li key={s.title}>
                  <a href="#expertise">{s.title}</a>
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
