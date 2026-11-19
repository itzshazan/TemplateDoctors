import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { SITE, tel } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a consultation with ${SITE.name} in Dubai or Mumbai.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" />

      <section className="section contact-wrap">
        <div className="container">
          <div className="contact-info reveal">
            <span className="eyebrow">Get in Touch</span>
            <h2>Book a Consultation</h2>
            <p>Call or send a request to book a consultation for implants, full mouth rehabilitation or smile correction.</p>
            <ul className="info-list">
              <li>
                <span className="badge"><Icon name="phone" /></span>
                <div><strong>Phone</strong><a href={tel(SITE.phone)}>{SITE.phone}</a><span style={{ display: "block" }}>{SITE.phoneNote}</span></div>
              </li>
              {SITE.email && (
                <li>
                  <span className="badge"><Icon name="mail" /></span>
                  <div><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                </li>
              )}
              {SITE.locations.map((l) => (
                <li key={l.name}>
                  <span className="badge"><Icon name="pin" /></span>
                  <div>
                    <strong>{l.name}</strong>
                    <span style={{ display: "block" }}>{l.address}</span>
                    <span style={{ display: "block" }}>{l.role} · {l.since}</span>
                  </div>
                </li>
              ))}
              <li>
                <span className="badge"><Icon name="clock" /></span>
                <div>
                  <strong>Consultation Timings</strong>
                  {SITE.hoursList.length > 0
                    ? SITE.hoursList.map((h) => <span key={h} style={{ display: "block" }}>{h}</span>)
                    : <span>Please call to confirm the days and times.</span>}
                </div>
              </li>
              {SITE.socials.linkedin && (
                <li>
                  <span className="badge"><Icon name="linkedin" /></span>
                  <div><strong>LinkedIn</strong><a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">View profile</a></div>
                </li>
              )}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
