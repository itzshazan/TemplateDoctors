import Link from "next/link";
import Icon from "@/components/Icon";
import { GalleryGrid } from "@/components/Interactive";
import { about, gallery, hasPhone, hero, otherPractice, services, site, whatsappLink } from "@/data/content";

/** Primary call-to-action: call if a phone number exists, otherwise directions. */
export function PrimaryCta({ className = "btn btn-red" }: { className?: string }) {
  return hasPhone ? (
    <a className={className} href={site.phoneHref}>
      <Icon name="phone" size={18} /> Call {site.phone}
    </a>
  ) : (
    <a className={className} href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
      <Icon name="directions" size={18} /> Get Directions
    </a>
  );
}

export function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${site.heroBg})` }}>
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <h4>{hero.eyebrow}</h4>
          <h1>{hero.title}</h1>
          <p>{hero.text}</p>
          <div className="btn-row">
            <Link className="btn btn-red" href="/#contact">
              Book Appointment
            </Link>
            <Link className="btn btn-white" href="/#services">
              View Treatments
            </Link>
          </div>
        </div>
        <div className="hero-media reveal">
          <img src={site.heroImage} alt="Eye examination at the slit lamp" width={520} height={520} />
        </div>
      </div>
      <div className="container hero-box-wrap">
        <div className="hero-box">
          <h2>{hero.boxTitle}</h2>
          {hasPhone ? (
            <a className="hero-box-phone" href={site.phoneHref}>
              {site.phone}
            </a>
          ) : (
            <a className="hero-box-phone" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              {site.shortAddress}
            </a>
          )}
          <p>{hero.boxText}</p>
        </div>
      </div>
    </section>
  );
}

export function AboutBlock({ full = false }: { full?: boolean }) {
  return (
    <section className="section about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img src={site.aboutImage} alt="Eye power check with a trial frame" width={560} height={480} />
          <div className="exp-badge">
            <strong>{site.experienceYears}+</strong>
            <span>Years of Experience</span>
          </div>
        </div>
        <div className="about-copy reveal">
          {full && <h4 className="eyebrow">About the Doctor</h4>}
          <h2>{about.heading}</h2>
          <p className="about-sub">
            {site.role} · {site.degrees}
          </p>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="check-list">
            {about.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={18} /> {h}
              </li>
            ))}
          </ul>
          {!full && (
            <Link className="btn btn-red" href="/#about">
              Know More <Icon name="arrow" size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Specialities({ title = true }: { title?: boolean }) {
  return (
    <section className="section specialities">
      <div className="container">
        {title && (
          <div className="section-head reveal">
            <h4 className="eyebrow">Our Speciality</h4>
            <h2>Complete Eye Care, From Check-ups to Surgery</h2>
          </div>
        )}
        <div className="spec-grid">
          {services.map((s, i) => (
            <div key={s.slug} className={`spec-card reveal ${i === 0 ? "is-featured" : ""}`}>
              <span className="spec-icon">
                <Icon name={s.icon} size={52} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  return (
    <section className="section gallery">
      <div className="container">
        <h2 className="center red-title reveal">Gallery</h2>
        <GalleryGrid items={items} />
      </div>
    </section>
  );
}

export function PageBanner({ title, crumbs }: { title: string; crumbs: { href?: string; label: string }[] }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${site.heroBg})` }}>
      <div className="container">
        <h1>{title}</h1>
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true"> / </span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="section contact">
      <div className="container contact-grid">
        <div className="contact-cards">
          <div className="contact-card reveal">
            <span className="cc-icon">
              <Icon name="pin" size={26} />
            </span>
            <div>
              <h3>{site.clinic}</h3>
              <p>{site.address}</p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-red">
                Get Directions <Icon name="arrow" size={15} />
              </a>
            </div>
          </div>
          <div className="contact-card reveal">
            <span className="cc-icon">
              <Icon name="clock" size={26} />
            </span>
            <div>
              <h3>Clinic Timings</h3>
              {site.hours.length > 0 ? (
                site.hours.map((h) => <p key={h}>{h}</p>)
              ) : (
                <p>Please call or visit the clinic to confirm OPD timings before your visit.</p>
              )}
            </div>
          </div>
          <div className="contact-card reveal">
            <span className="cc-icon">
              <Icon name="phone" size={26} />
            </span>
            <div>
              <h3>Phone & WhatsApp</h3>
              {hasPhone ? (
                <>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                  {whatsappLink && (
                    <a href={whatsappLink} className="link-red" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp <Icon name="arrow" size={15} />
                    </a>
                  )}
                </>
              ) : (
                <p>Phone number will be added soon. Walk-in patients are welcome during OPD hours.</p>
              )}
            </div>
          </div>
          <div className="contact-card reveal">
            <span className="cc-icon">
              <Icon name="eye" size={26} />
            </span>
            <div>
              <h3>Also Consults At</h3>
              <p>
                {otherPractice.name}, {otherPractice.address}
              </p>
              <p className="muted">{otherPractice.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Due for an eye check-up?</h2>
          <p>Visit {site.clinic}, {site.shortAddress}. Please bring your current glasses and old eye reports.</p>
        </div>
        <div className="btn-row">
          <PrimaryCta />
          <Link className="btn btn-white" href="/#contact">
            Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = (["facebook", "instagram", "youtube"] as const).filter((k) => site.social[k]);
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-brand">
            <Link href="/">{site.name}</Link>
          </h2>
          <p>
            {site.name} is a senior {site.role.toLowerCase()} in {site.city} with {site.experienceYears} years of experience
            in cataract, glaucoma, oculoplasty and contact lens care.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href="/#services">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#gallery">Gallery</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            {hasPhone && <li>Phone: <a href={site.phoneHref}>{site.phone}</a></li>}
            {site.email && <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>}
            <li>Address: {site.clinic}, {site.address}</li>
          </ul>
          {socials.length > 0 && (
            <div className="socials">
              {socials.map((k) => (
                <a key={k} href={site.social[k]} aria-label={k} target="_blank" rel="noopener noreferrer">
                  <Icon name={k} size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} © {site.clinic}. All Rights Reserved</span>
        <span>Information on this site is for general awareness and is not a substitute for a consultation.</span>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="floating">
      {hasPhone && (
        <a className="fab fab-call" href={site.phoneHref} aria-label="Call the clinic">
          <Icon name="phone" size={24} />
        </a>
      )}
      {whatsappLink && (
        <a className="fab fab-wa" href={whatsappLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={26} />
        </a>
      )}
      <a className="fab fab-map" href={site.mapsUrl} aria-label="Directions on Google Maps" target="_blank" rel="noopener noreferrer">
        <Icon name="pin" size={24} />
      </a>
    </div>
  );
}
