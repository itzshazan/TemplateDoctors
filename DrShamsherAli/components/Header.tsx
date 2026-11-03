"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Icon } from "./Icon";
import { Logo } from "./Art";
import { ContactForm } from "./ContactForm";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    // Highlight the nav link for whichever section is in the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href="#home" className="brand">
            <Logo size={50} />
            <span>
              <strong>{site.name}</strong>
              <small>{site.doctor}</small>
            </span>
          </a>
          <div className="topbar-contact">
            <a href={site.phoneHref}>
              <span className="topbar-icon">
                <Icon name="phone" size={16} />
              </span>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <span className="topbar-icon">
                <Icon name="mail" size={16} />
              </span>
              {site.email}
            </a>
            <button className="btn btn-primary" onClick={() => setDrawerOpen(true)}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container navbar-inner">
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
          <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {site.social.length > 0 && (
            <div className="socials">
              {site.social.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icon} size={15} />
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className={`drawer-backdrop ${drawerOpen ? "is-open" : ""}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "is-open" : ""}`} aria-hidden={!drawerOpen}>
        <button className="drawer-close" aria-label="Close" onClick={() => setDrawerOpen(false)}>
          <Icon name="close" size={22} />
        </button>
        <ContactForm title="Make an Appointment" />
      </aside>
    </>
  );
}
