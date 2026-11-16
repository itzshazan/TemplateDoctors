// Server-only: uses the filesystem. Import from server components only.
import fs from "node:fs";
import path from "node:path";

export type Asset = { src: string; exists: boolean };

const cache = new Map<string, boolean>();

function onDisk(src: string): boolean {
  let hit = cache.get(src);
  if (hit === undefined) {
    hit = fs.existsSync(path.join(process.cwd(), "public", src));
    // Only cache in production so newly added files show up during `next dev`.
    if (process.env.NODE_ENV === "production") cache.set(src, hit);
  }
  return hit;
}

/**
 * Illustration used when a photo hasn't been supplied yet:
 * "/images/blog/fever-in-children.jpg" -> "/images/art/blog/fever-in-children.svg".
 */
function artFor(src: string): string | null {
  if (!src.startsWith("/images/") || src.startsWith("/images/art/")) return null;
  return src.replace(/^\/images\//, "/images/art/").replace(/\.[a-z0-9]+$/i, ".svg");
}

/** Resolves a public-folder path to the real file, else its illustration, else null. */
export function resolveAsset(src: string): string | null {
  if (/^https?:\/\//.test(src)) return src;
  if (onDisk(src)) return src;
  const art = artFor(src);
  return art && onDisk(art) ? art : null;
}

export function assetExists(src: string): boolean {
  return resolveAsset(src) !== null;
}

export function asset(src: string): Asset {
  const resolved = resolveAsset(src);
  return { src: resolved ?? src, exists: resolved !== null };
}
