import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Art";
import {
  site,
  doctor,
  images,
  navLinks,
  flipCards,
  careFocus,
  generalServices,
  procedures,
  tests,
} from "@/data/site";

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

// Structured data so search engines can show the clinic's address, phone and hours.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pocket A, A-16, Raju Park, Near Agarwal Sweets, Devli, Khanpur",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110062",
    addressCountry: "IN",
  },
  openingHoursSpecification: ["10:00", "17:00"].map((opens, i) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens,
    closes: i === 0 ? "13:00" : "20:00",
  })),
  employee: {
    "@type": "Physician",
    name: doctor.name,
    description: doctor.title,
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        <HeroSlider />

        {/* About */}
        <section id="about" className="section">
          <div className="container two-col">
            <div className="about-image">
              <img src={images.about} alt="A bright, welcoming clinic reception and waiting area" />
            </div>
            <div>
              <Heading eyebrow={`About ${site.name}`} title="Complete Family Healthcare, Close to Home" />
              <p>
                {site.name} in {site.area} is a neighbourhood clinic for the whole family, led by {doctor.name}. From
                viral fevers, coughs and allergies to skin infections, child vaccinations, minor procedures and routine
                blood tests, most everyday health needs can be taken care of in one visit, with clear advice on what to
                do next.
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
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
            </div>
          </div>

        </section>

        {/* General consultations */}
        <section id="services" className="section">
          <div className="container">
            <Heading
              eyebrow="Services"
              title="What We Treat"
              text="Consultations for adults and children, for the illnesses families face most often."
              center
            />
            <div className="women-grid">
              {generalServices.map((s) => (
                <div key={s.title} className="women-card">
                  <span className="women-icon">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.note}</p>
                </div>
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
                <a href={site.mapsHref} className="card-link" target="_blank" rel="noopener noreferrer">
                  Get Directions <Icon name="arrow" size={14} />
                </a>
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
                  <Icon name="mail" size={24} />
                </span>
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
              <div className="contact-card">
                <span className="contact-icon">
                  <Icon name="clock" size={24} />
                </span>
                <h4>OPD Timing</h4>
                <p>
                  {site.hours.days}
                  <br />
                  Morning: {site.hours.morning}
                  <br />
                  Evening: {site.hours.evening}
                  <br />
                  {site.hours.closed}: Closed
                </p>
              </div>
            </div>

            <div className="two-col contact-row">
              <div>
                <Heading
                  eyebrow="Contact Us"
                  title={`Book a Visit with ${doctor.name}`}
                  text="Call during clinic hours or send a request with the form. Tell us whether you prefer the morning or evening session and we'll confirm your appointment."
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
              <span>
                <strong>{site.name}</strong>
                <small>
                  {doctor.name} · {doctor.title}
                </small>
              </span>
            </div>
            <ul className="footer-contact">
              <li>
                <Icon name="phone" size={15} /> <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={15} /> <a href={`mailto:${site.email}`}>{site.email}</a>
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
              {flipCards.map((c) => (
                <li key={c.title}>
                  <a href="#services">{c.title}</a>
                </li>
              ))}
              <li>
                <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Clinic Hours</h4>
            <ul>
              <li>
                <Icon name="clock" size={15} /> {site.hours.days}
              </li>
              <li>Morning: {site.hours.morning}</li>
              <li>Evening: {site.hours.evening}</li>
              <li>{site.hours.closed}: Closed</li>
            </ul>
            <a href={site.phoneHref} className="btn btn-primary btn-sm">
              <Icon name="phone" size={15} /> Call Us Now
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} {site.name}, {site.area}. All Rights Reserved.
          </div>
        </div>
      </footer>

      <a href={site.phoneHref} className="float-call" aria-label={`Call ${site.name}`}>
        <Icon name="phone" size={24} />
      </a>
    </>
  );
}
