"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { contact } from "@/data/site";

// There is no backend: the form opens the visitor's email app with the message pre-filled.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "Enquiry");
    const body = [
      String(data.get("message") || ""),
      "",
      `- ${data.get("name")} (${data.get("email")})`,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input name="name" type="text" required placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
        </label>
      </div>
      <label>
        Subject
        <select name="subject" defaultValue="Media enquiry">
          <option>Media enquiry</option>
          <option>Speaking / teaching invitation</option>
          <option>Corporate health partnership</option>
          <option>Other professional enquiry</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={4} required placeholder="How can Dr. Parti help?" />
      </label>
      <button type="submit" className="btn btn-primary btn-block">
        <Icon name="mail" size={18} /> Send Message
      </button>
      <p className="form-note">
        {sent
          ? "Your email app has opened with the message ready to send."
          : "For media, teaching and professional enquiries only. Not for medical advice."}
      </p>
    </form>
  );
}
