"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import type { GalleryItem } from "@/data/content";

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
