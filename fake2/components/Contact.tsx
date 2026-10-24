"use client";

import { useState, type FormEvent } from "react";
import { clinics, serviceCategories, site } from "@/data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: the enquiry is handed to WhatsApp, pre-filled.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "New enquiry from website",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      `Interested in: ${data.get("topic")}`,
      data.get("message") ? `Message: ${data.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact Us</span>
          <h2>
            Get in Touch <span>With Us</span>
          </h2>
          <p>
            Reach out to discuss your health concerns. We are here to offer expert guidance and personalised care at
            every stage.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon" aria-hidden>
                ☎
              </div>
              <div>
                <h3>Phone</h3>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden>
                ✉
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            {clinics.map((c) => (
              <div className="contact-card" key={c.name}>
                <div className="contact-icon" aria-hidden>
                  ⌖
                </div>
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.address}</p>
                  {c.hours.map((h) => (
                    <p className="hours" key={h}>
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <h3>Enquiry Now</h3>
            <div className="form-row">
              <label>
                Name
                <input name="name" required autoComplete="name" placeholder="Your full name" />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+\s\-]{10,15}"
                  placeholder="+91"
                />
              </label>
            </div>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Interested in
              <select name="topic" defaultValue={serviceCategories[0]}>
                {serviceCategories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
                <option>General consultation</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us briefly how we can help" />
            </label>
            <button type="submit" className="btn">
              Send Enquiry
            </button>
            {sent ? (
              <p className="form-success" role="status">
                Thank you! WhatsApp has opened with your enquiry. Just tap send.
              </p>
            ) : (
              <p className="form-note">Your enquiry opens in WhatsApp so we can respond quickly.</p>
            )}
          </form>
        </div>

        <div className="map">
          <iframe
            title="Clinic location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(clinics[0].mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
