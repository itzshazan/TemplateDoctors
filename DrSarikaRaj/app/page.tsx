import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { BlogGrid } from "@/components/BlogGrid";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Avatar, Logo } from "@/components/Art";
import {
  site,
  images,
  navLinks,
  flipCards,
  careFocus,
  provideFeatures,
  promises,
  childServices,
  womenServices,
  doctors,
  comforts,
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

const founder = doctors[0];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSlider />

        {/* Flip cards */}
        <section className="flip-section">
          <div className="container flip-grid">
            {flipCards.map((card) => (
              <a key={card.title} href={card.href} className="flip-card">
                <div className="flip-inner">
                  <div className="flip-front">
                    <img src={card.icon} alt="" width={64} height={64} />
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
              <a href="#doctors" className="btn btn-primary">
                Read More
              </a>
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
                <a href="#doctors" className="btn btn-dark">
                  Read More
                </a>
              </div>
              <div className="founder-avatar">
                <Avatar name={founder.name} />
              </div>
            </div>
          </div>
        </section>

        {/* What we provide */}
        <section className="section section-blue provide">
          <div className="container two-col">
            <div>
              <Heading
                eyebrow="Who We Are"
                title="What We Provide"
                text="Support for your family from your child's first day through the teenage years, in a warm, child-friendly setting."
              />
              <div className="feature-list">
                {provideFeatures.map((f, i) => (
                  <div key={f.title} className="feature">
                    <span className={`feature-icon ${i % 2 ? "feature-icon-pink" : ""}`}>
                      <Icon name={i === 0 ? "heart" : "stethoscope"} size={22} />
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
              <img src={images.provide} alt="" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Experience counter */}
        <div className="container counter-wrap">
          <div className="counter-card">
            <img src={images.plus} alt="" width={70} height={70} />
            <div>
              <strong>0–18</strong>
              <span>Years Age Group</span>
            </div>
            <div className="counter-divider" />
            <div>
              <strong>{site.rating}★</strong>
              <span>Rating On Google</span>
            </div>
            <div className="counter-divider" />
            <div>
              <strong>4</strong>
              <span>Core Child Services</span>
            </div>
          </div>
        </div>

        {/* Child care */}
        <section id="child-care" className="section">
          <div className="container two-col">
            <div className="child-image">
              <img src={images.childCare} alt="Play area at the clinic" loading="lazy" />
            </div>
            <div>
              <Heading
                eyebrow="Child Care"
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

        {/* Nursing / founder band */}
        <section className="section-blue band">
          <div className="container band-grid">
            <div>
              <h3>Worried about your child? Call the clinic for an appointment or advice on when to come in.</h3>
              <a href={site.phoneHref} className="emergency">
                <span className="emergency-icon">
                  <Icon name="phone" size={22} />
                </span>
                <span>
                  <small>Call the clinic</small>
                  <strong>{site.phone}</strong>
                </span>
              </a>
            </div>
            <div className="band-founder">
              <span className="signature">{founder.name.replace("Dr. ", "")}</span>
              <strong>{founder.name.toUpperCase()}</strong>
              <span>Paediatrician</span>
            </div>
            <p>
              Every child&apos;s comfort comes first. A play area and a gentle, unhurried examination help young patients
              feel at ease. For a serious emergency, please go straight to the nearest hospital.
            </p>
          </div>
        </section>

        {/* Women care */}
        <section id="women-care" className="section">
          <div className="container">
            <Heading
              eyebrow="Vaccination"
              title="Protecting Your Child, On Schedule"
              text="Vaccinations from birth to adolescence, following the Indian Academy of Paediatrics schedule, with reminders for what's due next."
              center
            />
            <div className="women-grid">
              {womenServices.map((s) => (
                <div key={s.title} className="women-card">
                  <span className="women-icon">
                    <Icon name="star" size={22} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section id="doctors" className="section section-blue">
          <div className="container">
            <Heading
              eyebrow="Your Doctor"
              title={`Meet ${site.name}`}
              text="Compassionate, evidence-based care for children, with respect for every family."
              center
            />
            <div className="doctor-grid">
              {doctors.map((d, i) => (
                <article key={d.name} className="doctor-card">
                  <div className="doctor-photo">
                    <Avatar name={d.name} index={i} />
                  </div>
                  <div className="doctor-body">
                    <h3>{d.name}</h3>
                    <p className="doctor-role">
                      {d.degree ? `(${d.degree}) ` : ""}
                      {d.role}
                    </p>
                    <p className="doctor-meta">
                      <Icon name="globe" size={15} /> {d.languages}
                    </p>
                    {d.experience && (
                      <p className="doctor-meta">
                        <Icon name="star" size={15} /> Experience: {d.experience}
                      </p>
                    )}
                    <p className="doctor-meta">
                      <Icon name="pin" size={15} /> JMD Galleria, Sector 48, Gurugram
                    </p>
                    {d.previously.length > 0 && (
                      <p className="doctor-prev">Formerly at: {d.previously.join(", ")}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="promise-grid">
              {[...promises, ...comforts].map((p) => (
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

        {/* 24x7 */}
        <section className="available">
          <div className="container available-grid">
            <div>
              <span className="eyebrow">We&apos;re here for you</span>
              <h2>
                Book a <span>Visit</span>
              </h2>
              <p>{site.hours.days}. Call {site.phone} to book a time.</p>
              <a href="#contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
            <div className="available-image">
              <img src={images.available} alt="" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="section">
          <div className="container">
            <Heading eyebrow="Parent Tips" title="Simple Advice for Healthy Children" center />
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
                  <a href="#child-care">{s.title}</a>
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
      </footer>

      <a href={site.phoneHref} className="float-call" aria-label="Call the clinic">
        <Icon name="phone" size={24} />
      </a>
    </>
  );
}
