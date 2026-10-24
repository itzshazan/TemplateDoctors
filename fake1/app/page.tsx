import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { Counter } from "@/components/Counter";
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
              <img src={images.about} alt="Pediatrician playing with a smiling child" />
            </div>
            <div>
              <Heading eyebrow="About" title="We Take Care of Your Problems Carefully" />
              <p>
                At {site.name}, our focus is the complete wellbeing of every child: preventing disease, treating
                emergencies, supporting good nutrition and protecting against seasonal illness. Our pediatricians
                diagnose and treat everything from viral fevers, colds and stomach upsets to nutritional
                deficiencies and childhood diabetes.
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
                  {founder.name} – Trusted Pediatrician in Greenvale
                </h3>
                <p>
                  {founder.name} ({founder.degree}) is a pediatrician with {founder.experience} of experience in
                  child healthcare. He speaks {founder.languages} and has worked at {founder.previously.join(" and ")}.
                  Today he leads {site.name}, giving newborns and children compassionate, modern care.
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
                text="We support your family from your child's first day through young adulthood, with expert care in a warm, child-friendly setting."
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
              <strong>
                <Counter to={25} suffix="+" />
              </strong>
              <span>Years Of Experience</span>
            </div>
            <div className="counter-divider" />
            <div>
              <strong>
                <Counter to={3} />
              </strong>
              <span>Specialist Doctors</span>
            </div>
            <div className="counter-divider" />
            <div>
              <strong>
                <Counter to={7} />
              </strong>
              <span>Days A Week OPD</span>
            </div>
          </div>
        </div>

        {/* Child care */}
        <section id="child-care" className="section">
          <div className="container two-col">
            <div className="child-image">
              <img src={images.childCare} alt="Happy child at the clinic" loading="lazy" />
            </div>
            <div>
              <Heading
                eyebrow="Child Care"
                title="Quality Child Care You Can Trust"
                text="Every child is unique. Our services are tailored to each child's growth, comfort and health, from the newborn unit to the teenage years."
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
              <h3>Supportive, compassionate and qualified nurses for all your nursing and medical needs</h3>
              <a href={site.phoneHref} className="emergency">
                <span className="emergency-icon">
                  <Icon name="phone" size={22} />
                </span>
                <span>
                  <small>Emergency Call</small>
                  <strong>{site.phone}</strong>
                </span>
              </a>
            </div>
            <div className="band-founder">
              <span className="signature">{founder.name.replace("Dr. ", "")}</span>
              <strong>{founder.name.toUpperCase()}</strong>
              <span>Founder</span>
            </div>
            <p>
              Every child&apos;s comfort comes first. Our rooms and play areas are designed to put young patients at
              ease, and we keep investing in modern technology and infrastructure to meet global standards of care.
            </p>
          </div>
        </section>

        {/* Women care */}
        <section id="women-care" className="section">
          <div className="container">
            <Heading
              eyebrow="Women Care"
              title="What Service We Provide"
              text={`Obstetrics and gynaecology led by ${doctors[1].name} (${doctors[1].degree}), from adolescent health and pregnancy to fertility and screening.`}
              center
            />
            <div className="women-grid">
              {womenServices.map((s) => (
                <div key={s.title} className="women-card">
                  <span className="women-icon">
                    <Icon name="heart" size={22} />
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
              eyebrow="Our Team"
              title={`Meet Our Qualified Doctors at ${site.name}`}
              text="Our mission is to deliver the highest standard of care with compassion, respect for your family and trusted medical expertise."
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
                      ({d.degree}) {d.role}
                    </p>
                    <p className="doctor-meta">
                      <Icon name="globe" size={15} /> {d.languages}
                    </p>
                    <p className="doctor-meta">
                      <Icon name="star" size={15} /> Experience: {d.experience}
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
                24×7 <span>Available</span>
              </h2>
              <p>
                OPD: {site.hours.days} · Morning {site.hours.morning} · Evening {site.hours.evening}
              </p>
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
            <Heading eyebrow="Latest News" title="Get To Know More From Our Blogs & News" center />
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
                <h4>Office Address</h4>
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
                  <Icon name="mail" size={24} />
                </span>
                <h4>Office Email</h4>
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
                </p>
              </div>
            </div>

            <div className="two-col contact-row">
              <div>
                <Heading
                  eyebrow="Contact Us"
                  title={`Reach Out to ${site.name}`}
                  text="Whether it's your baby's health, vaccinations, growth or a seasonal illness, our team replies promptly and handles every concern with care and confidentiality."
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
            <h4>Useful Links</h4>
            <ul>
              {["Privacy Policy", "Terms and Conditions", "Disclaimer", "Support", "FAQ"].map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
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
              <li>Morning: {site.hours.morning}</li>
              <li>Evening: {site.hours.evening}</li>
            </ul>
            <a href={site.phoneHref} className="btn btn-primary btn-sm">
              <Icon name="phone" size={15} /> Call Us Now
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </div>
        </div>
      </footer>

      <a href={site.phoneHref} className="float-call" aria-label="Call the hospital">
        <Icon name="phone" size={24} />
      </a>
    </>
  );
}
