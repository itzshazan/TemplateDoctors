"use client";

import { useState } from "react";
import { tipCategories, tips } from "@/data/site";
import { Icon } from "./Icon";

export function BlogGrid() {
  const [category, setCategory] = useState(tipCategories[0]);
  const visible = category === tipCategories[0] ? tips : tips.filter((t) => t.category === category);

  return (
    <>
      <div className="blog-tabs" role="tablist">
        {tipCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === category}
            className={c === category ? "is-active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="post-grid">
        {visible.map((t) => (
          <article key={t.title} className="post-card">
            <div className="post-image">
              <img src={t.image} alt="" loading="lazy" />
              <span className="post-category">{t.category}</span>
            </div>
            <div className="post-body">
              <h3>{t.title}</h3>
              <p>{t.summary}</p>
              <a href="#contact" className="read-more">
                Ask the Doctor <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>
        ))}
        {visible.length === 0 && <p className="post-empty">No tips in this category yet.</p>}
      </div>
      <p className="tips-note">
        These tips are general information, not a substitute for a consultation. If you are worried about your own or
        your child&apos;s health, please see a doctor.
      </p>
    </>
  );
}
