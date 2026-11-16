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
  title: `${site.name} – ENT Specialist in Faridabad | ${site.tagline}`,
  description: `${site.name} (${site.degrees}) is an ENT and head-and-neck surgeon at Lala Diwan Chand Memorial Hospital & ENT Care Centre, Sector 37, Faridabad — sinus, ear, tonsil, voice and head-and-neck surgery. Call ${site.phone}.`,
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
