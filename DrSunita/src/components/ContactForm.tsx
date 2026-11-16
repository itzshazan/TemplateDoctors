"use client";

import { useState } from "react";
import { contact, doctor } from "@/data/site";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };
type Errors = Partial<Record<"name" | "email" | "phone" | "subject" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Appointment / enquiry form. `variant="compact"` is the two-column home-page
 * form; `"full"` is the contact-page form with a subject field.
 */
export function ContactForm({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const full = variant === "full";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name";
    if (data.email && !EMAIL_RE.test(data.email)) next.email = "Please enter a valid email";
    if (!data.phone?.trim()) next.phone = "Please enter your phone number";
    if (full && !data.subject?.trim()) next.subject = "Please enter a subject";
    if (!data.message?.trim()) next.message = "Please enter your message";
    setErrors(next);
    if (Object.keys(next).length) return;

    // No server-side mail yet: hand the request to WhatsApp (preferred) or the email app.
    const text = [
      `Appointment request for ${doctor.name}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : "",
      data.subject ? `Subject: ${data.subject}` : "",
      `Message: ${data.message}`,
    ].filter(Boolean).join("\n");
    if (contact.whatsapp) {
      window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setStatus({ kind: "ok", message: "WhatsApp has opened with your request — press Send to reach the clinic." });
    } else if (contact.email) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(data.subject || "Appointment request")}&body=${encodeURIComponent(text)}`;
      setStatus({ kind: "ok", message: "Your email app should open with the request ready to send." });
    } else {
      setStatus({ kind: "error", message: "Online requests aren't available yet — please visit or call the clinic." });
      return;
    }
    form.reset();
  }

  const field = (name: keyof Errors, el: React.ReactNode, label?: string) => (
    <div className={`row${errors[name] ? " has-error" : ""}`}>
      {label && <label htmlFor={`${variant}-${name}`}>{label}</label>}
      {el}
      {errors[name] && <p className="field-error">{errors[name]}</p>}
    </div>
  );

  const input = (name: keyof Errors, placeholder: string, type = "text") => (
    <input
      id={`${variant}-${name}`}
      name={name}
      type={type}
      placeholder={full ? undefined : placeholder}
      aria-invalid={!!errors[name]}
      autoComplete={name === "subject" ? "off" : name === "phone" ? "tel" : name}
    />
  );

  const textarea = (
    <textarea id={`${variant}-message`} name="message" placeholder={full ? undefined : "Message"} aria-invalid={!!errors.message} />
  );

  const feedback = status.message && (
    <p className={`form-status form-status--${status.kind}`} role="status">
      {status.message}
    </p>
  );

  const submit = (
    <input type="submit" value={status.kind === "sending" ? "Sending…" : full ? "Submit" : "Submit Your Query"} disabled={status.kind === "sending"} />
  );

  if (full) {
    return (
      <form className="contact-form-full" onSubmit={onSubmit} noValidate>
        <div className="grid2">
          {field("name", input("name", "Name"), "Name*")}
          {field("email", input("email", "Email", "email"), "Email*")}
          {field("phone", input("phone", "Phone", "tel"), "Phone*")}
          {field("subject", input("subject", "Subject"), "Subject*")}
        </div>
        {field("message", textarea, "Message*")}
        <div className="row submit">{submit}</div>
        {feedback}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3>Request your consultation today!</h3>
      <div className="form-cols">
        <div className="fleft">
          {field("name", input("name", "Your Name"))}
          {field("email", input("email", "Email Address", "email"))}
          {field("phone", input("phone", "Phone Number", "tel"))}
        </div>
        <div className="fright">
          {field("message", textarea)}
          <div className="row">{submit}</div>
        </div>
      </div>
      {feedback}
    </form>
  );
}
