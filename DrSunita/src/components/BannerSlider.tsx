"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Asset } from "@/lib/assets";

type Slide = { image: Asset; kicker: string; title: string; href: string };

export function BannerSlider({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(t);
  }, [index, paused, interval, go, slides.length]);

  return (
    <section
      className="banner"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className="rslides">
        {slides.map((s, i) => (
          <li
            key={i}
            className={i === index ? "active" : undefined}
            aria-hidden={i !== index}
            style={s.image.exists ? { backgroundImage: `url(${s.image.src})` } : undefined}
            data-placeholder={s.image.exists ? undefined : ""}
          >
            <div className="lay-width banner-txt-area">
              <div className="b-textbg">
                <h3>{s.kicker}</h3>
                <h2>{s.title}</h2>
                <Link href={s.href} tabIndex={i === index ? 0 : -1}>
                  Read More
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="lay-width banner-pager-wrap">
        <ul className="banner-pager">
          {slides.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                className={i === index ? "on" : undefined}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
