import React from "react";

interface SectionTitleProps {
  tag: string;
  title: React.ReactNode;
  light?: boolean;
  center?: boolean;
  children?: React.ReactNode;
}

export default function SectionTitle({ tag, title, light, center, children }: SectionTitleProps) {
  return (
    <div className={`block-title${light ? " block-title--light" : ""}${center ? " block-title--center" : ""}`}>
      <p className="block-title__tag">{tag}</p>
      <h2 className="block-title__title">{title}</h2>
      {children && <div className="block-title__text">{children}</div>}
    </div>
  );
}
