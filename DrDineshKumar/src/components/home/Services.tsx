"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { services, servicesIntro } from "../../data/site";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";
import SectionTitle from "../SectionTitle";

/** How many cards fit side by side for the current viewport width. */
function usePerView() {
  // Start at the desktop value so server and client render the same markup, then measure.
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth < 640 ? 1 : window.innerWidth < 992 ? 2 : 3);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return perView;
}

export default function Services() {
  const perView = usePerView();
  const maxIndex = Math.max(0, services.length - perView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const move = (dir: number) => setIndex((i) => (i + dir < 0 ? maxIndex : i + dir > maxIndex ? 0 : i + dir));

  return (
    <section className="dental-services">
      <div className="container">
        <div className="row row--end">
          <div className="col-6">
            <SectionTitle tag={servicesIntro.tag} title={servicesIntro.title} />
          </div>
          <div className="col-6">
            <p className="text">{servicesIntro.text}</p>
          </div>
        </div>

        <div className="slider">
          <div
            className="slider__track"
            style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
          >
            {services.map((s) => (
              <div className="slider__item" key={s.title} style={{ flexBasis: `${100 / perView}%` }}>
                <div className="service-card">
                  <div className="service-card__image">
                    <img src={s.image} alt={s.title} loading="lazy" />
                  </div>
                  <div className="service-card__body">
                    <h3>
                      <Link href={s.to}>{s.title}</Link>
                    </h3>
                    <p>{s.text}</p>
                    <Link href={s.to} className="service-card__more" aria-label={`Read more about ${s.title}`}>
                      <ArrowRightIcon size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider__nav">
          <button type="button" aria-label="Previous" onClick={() => move(-1)}>
            <ArrowLeftIcon size={18} />
          </button>
          <button type="button" aria-label="Next" onClick={() => move(1)}>
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
