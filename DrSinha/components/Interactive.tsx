"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import type { GalleryItem, Testimonial } from "@/data/content";

type Tab = { label: string; groups: { title: string; items: string[] }[] };

export function CredentialTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs">
      <div className="tab-list" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={active === i}
            className={active === i ? "active" : ""}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        {tabs[active].groups.map((g) => (
          <div key={g.title} className="tab-group">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setIdx((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, items.length]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((g, i) => (
          <button key={g.src} className="gallery-item" onClick={() => setIdx(i)} aria-label={`Open ${g.alt}`}>
            <img src={g.src} alt={g.alt} loading="lazy" />
            <span>{g.alt}</span>
          </button>
        ))}
      </div>
      {idx !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setIdx(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setIdx(null)}>
            <Icon name="close" size={28} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={items[idx].src} alt={items[idx].alt} />
            <figcaption>{items[idx].alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (items.length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);
  const t = items[i];
  return (
    <div className="t-card">
      <span className="t-badge">
        <Icon name="quote" size={26} />
      </span>
      <div className="t-avatar">{t.name.charAt(0)}</div>
      <h3>{t.name}</h3>
      <p className="t-role">{t.role}</p>
      <div className="stars" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, k) => (
          <Icon key={k} name="star" size={16} />
        ))}
      </div>
      <p className="t-quote">{t.quote}</p>
      {items.length > 1 && (
        <div className="dots">
          {items.map((_, k) => (
            <button key={k} className={k === i ? "active" : ""} aria-label={`Review ${k + 1}`} onClick={() => setI(k)} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
