"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { contact, navLinks } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav link of the section currently in view.
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

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href={`mailto:${contact.email}`}>
              <Icon name="mail" size={15} /> {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <Icon name="phone" size={15} /> {contact.phone}
            </a>
          </div>
          <p className="topbar-note">Consulting at {contact.hospital}, Gurugram</p>
          <div className="topbar-social">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={15} />
            </a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-logo">
              <Image src={contact.photo} alt="" width={52} height={52} priority />
            </span>
            <span className="brand-text">
              <strong>{contact.doctorName}</strong>
              <small>{contact.title}</small>
            </span>
          </a>

          <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta"
              onClick={() => setOpen(false)}
            >
              Book at Fortis
            </a>
          </nav>

          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </header>
    </>
  );
}
