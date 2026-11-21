import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} – Obstetrician & Gynecologist in ${site.city} | ${site.clinic}`,
  description: `${site.name} (MS, DNB OBGYN, FICOG, FMAS), Sr. Consultant Obstetrician & Gynecologist at ${site.clinic}, Chinchwad, Pune. Gynecology, high-risk pregnancy, fertility and 3D/4D sonography. Call ${site.phone}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
