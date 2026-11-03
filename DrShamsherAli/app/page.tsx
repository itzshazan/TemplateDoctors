import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { Counter } from "@/components/Counter";
import { BlogGrid } from "@/components/BlogGrid";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { DoctorPhoto, Logo } from "@/components/Art";
import {
  site,
  doctor,
  experienceYears,
  images,
  navLinks,
  flipCards,
  careFocus,
  approach,
  generalServices,
  childServices,
  procedures,
  tests,
  promises,
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

function ServiceList({ items }: { items: { title: string; note: string }[] }) {
  return (
    <div className="service-list">
      {items.map((s) => (
        <div key={s.title} className="service-item">
          <Icon name="check" size={16} />
          <div>
            <strong>{s.title}</strong>
            <span>{s.note}</span>
          </div>
        </div>
      ))}
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
  const facts = [
    { label: "Specialisation", value: doctor.title },
    { label: "In practice since", value: `${site.practisingSince} (${experienceYears}+ years)` },
    { label: "Qualifications", value: doctor.qualifications },
    { label: "Registration", value: doctor.registration },
    { label: "Languages", value: doctor.languages },
    { label: "Clinic", value: `${site.name}, ${site.area}` },
  ].filter((f) => f.value);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        <HeroSlider />

        {/* Four areas of care */}
        <section className="flip-section">
          <div className="container flip-grid">
            {flipCards.map((card) => (
              <a key={card.title} href={card.href} className="flip-card">
                <div className="flip-inner">
                  <div className="flip-front">
                    <span className="flip-icon">
                      <Icon name={card.icon} size={34} />
                    </span>
                    <h3>{card.title}</h3>
                  </div>
                  <div className="flip-back">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <span className="flip-btn">Learn More</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

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

          <div className="container">
            <div className="founder-card">
              <div className="founder-text">
                <h3>
                  {doctor.name} – Family Physician & Child Specialist in {site.area}
                </h3>
                <p>
                  {doctor.name} has been practising medicine since {site.practisingSince}, bringing over{" "}
                  {experienceYears} years of experience in general medicine, family healthcare and child healthcare.
                  He is known for practical, family-oriented care: treating everyday illnesses in adults and children,
                  keeping vaccinations on schedule, handling minor procedures and arranging routine tests, all at{" "}
                  {site.name}.
                </p>
                <a href="#doctor" className="btn btn-dark">
                  Meet the Doctor
                </a>
              </div>
              <div className="founder-avatar">
                <DoctorPhoto name={doctor.name} photo={doctor.photo} />
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section section-blue provide">
          <div className="container two-col">
            <div>
              <Heading
                eyebrow="Our Approach"
                title="Care That Puts Families First"
                text="Good family medicine means knowing your patients, listening carefully and treating the person, not just the symptom."
              />
              <div className="feature-list">
                {approach.map((f, i) => (
                  <div key={f.title} className="feature">
                    <span className={`feature-icon ${i % 2 ? "feature-icon-accent" : ""}`}>
                      <Icon name={i === 0 ? "users" : "stethoscope"} size={22} />
                    </span>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="provide-image">
              <img src={images.approach} alt="A doctor explaining treatment to a patient and family member" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Experience counter */}
        <div className="container counter-wrap">
          <div className="counter-card">
            <span className="counter-icon">
              <Icon name="award" size={56} />
            </span>
            <div>
              <strong>
                <Counter to={experienceYears} suffix="+" />
              </strong>
              <span>Years Of Experience</span>
            </div>
            <div className="counter-divider" />
            <div>
              <strong>
                <Counter to={6} />
              </strong>
              <span>Days A Week</span>
            </div>
            <div className="counter-divider" />
            <div>
              <strong>
                <Counter to={2} />
              </strong>
              <span>OPD Sessions Daily</span>
            </div>
          </div>
        </div>

        {/* Child care */}
        <section id="child-care" className="section">
          <div className="container two-col">
            <div className="child-image">
              <img src={images.childCare} alt="A child at a check-up with a parent" loading="lazy" />
            </div>
            <div>
              <Heading
                eyebrow="Child Care"
                title="Gentle, Experienced Care for Your Child"
                text="Children aren't small adults. Every visit is unhurried and child-friendly, with clear guidance for parents on vaccinations, growth, nutrition and common childhood illnesses."
              />
              <ServiceList items={childServices} />
            </div>
          </div>
        </section>

        {/* Doctor band */}
        <section className="section-blue band">
          <div className="container band-grid">
            <div>
              <h3>Need to see the doctor? Call to book your visit at {site.name}.</h3>
              <a href={site.phoneHref} className="emergency">
                <span className="emergency-icon">
                  <Icon name="phone" size={22} />
                </span>
                <span>
                  <small>Call for Appointment</small>
                  <strong>{site.phone}</strong>
                </span>
              </a>
            </div>
            <div className="band-founder">
              <span className="signature">{doctor.name.replace("Dr. ", "")}</span>
              <strong>{doctor.name.toUpperCase()}</strong>
              <span>{doctor.title}</span>
            </div>
            <p>
              With more than {experienceYears} years in practice, {doctor.name} looks after families in Devli and
              Khanpur: treating everyday illnesses, keeping children&apos;s vaccinations on schedule, and handling minor
              procedures and routine tests close to home.
            </p>
          </div>
        </section>

        {/* General consultations */}
        <section id="services" className="section">
          <div className="container">
            <Heading
              eyebrow="General Consultation"
              title="Common Conditions We Treat"
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

        {/* Doctor profile */}
        <section id="doctor" className="section section-blue">
          <div className="container">
            <Heading eyebrow="Meet the Doctor" title={doctor.name} center />
            <article className="profile">
              <div className="profile-photo">
                <DoctorPhoto name={doctor.name} photo={doctor.photo} />
              </div>
              <div className="profile-body">
                <p className="profile-role">{doctor.title}</p>
                <p>
                  {doctor.name} has been in practice since {site.practisingSince}. Over {experienceYears} years he has
                  built a family-oriented practice spanning general medicine, family healthcare and child healthcare,
                  with particular experience in pediatric consultations, skin conditions, ENT care, minor surgical
                  procedures and routine diagnostics.
                </p>
                <dl className="profile-facts">
                  {facts.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <h4>Areas of Practice</h4>
                <ul className="chips">
                  {doctor.areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <h4>Key Expertise</h4>
                <ul className="chips chips-light">
                  {doctor.expertise.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                {doctor.previously.length > 0 && (
                  <p className="doctor-prev">Previously: {doctor.previously.join(", ")}</p>
                )}
              </div>
            </article>
            <div className="promise-grid">
              {promises.map((p) => (
                <div key={p.title} className="promise">
                  <Icon name="check" size={18} />
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedures & tests */}
        <section id="procedures" className="section">
          <div className="container">
            <Heading
              eyebrow="Procedures & Tests"
              title="Minor Procedures and Diagnostic Tests"
              text="Many small procedures and common blood tests don't need a hospital visit. They can be taken care of at the clinic, with the results explained to you."
              center
            />
            <div className="procedure-grid">
              <div className="procedure-col">
                <h3>
                  <span className="procedure-icon">
                    <Icon name="scissors" size={22} />
                  </span>
                  Minor Procedures
                </h3>
                <ServiceList items={procedures} />
              </div>
              <div className="procedure-col">
                <h3>
                  <span className="procedure-icon">
                    <Icon name="activity" size={22} />
                  </span>
                  Diagnostic Tests
                </h3>
                <ServiceList items={tests} />
              </div>
            </div>
          </div>
        </section>

        {/* Timings */}
        <section id="timings" className="available">
          <div className="container available-grid">
            <div>
              <span className="eyebrow">Visit the Clinic</span>
              <h2>
                Open 6 Days <span>a Week</span>
              </h2>
              <ul className="timings">
                <li>
                  <strong>{site.hours.days}</strong>
                </li>
                <li>
                  <Icon name="clock" size={16} /> Morning: {site.hours.morning}
                </li>
                <li>
                  <Icon name="clock" size={16} /> Evening: {site.hours.evening}
                </li>
                <li>
                  <Icon name="close" size={16} /> {site.hours.closed}: Closed
                </li>
              </ul>
              <div className="hero-actions">
                <a href={site.phoneHref} className="btn btn-primary">
                  <Icon name="phone" size={15} /> Call to Book
                </a>
                <a href={site.mapsHref} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <Icon name="pin" size={15} /> Get Directions
                </a>
              </div>
              <p className="timings-note">
                For a medical emergency outside clinic hours, please go to the nearest hospital emergency department.
              </p>
            </div>
            <div className="available-image">
              <img src={images.clinic} alt="A neighbourhood clinic entrance with a teal canopy" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Health tips */}
        <section id="tips" className="section">
          <div className="container">
            <Heading
              eyebrow="Health Tips"
              title="Simple Advice for Healthier Families"
              text={`Practical everyday guidance from ${site.name}.`}
              center
            />
            <BlogGrid />
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
                  <a href={c.href}>{c.title}</a>
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
