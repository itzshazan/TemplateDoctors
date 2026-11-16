import React from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import Doctor from "../components/home/Doctor";
import { CheckIcon } from "../components/Icons";
import { introduction as page } from "../data/pages";

export default function IntroductionPage() {
  return (
    <>
      <PageHeader title={page.title} crumb={page.title} />

      <section className="about-two">
        <div className="container">
          <div className="row row--center">
            <div className="col-6">
              <div className="block-title">
                <p className="block-title__tag">{page.tag}</p>
                <h2 className="block-title__title">{page.heading}</h2>
              </div>
              {page.paragraphs.map((p) => (
                <p className="text" key={p.slice(0, 20)}>
                  {p}
                </p>
              ))}
            </div>
            <div className="col-6">
              <img src={page.image} alt="Hospital ward" className="about-two__image" />
            </div>
          </div>
          <div className="about-two__list-block">
            <p className="text">{page.listIntro}</p>
            <ul className="about-two__list">
              {page.list.map((item) => (
                <li key={item}>
                  <CheckIcon size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Doctor />

      <section className="about-three">
        <div className="container">
          <div className="row row--center">
            <div className="col-8">
              <div className="block-title">
                <p className="block-title__tag">{page.clinic.tag}</p>
                <h2 className="block-title__title">{page.clinic.title}</h2>
              </div>
              {page.clinic.paragraphs.map((p) => (
                <p className="text" key={p.slice(0, 20)}>
                  {p}
                </p>
              ))}
            </div>
            <div className="col-4">
              <img src={page.clinic.image} alt="Siyaram Multi-Speciality Hospital" className="about-three__image" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-three about-three--mission">
        <div className="container">
          <div className="block-title">
            <p className="block-title__tag">{page.mission.tag}</p>
            <h2 className="block-title__title">{page.mission.title}</h2>
          </div>
          {page.mission.paragraphs.map((p) => (
            <p className="text" key={p.slice(0, 20)}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <CtaBand label="Need to See a Doctor?" />
    </>
  );
}
