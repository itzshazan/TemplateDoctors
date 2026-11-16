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
    title: "Dr. Dinesh Kumar - General Physician & Diabetologist in Gurugram | Kashvi Mediclinic",
  description: "Dr. Dinesh Kumar (MBBS, MD Medicine, FCCM, CCAIDM) treats diabetes, blood pressure, thyroid, fever and infections at Kashvi Mediclinic, The Millennia 2, Sector 37D, Gurugram. Call +91 87966 81884.",
  openGraph: {
    siteName: "Dr. Dinesh Kumar | Kashvi Mediclinic",
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
