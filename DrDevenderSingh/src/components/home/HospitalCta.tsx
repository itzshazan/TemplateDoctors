import React from "react";
import { hospitalCta } from "../../data/site";
import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";

export default function HospitalCta() {
  return (
    <section className="cta2-section">
      <div className="container">
        <div className="cta2-section__bg" style={{ backgroundImage: `url(${hospitalCta.background})` }}>
          <Reveal className="cta2-section__content">
            <SectionTitle tag={hospitalCta.tag} title={hospitalCta.title} />
            <p className="text">{hospitalCta.text}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
