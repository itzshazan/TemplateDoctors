"use client";

import { useEffect, useState } from "react";
import { serviceCategories, services, type Service, type ServiceCategory } from "@/data/content";

type Filter = "All" | ServiceCategory;

export default function Services() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Service | null>(null);

  const visible = filter === "All" ? services : services.filter((s) => s.category === filter);
  const filters: Filter[] = ["All", ...serviceCategories];

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="services" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Practical Solutions</span>
          <h2>
            Fertility, Gynecology & <span>Pregnancy Care</span>
          </h2>
          <p>
            After a detailed assessment, treatment is recommended based on your age, reproductive health, medical
            history and goals. Choose a service to learn more.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Service categories">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`tab${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <small>({f === "All" ? services.length : services.filter((s) => s.category === f).length})</small>
            </button>
          ))}
        </div>

        <div className="services-grid">
          {visible.map((s) => (
            <button key={s.id} type="button" className="service-card" onClick={() => setSelected(s)}>
              <span className="tag">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <span className="more">Read more →</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close" aria-label="Close" onClick={() => setSelected(null)}>
              ×
            </button>
            <span className="eyebrow">{selected.category}</span>
            <h3 id="service-title">{selected.title}</h3>
            <p>{selected.summary}</p>
            <h4>What it covers</h4>
            <ul>
              {selected.types.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h4>Benefits</h4>
            <p>{selected.benefits}</p>
            <a href="#contact" className="btn" onClick={() => setSelected(null)}>
              Enquire about this treatment
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
