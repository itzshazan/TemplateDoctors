import Link from "next/link";
import Icon from "@/components/Icon";
import { GalleryGrid } from "@/components/Interactive";
import { about, gallery, hasPhone, hero, services, site, whatsappLink } from "@/data/content";

export function PrimaryCta({ className = "btn btn-primary" }: { className?: string }) {
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

function Wave({ className = "", fill = "#fff" }: { className?: string; fill?: string }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 50c180 35 360 45 540 25S900 10 1080 20s270 40 360 45v25H0z" fill={fill} />
    </svg>
  );
}

function Heading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`heading reveal ${light ? "light" : ""}`}>
      <span className="eyebrow">
        <Icon name="flower" size={16} /> {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="pill">
            <Icon name="female" size={16} /> {hero.eyebrow}
          </span>
          <h1>{hero.title}</h1>
          <p>{hero.text}</p>
          <div className="btn-row">
            <PrimaryCta />
            <Link className="btn btn-outline" href="/#services">
              Our Services
            </Link>
          </div>
          <ul className="hero-ticks">
            <li><Icon name="check" size={16} /> Infertility & IVF</li>
            <li><Icon name="check" size={16} /> Laparoscopy & hysteroscopy</li>
            <li><Icon name="check" size={16} /> Ultrasound on site</li>
          </ul>
        </div>
        <div className="hero-media reveal">
          <div className="hero-frame">
            <img src={site.heroImage} alt="Couple expecting a baby" width={520} height={560} />
          </div>
          <div className="float-card fc-1">
            <span><Icon name="pin" size={20} /></span>
            <div>
              <strong>{site.area}</strong>
              <small>{site.landmark}</small>
            </div>
          </div>
          <div className="float-card fc-2">
            <span><Icon name="heart" size={20} /></span>
            <div>
              <strong>38 Years</strong>
              <small>Obstetrics & gynaecology</small>
            </div>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
}

export function AboutBlock({ full = false }: { full?: boolean }) {
  return (
    <section className="section about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <div className="about-ring" />
          <img src={site.aboutImage} alt="IVF embryology lab" width={520} height={560} />
          {site.experienceYears > 0 && (
            <div className="exp-badge">
              <strong>{site.experienceYears}+</strong>
              <span>Years of Experience</span>
            </div>
          )}
        </div>
        <div className="about-copy reveal">
          <span className="eyebrow"><Icon name="flower" size={16} /> {about.eyebrow}</span>
          <h2>{about.heading}</h2>
          {site.degrees && <p className="degrees">{site.degrees}</p>}
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="tick-grid">
            {about.highlights.map((h) => (
              <li key={h}><span><Icon name="check" size={14} /></span> {h}</li>
            ))}
          </ul>
          {!full && (
            <Link className="btn btn-primary" href="/#about">
              Know More <Icon name="arrow" size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="section services">
      <div className="container">
        <Heading
          eyebrow="What We Treat"
          title="Fertility & Gynaecology Services"
          text="Complete care for women's health concerns, explained simply and handled with respect."
        />
        <div className="service-grid">
          {list.map((s) => (
            <div key={s.slug} className="service-card reveal">
              <span className="service-icon"><Icon name={s.icon} size={34} /></span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
            </div>
          ))}
        </div>
        {limit && (
          <div className="center mt">
            <Link className="btn btn-outline" href="/#services">View All Services</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="section contact">
      <div className="container contact-grid">
        <div className="contact-card reveal">
          <h2>Visit {site.clinic}</h2>
          <ul className="contact-list">
            <li>
              <span><Icon name="pin" size={22} /></span>
              <div>
                <strong>Address</strong>
                <p>{site.address}</p>
                <small>Landmark: {site.landmark}</small>
              </div>
            </li>
            <li>
              <span><Icon name="clock" size={22} /></span>
              <div>
                <strong>Clinic Timings</strong>
                {site.hours.length > 0 ? site.hours.map((h) => <p key={h}>{h}</p>) : <p>Please call or visit to confirm the current OPD timings.</p>}
              </div>
            </li>
            <li>
              <span><Icon name="phone" size={22} /></span>
              <div>
                <strong>Phone</strong>
                {hasPhone ? <p><a href={site.phoneHref}>{site.phone}</a></p> : <p>Phone number coming soon. Walk-ins welcome during OPD hours.</p>}
                {whatsappLink && <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="link">Message on WhatsApp →</a>}
              </div>
            </li>
            {site.email && (
              <li>
                <span><Icon name="mail" size={22} /></span>
                <div>
                  <strong>Email</strong>
                  <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                </div>
              </li>
            )}
          </ul>
          <PrimaryCta />
        </div>
        <div className="contact-photo reveal">
          <img src="/images/reception.jpg" alt={`Reception at ${site.clinic}`} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="section gallery">
      <div className="container">
        <Heading eyebrow="Gallery" title="Caring For Every Woman" />
        <GalleryGrid items={gallery} />
      </div>
    </section>
  );
}

export function PageBanner({ title, crumbs }: { title: string; crumbs: { href?: string; label: string }[] }) {
  return (
    <section className="page-banner">
      <div className="blob blob-1" />
      <div className="container">
        <h1>{title}</h1>
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true"> › </span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
      </div>
      <Wave />
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta">
      <div className="container cta-inner reveal">
        <div>
          <h2>Your health deserves attention</h2>
          <p>Visit {site.clinic}, {site.landmarkInline}, {site.area}.</p>
        </div>
        <div className="btn-row">
          <PrimaryCta className="btn btn-white" />
          <Link className="btn btn-ghost" href="/#contact">Contact Details</Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = (["facebook", "instagram"] as const).filter((k) => site.social[k]);
  return (
    <footer className="footer">
      <Wave className="wave-top" fill="#fff" />
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-light">
            <img src={site.logo} alt="" width={44} height={44} />
            <span>
              <strong>{site.name}</strong>
              <small>{site.role}</small>
            </span>
          </Link>
          <p>Infertility, IVF and gynaecology care by {site.name} at {site.clinic}, {site.area}, {site.city}.</p>
          {socials.length > 0 && (
            <div className="socials">
              {socials.map((k) => (
                <a key={k} href={site.social[k]} aria-label={k} target="_blank" rel="noopener noreferrer"><Icon name={k} size={18} /></a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href="/#services">{s.title}</Link></li>
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
          <h4>Clinic</h4>
          <ul className="footer-contact">
            <li><Icon name="pin" size={16} /> {site.address}</li>
            {hasPhone && <li><Icon name="phone" size={16} /> <a href={site.phoneHref}>{site.phone}</a></li>}
            <li><Icon name="clock" size={16} /> {site.hours.length > 0 ? site.hours.join(" · ") : "Timings: please call or visit to confirm"}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.clinic}. All rights reserved.</span>
        <span>Health information on this site is for awareness only and is not a substitute for a consultation.</span>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="floating">
      {whatsappLink && (
        <a className="fab fab-wa" href={whatsappLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={26} /></a>
      )}
      {hasPhone && (
        <a className="fab fab-call" href={site.phoneHref} aria-label="Call the clinic"><Icon name="phone" size={24} /></a>
      )}
      <a className="fab fab-map" href={site.mapsUrl} aria-label="Directions on Google Maps" target="_blank" rel="noopener noreferrer"><Icon name="pin" size={24} /></a>
    </div>
  );
}
