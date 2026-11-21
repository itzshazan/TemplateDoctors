"use client";

import { useEffect, useState } from "react";
import { images, navLinks, site } from "@/data/site";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // One-page site: highlight the link for the section currently on screen.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
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
      <div className="ribbon" aria-label="Qualifications">
        <div className="container ribbon-inner">
          {site.degrees.map((d) => <span key={d}>{d}</span>)}
        </div>
      </div>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <img src={images.logo} alt={site.clinic} width={998} height={344} />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={site.phoneHref} className="nav-call"><Icon name="phone" size={16} /> {site.phone}</a>
        </nav>
        <a href="#contact" className="btn btn-berry header-cta"><Icon name="calendar" size={17} /> Book a Visit</a>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
