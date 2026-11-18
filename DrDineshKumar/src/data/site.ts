/**
 * All site content lives here so it can be edited without touching components.
 * Images live in /public/images. Items to confirm with the clinic are listed in IMAGE-PROMPTS.md.
 */
export const ASSET_BASE = "/images";

export const img = (path: string): string => `${ASSET_BASE}/${path}`;

export const clinic = {
  name: "Kashvi Mediclinic",
  doctor: "Dr. Dinesh Kumar",
  credentials: "MBBS, MD (Medicine), FCCM, CCAIDM",
  tagline: "General Physician & Diabetologist in Gurugram",
  // CONFIRM: clinic email address (the contact form opens WhatsApp until one is added).
  email: "",
  phone: "+91 87966 81884",
  phoneHref: "tel:+918796681884",
  // CONFIRM: is this number on WhatsApp?
  whatsapp: "918796681884",
  logo: img("logo.svg"),
  logoLight: img("logo-light.svg"),
  addressLines: ["Kashvi Mediclinic", "The Millennia 2 – Commercial", "Sector 37D", "Gurugram, Haryana 122006"],
  footerAddress: "Kashvi Mediclinic, The Millennia 2 – Commercial, Sector 37D, Gurugram, Haryana 122006",
  // From Google Maps: evening OPD 5–9 PM. CONFIRM which days.
  hours: ["Evening OPD: 5:00 pm – 9:00 pm", "Please call to confirm the days"],
  mapEmbed: "https://maps.google.com/maps?q=28.4522538,76.9769187&z=16&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/Dr+Dinesh+Kumar+%7C+KASHVI+MEDICLINIC+%7C+General+Physician+%26+Diabetologist+%7C+MBBS+MD+MEDICINE+FCCM+CCAIDM+%7C+GURUGRAM+%7C/data=!4m7!3m6!1s0x390d17b75f538efd:0xfcc8596f12dfa779!8m2!3d28.4522538!4d76.9769187!16s%2Fg%2F11zjl86mx_!19sChIJ_Y5TX7cXDTkReaffEm9ZyPw",
  googleReview:
    "https://www.google.com/maps/place/Dr+Dinesh+Kumar+%7C+KASHVI+MEDICLINIC+%7C+General+Physician+%26+Diabetologist+%7C+MBBS+MD+MEDICINE+FCCM+CCAIDM+%7C+GURUGRAM+%7C/data=!4m7!3m6!1s0x390d17b75f538efd:0xfcc8596f12dfa779!8m2!3d28.4522538!4d76.9769187!16s%2Fg%2F11zjl86mx_!19sChIJ_Y5TX7cXDTkReaffEm9ZyPw",
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
  introVideo: "",
};

export const whatsappLink = (text = `Hello ${clinic.doctor}, I would like to book an appointment at ${clinic.name}.`) =>
  clinic.whatsapp ? `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}` : "";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  to?: string; // internal route
  href?: string; // external link
  children?: NavItem[];
}

/** Turns a list of [label, slug] pairs into nav items. */
const links = (pairs: [string, string][]): NavItem[] => pairs.map(([label, slug]) => ({ label, to: `/${slug}` }));

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/dr-dinesh-kumar-general-physician-diabetologist-gurugram" },
  { label: "Services", to: "/service" },
  { label: "Contact", to: "/contact-us" },
];

/** Flattens the nav tree into a route → title lookup used by inner pages. */
export const routeTitles: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  const walk = (items: NavItem[]) =>
    items.forEach((item) => {
      if (item.to && !map[item.to]) map[item.to] = item.label;
      if (item.children) walk(item.children);
    });
  walk(navigation);
  return map;
})();

/* ------------------------------------------------------------------ */
/* Home page sections                                                  */
/* ------------------------------------------------------------------ */

// AI-generated scenes (no doctor faces). Replace with real clinic photos when available.
export const heroSlides = [img("hero-1.jpg"), img("hero-2.jpg"), img("hero-3.jpg")];

export const hero = {
  tag: clinic.name,
  title: "General Physician & Diabetologist in Gurugram",
  text: `${clinic.doctor} (${clinic.credentials}) treats diabetes, blood pressure, thyroid problems, fevers and everyday illnesses at ${clinic.name}, Sector 37D, Gurugram.`,
};

export const featureStrip = {
  image: img("feature.jpg"),
  items: [
    { icon: img("icon-calendar.svg"), title: "Book an appointment", lines: ["Call, WhatsApp or send a request"], link: "/contact-us" },
    { icon: img("icon-phone.svg"), title: "Call Us Today", lines: [clinic.phone], link: clinic.phoneHref },
    { icon: img("icon-clock.svg"), title: "Open hours", lines: clinic.hours },
  ],
};

export const welcome = {
  tag: clinic.name,
  title: "Welcome to Kashvi Mediclinic",
  subtitle: "Your family physician in Sector 37D, Gurugram",
  paragraphs: [
    `${clinic.name} is a general medicine and diabetes clinic at The Millennia 2, Sector 37D, Gurugram, run by ${clinic.doctor}, ${clinic.credentials}.`,
    "Whether it is a sudden fever, a cough that won't settle, sugar that keeps rising or blood pressure that needs a closer look, the clinic offers careful assessment, clear advice and treatment based on your symptoms and overall health — without unnecessary tests or medicines.",
  ],
  list: ["Diabetes Care", "Blood Pressure & Heart Risk", "Thyroid Disorders", "Fever & Infections"],
  images: [img("welcome-1.jpg"), img("clinic.jpg")],
};

export const servicesIntro = {
  tag: "What we treat",
  title: "Services at Kashvi Mediclinic",
  text: "Adult general medicine and diabetes care for the whole family, from acute illnesses to long-term conditions that need regular follow-up.",
};

export const services = [
  {
    title: "Diabetes Care",
    image: img("svc-diabetes.jpg"),
    text: "Diagnosis, medicines, insulin guidance and regular HbA1c follow-up to keep sugar in control and prevent complications.",
    to: "/diabetes-treatment-gurugram",
  },
  {
    title: "High Blood Pressure",
    image: img("svc-bp.jpg"),
    text: "Accurate BP checks and treatment plans that protect your heart, brain and kidneys over the long term.",
    to: "/high-blood-pressure-treatment-gurugram",
  },
  {
    title: "Thyroid Disorders",
    image: img("svc-thyroid.jpg"),
    text: "Testing and treatment for underactive and overactive thyroid, with dose adjustment and follow-up.",
    to: "/thyroid-treatment-gurugram",
  },
  {
    title: "Fever & Infections",
    image: img("svc-fever.jpg"),
    text: "Evaluation of viral fever, dengue, typhoid, malaria, urine and throat infections, with the right tests and treatment.",
    to: "/fever-infection-treatment-gurugram",
  },
  {
    title: "Stomach & Digestive Problems",
    image: img("svc-digestive.jpg"),
    text: "Care for loose motion, acidity, vomiting and stomach pain, including assessment of dehydration.",
    to: "/stomach-digestive-problems-gurugram",
  },
  {
    title: "Health Check-ups",
    image: img("svc-checkup.jpg"),
    text: "Preventive check-ups and blood-test review to catch diabetes, BP, thyroid and cholesterol problems early.",
    to: "/health-checkup-gurugram",
  },
];

/** Real photo uploaded by the clinic to its Google Maps listing (Jul 2026), cropped above the name banner. */
export const doctor = {
  image: img("dr-dinesh-kumar.jpg"),
  tag: "Meet the Doctor",
  title: `${clinic.doctor}, ${clinic.credentials}`,
  paragraphs: [
    `${clinic.doctor} is a General Physician and Diabetologist who consults at ${clinic.name}, Sector 37D, Gurugram, with an MBBS and an MD in Medicine, along with FCCM and CCAIDM qualifications.`,
    "The practice covers the full range of adult medical problems — diabetes, high blood pressure, thyroid disorders, infections, breathing and digestive complaints — with a focus on careful evaluation and practical, evidence-based treatment.",
    "Patients are guided through diet, lifestyle and medicines in simple language, so that long-term conditions like diabetes and BP stay under control.",
  ],
};

export const whyChooseUs = {
  tag: "Why patients choose us",
  title: "Why Choose Kashvi Mediclinic",
  text: "Good general medicine is about listening carefully, examining properly and treating only what is needed. That is the approach at Kashvi Mediclinic.",
  features: [
    { title: ["Qualified", "physician"], icon: img("icon-doctor.svg"), text: "MD in Medicine with FCCM and CCAIDM qualifications for adult medical problems and diabetes." },
    { title: ["Diabetes", "focus"], icon: img("icon-drop.svg"), text: "Structured diabetes follow-up with HbA1c targets, insulin guidance and complication screening." },
    { title: ["No unnecessary", "tests"], icon: img("icon-check.svg"), text: "Tests and medicines are advised only when they help — and the reason is always explained." },
    { title: ["Evening", "OPD"], icon: img("icon-clock.svg"), text: "Evening consultations (5–9 pm) make it easy to visit after work in Sector 37D." },
  ],
};

export const hospitalCta = {
  background: img("hospital-cta.jpg"),
  tag: clinic.doctor.toUpperCase(),
  title: "Consulting at Kashvi Mediclinic, Sector 37D",
  text: `Visit ${clinic.name} at The Millennia 2 – Commercial, Sector 37D, Gurugram, for evening consultations from 5 pm to 9 pm. Call ${clinic.phone} to book a time or ask about the clinic's days.`,
};

export const testimonialsIntro = {
  tag: clinic.name,
  title: "What do our patients say?",
  text: "Read what patients say about the clinic on Google.",
};

/** Add genuine patient reviews (with consent). The home slider is hidden while this is empty. */
export const testimonials: { name: string; avatar: string; quote: string }[] = [];

export const aboutPregnancy = {
  images: [img("svc-diabetes.jpg"), img("diet.jpg")],
  tag: "Diabetes & Lifestyle Care",
  title: "Living Well With Diabetes",
  paragraphs: [
    "Diabetes is a long-term condition, but with the right plan most people live full, active lives. At Kashvi Mediclinic, treatment combines medicines or insulin where needed with practical diet and activity advice that fits Indian meals and routines.",
    "Regular HbA1c checks, BP and cholesterol control, and yearly screening of the eyes, kidneys and feet help prevent complications long before they start.",
  ],
};

export const newsIntro = {
  tag: "Health Tips",
  title: "Health Articles",
  text: ["Practical advice from Kashvi Mediclinic on diabetes,", "blood pressure, infections and everyday health."],
};

export const news = [
  {
    title: "Loose Motion: When to Worry and How to Stay Hydrated",
    image: img("svc-digestive.jpg"),
    day: "15",
    month: "Oct",
    to: "/loose-motion-diarrhoea-treatment-gurugram",
  },
  {
    title: "Diabetes: 7 Daily Habits That Keep Sugar in Control",
    image: img("diet.jpg"),
    day: "02",
    month: "Oct",
    to: "/diabetes-daily-habits-sugar-control",
  },
  {
    title: "High Blood Pressure: Why It Is Called the Silent Killer",
    image: img("svc-bp.jpg"),
    day: "18",
    month: "Sep",
    to: "/high-blood-pressure-silent-killer",
  },
];

export const stats: { icon: string; value: number; label: string }[] = [];

export const mapSection = {
  background: img("page-header.jpg"),
  tag: "Get in touch",
  title: "Visit Our Clinic",
};

export const footerAbout =
  "Kashvi Mediclinic is a general medicine and diabetes clinic in Sector 37D, Gurugram, run by Dr. Dinesh Kumar (MBBS, MD Medicine, FCCM, CCAIDM).";
