import { ContactForm } from "@/components/ContactForm";
import { Counter } from "@/components/Counter";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import {
  academics, conditions, education, experience, gallery, hospitals, images, memberships, navLinks, procedures, site, stats,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ================= HOME ================= */}
        <section id="home" className="hero">
          <div className="hero-lines" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-gold">{site.title} · {site.city}</span>
              <h1>
                <span className="line">Precision surgery.</span>
                <br />
                <span className="line"><em>Compassionate</em> care.</span>
              </h1>
              <p className="lead">
                {site.name} brings advanced laparoscopic and gastrointestinal surgery to Guntur, from gall bladder and
                hernia to pancreas, liver and bariatric surgery, with care at every step.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-gold">Book an Appointment <Icon name="arrow" size={18} /></a>
                <a href="#services" className="btn btn-outline-light">Explore Services</a>
              </div>
              <ul className="creds">
                <li><strong>MS</strong><span>General Surgery</span></li>
                <li><strong>M.Ch</strong><span>Surgical Gastroenterology</span></li>
                <li><strong>FIAGES</strong><span>Laparoscopic Surgery</span></li>
              </ul>
            </div>
            <div className="hero-media">
              <div className="ring" aria-hidden="true" />
              <img className="hero-portrait" src={images.hero} alt={`${site.name}, ${site.title}`} width={521} height={777} />
              <div className="glass glass-a">
                <span className="stars" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={14} />)}</span>
                <strong>{site.rating} on Google</strong>
              </div>
              <div className="glass glass-b">
                <Icon name="scalpel" size={22} />
                <div><strong>1,550+</strong><span>Successful surgeries</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-wrap" aria-label="Key numbers">
          <div className="container">
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-media reveal">
              <div className="frame">
                <img src={images.about} alt={`${site.name} in clinic`} loading="lazy" />
              </div>
              <blockquote className="about-quote">
                <Icon name="quote" size={26} />
                Expert care for every patient, driven by precision and compassion.
              </blockquote>
            </div>
            <div className="about-copy reveal">
              <span className="eyebrow">About the surgeon</span>
              <h2>A specialist in <em>minimally invasive</em> GI surgery</h2>
              <p>
                {site.name} is a general and gastrointestinal surgeon ({site.credentials}) with 12+ years in surgery and
                extensive experience in complex laparoscopic and minimally invasive procedures. Trained in surgical
                gastroenterology at Narayana Medical College, Nellore, Dr. Varun went on to work in liver transplant and
                hepatobiliary surgery at Yashoda Hospitals, Secunderabad, before returning to Guntur.
              </p>
              <p>
                Known for a patient-first approach, Dr. Varun explains every option clearly so that each decision is
                informed and confident, and follows patients from consultation through recovery.
              </p>
              <ul className="memberships">
                {memberships.map((m) => <li key={m}><Icon name="shield" size={18} /> {m}</li>)}
              </ul>
              <div className="consulting">
                <span className="eyebrow">Consulting at</span>
                <div className="hosp-grid">
                  {hospitals.map((h) => (
                    <div key={h.name} className="hosp">
                      <img src={h.image} alt={`${h.name}, ${h.city}`} loading="lazy" />
                      <div><strong>{h.name}</strong><span>{h.city}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container journey reveal">
            <div className="journey-col">
              <h3><Icon name="graduation" size={22} /> Education</h3>
              <ol className="timeline">
                {education.map((e) => (
                  <li key={e.title}><span className="tl-years">{e.years}</span><strong>{e.title}</strong><p>{e.place}</p></li>
                ))}
              </ol>
            </div>
            <div className="journey-col">
              <h3><Icon name="hospital" size={22} /> Experience</h3>
              <ol className="timeline">
                {experience.map((e) => (
                  <li key={e.title}><span className="tl-years">{e.years}</span><strong>{e.title}</strong><p>{e.place}</p></li>
                ))}
              </ol>
            </div>
          </div>

          <div className="container academics reveal">
            {academics.map((a) => (
              <article key={a.title} className="acad">
                <Icon name="award" size={22} />
                <h4>{a.title}</h4>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section services">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow eyebrow-gold">Services</span>
              <h2>Comprehensive <em>surgical</em> care</h2>
              <p>From keyhole surgery to complex gastrointestinal and liver procedures, with emergency cover around the clock.</p>
            </div>
            <div className="proc-grid">
              {procedures.map((p, i) => (
                <article key={p.title} className="proc reveal">
                  <span className="proc-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <h3 className="list-title reveal">Organs &amp; conditions treated</h3>
            <ol className="cond-list reveal">
              {conditions.map((c, i) => (
                <li key={c.title}>
                  <span>{String(i + 5).padStart(2, "0")}</span>
                  <div><strong>{c.title}</strong><p>{c.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="emergency reveal">
              <div>
                <Icon name="siren" size={30} />
                <div>
                  <strong>Gastro emergency?</strong>
                  <span>Dr. Varun and the team are available 24/7 for urgent care.</span>
                </div>
              </div>
              <a href={site.emergencyHref} className="btn btn-gold"><Icon name="phone" size={18} /> {site.emergencyPhone}</a>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="section testimonials" aria-labelledby="t-title">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Patient stories</span>
              <h2 id="t-title">Trusted by <em>2,850+</em> patients</h2>
            </div>
            <div className="t-grid">
              {testimonials.map((t) => (
                <figure key={t.name} className="t-card reveal">
                  <span className="stars" aria-label="5 stars">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={15} />)}</span>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><strong>{t.name}</strong><span>{t.place}</span></figcaption>
                </figure>
              ))}
            </div>
            <div className="center reveal">
              <a className="btn btn-outline-dark" href={site.review} target="_blank" rel="noopener noreferrer">
                <Icon name="star" size={18} /> Rated {site.rating} on Google · Write a review
              </a>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Gallery</span>
              <h2>Inside the <em>practice</em></h2>
            </div>
            <Gallery items={gallery} />
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <span className="eyebrow eyebrow-gold">Contact</span>
              <h2>Begin your <em>recovery</em> today</h2>
              <p>Call or WhatsApp for appointments. In an emergency, call the 24/7 line.</p>
              <ul className="contact-list">
                <li><span><Icon name="phone" /></span><div><small>Appointments / WhatsApp</small><a href={site.phoneHref}>{site.phone}</a></div></li>
                <li><span><Icon name="siren" /></span><div><small>24/7 Emergency</small><a href={site.emergencyHref}>{site.emergencyPhone}</a></div></li>
                <li><span><Icon name="mail" /></span><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
                <li><span><Icon name="pin" /></span><div><small>Clinic</small><b>{site.address}</b><a className="link" href={site.directions} target="_blank" rel="noopener noreferrer">Get directions →</a></div></li>
                <li><span><Icon name="clock" /></span><div><small>Hours</small><b>{site.hours}</b></div></li>
              </ul>
              <div className="socials">
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={20} /></a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
              </div>
            </div>
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <img src={images.logoWhite} alt={`${site.name} logo`} width={180} height={68} />
          <nav aria-label="Footer">
            {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} {site.name}, {site.credentials}. Information on this website is general and not a
            substitute for a consultation.
          </p>
        </div>
        <div className="powered-by">
          <a href="https://doctorrating.in/" target="_blank" rel="noopener">
            Powered by <strong>DoctorRating</strong>
          </a>
        </div>
      </footer>

      <a className="wa-float" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={26} />
      </a>
      <Reveal />
    </>
  );
}
