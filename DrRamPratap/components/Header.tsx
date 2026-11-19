"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // One-page site: highlight the link for the section currently on screen.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = navLinks[0].id;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-pill">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">RP</span>
          <span className="brand-text">
            <strong>{site.shortName}</strong>
            <small>{site.role}</small>
          </span>
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={site.phoneHref} className="nav-call">
            <Icon name="phone" size={16} /> {site.phone}
          </a>
        </nav>
        <a href="#contact" className="btn btn-accent header-cta">Book a Session</a>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
