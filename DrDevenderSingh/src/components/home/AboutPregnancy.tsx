import React from "react";
import { aboutPregnancy } from "../../data/site";
import Reveal from "../Reveal";

export default function AboutPregnancy() {
  return (
    <section className="about-one">
      <div className="container">
        <div className="row row--center">
          <div className="col-6">
            <Reveal direction="left" className="about-one__images">
              <img src={aboutPregnancy.images[0]} alt="Laparoscopic surgery" className="about-one__img-one" />
              <img src={aboutPregnancy.images[1]} alt="Hospital ward" className="about-one__img-two" />
            </Reveal>
          </div>
          <div className="col-6">
            <Reveal direction="right">
              <div className="block-title">
                <h2 className="block-title__tag block-title__tag--dark">{aboutPregnancy.tag}</h2>
                <p className="block-title__title">{aboutPregnancy.title}</p>
              </div>
              {aboutPregnancy.paragraphs.map((p) => (
                <p className="text" key={p.slice(0, 20)}>
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
