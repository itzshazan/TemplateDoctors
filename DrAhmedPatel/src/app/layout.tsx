import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import RevealObserver from "@/components/RevealObserver";
import { SITE } from "@/config/site";
import "@/styles/global.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} – Prosthodontist for Dental Implants & Full Mouth Rehabilitation | Dubai & Mumbai`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name}, ${SITE.qualification} – prosthodontist for immediate implants, fixed full-mouth implants, full mouth rehabilitation and smile correction at LOLDENT, Dubai and Khalil Dental Studio, Mumbai. Call ${SITE.phone}.`,
  icons: { icon: "/img/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <RevealObserver />
      </body>
    </html>
  );
}
