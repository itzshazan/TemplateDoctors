"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "../components/Icons";
import { galleryPage as page } from "../data/pages";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const count = page.items.length;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % count));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + count) % count));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, count]);

  return (
    <>
      <PageHeader title={page.title} />
      <section className="gallery">
        <div className="container gallery__grid">
          {page.items.map((item, i) => (
            <button type="button" className="gallery__item" key={item.thumb} onClick={() => setActive(i)}>
              <img src={item.thumb} alt={`Gallery photo ${i + 1}`} loading="lazy" />
              <span className="gallery__caption">Dr. Devender Singh</span>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button type="button" className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            <CloseIcon size={28} />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active - 1 + count) % count);
            }}
          >
            <ArrowLeftIcon size={22} />
          </button>
          <img src={page.items[active].full} alt="" onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % count);
            }}
          >
            <ArrowRightIcon size={22} />
          </button>
        </div>
      )}
      <CtaBand />
    </>
  );
}
