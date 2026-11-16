"use client";

import React, { useEffect } from "react";
import { CloseIcon } from "./Icons";

interface VideoModalProps {
  src: string;
  onClose: () => void;
}

export default function VideoModal({ src, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="video-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="video-modal__inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="video-modal__close" aria-label="Close video" onClick={onClose}>
          <CloseIcon size={28} />
        </button>
        <iframe src={src} title="Clinic video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      </div>
    </div>
  );
}
