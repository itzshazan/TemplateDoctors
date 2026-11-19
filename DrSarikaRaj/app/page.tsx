import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Avatar, Logo } from "@/components/Art";
import { site, images, navLinks, careFocus, childServices, doctors, gallery } from "@/data/site";

const founder = doctors[0];

function Heading({
  eyebrow,
  title,
  text,
  center,
  light,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`heading ${center ? "heading-center" : ""} ${light ? "heading-light" : ""}`}>
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
        <HeroSlider />

        {/* About */}
        <section id="about" className="section">
          <div className="container two-col">
            <div className="about-image">
              <img src={images.about} alt="Child check-up" />
            </div>
            <div>
              <Heading eyebrow="About" title="Complete Care for Growing Children" />
              <p>
                {site.name} is a paediatrician at JMD Galleria, Sohna Road, Sector 48, Gurugram. The clinic looks after
                children from birth to 18 years: preventing illness with timely vaccinations, treating fevers, coughs,
                colds and stomach upsets, and keeping a close eye on nutrition, growth and development.
              </p>
              <ul className="icon-list">
                {careFocus.map((item) => (
                  <li key={item}>
                    <span className="icon-list-dot">
                      <Icon name="check" size={13} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="founder-card">
              <div className="founder-text">
                <h3>
                  {founder.name} – Paediatrician in Sector 48, Gurugram
                </h3>
                <p>
                  {founder.name}
                  {founder.degree ? ` (${founder.degree})` : ""} is a paediatrician caring for newborns, children and
                  teenagers at JMD Galleria, Sohna Road. Parents rate the clinic {site.rating}★ on Google for its calm,
                  child-friendly approach and clear advice.
                </p>
                <a href="#contact" className="btn btn-dark">
                  Book a Visit
                </a>
              </div>
              <div className="founder-avatar">
                <Avatar name={founder.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container two-col">
            <div className="child-image">
              <img src={images.childCare} alt="Play area at the clinic" loading="lazy" />
            </div>
            <div>
              <Heading
                eyebrow="Services"
                title="Quality Child Care You Can Trust"
                text="Every child is unique. Care is tailored to each child's age, growth and comfort, from newborn check-ups to the teenage years."
              />
              <div className="service-list">
                {childServices.map((s) => (
                  <div key={s.title} className="service-item">
                    <Icon name="check" size={16} />
                    <div>
                      <strong>{s.title}</strong>
                      <span>{s.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section">
          <div className="container">
            <Heading eyebrow="Gallery" title="Inside the Clinic" center />
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
        <section id="contact" className="section section-blue">
          <div className="container">
            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-icon">
                  <Icon name="pin" size={24} />
                </span>
                <h4>Clinic Address</h4>
                <p>{site.address}</p>
              </div>
              <div className="contact-card">
                <span className="contact-icon">
                  <Icon name="phone" size={24} />
                </span>
                <h4>Phone Number</h4>
                <p>
                  <a href={site.phoneHref}>{site.phone}</a>
                </p>
              </div>
              <div className="contact-card">
                <span className="contact-icon">
                  <Icon name="star" size={24} />
                </span>
                <h4>Directions</h4>
                <p>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                </p>
              </div>
              <div className="contact-card">
                <span className="contact-icon">
                  <Icon name="clock" size={24} />
                </span>
                <h4>OPD Timing</h4>
                <p>{site.hours.days}</p>
              </div>
            </div>

            <div className="two-col contact-row">
              <div>
                <Heading
                  eyebrow="Contact Us"
                  title={`Reach Out to ${site.name}`}
                  text="Whether it's your baby's health, vaccinations, growth or a seasonal illness, call or send a request on WhatsApp and the clinic will get back to you."
                />
                <a href={site.phoneHref} className="emergency emergency-light">
                  <span className="emergency-icon">
                    <Icon name="phone" size={22} />
                  </span>
                  <span>
                    <small>Call for appointments</small>
                    <strong>{site.phone}</strong>
                  </span>
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <Logo size={46} />
              <strong>{site.name}</strong>
            </div>
            <ul className="footer-contact">
              <li>
                <Icon name="phone" size={15} /> <a href={site.phoneHref}>{site.phone}</a>
              </li>

              <li>
                <Icon name="pin" size={15} /> {site.address}
              </li>
            </ul>
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
              {childServices.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Work Hours</h4>
            <ul>
              <li>
                <Icon name="clock" size={15} /> {site.hours.days}
              </li>
            </ul>
            <a href={site.phoneHref} className="btn btn-primary btn-sm">
              <Icon name="phone" size={15} /> Call Us Now
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} {site.name}. All Rights Reserved. Information on this site is for awareness only and is not a substitute for a consultation.
          </div>
        </div>
        <div className="powered-by">
          <a href="https://doctorrating.in/" target="_blank" rel="noopener">
            Powered by <strong>DoctorRating</strong>
          </a>
        </div>
      </footer>

      <a href={site.phoneHref} className="float-call" aria-label="Call the clinic">
        <Icon name="phone" size={24} />
      </a>
    </>
  );
}
