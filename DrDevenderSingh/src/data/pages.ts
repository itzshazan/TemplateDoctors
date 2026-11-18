import type { Card } from "./cards.generated";
import { clinic, img } from "./site";
import { services } from "./services";

/* ------------------------------------------------------------------ */
/* Card-grid pages (/service)                                          */
/* ------------------------------------------------------------------ */

export interface GridPage {
  path: string;
  title: string; // banner title
  sub: string; // small heading above the clinic name
  intro: string;
  cards: (Card & { text?: string })[];
  ctaLabel?: string;
}

export const gridPages: GridPage[] = [
  {
    path: "/service",
    title: "Surgeries & Treatments",
    sub: "What we treat",
    intro: "General and laparoscopic surgery by Dr. Devender Singh at Siyaram Multi-Speciality Hospital, NIT, Faridabad.",
    cards: services.map((s) => ({ title: s.title, image: s.images[0], link: "", text: s.summary })),
  },
];

/* ------------------------------------------------------------------ */
/* About → The Hospital                                                */
/* ------------------------------------------------------------------ */

export const introduction = {
  path: "/about-siyaram-hospital",
  aliases: ["/about"],
  title: "The Hospital",
  tag: clinic.name,
  heading: "Where Dr. Devender Singh Operates",
  paragraphs: [
    `${clinic.doctor} consults and operates at ${clinic.name}, C-22-C, NIT, near Nehru Ground, Faridabad.`,
    "Having consultations, investigations, admission and surgery in the same hospital keeps care simple for patients and families — from the first visit to the follow-up after surgery.",
  ],
  image: img("ward.jpg"),
  listIntro: "What patients can expect:",
  list: [
    "Qualified surgeon (MBBS, MS General Surgery)",
    "Laparoscopic (keyhole) surgery wherever suitable",
    "Clear explanation of options, recovery and costs",
    "Evening OPD from 4 pm",
    "Follow-up until you are back to normal",
  ],
  clinic: {
    tag: "In-patient care",
    title: "Clean, Comfortable Recovery",
    paragraphs: [
      "After surgery, patients recover in the hospital's wards under regular monitoring, with pain control and early walking to speed recovery.",
      "Most keyhole operations need only a 1–2 day stay; minor procedures are usually done as day-care.",
    ],
    image: img("ward.jpg"),
  },
  mission: {
    tag: "Our approach",
    title: "Surgery Only When It Helps",
    paragraphs: [
      "Not every surgical problem needs an operation. Every patient gets an honest assessment and the full picture of the options.",
      "When surgery is the right choice, the aim is the least invasive operation, done safely, with a quick return to normal life.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About → Doctor Profile                                              */
/* ------------------------------------------------------------------ */

export const doctorProfile = {
  path: "/dr-devender-singh-laparoscopic-surgeon-faridabad",
  aliases: ["/doctor-profile"],
  title: "Doctor Profile",
  bannerTitle: "Dr. Devender Singh | General & Laparoscopic Surgeon in Faridabad",
  image: img("doctor.jpg"),
  tag: "General & Laparoscopic Surgeon",
  name: `${clinic.doctor}, ${clinic.credentials}`,
  bio: `${clinic.doctor} is a general and laparoscopic surgeon at ${clinic.name}, NIT, Faridabad, treating hernia, gallbladder stones, appendicitis, piles, fistula, lumps, breast lumps and wound problems.`,
  experienceTitle: "Qualifications & Practice",
  // CONFIRM: colleges, years, and the AIIMS association mentioned on the Google listing.
  experience: ["MBBS", "MS (General Surgery)", "Consultant Surgeon — Siyaram Multi-Speciality Hospital, NIT, Faridabad"],
  consultantTitle: "Minimally Invasive Surgery",
  consultantText:
    "Keyhole (laparoscopic) techniques are used wherever they are safe and suitable, so patients have less pain, smaller scars and a faster recovery.",
  ukTitle: "Areas of Practice",
  ukText: "Operations and treatments commonly performed:",
  ukList: [
    "Laparoscopic hernia repair",
    "Laparoscopic gallbladder removal",
    "Laparoscopic appendectomy",
    "Piles, fissure and fistula treatment",
    "Lipoma, cyst and lump removal",
    "Breast lump evaluation and excision",
    "Diabetic foot and wound care",
    "Abscess drainage and minor procedures",
  ],
  registrations: [] as string[],
  memberships: [] as string[],
  publications: [] as string[],
  presentations: [] as string[],
  publicationsImage: "",
};

/* ------------------------------------------------------------------ */
/* About → Testimonials                                                */
/* ------------------------------------------------------------------ */

export const testimonialsPage = {
  path: "/testimonials",
  aliases: [] as string[],
  title: "Testimonials",
  tag: "Testimonials",
  heading: "What do our patients say?",
  intro: "Patient feedback matters to us. Read and share reviews on Google.",
  items: [] as { name: string; avatar: string; quote: string }[],
};

/* ------------------------------------------------------------------ */
/* About → FAQs                                                        */
/* ------------------------------------------------------------------ */

export const faqPage = {
  path: "/faqs",
  aliases: [] as string[],
  title: "FAQs",
  tag: "Ask your questions",
  heading: "Frequently Asked Questions",
  columns: [
    [
      { q: "Where does Dr. Devender Singh consult?", a: "At Siyaram Multi-Speciality Hospital, C-22-C, NIT, near Nehru Ground, Faridabad 121001." },
      { q: "What are the OPD timings?", a: "Evening OPD from about 4:00 pm to 8:30 pm. Please call +91 98113 85907 to confirm the days and book a time." },
      { q: "What is laparoscopic surgery?", a: "Surgery done through small keyhole cuts using a camera and fine instruments. It usually means less pain, smaller scars and a quicker recovery." },
    ],
    [
      { q: "How long will I stay in hospital?", a: "Most laparoscopic hernia, gallbladder and appendix operations need 1–2 days. Minor procedures are usually day-care." },
      { q: "What should I bring to the consultation?", a: "All scan and test reports (ultrasound, CT, blood tests), previous prescriptions and a list of current medicines, including blood thinners." },
      {
        q: "When should I go to emergency?",
        a: "Go to the nearest emergency department or call 112 for:",
        list: ["Severe abdominal pain with vomiting or fever", "A painful hernia that won't go back", "Heavy rectal bleeding", "A rapidly spreading infection"],
      },
    ],
  ],
};

/* ------------------------------------------------------------------ */
/* About → Gallery                                                     */
/* ------------------------------------------------------------------ */

// ward.jpg is a real photo uploaded by the listing owner on Google Maps; the rest are AI-generated.
const g = (file: string) => ({ thumb: img(file), full: img(file) });

export const galleryPage = {
  path: "/gallery",
  aliases: [] as string[],
  title: "Gallery",
  items: [g("ward.jpg"), g("svc-lap.jpg"), g("doctor.jpg"), g("svc-ultrasound.jpg"), g("svc-consult.jpg"), g("svc-dressing.jpg")],
};

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export const contactPage = {
  tag: "GET IN TOUCH",
  heading: "Book a Consultation",
  intro: "Fill in the form and it will open WhatsApp with your request, ready to send. You can also call directly.",
  widgets: [
    { title: "Address", lines: ["Siyaram Multi-Speciality Hospital", "C-22-C, NIT, near Nehru Ground", "Faridabad, Haryana 121001"] },
    { title: "Phone", lines: [clinic.phone], href: clinic.phoneHref },
    { title: "Business Hours", lines: clinic.hours },
  ] as { title: string; lines: string[]; href?: string }[],
};
