import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { canContact, clinics, contact, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Visit Dr. Saurabh Sharma, orthopaedic surgeon at Baradari Chowk, near Rotary School, Old Faridabad. Call +91 95605 11186.",
};

export default function ContactPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.services} />
      <Breadcrumb trail={[{ label: "Contact Us" }]} />
      <div className="inner-cont contact-us">
        <div className="lay-width">
          <h2>Contact Us</h2>
          <div className="clinic-cards">
            {clinics.map((c) => (
              <div key={c.name} className="clinic-col">
              <ul className="clinic-card">
                <li>
                  <span className="icn"><Icon name="pin" size={22} /></span>
                  <div className="dinfo">
                    <h5>Address</h5>
                    <h4>
                      <strong>{c.name}:</strong>
                      <br />
                      {c.address}
                    </h4>
                  </div>
                </li>
                {contact.phone && (
                  <li>
                    <span className="icn"><Icon name="phone" size={22} /></span>
                    <div className="dinfo">
                      <h5>Phone</h5>
                      <h4><a href={contact.phoneHref}>{contact.phone}</a></h4>
                    </div>
                  </li>
                )}
                {contact.email && (
                  <li>
                    <span className="icn"><Icon name="mail" size={22} /></span>
                    <div className="dinfo">
                      <h5>Email</h5>
                      <h4><a href={`mailto:${contact.email}`}>{contact.email}</a></h4>
                    </div>
                  </li>
                )}
                <li>
                  <span className="icn"><Icon name="home" size={22} /></span>
                  <div className="dinfo">
                    <h5>Directions</h5>
                    <h4><a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></h4>
                  </div>
                </li>
                <li>
                  <span className="icn"><Icon name="clock" size={22} /></span>
                  <div className="dinfo">
                    <h5>Timing</h5>
                    <h4>
                      {c.timing.map((t) => (
                        <span key={t} className="block">{t}</span>
                      ))}
                    </h4>
                  </div>
                </li>
              </ul>
              </div>
            ))}
          </div>
        </div>
        {canContact && (
          <div className="contact-form-band">
            <div className="contact-form-box">
              <h3>Fill the form for appointment:</h3>
              <ContactForm variant="full" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
