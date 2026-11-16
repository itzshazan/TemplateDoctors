"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { hasPhone, navLinks, site } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSub(null);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            {hasPhone ? (
              <a href={site.phoneHref}>
                <Icon name="phone" size={15} /> {site.phone}
              </a>
            ) : (
              <span>
                <Icon name="eye" size={15} /> {site.role}
              </span>
            )}
            {site.email ? (
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" size={15} /> {site.email}
              </a>
            ) : (
              <span className="hide-sm">
                <Icon name="award" size={15} /> {site.experienceYears} Years of Experience
              </span>
            )}
          </div>
          <a className="topbar-right" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" size={15} /> {site.clinic}, {site.shortAddress}
          </a>
        </div>
      </div>

      <header className={`header ${scrolled ? "is-stuck" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={`${site.clinic} home`}>
            <img src={site.logo} alt="" width={46} height={46} />
            <span>
              <strong>{site.name}</strong>
              <small>{site.clinic}</small>
            </span>
          </Link>

          <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href} className={l.children ? "has-sub" : ""}>
                  <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                    {l.label}
                  </Link>
                  {l.children && (
                    <>
                      <button
                        className="sub-toggle"
                        aria-label={`Show ${l.label} menu`}
                        aria-expanded={sub === l.href}
                        onClick={() => setSub(sub === l.href ? null : l.href)}
                      >
                        <Icon name="chevron" size={16} />
                      </button>
                      <ul className={`submenu ${sub === l.href ? "is-open" : ""}`}>
                        {l.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href}>{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-cta">
            {hasPhone ? (
              <a className="btn btn-red" href={site.phoneHref}>
                <Icon name="phone" size={18} /> Call Now
              </a>
            ) : (
              <Link className="btn btn-red" href="/contact">
                <Icon name="calendar" size={18} /> Book Visit
              </Link>
            )}
            <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <Icon name={open ? "close" : "menu"} size={26} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
