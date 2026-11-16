"use client";

import { useCallback, useEffect, useState } from "react";
import type { Asset } from "@/lib/assets";
import { Icon } from "./Icons";
import { Placeholder } from "./Placeholder";

export function GalleryGrid({ items }: { items: Asset[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const viewable = items.map((a, i) => ({ ...a, i })).filter((a) => a.exists);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (open === null || viewable.length === 0) return;
      const pos = viewable.findIndex((v) => v.i === open);
      setOpen(viewable[(pos + dir + viewable.length) % viewable.length].i);
    },
    [open, viewable],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <ul className="gallery">
        {items.map((a, i) => (
          <li key={a.src}>
            {a.exists ? (
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={`Clinic gallery photo ${i + 1}`} loading="lazy" />
              </button>
            ) : (
              <Placeholder label={`Gallery photo ${i + 1}`} />
            )}
          </li>
        ))}
      </ul>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setOpen(null)}>
          <button type="button" className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>
            <Icon name="close" size={28} />
          </button>
          {viewable.length > 1 && (
            <button type="button" className="lb-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}>
              <Icon name="chevronLeft" size={34} />
            </button>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[open].src} alt={`Clinic gallery photo ${open + 1}`} onClick={(e) => e.stopPropagation()} />
          {viewable.length > 1 && (
            <button type="button" className="lb-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}>
              <Icon name="chevronRight" size={34} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
