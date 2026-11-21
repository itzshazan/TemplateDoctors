"use client";

import { useState } from "react";
import { services } from "@/data/site";
import { Icon } from "./Icon";

/** Hover (desktop) or tap (mobile) a service name to reveal its panel. */
export function ServiceExplorer() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <div className="explorer">
      <ol className="explorer-list" role="tablist" aria-label="Services">
        {services.map((s, i) => (
          <li key={s.id}>
            <button
              role="tab"
              aria-selected={s.id === active}
              aria-controls="service-panel"
              className={s.id === active ? "is-active" : undefined}
              onMouseEnter={() => setActive(s.id)}
              onFocus={() => setActive(s.id)}
              onClick={() => setActive(s.id)}
            >
              <span className="ex-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ex-title">{s.title}</span>
              <Icon name="arrow" size={20} className="ex-arrow" />
            </button>
          </li>
        ))}
      </ol>
      <div id="service-panel" role="tabpanel" className="explorer-panel" key={current.id}>
        <div className="ex-image">
          <img src={current.image} alt={current.title} loading="lazy" />
        </div>
        <div className="ex-body">
          <span className="eyebrow">{current.kicker}</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
          <ul>
            {current.points.map((p) => <li key={p}><Icon name="check" size={16} /> {p}</li>)}
          </ul>
          <a href="#contact" className="text-link">Book a consultation <Icon name="arrow" size={16} /></a>
        </div>
      </div>
    </div>
  );
}
