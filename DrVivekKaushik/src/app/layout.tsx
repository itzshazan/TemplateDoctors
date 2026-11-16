import type { Metadata } from "next";
import { Open_Sans, Poppins, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import RevealObserver from "@/components/RevealObserver";
import { SITE } from "@/config/site";
import "@/styles/global.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"], variable: "--font-roboto", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-open-sans", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} – Orthopaedic Doctor in Ballabhgarh, Faridabad | ${SITE.clinic}`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} – orthopaedic doctor at ${SITE.clinic}, Jain Colony, Ballabhgarh, Faridabad. Fractures, joint pain, arthritis, back pain and sports injuries. Call ${SITE.phone}.`,
  icons: { icon: "/img/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} ${openSans.variable}`}>
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
