import type { NextConfig } from "next";

// Old static-site URLs are permanently redirected to the new clean routes so
// existing links and search-engine rankings keep working.
const legacyPages = [
  "meet-the-doctor",
  "services",
  "gallery",
  "testimonials",
  "contact-us",
  "terms-of-use-disclaimer",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      ...legacyPages.map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}`,
        permanent: true,
      })),
      {
        source: "/blog/archive.php",
        has: [
          { type: "query" as const, key: "year", value: "(?<year>[0-9]{4})" },
          { type: "query" as const, key: "month", value: "(?<month>[0-9]{1,2})" },
        ],
        destination: "/blog/archive/:year/:month",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
