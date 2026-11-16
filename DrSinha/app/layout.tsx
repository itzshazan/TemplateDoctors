import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import Header from "@/components/Header";
import { Reveal } from "@/components/Interactive";
import { FloatingActions, Footer } from "@/components/Sections";
import { site } from "@/data/content";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-head" });

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline} | ${site.clinic}, Sector 15`,
    template: `%s | ${site.clinic}, Faridabad`,
  },
  description: `${site.name} (${site.degrees}) is a senior eye specialist with ${site.experienceYears} years of experience at ${site.clinic}, ${site.address}. Cataract, glaucoma, oculoplasty, contact lenses and complete eye check-ups.`,
};

export const viewport: Viewport = { themeColor: "#062d86" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
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
