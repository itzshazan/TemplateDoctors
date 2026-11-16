import React from "react";
import Link from "next/link";
import { welcome } from "../../data/site";
import { CheckIcon } from "../Icons";
import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";

export default function Welcome() {
  return (
    <section className="provide-service">
      <div className="container">
        <div className="row row--center">
          <div className="col-6">
            <Reveal direction="left">
              <SectionTitle
                tag={welcome.tag}
                title={
                  <>
                    {welcome.title}
                    <span className="block-title__subtitle">{welcome.subtitle}</span>
                  </>
                }
              />
              {welcome.paragraphs.map((p) => (
                <p className="text" key={p.slice(0, 20)}>
                  {p}
                </p>
              ))}
              <ul className="check-list">
                {welcome.list.map((item) => (
                  <li key={item}>
                    <CheckIcon size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/service" className="thm-btn">
                Know More
              </Link>
            </Reveal>
          </div>
          <div className="col-6">
            <Reveal direction="right" className="provide-service__images">
              <img src={welcome.images[0]} alt="Consultation at Kashvi Mediclinic" className="provide-service__img-one" />
              <img src={welcome.images[1]} alt="Kashvi Mediclinic" className="provide-service__img-two" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
