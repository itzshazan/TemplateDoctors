"use client";

import { useState } from "react";
import Icon from "./Icon";

/** Shows a play placeholder; loads the YouTube iframe only when clicked. */
export default function VideoEmbed({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame" onClick={() => src && setPlaying(true)}>
      {playing ? (
        <iframe
          src={`${src}${src.includes("?") ? "&" : "?"}autoplay=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Video"
        />
      ) : (
        <div className="play">
          <span><Icon name="play" className="" /></span>
          {src ? "Watch video" : "Add your video URL in src/config/content.ts"}
        </div>
      )}
    </div>
  );
}
