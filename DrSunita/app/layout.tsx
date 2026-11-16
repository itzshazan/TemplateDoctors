import type { Metadata, Viewport } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import { Reveal } from "@/components/Interactive";
import { FloatingActions, Footer } from "@/components/Sections";
import { site } from "@/data/content";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-head" });

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline} | ${site.clinic}`,
    template: `%s | ${site.clinic}, ${site.area}`,
  },
  description: `${site.clinic}: gynaecologist ${site.name} at ${site.address}. Pregnancy care, period problems, PCOS, family planning, infections, menopause and women's screening.`,
};

export const viewport: Viewport = { themeColor: "#9b2c6c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <Reveal />
      </body>
    </html>
  );
}
