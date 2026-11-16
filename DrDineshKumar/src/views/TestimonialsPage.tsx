import React from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { QuoteIcon } from "../components/Icons";
import { testimonialsPage as page } from "../data/pages";
import { clinic } from "../data/site";

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader title={page.title} />
      <section className="testimonials-page">
        <div className="container">
          <div className="block-title block-title--center">
            <p className="block-title__tag">{page.tag}</p>
            <h2 className="block-title__title">{page.heading}</h2>
            <div className="block-title__text">
              <p>{page.intro}</p>
            </div>
          </div>
          {page.items.length === 0 && (
            <p style={{ textAlign: "center" }}>
              <a href={clinic.googleReview} target="_blank" rel="noopener noreferrer" className="thm-btn">
                Read &amp; write reviews on Google
              </a>
            </p>
          )}
          <div className="testimonials-page__grid">
            {page.items.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <img src={t.avatar} alt={t.name} className="testimonial-card__avatar" />
                <p className="testimonial-card__text">
                  {t.quote ? (
                    `“${t.quote}”`
                  ) : (
                    <a href={clinic.googleReview} target="_blank" rel="noopener noreferrer">
                      Read our Google reviews
                    </a>
                  )}
                </p>
                <h3>{t.name}</h3>
                <QuoteIcon size={36} className="testimonial-card__quote" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
