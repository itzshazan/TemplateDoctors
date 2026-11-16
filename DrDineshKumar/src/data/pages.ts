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
    title: "Services",
    sub: "What we treat",
    intro: "Adult general medicine and diabetes care at Kashvi Mediclinic, Sector 37D, Gurugram.",
    cards: services.map((s) => ({ title: s.title, image: s.images[0], link: s.path, text: s.summary })),
  },
];

/* ------------------------------------------------------------------ */
/* About → Our Clinic                                                  */
/* ------------------------------------------------------------------ */

export const introduction = {
  path: "/about-kashvi-mediclinic",
  aliases: ["/about"],
  title: "Our Clinic",
  tag: clinic.name,
  heading: "About Our Clinic",
  paragraphs: [
    `${clinic.name} is a general medicine and diabetes clinic at The Millennia 2 – Commercial, Sector 37D, Gurugram, run by ${clinic.doctor}, ${clinic.credentials}.`,
    "The clinic looks after adults with everyday illnesses and long-term conditions: diabetes, high blood pressure, thyroid disorders, fevers and infections, breathing and digestive problems, and preventive check-ups.",
    "Our aim is simple: an unhurried consultation, honest advice, and treatment that fits your health and your routine.",
  ],
  image: img("dr-dinesh-kumar.jpg"),
  listIntro: "What patients can expect:",
  list: [
    "Qualified physician (MD Medicine, FCCM, CCAIDM)",
    "Diabetes and BP follow-up with clear targets",
    "Tests only when they are needed",
    "Evening OPD, 5–9 pm",
    "Wheelchair-accessible seating and restroom",
  ],
  clinic: {
    tag: "About the clinic",
    title: "A Clean, Comfortable Clinic",
    paragraphs: [
      "Kashvi Mediclinic is located in The Millennia 2 commercial complex in Sector 37D, convenient for residents of Sectors 37C, 37D, Basai Enclave and nearby societies.",
      "The clinic has wheelchair-accessible seating and restroom, and keeps evening hours so working patients can visit after office.",
    ],
    image: img("clinic.jpg"),
  },
  mission: {
    tag: "Our approach",
    title: "Our Mission",
    paragraphs: [
      "To provide careful, evidence-based general medicine and diabetes care that families in Gurugram can trust.",
      "We treat the whole person — explaining every diagnosis, involving patients in decisions and supporting them with long-term follow-up.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About → Doctor Profile                                              */
/* ------------------------------------------------------------------ */

export const doctorProfile = {
  path: "/dr-dinesh-kumar-general-physician-diabetologist-gurugram",
  aliases: ["/doctor-profile"],
  title: "Doctor Profile",
  bannerTitle: "Dr. Dinesh Kumar | General Physician & Diabetologist in Gurugram",
  image: img("dr-dinesh-kumar.jpg"),
  tag: "General Physician & Diabetologist",
  name: `${clinic.doctor}, ${clinic.credentials}`,
  bio: `${clinic.doctor} is a General Physician and Diabetologist at ${clinic.name}, Sector 37D, Gurugram, treating adults with diabetes, high blood pressure, thyroid disorders, infections and other medical problems.`,
  experienceTitle: "Qualifications",
  // CONFIRM: colleges, years and hospital experience to add here.
  experience: ["MBBS", "MD (Medicine)", "FCCM", "CCAIDM", "Consultant — Kashvi Mediclinic, Sector 37D, Gurugram"],
  consultantTitle: "Physician Care for Adults",
  consultantText:
    "With an MD in Medicine and additional FCCM and CCAIDM qualifications, the doctor brings hospital-level training to everyday clinic care — recognising when a problem can be treated at the clinic and when it needs urgent hospital attention.",
  ukTitle: "Areas of Practice",
  ukText: "Conditions commonly treated at the clinic include:",
  ukList: [
    "Type 2 and type 1 diabetes",
    "High blood pressure",
    "Thyroid disorders",
    "High cholesterol and heart-risk assessment",
    "Fever, dengue, typhoid and infections",
    "Cough, asthma and breathing problems",
    "Loose motion, acidity and digestive problems",
    "Preventive health check-ups",
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

/** Add genuine patient reviews (with their permission). While empty, the page links to Google reviews. */
export const testimonialsPage = {
  path: "/testimonials",
  aliases: [] as string[],
  title: "Testimonials",
  tag: "Testimonials",
  heading: "What do our patients say?",
  intro: "Patient feedback matters to us. Read and share reviews of Kashvi Mediclinic on Google.",
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
      {
        q: "What are the clinic timings?",
        a: "Evening OPD runs from 5:00 pm to 9:00 pm. Please call +91 87966 81884 to confirm the days and book a time.",
      },
      {
        q: "Where exactly is the clinic?",
        a: "Kashvi Mediclinic is in The Millennia 2 – Commercial, Sector 37D, Gurugram 122006. Use the map on the Contact page for directions.",
      },
      {
        q: "What should I bring for a diabetes visit?",
        a: "Your recent sugar readings (or glucometer), HbA1c and other reports, and all current medicines or insulin pens.",
      },
    ],
    [
      {
        q: "Do I need to be fasting for blood tests?",
        a: "Fasting of 10–12 hours is needed for fasting sugar and lipid profile. HbA1c, thyroid and most other tests don't need fasting.",
      },
      {
        q: "Can the doctor review reports from another lab or hospital?",
        a: "Yes. Bring your reports and discharge summaries — they help the doctor understand your history and avoid repeating tests.",
      },
      {
        q: "When should I go to a hospital instead?",
        a: "Go to the nearest emergency department or call 112 for:",
        list: ["Chest pain or severe breathlessness", "Weakness of one side or slurred speech", "Fainting, confusion or seizures", "Heavy bleeding or severe dehydration"],
      },
    ],
  ],
};

/* ------------------------------------------------------------------ */
/* About → Gallery                                                     */
/* ------------------------------------------------------------------ */

// dr-dinesh-kumar.jpg is a real photo from the clinic's Google listing; the rest are AI-generated (not this clinic).
const g = (file: string) => ({ thumb: img(file), full: img(file) });

export const galleryPage = {
  path: "/gallery",
  aliases: [] as string[],
  title: "Gallery",
  items: [g("dr-dinesh-kumar.jpg"), g("clinic.jpg"), g("svc-diabetes.jpg"), g("svc-bp.jpg"), g("welcome-1.jpg"), g("svc-checkup.jpg")],
};

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export const contactPage = {
  tag: "GET IN TOUCH",
  heading: "Book An Appointment",
  intro: "Fill in the form and it will open WhatsApp with your request, ready to send to the clinic. You can also call us directly.",
  widgets: [
    { title: "Address", lines: ["Kashvi Mediclinic", "The Millennia 2 – Commercial", "Sector 37D, Gurugram", "Haryana 122006"] },
    { title: "Phone", lines: [clinic.phone], href: clinic.phoneHref },
    { title: "Business Hours", lines: clinic.hours },
  ] as { title: string; lines: string[]; href?: string }[],
};
