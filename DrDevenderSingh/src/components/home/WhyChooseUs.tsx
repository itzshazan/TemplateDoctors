import React from "react";
import Link from "next/link";
import { whyChooseUs } from "../../data/site";
import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <SectionTitle tag={whyChooseUs.tag} title={whyChooseUs.title} />
            <p className="text">{whyChooseUs.text}</p>
            <Link href="/about-kashvi-mediclinic" className="thm-btn">
              About Us
            </Link>
          </div>
          <div className="col-7">
            <div className="choose-grid">
              {whyChooseUs.features.map((f, i) => (
                <Reveal key={f.title.join(" ")} delay={i * 100}>
                  <div className="choose-card">
                    <div className="choose-card__head">
                      <h4>
                        {f.title[0]}
                        <br />
                        {f.title[1]}
                      </h4>
                      <img src={f.icon} alt="" />
                    </div>
                    <p>{f.text}</p>
                    <img src={f.icon} alt="" className="choose-card__watermark" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
