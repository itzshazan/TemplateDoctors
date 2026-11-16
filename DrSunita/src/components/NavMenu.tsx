"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, services } from "@/data/site";
import { Icon } from "./Icons";

export function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="navigation-area" aria-label="Main">
      <button
        type="button"
        className="mobnav"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "menu"} size={22} />
        <span>Menu</span>
      </button>

      <ul id="main-menu" className={open ? "open" : undefined}>
        {nav.map((item) =>
          "children" in item ? (
            <li key={item.href} className={`has-sub${isActive(item.href) ? " act" : ""}${subOpen ? " sub-open" : ""}`}>
              <Link href={item.href}>
                {item.label} <Icon name="caretDown" size={16} />
              </Link>
              <button
                type="button"
                className="mobnav2"
                aria-label="Toggle services menu"
                aria-expanded={subOpen}
                onClick={() => setSubOpen((v) => !v)}
              >
                <Icon name="caretDown" size={20} />
              </button>
              <ul className="lavel">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`}>{s.menuLabel}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.href} className={`${item.href === "/" ? "home-nav" : ""}${isActive(item.href) ? " act" : ""}`.trim() || undefined}>
              <Link href={item.href} aria-label={item.href === "/" ? item.label : undefined}>
                {item.href === "/" ? (
                  <>
                    <Icon name="home" size={24} className="home-icon" />
                    <span className="home-label">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
