"use client";

import { useEffect, useState } from "react";
import { slides } from "@/data/site";
import { Icon } from "./Icon";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const go = (step: number) => setIndex((i) => (i + step + slides.length) % slides.length);

  return (
    <section id="home" className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`hero-slide ${i === index ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        >
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="hero-eyebrow">{slide.eyebrow}</span>
            <span className="hero-subtitle">{slide.subtitle}</span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <a href="#contact" className="btn btn-primary">
              Appointment
            </a>
          </div>
        </div>
      ))}

      <button className="hero-arrow hero-prev" aria-label="Previous slide" onClick={() => go(-1)}>
        <Icon name="chevronLeft" size={26} />
      </button>
      <button className="hero-arrow hero-next" aria-label="Next slide" onClick={() => go(1)}>
        <Icon name="chevronRight" size={26} />
      </button>
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.title}
            className={i === index ? "is-active" : ""}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
