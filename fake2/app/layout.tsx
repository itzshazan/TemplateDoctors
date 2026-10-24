import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: `${site.brand} | ${site.name} – ${site.tagline} in ${site.city}`,
  description: `${site.name} is an IVF and fertility specialist in ${site.city} offering IVF, IUI, ICSI, egg freezing, PCOS, endometriosis, high-risk pregnancy and gynecological care.`,
};

export const viewport: Viewport = {
  themeColor: "#a42c53",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
