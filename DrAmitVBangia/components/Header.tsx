"use client";

import { useEffect, useState } from "react";
import { clinics, navLinks, site } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav link for whichever section is in view.
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-info">
            <span className="topbar-hours">
              <strong>Clinic hours:</strong> {clinics[0].hours.join(" · ")}
            </span>
            <span className="topbar-extra">
              <strong>Sector 46, {site.city}</strong> · English &amp; Hindi
            </span>
          </div>
          <a href={site.phoneHref}>
            <strong>Call:</strong> {site.phone}
          </a>
        </div>
      </div>

      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <a href="#home" className="logo" aria-label={`${site.name} – home`}>
            <img src={site.logo} alt={`${site.name} ${site.tagline}`} width={200} height={54} />
          </a>

          <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn header-cta">
            Book Appointment
          </a>

          <button
            type="button"
            className={`menu-toggle${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
