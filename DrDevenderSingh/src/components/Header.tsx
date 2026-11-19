"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinic, navigation, type NavItem } from "../data/site";
import SmartLink from "./SmartLink";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
} from "./Icons";

function DropdownItem({ item }: { item: NavItem }) {
  const target = item.to ?? item.href;
  const label = (
    <>
      <span>{item.label}</span>
      {item.children && <ChevronRightIcon size={14} />}
    </>
  );
  return (
    <li className={item.children ? "has-children" : undefined}>
      {target ? (
        <SmartLink to={target}>{label}</SmartLink>
      ) : (
        <a href="#" onClick={(e) => e.preventDefault()}>
          {label}
        </a>
      )}
      {item.children && (
        <ul className="dropdown dropdown--sub">
          {item.children.map((child) => (
            <DropdownItem key={child.label + (child.to ?? "")} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [open, setOpen] = useState(false);
  const target = item.to ?? item.href;
  return (
    <li className={`mobile-nav__item depth-${depth}`}>
      <div className="mobile-nav__row">
        {target ? (
          <SmartLink to={target}>{item.label}</SmartLink>
        ) : (
          <button type="button" className="mobile-nav__label" onClick={() => setOpen(!open)}>
            {item.label}
          </button>
        )}
        {item.children && (
          <button
            type="button"
            className={`mobile-nav__toggle${open ? " is-open" : ""}`}
            aria-label={`Toggle ${item.label}`}
            onClick={() => setOpen(!open)}
          >
            <ChevronDownIcon size={18} />
          </button>
        )}
      </div>
      {item.children && open && (
        <ul className="mobile-nav__sub">
          {item.children.map((child) => (
            <MobileItem key={child.label + (child.to ?? "")} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");
  // One-page site: an item is active while its section is on screen.
  const isActive = (to: string) => pathname === "/" && to.endsWith(`#${activeId}`);

  useEffect(() => {
    const ids = ["home", "about", "services", "gallery", "contact"];
    const onScroll = () => {
      setSticky(window.scrollY > 220);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top__inner">
          <p>{clinic.tagline}</p>
        </div>
      </div>

      <div className="header-middle">
        <div className="container header-middle__inner">
          <Link href="/" className="logo" title={clinic.doctor}>
            <img src={clinic.logo} alt={clinic.name} />
          </Link>
          <div className="header-contact">
            <div className="header-contact__item">
              <span className="header-contact__icon">
                <ClockIcon size={22} />
              </span>
              <div>
                <p>Evening OPD</p>
                <h4>4:00 pm – 8:30 pm</h4>
              </div>
            </div>
            <div className="header-contact__item">
              <span className="header-contact__icon">
                <PhoneIcon size={22} />
              </span>
              <div>
                <p>Phone Number</p>
                <h4>
                  <a href={clinic.phoneHref}>{clinic.phone}</a>
                </h4>
              </div>
            </div>
          </div>
          <button type="button" className="menu-toggler" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <MenuIcon size={26} />
          </button>
        </div>
      </div>

      <nav className={`main-nav${sticky ? " is-sticky" : ""}`}>
        <div className="container main-nav__inner">
          <Link href="/" className="main-nav__sticky-logo">
            <img src={clinic.logo} alt={clinic.name} />
          </Link>
          <ul className="main-nav__menu">
            {navigation.map((item) => (
              <li key={item.label} className={item.children ? "has-children" : undefined}>
                {item.to ? (
                  <Link href={item.to} className={isActive(item.to) ? "active" : undefined}>
                    {item.label}
                    {item.children && <ChevronDownIcon size={14} />}
                  </Link>
                ) : (
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {item.label}
                    {item.children && <ChevronDownIcon size={14} />}
                  </a>
                )}
                {item.children && (
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <DropdownItem key={child.label} item={child} />
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="/#contact" className="thm-btn main-nav__btn">
            Book an Appointment
          </Link>
        </div>
      </nav>
      {/* keeps layout from jumping when the nav becomes fixed */}
      {sticky && <div className="main-nav__spacer" />}

      <div className={`mobile-nav${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-nav__overlay" onClick={() => setMobileOpen(false)} />
        <div className="mobile-nav__panel">
          <div className="mobile-nav__head">
            <img src={clinic.logo} alt={clinic.name} />
            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <CloseIcon size={24} />
            </button>
          </div>
          <ul className="mobile-nav__list" onClick={(e) => (e.target as HTMLElement).closest("a") && setMobileOpen(false)}>
            {navigation.map((item) => (
              <MobileItem key={item.label} item={item} />
            ))}
          </ul>
          <div className="mobile-nav__contact">
            {clinic.email && (
              <a href={`mailto:${clinic.email}`}>
                <MailIcon /> {clinic.email}
              </a>
            )}
            <a href={clinic.phoneHref}>
              <PhoneIcon /> {clinic.phone}
            </a>
            <Link href="/#contact" className="thm-btn" onClick={() => setMobileOpen(false)}>
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
