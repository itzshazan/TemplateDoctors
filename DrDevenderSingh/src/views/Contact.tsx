"use client";

import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "../components/Icons";
import { clinic, whatsappLink } from "../data/site";
import { contactPage as page } from "../data/pages";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

const widgetIcon = (title: string) => {
  if (title === "Phone") return <PhoneIcon size={26} />;
  if (title === "Email") return <MailIcon size={26} />;
  if (title.startsWith("Business")) return <ClockIcon size={26} />;
  return <MapPinIcon size={26} />;
};

export default function Contact({ embedded = false }: { embedded?: boolean }) {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  // No backend yet: open the visitor's mail client with the details pre-filled.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ""}\n\n${form.message}`;
    if (clinic.email) {
      window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent(form.subject || "Appointment request")}&body=${encodeURIComponent(body)}`;
    } else {
      // No email yet: send the request to the clinic on WhatsApp.
      window.open(whatsappLink(`Appointment request (${form.subject || "consultation"})\n${body}`), "_blank", "noopener");
    }
    setSent(true);
    setForm(empty);
  };

  return (
    <>
      {!embedded && <PageHeader title="Contact Us" />}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="block-title">
                <p className="block-title__tag">{page.tag}</p>
                <h2 className="block-title__title">{page.heading}</h2>
              </div>
              <p className="text">{page.intro}</p>
              <form className="contact-form" onSubmit={submit}>
                <div className="contact-form__stack">
                  <input required placeholder="Full name" value={form.name} onChange={update("name")} />
                  <input type="email" placeholder="Email Address (optional)" value={form.email} onChange={update("email")} />
                  <input required type="tel" placeholder="Phone" value={form.phone} onChange={update("phone")} />
                  <input required placeholder="Subject" value={form.subject} onChange={update("subject")} />
                  <textarea placeholder="Message" rows={6} value={form.message} onChange={update("message")} />
                </div>
                <button type="submit" className="thm-btn">
                  {clinic.email ? "Submit Now" : "Send on WhatsApp"}
                </button>
                {sent && <p className="contact-form__note">{clinic.email ? "Thank you! Your email app should open to send the request." : "WhatsApp has opened with your request — press Send to reach the clinic."}</p>}
              </form>
            </div>
            <div className="col-5">
              <div className="contact-widgets">
                <h2 className="contact-widgets__title">Our Address</h2>
                {page.widgets.map((w, i) => (
                  <div className="contact-widget" key={w.title + i}>
                    <span className="contact-widget__icon">{widgetIcon(w.title)}</span>
                    <h3>{w.title}</h3>
                    {w.lines.map((line) =>
                      w.href ? (
                        <a key={line} href={w.href}>
                          {line}
                        </a>
                      ) : (
                        <p key={line}>{line}</p>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {!embedded && <CtaBand />}
    </>
  );
}
