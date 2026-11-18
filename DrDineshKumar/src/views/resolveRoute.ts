import { doctorProfile, gridPages, type GridPage } from "../data/pages";
import { clinic } from "../data/site";

/** Every template a URL can map to, with the data it needs. */
export type ResolvedRoute = { kind: "doctor-profile" } | { kind: "grid"; page: GridPage } | { kind: "not-found" };

const matches = (path: string, page: { path: string; aliases?: string[] }) => page.path === path || !!page.aliases?.includes(path);

/** Maps a URL path to the template that renders it. */
export function resolveRoute(rawPath: string): ResolvedRoute {
  const path = decodeURIComponent(rawPath).replace(/\/+$/, "") || "/";
  if (matches(path, doctorProfile)) return { kind: "doctor-profile" };
  const grid = gridPages.find((g) => g.path === path);
  if (grid) return { kind: "grid", page: grid };
  return { kind: "not-found" };
}

/** Browser-tab title for a resolved route. */
export function routeTitle(route: ResolvedRoute): string {
  switch (route.kind) {
    case "doctor-profile":
      return doctorProfile.bannerTitle;
    case "grid":
      return `${route.page.title} - ${clinic.doctor}`;
    case "not-found":
      return "Page not found";
  }
}

/** All known URLs, pre-rendered at build time. */
export function allRoutePaths(): string[] {
  return [doctorProfile.path, ...doctorProfile.aliases, ...gridPages.map((g) => g.path)];
}
