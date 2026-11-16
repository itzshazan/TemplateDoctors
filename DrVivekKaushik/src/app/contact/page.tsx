import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { SITE, tel } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book an appointment or get in touch with ${SITE.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" />

      <section className="section contact-wrap">
        <div className="container">
          <div className="contact-info reveal">
            <span className="eyebrow">Get in Touch</span>
            <h2>We&apos;re Happy To Help</h2>
            <p>Call or WhatsApp to book an appointment, or walk in during OPD hours. For a serious injury, please call directly.</p>
            <ul className="info-list">
              <li>
                <span className="badge"><Icon name="phone" /></span>
                <div><strong>Phone</strong><a href={tel(SITE.phone)}>{SITE.phone}</a></div>
              </li>
              {SITE.email && (
                <li>
                  <span className="badge"><Icon name="mail" /></span>
                  <div><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                </li>
              )}
              <li>
                <span className="badge"><Icon name="pin" /></span>
                <div><strong>Address</strong><span>{SITE.address}</span></div>
              </li>
              <li>
                <span className="badge"><Icon name="clock" /></span>
                <div><strong>Clinic Hours</strong>{SITE.hoursList.map((h) => <span key={h} style={{ display: "block" }}>{h}</span>)}</div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="map">
        <iframe src={SITE.mapEmbed} title="Clinic location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  );
}
