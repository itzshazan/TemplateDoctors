"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Item = { src: string; alt: string };

/** Masonry gallery with a lightbox. */
export function Gallery({ items }: { items: Item[] }) {
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
      <div className="masonry">
        {items.map((g, i) => (
          <button key={g.src} className="m-item" onClick={() => setIdx(i)} aria-label={`Open photo: ${g.alt}`}>
            <img src={g.src} alt={g.alt} loading="lazy" />
            <span>{g.alt}</span>
          </button>
        ))}
      </div>
      {idx !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setIdx(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setIdx(null)}>
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
