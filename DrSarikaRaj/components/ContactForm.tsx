"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

// No backend: submitting opens WhatsApp with the request pre-filled for the clinic's number.
// Replace handleSubmit with an API route or form service to receive messages directly.
export function ContactForm({ title = "Request an Appointment" }: { title?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const department = String(data.get("department") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Appointment request – ${department} – ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nReason: ${department}\n\n${message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`${subject}\n${body}`)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <div className="form-row">
        <label>
          Name
          <input name="name" required placeholder="Your full name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required placeholder="+91" />
        </label>
      </div>
      <label>
        Reason for visit
        <select name="department" defaultValue="Check-up / Illness">
          <option>Check-up / Illness</option>
          <option>Newborn care</option>
          <option>Vaccination</option>
          <option>Growth & nutrition</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={4} placeholder="Tell us briefly how we can help" />
      </label>
      <button type="submit" className="btn btn-primary">
        Send on WhatsApp
      </button>
      {sent && (
        <p className="form-note">
          WhatsApp should open with your request — press Send. If it doesn&apos;t, please call{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      )}
    </form>
  );
}
