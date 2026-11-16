"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { testimonials, testimonialsIntro } from "../../data/site";
import { QuoteIcon } from "../Icons";
import SectionTitle from "../SectionTitle";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % testimonials.length), 5000);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className="our-client">
      <div className="container">
        <div className="row row--center">
          <div className="col-5">
            <SectionTitle tag={testimonialsIntro.tag} title={testimonialsIntro.title} light>
              <p>{testimonialsIntro.text}</p>
            </SectionTitle>
          </div>
          <div className="col-7">
            <div className="testimonials">
              {testimonials.map((t, i) => (
                <div className={`testimonial${i === active ? " is-active" : ""}`} key={t.name} aria-hidden={i !== active}>
                  <QuoteIcon size={56} className="testimonial__quote" />
                  <p className="testimonial__text">“{t.quote}”</p>
                  <div className="testimonial__author">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <h3>{t.name}</h3>
                      <Link href="/testimonials">Read more reviews</Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="dots">
                {testimonials.map((t, i) => (
                  <button
                    type="button"
                    key={t.name}
                    className={i === active ? "is-active" : undefined}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
