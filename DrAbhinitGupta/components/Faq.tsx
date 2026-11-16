"use client";

import { useState } from "react";
import Icon from "./Icon";
import { faqs } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item ${isOpen ? "is-open" : ""}`}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <Icon name="chevron" size={20} />
            </button>
            <div id={`faq-${i}`} className="faq-answer" role="region" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
