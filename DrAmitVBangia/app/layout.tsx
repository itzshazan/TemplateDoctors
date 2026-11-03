import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { clinics, site } from "@/data/content";
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

const description = `${site.name} is a ${site.tagline} in ${site.city} with ${site.experienceYears} years of experience, treating acne, pigmentation, hair fall, eczema, psoriasis, skin infections and cosmetic skin concerns. Mon–Sat, 10 AM–7 PM, by appointment.`;

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline} in ${site.city}`,
  description,
  keywords: [
    "dermatologist in Faridabad",
    "skin specialist Faridabad",
    "hair specialist Faridabad",
    "cosmetologist Faridabad",
    "Sector 46 Faridabad skin clinic",
    site.name,
  ],
  openGraph: {
    title: `${site.name} – ${site.tagline}`,
    description,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#14535a",
};

// Structured data so search engines understand the doctor and clinic.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.name,
  medicalSpecialty: "Dermatology",
  description,
  telephone: site.phone,
  email: site.email,
  knowsLanguage: site.languages,
  sameAs: [site.social.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 308, Sector 46",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121010",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Kasturba Medical College" },
  workLocation: { "@type": "MedicalClinic", name: clinics[0].name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
