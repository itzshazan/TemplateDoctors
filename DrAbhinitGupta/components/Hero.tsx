"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { contact, heroSlides } from "@/data/site";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section id="home" className="hero">
      {heroSlides.map((slide, i) => (
        <div key={slide.title} className={`hero-slide ${i === index ? "is-active" : ""}`} aria-hidden={i !== index}>
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">{slide.eyebrow}</span>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <div className="hero-actions">
                <a href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book at Regency <Icon name="external" size={18} />
                </a>
                <a href="#clinic" className="btn btn-ghost">
                  OPD Timings <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-photo">
                <Image
                  src={slide.image}
                  alt={contact.doctorName}
                  fill
                  sizes="(max-width: 900px) 80vw, 420px"
                  priority={i === 0}
                  style={{ objectPosition: slide.position }}
                />
              </div>
              <div className="hero-badge">
                <Icon name="award" size={20} />
                <span>
                  <strong>DM Cardiology</strong> · AIIMS, Gold Medal
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            className={i === index ? "is-active" : ""}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
