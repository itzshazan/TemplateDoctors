"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

/** Floating "back to top" button (Next.js already resets scroll on navigation). */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? " is-visible" : ""}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon size={20} />
    </button>
  );
}
