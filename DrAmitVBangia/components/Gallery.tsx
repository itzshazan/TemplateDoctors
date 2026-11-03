"use client";

import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data/content";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <section id="clinic" className="section alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Clinic</span>
          <h2>
            Inside Our <span>Clinic</span>
          </h2>
          <p>Plot No. 308, Sector 46, Faridabad: a calm, clean space for every consultation.</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((img, i) => (
            <button key={img.src} type="button" className="gallery-item" onClick={() => setIndex(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <img src={gallery[index].src} alt={gallery[index].alt} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="lb-close" aria-label="Close" onClick={close}>
            ×
          </button>
          <button
            type="button"
            className="lb-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lb-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
