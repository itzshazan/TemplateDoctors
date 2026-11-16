"use client";

import React, { useState } from "react";
import { clinic, featureStrip } from "../../data/site";
import { PlayIcon } from "../Icons";
import SmartLink from "../SmartLink";
import VideoModal from "../VideoModal";

export default function FeatureStrip() {
  const [video, setVideo] = useState(false);

  return (
    <section className="feature">
      <div className="container">
        <div className="feature__inner">
          <div className="feature__image" style={{ backgroundImage: `url(${featureStrip.image})` }}>
            {clinic.introVideo && (
              <button type="button" className="video-btn" aria-label="Play video" onClick={() => setVideo(true)}>
                <PlayIcon size={18} />
              </button>
            )}
          </div>
          {featureStrip.items.map((item) => {
            const body = (
              <>
                <img src={item.icon} alt="" className="feature__icon" />
                <h4>{item.title}</h4>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </>
            );
            return (
              <div className="feature__block" key={item.title}>
                {item.link ? <SmartLink to={item.link}>{body}</SmartLink> : body}
              </div>
            );
          })}
        </div>
      </div>
      {video && <VideoModal src={clinic.introVideo} onClose={() => setVideo(false)} />}
    </section>
  );
}
