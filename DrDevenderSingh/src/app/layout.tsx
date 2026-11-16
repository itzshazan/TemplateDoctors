import type { Metadata } from "next";
import { Questrial, Roboto } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/global.css";
import "../styles/inner.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-roboto", display: "swap" });
const questrial = Questrial({ subsets: ["latin"], weight: "400", variable: "--font-questrial", display: "swap" });

export const metadata: Metadata = {
    title: "Dr. Devender Singh - General & Laparoscopic Surgeon in Faridabad | Siyaram Hospital, NIT",
  description: "Dr. Devender Singh (MBBS, MS General Surgery) – laparoscopic surgery for hernia, gallbladder stones and appendix, plus piles, fistula, lipoma and wound care at Siyaram Multi-Speciality Hospital, NIT, Faridabad. Call +91 98113 85907.",
  openGraph: {
    siteName: "Dr. Devender Singh | General & Laparoscopic Surgeon",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${questrial.variable}`}>
      <body>
        <div className="page-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
