import { serviceByPath, services, type Service } from "../data/services";
import { doctorProfile, faqPage, galleryPage, gridPages, introduction, testimonialsPage, type GridPage } from "../data/pages";
import { categories, postBySlug, posts, POSTS_PER_PAGE, type PostMeta } from "../data/blog";
import { clinic } from "../data/site";
import { innerPageTitle } from "./InnerPage";

/** Every template a URL can map to, with the data it needs. */
export type ResolvedRoute =
  | { kind: "introduction" }
  | { kind: "doctor-profile" }
  | { kind: "testimonials" }
  | { kind: "faq" }
  | { kind: "gallery" }
  | { kind: "grid"; page: GridPage }
  | { kind: "service"; service: Service }
  | { kind: "service-post"; service: Service }
  | { kind: "blog-list"; title: string; crumb: string; posts: PostMeta[]; page: number; basePath: string }
  | { kind: "post"; post: PostMeta }
  | { kind: "fallback"; path: string };

const matches = (path: string, page: { path: string; aliases?: string[] }) => page.path === path || !!page.aliases?.includes(path);

/** Splits "/blogs/page/3" into { base: "/blogs", page: 3 }. */
function parsePaged(path: string) {
  const m = path.match(/^(.*)\/page\/(\d+)$/);
  return m ? { base: m[1], page: Number(m[2]) } : { base: path, page: 1 };
}

/** Maps a URL path (e.g. "/high-risk-pregnancy") to the template that renders it. */
export function resolveRoute(rawPath: string): ResolvedRoute {
  const path = decodeURIComponent(rawPath).replace(/\/+$/, "") || "/";

  if (matches(path, introduction)) return { kind: "introduction" };
  if (matches(path, doctorProfile)) return { kind: "doctor-profile" };
  if (matches(path, testimonialsPage)) return { kind: "testimonials" };
  if (matches(path, faqPage)) return { kind: "faq" };
  if (matches(path, galleryPage)) return { kind: "gallery" };

  const grid = gridPages.find((g) => g.path === path);
  if (grid) return { kind: "grid", page: grid };

  // Menu URLs use the service-details layout; the old /service/... URLs use the post layout.
  const svc = serviceByPath[path];
  if (svc) return svc.alias && path.startsWith("/service/") ? { kind: "service-post", service: svc.service } : { kind: "service", service: svc.service };

  const { base, page } = parsePaged(path);
  if (base === "/blogs") return { kind: "blog-list", title: "Health Tips - Dr. Dinesh Kumar", crumb: "Health Tips", posts, page, basePath: base };
  if (base === "/author/admin") return { kind: "blog-list", title: "Author: admin", crumb: "admin", posts, page, basePath: base };
  const cat = base.match(/^\/category\/([^/]+)$/);
  if (cat) {
    const slug = cat[1];
    const name = categories.find((c) => c.slug === slug)?.name ?? slug;
    const inCat = posts.filter((p) => p.categories.some((c) => c.slug === slug));
    return { kind: "blog-list", title: `Category: ${name}`, crumb: name, posts: inCat, page, basePath: base };
  }

  const post = postBySlug.get(path.slice(1));
  if (post) return { kind: "post", post };

  return { kind: "fallback", path };
}

/** Browser-tab title for a resolved route (mirrors the old WordPress titles). */
export function routeTitle(route: ResolvedRoute): string {
  const suffix = ` - ${clinic.doctor}`;
  switch (route.kind) {
    case "introduction":
      return "About Kashvi Mediclinic - General Physician & Diabetologist in Gurugram";
    case "doctor-profile":
      return `${doctorProfile.bannerTitle}`;
    case "testimonials":
      return "Testimonials - Kashvi Mediclinic, Gurugram";
    case "faq":
      return "FAQs - Dr. Dinesh Kumar, General Physician in Gurugram";
    case "gallery":
      return galleryPage.title + suffix;
    case "grid":
      return route.page.title + suffix;
    case "service":
    case "service-post":
      return route.service.title + suffix;
    case "blog-list":
      return route.page > 1 ? `${route.title} - Page ${route.page}` : route.title;
    case "post":
      return route.post.title + suffix;
    case "fallback":
      return innerPageTitle(route.path) + suffix;
  }
}

/** All known URLs, pre-rendered at build time. */
export function allRoutePaths(): string[] {
  const paths = new Set<string>();
  const add = (p: string) => paths.add(p);
  const addPaged = (base: string, count: number) => {
    add(base);
    for (let n = 2; n <= Math.ceil(count / POSTS_PER_PAGE); n++) add(`${base}/page/${n}`);
  };

  [introduction, doctorProfile, testimonialsPage, faqPage, galleryPage].forEach((p) => [p.path, ...p.aliases].forEach(add));
  gridPages.forEach((g) => add(g.path));
  services.forEach((s) => [s.path, ...s.aliases].forEach(add));
  addPaged("/blogs", posts.length);
  addPaged("/author/admin", posts.length);
  categories.forEach((c) => addPaged(`/category/${c.slug}`, posts.filter((p) => p.categories.some((pc) => pc.slug === c.slug)).length));
  posts.forEach((p) => add(`/${p.slug}`));

  return [...paths];
}
