"use client";

import { useEffect, useState } from "react";
import type { GalleryImage } from "@/config/content";

interface GalleryProps {
  images: GalleryImage[];
  /** Extra classes on the grid, e.g. "cols-3 tall" */
  className?: string;
}

export default function Gallery({ images, className = "" }: GalleryProps) {
  const [open, setOpen] = useState<number | null>(null);

  const show = (i: number) => setOpen((i + images.length) % images.length);
  const close = () => setOpen(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(open - 1);
      if (e.key === "ArrowRight") show(open + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  return (
    <>
      <div className={`gallery-grid ${className}`.trim()}>
        {images.map((img, i) => (
          <a
            key={img.src}
            href={img.src}
            onClick={(e) => {
              e.preventDefault();
              show(i);
            }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </a>
        ))}
      </div>

      {open !== null && (
        <div
          className="lightbox is-open"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button className="lb-close" aria-label="Close" onClick={close}>×</button>
          <button className="lb-prev" aria-label="Previous" onClick={() => show(open - 1)}>‹</button>
          <img src={images[open].src} alt={images[open].alt} />
          <button className="lb-next" aria-label="Next" onClick={() => show(open + 1)}>›</button>
        </div>
      )}
    </>
  );
}
