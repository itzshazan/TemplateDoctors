"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { hero, heroSlides } from "../../data/site";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

const INTERVAL = 6000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const count = heroSlides.length;

  const go = useCallback((dir: number) => setActive((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    const id = window.setInterval(() => go(1), INTERVAL);
    return () => window.clearInterval(id);
  }, [go, active]);

  return (
    <section className="banner">
      {heroSlides.map((bg, i) => (
        <div
          key={bg}
          className={`banner__slide${i === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden={i !== active}
        >
          <div className="container">
            <div className="banner__content">
              <span className="banner__tag">{hero.tag}</span>
              <h3 className="banner__title">{hero.title}</h3>
              <p className="banner__text">{hero.text}</p>
              <Link href="/contact-us" className="thm-btn" tabIndex={i === active ? 0 : -1}>
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="banner__nav">
        <button type="button" aria-label="Previous slide" onClick={() => go(-1)}>
          <ArrowLeftIcon size={18} />
        </button>
        <button type="button" aria-label="Next slide" onClick={() => go(1)}>
          <ArrowRightIcon size={18} />
        </button>
      </div>
    </section>
  );
}
