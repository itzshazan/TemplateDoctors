"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

// No backend: submitting opens the visitor's mail app with the message pre-filled.
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
    const body = `Name: ${name}\nPhone: ${phone}\nDepartment: ${department}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
        Department
        <select name="department" defaultValue="Child Care">
          <option>Child Care</option>
          <option>Women Care</option>
          <option>NICU</option>
          <option>Vaccination</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={4} placeholder="Tell us briefly how we can help" />
      </label>
      <button type="submit" className="btn btn-primary">
        Send Request
      </button>
      {sent && (
        <p className="form-note">
          Your email app should open now. If it doesn&apos;t, please call us at{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      )}
    </form>
  );
}
