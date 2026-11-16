"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";

/**
 * Lightweight responsive carousel (replaces the original jQuery slick slider).
 * `perView` maps minimum viewport widths to the number of visible slides.
 */
export function Carousel({
  children,
  perView = { 0: 1, 600: 2, 900: 3, 1100: 4 },
  autoplay = 4000,
  className = "",
  label,
  controls = "dots",
}: {
  children: React.ReactNode;
  perView?: Record<number, number>;
  autoplay?: number | false;
  className?: string;
  label: string;
  controls?: "dots" | "arrows";
}) {
  const items = Children.toArray(children);
  const [visible, setVisible] = useState(1);
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const n = Object.entries(perView)
        .map(([bp, v]) => [Number(bp), v] as const)
        .filter(([bp]) => w >= bp)
        .sort((a, b) => b[0] - a[0])[0]?.[1];
      setVisible(Math.min(n ?? 1, items.length));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [perView, items.length]);

  const max = Math.max(0, items.length - visible);
  const go = useCallback((i: number) => setStart(i > max ? 0 : i < 0 ? max : i), [max]);

  useEffect(() => {
    if (start > max) setStart(max);
  }, [start, max]);

  useEffect(() => {
    if (!autoplay || paused || max === 0) return;
    const t = setTimeout(() => go(start + 1), autoplay);
    return () => clearTimeout(t);
  }, [autoplay, paused, start, max, go]);

  return (
    <div
      className={`carousel ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      ref={wrap}
    >
      <div className="carousel-viewport">
        <ul
          className="carousel-track"
          style={{ transform: `translateX(-${(start * 100) / visible}%)` }}
        >
          {items.map((child, i) => (
            <li key={i} style={{ flex: `0 0 ${100 / visible}%` }} aria-hidden={i < start || i >= start + visible}>
              {child}
            </li>
          ))}
        </ul>
      </div>
      {max > 0 && controls === "dots" && (
        <div className="carousel-dots">
          {Array.from({ length: max + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === start ? "on" : undefined}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === start}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
      {max > 0 && controls === "arrows" && (
        <>
          <button type="button" className="carousel-arrow prev" aria-label="Previous" onClick={() => go(start - 1)}>
            <Icon name="chevronLeft" size={22} />
          </button>
          <button type="button" className="carousel-arrow next" aria-label="Next" onClick={() => go(start + 1)}>
            <Icon name="chevronRight" size={22} />
          </button>
        </>
      )}
    </div>
  );
}
