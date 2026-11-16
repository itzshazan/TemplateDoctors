"use client";

import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";
import type { Testimonial } from "@/config/content";

const INTERVAL = 5000;

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next, items.length, index]);

  return (
    <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((t, i) => (
          <div className="slide" key={i} aria-hidden={i !== index}>
            <div className="t-card">
              <Icon name="quote" className="quote" />
              <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }, (_, s) => <Icon key={s} name="star" />)}
              </div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="t-author">
                <img src={t.avatar} alt="" width={70} height={70} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {items.map((_, i) => (
          <button key={i} aria-label={`Show testimonial ${i + 1}`} aria-current={i === index} onClick={() => setIndex(i)} />
        ))}
      </div>
    </div>
  );
}
