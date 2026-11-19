"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { SITE, tel, treatmentPath, type Treatment } from "@/config/site";

interface NavItem {
  label: string;
  href: string;
  children?: Treatment[];
}

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const isMobile = () => window.matchMedia("(max-width: 1024px)").matches;

export default function Header() {
  // trailingSlash is on, so normalise "/about/" → "/about"
  const pathname = usePathname().replace(/(.)\/$/, "$1");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu after navigating
  useEffect(() => {
    setMenuOpen(false);
    setOpenSub(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A treatment page counts as "inside" Services or Conditions
  const isActive = (item: NavItem) =>
    pathname === item.href || (item.children?.some((c) => pathname === treatmentPath(c)) ?? false);

  // On mobile the first tap on a parent item opens its submenu instead of navigating
  const onParentClick = (e: MouseEvent, item: NavItem) => {
    if (item.children && isMobile() && openSub !== item.href) {
      e.preventDefault();
      setOpenSub(item.href);
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="container">
          <ul>
            {SITE.email && <li><Icon name="mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
            <li className="hide-sm"><Icon name="pin" /><span>{SITE.address}</span></li>
          </ul>
          <ul>
            <li className="hide-sm"><Icon name="clock" /><span>{SITE.hours}</span></li>
            <li><Icon name="phone" /><a href={tel(SITE.phone)}>{SITE.phone}</a></li>
          </ul>
        </div>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " nav-open" : ""}`}>
        <div className="header-main">
          <div className="container">
            <Link className="logo" href="/" aria-label={`${SITE.name} — home`}>
              <img src="/img/logo.svg" alt={SITE.name} width={260} height={60} />
            </Link>

            <nav className="main-nav" aria-label="Main">
              <ul className="nav-menu">
                {NAV.map((item) => {
                  const classes = [
                    item.children ? "has-sub" : "",
                    openSub === item.href ? "sub-open" : "",
                    isActive(item) ? "is-active" : "",
                  ].join(" ").trim();
                  return (
                    <li key={item.href} className={classes || undefined}>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        onClick={(e) => onParentClick(e, item)}
                      >
                        {item.label}
                        {item.children && (
                          <svg className="caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" /></svg>
                        )}
                      </Link>
                      {item.children && (
                        <ul className="submenu">
                          {item.children.map((c) => (
                            <li key={c.id}><Link href={treatmentPath(c)}>{c.title}</Link></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a className="call-box" href={tel(SITE.emergencyPhone)}>
              <Icon name="phone" />
              <span><small>Call For Appointment</small>{SITE.emergencyPhone}</span>
            </a>

            <button
              className="nav-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
