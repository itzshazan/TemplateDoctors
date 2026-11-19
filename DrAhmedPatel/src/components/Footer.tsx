import Link from "next/link";
import Icon from "./Icon";
import { SITE, tel, type SocialKey, type Treatment } from "@/config/site";

const QUICK_LINKS = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Contact", to: "/#contact" },
];

function TreatmentLinks({ items }: { items: Treatment[] }) {
  return (
    <ul className="footer-links">
      {items.slice(0, 6).map((t) => (
        <li key={t.id}><Link href="/#services">{t.title}</Link></li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const socials = Object.entries(SITE.socials).filter(([, url]) => url) as [SocialKey, string][];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div>
            <Link className="logo" href="/">
              <img src="/img/logo-white.svg" alt={SITE.name} width={260} height={60} />
            </Link>
            <p>{SITE.tagline}</p>
          </div>
          <div>
            <h4>Services</h4>
            <TreatmentLinks items={SITE.services} />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}><Link href={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><Icon name="phone" /><a href={tel(SITE.phone)}>{SITE.phone}</a></li>
              {SITE.email && <li><Icon name="mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              {SITE.locations.map((l) => (
                <li key={l.name}><Icon name="pin" /><span>{l.name}, {l.address}</span></li>
              ))}
            </ul>
            <div className="socials">
              {socials.map(([key, url]) => (
                <a key={key} href={url} aria-label={key} target="_blank" rel="noopener noreferrer">
                  <Icon name={key} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          {SITE.hours && <span>{SITE.hours}</span>}
        </div>
      </div>
      <div className="powered-by">
        <a href="https://doctorrating.in/" target="_blank" rel="noopener">
          Powered by <strong>DoctorRating</strong>
        </a>
      </div>
    </footer>
  );
}
