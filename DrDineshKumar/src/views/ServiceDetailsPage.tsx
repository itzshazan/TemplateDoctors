"use client";

import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { CheckIcon } from "../components/Icons";
import { serviceChecklist, type Service, type ServiceQA } from "../data/services";

function Answer({ item }: { item: ServiceQA }) {
  return (
    <>
      {item.a && <p>{item.a}</p>}
      {item.list && (
        <ul className="dash-list">
          {item.list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function ServiceDetailsPage({ service }: { service: Service }) {
  const [open, setOpen] = useState(0);
  const [hero, side] = service.images;

  return (
    <>
      <PageHeader title={service.title} />
      <section className="service-details">
        <div className="container">
          {hero && (
            <div className="service-details__image">
              <img src={hero} alt={service.title} />
            </div>
          )}
          <h3 className="service-details__title">{service.title}</h3>
          <p className="service-details__text">{service.intro}</p>

          <div className="service-details__image-content row row--center">
            <div className="col-7">
              <p className="service-details__text">{service.detail}</p>
              <ul className="service-details__list">
                {serviceChecklist.map((item) => (
                  <li key={item}>
                    <CheckIcon size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-5">
              {side && (
                <div className="service-details__side-image">
                  <img src={side} alt="" loading="lazy" />
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <h3 className="service-details__sub-title">More information</h3>
              <div className="accordion">
                {service.qa.map((item, i) => (
                  <div className={`accordion__item${open === i ? " is-open" : ""}`} key={item.q}>
                    <button type="button" className="accordion__title" onClick={() => setOpen(open === i ? -1 : i)}>
                      <h4>{item.q}</h4>
                    </button>
                    {open === i && (
                      <div className="accordion__content">
                        <Answer item={item} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-4">
              <h3 className="service-details__sub-title">Some Facts</h3>
              <div className="facts-box">
                {service.facts.intro && <p>{service.facts.intro}</p>}
                <ul>
                  {service.facts.list.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {service.facts.outro && <p>{service.facts.outro}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand label="Need to See a Doctor?" />
    </>
  );
}
