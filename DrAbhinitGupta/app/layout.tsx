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
    title: "Dr. Abhinit Gupta | Interventional Cardiologist, Regency Hospital Kanpur",
  description:
    "Dr. Abhinit Gupta, DM Cardiology (AIIMS, Gold Medalist), is Associate Director of Cardiology at Regency Hospital, Kanpur — angioplasty, primary PCI, pacemakers, ICD/CRT, electrophysiology and structural heart interventions.",
  keywords: [
    "cardiologist in Kanpur",
    "Dr. Abhinit Gupta",
    "Regency Hospital Kanpur",
    "angioplasty Kanpur",
    "pacemaker Kanpur",
    "heart specialist Kanpur",
  ],
  icons: { icon: "/images/favicon.svg" },
  openGraph: {
    title: "Dr. Abhinit Gupta | Interventional Cardiologist, Kanpur",
    description: "AIIMS-trained, triple gold-medalist cardiologist at Regency Hospital, Kanpur.",
    images: ["/images/abhinit-banner.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b0f1c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
