import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-heading",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: `${site.doctor} | ${site.specialty} in ${site.area} | ${site.name}`,
  description: `${site.doctor}, ${site.specialty} at ${site.name}, ${site.area}. In practice since ${site.practisingSince}: general consultations, child vaccinations and check-ups, minor procedures and diagnostic tests. Mon–Sat, ${site.hours.morning} & ${site.hours.evening}. Call ${site.phone}.`,
  // Stays out of search results until the doctor has approved the content (see data/site.ts).
  robots: site.approvedForLaunch ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0c8577",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
