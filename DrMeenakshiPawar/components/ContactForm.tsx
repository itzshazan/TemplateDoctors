"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/data/site";

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
      d.get("service") ? `For: ${d.get("service")}` : "",
      d.get("date") ? `Preferred date: ${d.get("date")}` : "",
      d.get("message") ? `Message: ${d.get("message")}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3>Book your visit</h3>
      <p className="form-sub">Share a few details and we will confirm your appointment.</p>
      <div className="form-row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
      </div>
      <div className="form-row">
        <label>Service
          <select name="service" defaultValue="">
            <option value="">Choose a service</option>
            {services.map((s) => <option key={s.id}>{s.title}</option>)}
          </select>
        </label>
        <label>Preferred date<input name="date" type="date" /></label>
      </div>
      <label>Message<textarea name="message" rows={3} placeholder="Anything you would like the doctor to know" /></label>
      <button className="btn btn-berry" type="submit">Send on WhatsApp</button>
      <p className="form-note" aria-live="polite">
        {sent ? "WhatsApp has opened with your request. Just press send." : "Your request opens in WhatsApp. Your details stay private."}
      </p>
    </form>
  );
}
