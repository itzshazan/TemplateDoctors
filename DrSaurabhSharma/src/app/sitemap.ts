import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/meet-the-doctor", "/services", "/gallery", "/contact-us"].map((p) => ({ url: `${siteUrl}${p}` }));
}
