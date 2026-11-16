"use client";

import { useId, useState } from "react";
import type { Tab } from "@/config/content";

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div>
      <div className="tabs-nav" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            id={`${baseId}-tab-${i}`}
            className="tab-btn"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          id={`${baseId}-panel-${i}`}
          className="tab-panel"
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
        >
          {tab.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <ul>
                {s.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
