import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { certifications, gallery, highlights, images, journey, memberships, navLinks, site } from "@/data/site";

const sealText = "AASHIRWAD CLINIC · SINCE 2013 · THE WOMEN HEALTHCARE · ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ================= HOME ================= */}
        <section id="home" className="hero">
          <div className="hero-blob" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill"><Icon name="heart" size={15} /> Women&apos;s healthcare in {site.city}</span>
              <h1>
                Gentle care for <em>every stage</em> of womanhood
              </h1>
              <p className="lead">
                {site.name} and the team at {site.clinic} look after you from adolescence to pregnancy, fertility and
                beyond, with modern sonography under one roof.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-berry"><Icon name="calendar" size={18} /> Book a Visit</a>
                <a href={site.phoneHref} className="btn btn-line"><Icon name="phone" size={18} /> {site.phone}</a>
              </div>
              <div className="schedule-mini">
                <Icon name="clock" size={20} />
                <div>
                  <strong>Doctor&apos;s schedule</strong>
                  {site.schedule.map((s) => <span key={s.day}>{s.day}: {s.time}</span>)}
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div className="portrait-card">
                <img src={images.portrait} alt={`${site.name}, ${site.role}`} width={1111} height={853} />
                <div className="portrait-tag">
                  <strong>{site.name}</strong>
                  <span>{site.role}</span>
                </div>
              </div>
              <div className="clinic-card">
                <img src={images.clinicCard} alt={site.clinic} loading="lazy" />
              </div>
              <div className="seal" aria-label="Aashirwad Clinic, since 2013">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <defs><path id="sealPath" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" /></defs>
                  <text><textPath href="#sealPath">{sealText}</textPath></text>
                </svg>
                <span className="seal-core"><Icon name="heart" size={26} /></span>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights" aria-label="Highlights">
          <div className="container hl-grid">
            {highlights.map((h) => (
              <div key={h.label} className="hl">
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <span className="eyebrow">About the doctor</span>
              <h2>Meet <em>{site.name}</em></h2>
              <p className="about-lead">
                Founder of {site.clinic} and a {site.role.toLowerCase()} known for result-oriented treatment and
                compassionate, patient-first care.
              </p>
              <p>
                With an MS and DNB in Obstetrics &amp; Gynecology and fellowships including minimal access surgery,
                Dr. Meenakshi brings both academic depth and practical skill. She founded Aashirwad Clinic in Chinchwad in
                2013 to provide complete, advanced and compassionate women&apos;s healthcare under one roof.
              </p>
              <p>
                She is especially trusted in managing high-risk pregnancies and complex gynecological conditions, and the
                clinic&apos;s modern sonography allows precise assessment and minimally invasive treatment. Alongside her
                practice, she conducts workshops and seminars on preventive women&apos;s health.
              </p>
              <div className="degrees">
                {site.degrees.map((d) => <span key={d}>{d}</span>)}
              </div>
              <h3 className="sub">Certified in</h3>
              <ul className="cert-list">
                {certifications.map((c) => <li key={c}><Icon name="check" size={16} /> {c}</li>)}
              </ul>
            </div>
            <div className="about-media reveal">
              <img className="am-main" src={images.aboutMain} alt="Dr. Meenakshi at the sonography center" loading="lazy" />
              <img className="am-small" src={images.aboutSmall} alt="Dr. Meenakshi receiving an award as faculty" loading="lazy" />
              <blockquote className="am-quote">
                “Every baby brings new joy, love, and a reason to smile.”
                <cite>Aashirwad Clinic</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Memberships and fellowships">
          <div className="marquee-track">
            {[...memberships, ...memberships].map((m, i) => (
              <span key={i} aria-hidden={i >= memberships.length}>{m}<i aria-hidden="true">✿</i></span>
            ))}
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section services">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Services</span>
              <h2>Care for <em>every chapter</em></h2>
              <p>Hover or tap a service to see what it includes.</p>
            </div>
            <div className="reveal"><ServiceExplorer /></div>

            <div className="journey reveal">
              <div className="journey-head">
                <span className="eyebrow">Pregnancy care</span>
                <h3>Your pregnancy journey with us</h3>
              </div>
              <ol className="journey-steps">
                {journey.map((j) => (
                  <li key={j.step}>
                    <span className="j-dot">{j.step}</span>
                    <strong>{j.title}</strong>
                    <p>{j.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Gallery</span>
              <h2>Inside <em>Aashirwad Clinic</em></h2>
            </div>
            <Gallery items={gallery} />
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <span className="eyebrow eyebrow-light">Contact</span>
              <h2>Visit us in <em>Chinchwad</em></h2>
              <div className="sched-card">
                <h3><Icon name="clock" size={20} /> Doctor&apos;s schedule</h3>
                <table>
                  <tbody>
                    {site.schedule.map((s) => <tr key={s.day}><th>{s.day}</th><td>{s.time}</td></tr>)}
                  </tbody>
                </table>
              </div>
              <a className="big-phone" href={site.phoneHref}><Icon name="phone" size={22} /> {site.phone}</a>
              <ul className="contact-list">
                <li><Icon name="mail" size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><Icon name="pin" size={18} /><span>{site.address} <a className="text-link light" href={site.directions} target="_blank" rel="noopener noreferrer">Get directions →</a></span></li>
              </ul>
              <div className="socials">
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={19} /></a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={19} /></a>
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" size={19} /></a>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={19} /></a>
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
          <div>
            <strong className="footer-name">{site.name}</strong>
            <p>{site.role} · {site.clinic}</p>
          </div>
          <nav aria-label="Footer">
            {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} {site.clinic}. Registered with the {site.council}. Information on this website is
            general and not a substitute for a consultation.
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
