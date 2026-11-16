"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { hasPhone, navLinks, site } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" size={15} /> {site.shortAddress}
          </a>
          <span className="hide-sm">
            {hasPhone ? (
              <a href={site.phoneHref}>
                <Icon name="phone" size={15} /> {site.phone}
              </a>
            ) : (
              <>
                <Icon name="female" size={15} /> {site.role} · Women&apos;s Health Clinic
              </>
            )}
          </span>
        </div>
      </div>
      <header className={`header ${scrolled ? "is-stuck" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={`${site.clinic} home`}>
            <img src={site.logo} alt="" width={48} height={48} />
            <span>
              <strong>{site.name}</strong>
              <small>{site.role}</small>
            </span>
          </Link>
          <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-cta">
            {hasPhone ? (
              <a className="btn btn-primary" href={site.phoneHref}>
                <Icon name="phone" size={18} /> Call Now
              </a>
            ) : (
              <a className="btn btn-primary" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="directions" size={18} /> <span className="hide-sm">Get </span>Directions
              </a>
            )}
            <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <Icon name={open ? "close" : "menu"} size={26} />
            </button>
          </div>
        </div>
      </header>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
