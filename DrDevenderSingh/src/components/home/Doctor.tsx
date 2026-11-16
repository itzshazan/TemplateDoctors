import React from "react";
import { doctor } from "../../data/site";
import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";

export default function Doctor() {
  return (
    <section className="doctor">
      <div className="container">
        <div className="row row--end">
          <div className="col-5">
            <Reveal direction="left" className="doctor__image">
              <img src={doctor.image} alt={doctor.title} />
            </Reveal>
          </div>
          <div className="col-7">
            <Reveal direction="right" className="doctor__content">
              <SectionTitle tag={doctor.tag} title={doctor.title} light />
              {doctor.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
