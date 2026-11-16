"use client";

import React from "react";
import useInView from "../hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

/** Fades its children in when scrolled into view (replaces WOW.js / animate.css from the original theme). */
export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction}${inView ? " is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
