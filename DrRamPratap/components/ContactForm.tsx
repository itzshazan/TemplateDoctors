"use client";

import { useState, type FormEvent } from "react";
import { advancedTherapies, rehabServices, site } from "@/data/site";

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
      d.get("therapy") ? `For: ${d.get("therapy")}` : "",
      d.get("time") ? `Preferred time: ${d.get("time")}` : "",
      d.get("message") ? `Message: ${d.get("message")}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3>Book a session</h3>
      <div className="form-row">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      </div>
      <div className="form-row">
        <label>Therapy
          <select name="therapy" defaultValue="">
            <option value="">Not sure yet</option>
            {[...rehabServices, ...advancedTherapies].map((s) => <option key={s.title}>{s.title}</option>)}
          </select>
        </label>
        <label>Preferred time
          <select name="time" defaultValue="">
            <option value="">Any time</option>
            {site.hours.map((h) => <option key={h.label}>{h.label} ({h.time})</option>)}
          </select>
        </label>
      </div>
      <label>Message<textarea name="message" rows={3} placeholder="Where is the pain, and for how long?" /></label>
      <button className="btn btn-accent" type="submit">Send on WhatsApp</button>
      <p className="form-note" aria-live="polite">
        {sent ? "WhatsApp has opened with your request. Just press send." : "Your request opens in WhatsApp, so you get a quick reply."}
      </p>
    </form>
  );
}
