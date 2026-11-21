"use client";

import { useEffect, useState } from "react";
import { images, navLinks, site } from "@/data/site";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [solid, setSolid] = useState(false);

  // One-page site: highlight the link for the section currently on screen.
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
      let current = navLinks[0].id;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${solid || open ? " is-solid" : ""}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Icon name="pin" size={15} /> {site.address}</span>
          <a href={site.emergencyHref}><Icon name="siren" size={15} /> 24/7 Emergency: {site.emergencyPhone}</a>
        </div>
      </div>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)} aria-label={`${site.name}, home`}>
          <img src={images.logoWhite} alt={`${site.name} logo`} width={200} height={75} />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={site.phoneHref} className="header-phone">
          <span className="hp-icon"><Icon name="phone" size={18} /></span>
          <span><small>Appointments</small>{site.phone}</span>
        </a>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
