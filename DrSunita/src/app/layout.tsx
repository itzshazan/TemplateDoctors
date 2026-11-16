import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { doctor, siteUrl } from "@/data/site";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${doctor.name} – Gynaecologist in Lal Kuan, Faridabad | Dr Sunita Clinic`, template: `%s | ${doctor.name}` },
  description:
    "Dr. Sunita – Gynaecologist at Dr Sunita Clinic, B 254, Kotla Mahingiran, Lal Kuan, near Pankaj Medical Store, Chungi No 2. Pregnancy care, period problems, PCOS, family planning, infections, menopause and Pap smear.",
  openGraph: { type: "website", siteName: doctor.name },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
