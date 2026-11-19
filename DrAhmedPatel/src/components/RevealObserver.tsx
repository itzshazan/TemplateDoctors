"use client";

import { usePathname } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";

/** Mounted once in the root layout; re-scans for `.reveal` elements on every navigation. */
export default function RevealObserver() {
  useReveal(usePathname());
  return null;
}
