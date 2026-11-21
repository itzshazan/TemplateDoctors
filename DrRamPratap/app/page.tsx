import { ContactForm } from "@/components/ContactForm";
import { Counter } from "@/components/Counter";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { advancedTherapies, gallery, hospitals, images, marquee, navLinks, rehabServices, site, stats } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ================= HOME ================= */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="kicker">{site.role} · {site.qualification}</span>
              <h1>
                Move freely.
                <br />
                Live <em>pain-free.</em>
              </h1>
              <p className="lead">
                Orthopaedic physiotherapy, paralysis rehabilitation and advanced cupping therapies with {site.name},
                trusted by 10,000+ happy patients over 9+ years.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-accent">Book a Session <Icon name="arrow" size={18} /></a>
                <a href={site.phoneHref} className="btn btn-ghost"><Icon name="phone" size={18} /> {site.phone}</a>
              </div>
              <ul className="hero-chips">
                <li><Icon name="check" size={16} /> {site.speciality}</li>
                <li><Icon name="check" size={16} /> Paralysis Rehab</li>
                <li><Icon name="check" size={16} /> Hijama &amp; Cupping</li>
              </ul>
            </div>
            <div className="hero-media">
              <div className="hero-blob" aria-hidden="true" />
              <div className="hero-photo">
                <img src={images.portrait} alt={`${site.name}, ${site.role}`} width={1199} height={1312} />
              </div>
              <div className="float-card float-a">
                <Icon name="award" size={22} />
                <div><strong>15+</strong><span>Awards</span></div>
              </div>
              <div className="float-card float-b">
                <Icon name="walk" size={22} />
                <div><strong>2,000+</strong><span>Paralysis patients</span></div>
              </div>
              <div className="exp-badge" aria-label="9+ years of experience">
                <strong>9+</strong>
                <span>years</span>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}<i>✦</i></span>
            ))}
          </div>
          </div>
        </div>

        <section className="stats">
          <div className="container stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat reveal">
                <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-media reveal">
              <img className="about-main" src={images.about} alt={`${site.name} receiving a certificate at Fortis FISIOCON 2026`} loading="lazy" />
              <figure className="about-award">
                <img src={images.award} alt={`${site.name} receiving the Physio Bharat 7 certificate`} loading="lazy" />
                <figcaption><Icon name="award" size={16} /> Physio Bharat 7 certificate</figcaption>
              </figure>
            </div>
            <div className="about-copy reveal">
              <span className="kicker">About</span>
              <h2>Hands-on care, <em>backed by nine years</em> in hospitals</h2>
              <p>
                {site.name} is a {site.role} with a BPT and an MPT in Orthopaedics, specialising in orthopaedic
                physiotherapy. Over 9+ years Dr. Ram Pratap has treated more than 10,000 patients, including 2,000+
                people recovering from paralysis.
              </p>
              <p>
                Every plan starts with a careful assessment, then combines exercise, manual therapy and advanced
                techniques such as hijama, cupping, myofascial release and IASTM, so each patient gets the treatment
                that suits their pain and goals.
              </p>
              <div className="qual-chips">
                <span>BPT</span><span>MPT (Ortho)</span><span>{site.speciality}</span><span>15+ Awards</span>
              </div>
              <h3 className="sub">Hospital experience</h3>
              <ul className="hospitals">
                {hospitals.map((h, i) => (
                  <li key={h.name}>
                    <span className="h-num">{String(i + 1).padStart(2, "0")}</span>
                    <div><strong>{h.name}</strong><span>{h.city}</span></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section services">
          <div className="container">
            <div className="section-head reveal">
              <span className="kicker">Services</span>
              <h2>Advanced <em>therapy</em></h2>
              <p>Traditional and modern soft-tissue techniques, chosen for your condition and used alongside physiotherapy.</p>
            </div>
            <div className="bento">
              {advancedTherapies.map((t) => (
                <article key={t.title} className={`bento-card reveal${t.featured ? " is-featured" : ""}`}>
                  <span className="bento-icon"><Icon name={t.icon} size={t.featured ? 34 : 28} /></span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>

            <div className="rehab reveal">
              <div className="rehab-head">
                <span className="kicker kicker-light">Physiotherapy &amp; rehab</span>
                <h3>Recover strength, movement and confidence</h3>
              </div>
              <div className="rehab-grid">
                {rehabServices.map((r) => (
                  <article key={r.title} className="rehab-card">
                    <Icon name={r.icon} size={28} />
                    <h4>{r.title}</h4>
                    <p>{r.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-head reveal">
              <span className="kicker">Gallery</span>
              <h2>Care in <em>action</em></h2>
            </div>
            <Gallery items={gallery} />
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <span className="kicker kicker-light">Contact</span>
              <h2>Ready to <em>move better?</em></h2>
              <p>Call, WhatsApp or send a request, and choose a morning or evening session.</p>
              <ul className="contact-list">
                <li><span><Icon name="phone" /></span><div><small>Phone / WhatsApp</small><a href={site.phoneHref}>{site.phone}</a></div></li>
                <li><span><Icon name="mail" /></span><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
                <li>
                  <span><Icon name="clock" /></span>
                  <div><small>Timings</small>{site.hours.map((h) => <b key={h.label}>{h.label}: {h.time}</b>)}</div>
                </li>
                <li>
                  <span><Icon name="pin" /></span>
                  <div><small>Clinic</small><b>{site.address || "Please call for the clinic address"}</b></div>
                </li>
              </ul>
            </div>
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong className="footer-name">{site.name}</strong>
            <p>{site.role} · {site.qualification}</p>
          </div>
          <nav aria-label="Footer">
            {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} {site.name}. Information on this website is general and not a substitute for an in-person assessment.</p>
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
