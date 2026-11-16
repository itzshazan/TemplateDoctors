import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

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
  title: "Dr. Sarika Raj | Paediatrician in Sector 48, Gurugram (Sohna Road)",
  description:
    "Dr. Sarika Raj, paediatrician at 603, JMD Galleria, Sohna Road, Sector 48, Gurugram. Newborn care, vaccination, growth checks and treatment of childhood illnesses. Call +91 98189 21888.",
};

export const viewport: Viewport = {
  themeColor: "#F84365",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
