import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} – ${site.role} | ${site.qualification}`,
  description: `${site.name}, ${site.role} (${site.qualification}), 9+ years of experience in orthopaedic physiotherapy, paralysis rehabilitation, hijama, cupping, MFR and IASTM therapy. Call ${site.phone}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
