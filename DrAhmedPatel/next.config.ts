import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pre-render every page to plain HTML in out/ — upload that folder to any host.
  output: "export",
  // /about/ → out/about/index.html, so links work on Apache/cPanel without rewrites
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
