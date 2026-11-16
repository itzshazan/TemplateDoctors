import React from "react";
import { clinic, mapSection } from "../../data/site";
import { MapPinIcon, PhoneIcon } from "../Icons";
import SectionTitle from "../SectionTitle";

export default function MapSection() {
  return (
    <section className="map" style={{ backgroundImage: `url(${mapSection.background})` }}>
      <div className="container">
        <div className="row row--center">
          <div className="col-5">
            <SectionTitle tag={mapSection.tag} title={mapSection.title} light />
            <div className="map__info">
              <MapPinIcon size={22} />
              <p>
                {clinic.addressLines.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="map__info">
              <PhoneIcon size={22} />
              <a href={clinic.phoneHref}>{clinic.phone}</a>
            </div>
            <a href={clinic.googleReview} className="thm-btn" target="_blank" rel="noopener noreferrer">
              Write Us a Google Review
            </a>
          </div>
          <div className="col-7">
            <div className="map__frame">
              <iframe title="Clinic location" src={clinic.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
