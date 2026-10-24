import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amitabhparti.com"),
  title: "Dr. Amitabh Parti | Head of Internal Medicine, Fortis Memorial Gurugram",
  description:
    "Dr. Amitabh Parti, MD is Senior Director & Head of Internal Medicine at Fortis Memorial Research Institute, Gurugram, with 38 years of experience in infectious disease, diabetes, hypertension, thyroid disorders and tropical medicine.",
  keywords: [
    "internal medicine Gurgaon",
    "Dr. Amitabh Parti",
    "Fortis Memorial Research Institute",
    "general physician Gurugram",
    "diabetes specialist Gurgaon",
    "infectious disease doctor",
  ],
  icons: { icon: "/images/favicon.svg", apple: "/images/favicon.png" },
  openGraph: {
    title: "Dr. Amitabh Parti | Internal Medicine, Fortis Memorial Gurugram",
    description: "38 years of practice in internal medicine, infectious disease, diabetes and tropical medicine.",
    images: ["/images/og.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#283454",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
