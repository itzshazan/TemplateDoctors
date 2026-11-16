import type { MetadataRoute } from "next";
import { archiveMonths, categories, posts } from "@/data/blog";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/meet-the-doctor", "/services", "/testimonials", "/gallery", "/blog", "/contact-us", "/terms-of-use-disclaimer"];
  return [
    ...pages.map((p) => ({ url: `${siteUrl}${p}` })),
    ...posts.map((p) => ({ url: `${siteUrl}/blog/${p.slug}`, lastModified: p.date })),
    ...categories.map((c) => ({ url: `${siteUrl}/blog/category/${c.slug}` })),
    ...archiveMonths().map(({ year, month }) => ({ url: `${siteUrl}/blog/archive/${year}/${month}` })),
  ];
}
