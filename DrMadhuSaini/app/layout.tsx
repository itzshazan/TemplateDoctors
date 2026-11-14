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
  title: `${site.name} – ${site.tagline} in ${site.city} | ${site.hospital}`,
  description: `${site.name} (${site.degrees}, ${site.institute}) is a ${site.role.toLowerCase()} at ${site.hospital}, Sector 16-17, ${site.city}, with ${site.experienceYears} years of experience treating diabetes, blood pressure, thyroid, fever, infections and adult medical problems.`,
};

export const viewport: Viewport = {
  themeColor: "#155e66",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
