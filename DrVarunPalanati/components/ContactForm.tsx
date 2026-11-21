"use client";

import { useState, type FormEvent } from "react";
import { conditions, procedures, site } from "@/data/site";

/** No form backend: the request opens in WhatsApp, ready to send. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      `Appointment request for ${site.name}`,
      `Name: ${d.get("name") ?? ""}`,
      `Phone: ${d.get("phone") ?? ""}`,
      d.get("concern") ? `Concern: ${d.get("concern")}` : "",
      d.get("message") ? `Message: ${d.get("message")}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <span className="eyebrow">Book an appointment</span>
      <h3>Request a consultation</h3>
      <div className="form-row">
        <label>Full name<input name="name" required autoComplete="name" /></label>
        <label>Phone number<input name="phone" type="tel" required autoComplete="tel" /></label>
      </div>
      <label>Area of concern
        <select name="concern" defaultValue="">
          <option value="">Choose a service</option>
          {[...procedures, ...conditions].map((s) => <option key={s.title}>{s.title}</option>)}
        </select>
      </label>
      <label>Message<textarea name="message" rows={3} placeholder="Briefly describe your symptoms or question" /></label>
      <button className="btn btn-gold" type="submit">Send request on WhatsApp</button>
      <p className="form-note" aria-live="polite">
        {sent ? "WhatsApp has opened with your request. Just press send." : "Your request opens in WhatsApp for a quick reply. For emergencies, please call."}
      </p>
    </form>
  );
}
