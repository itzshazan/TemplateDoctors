"use client";

import React, { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { faqPage as page } from "../data/pages";
import { clinic } from "../data/site";

type Faq = (typeof page.columns)[number][number] & { list?: string[]; after?: string };

function FaqItem({ item, open, onToggle }: { item: Faq; open: boolean; onToggle: () => void }) {
  return (
    <div className={`accordion__item${open ? " is-open" : ""}`}>
      <button type="button" className="accordion__title" onClick={onToggle}>
        <h4>{item.q}</h4>
      </button>
      {open && (
        <div className="accordion__content">
          <p>{item.a}</p>
          {item.list && (
            <ul className="dash-list">
              {item.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
          {item.after && <p>{item.after}</p>}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("0-0");
  const [question, setQuestion] = useState({ name: "", email: "", message: "" });

  const columns = useMemo(() => {
    const q = query.trim().toLowerCase();
    return page.columns.map((col) => (q ? col.filter((f) => (f.q + " " + f.a).toLowerCase().includes(q)) : col));
  }, [query]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${question.name}\nEmail: ${question.email}\n\n${question.message}`;
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent("Question from website")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader title={page.title} />
      <section className="faq">
        <div className="container">
          <div className="block-title block-title--center">
            <p className="block-title__tag">{page.tag}</p>
            <h2 className="block-title__title">{page.heading}</h2>
          </div>
          <form className="faq__search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Search your question" value={query} onChange={(e) => setQuery(e.target.value)} />
          </form>
          <div className="faq__grid">
            {columns.map((col, ci) => (
              <div className="accordion" key={ci}>
                {col.map((item, i) => (
                  <FaqItem
                    key={item.q}
                    item={item as Faq}
                    open={open === `${ci}-${i}`}
                    onToggle={() => setOpen(open === `${ci}-${i}` ? "" : `${ci}-${i}`)}
                  />
                ))}
              </div>
            ))}
          </div>
          {columns.every((c) => c.length === 0) && <p className="text faq__empty">No questions match your search.</p>}
        </div>
      </section>

      <section className="faq-form">
        <div className="container">
          <h2 className="block-title__title">Didn’t find your answer? Submit your question</h2>
          <form className="contact-form" onSubmit={submit}>
            <div className="contact-form__grid">
              <input required placeholder="Your Name" value={question.name} onChange={(e) => setQuestion({ ...question, name: e.target.value })} />
              <input required type="email" placeholder="Email Address" value={question.email} onChange={(e) => setQuestion({ ...question, email: e.target.value })} />
              <textarea required rows={5} placeholder="Your Question" value={question.message} onChange={(e) => setQuestion({ ...question, message: e.target.value })} />
            </div>
            <button type="submit" className="thm-btn">
              Submit Question
            </button>
          </form>
        </div>
      </section>
      <CtaBand label="Need to See a Doctor?" />
    </>
  );
}
