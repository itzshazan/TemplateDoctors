/**
 * All site content lives here so it can be edited without touching components.
 * Images live in /public/images. Items to confirm are listed in IMAGE-PROMPTS.md.
 * The copy avoids pronouns: the doctor's are not published.
 */
export const ASSET_BASE = "/images";

export const img = (path: string): string => `${ASSET_BASE}/${path}`;

export const clinic = {
  name: "Siyaram Multi-Speciality Hospital",
  doctor: "Dr. Devender Singh",
  credentials: "MBBS, MS (General Surgery)",
  tagline: "General & Laparoscopic Surgeon in Faridabad",
  email: "",
  phone: "+91 98113 85907",
  phoneHref: "tel:+919811385907",
  // CONFIRM: is this number on WhatsApp?
  whatsapp: "919811385907",
  logo: img("logo.svg"),
  logoLight: img("logo-light.svg"),
  addressLines: ["C-22-C, NIT", "Near Nehru Ground", "Faridabad, Haryana 121001"],
  footerAddress: "C-22-C, NIT, near Nehru Ground, Faridabad, Haryana 121001",
  // From Google Maps (Monday 4–8:30 PM). CONFIRM the other days.
  hours: ["OPD: 4:00 pm – 8:30 pm", "Please call to confirm the days"],
  mapEmbed: "https://maps.google.com/maps?q=28.3888565,77.3012969&z=16&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/Dr.+Devender+Singh+Laparoscopic+and+Robotic+surgeon+@+AIIMS,+New+Delhi/data=!4m7!3m6!1s0x390cdd844c43f123:0x44a3173ac38fa2e1!8m2!3d28.3888565!4d77.3012969!16s%2Fg%2F11r42btzfk!19sChIJI_FDTITdDDkR4aKPwzoXo0Q",
  googleReview:
    "https://www.google.com/maps/place/Dr.+Devender+Singh+Laparoscopic+and+Robotic+surgeon+@+AIIMS,+New+Delhi/data=!4m7!3m6!1s0x390cdd844c43f123:0x44a3173ac38fa2e1!8m2!3d28.3888565!4d77.3012969!16s%2Fg%2F11r42btzfk!19sChIJI_FDTITdDDkR4aKPwzoXo0Q",
  social: { facebook: "", instagram: "", youtube: "" },
  introVideo: "",
};

export const whatsappLink = (text = `Hello ${clinic.doctor}, I would like to book a surgical consultation.`) =>
  clinic.whatsapp ? `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}` : "";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  to?: string;
  href?: string;
  children?: NavItem[];
}

const links = (pairs: [string, string][]): NavItem[] => pairs.map(([label, slug]) => ({ label, to: `/${slug}` }));

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/dr-devender-singh-laparoscopic-surgeon-faridabad" },
  { label: "Services", to: "/service" },
  { label: "Contact", to: "/contact-us" },
];

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

// AI-generated scenes (no doctor faces). Replace with real photos when available.
export const heroSlides = [img("hero-1.jpg"), img("hero-2.jpg"), img("hero-3.jpg")];

export const hero = {
  tag: "General & Laparoscopic Surgery",
  title: "Keyhole Surgery, Faster Recovery",
  text: `${clinic.doctor} (${clinic.credentials}) treats hernia, gallbladder stones, appendicitis, piles and other surgical problems at ${clinic.name}, NIT Faridabad.`,
};

export const featureStrip = {
  image: img("feature.jpg"),
  items: [
    { icon: img("icon-calendar.svg"), title: "Book a consultation", lines: ["Call, WhatsApp or send a request"], link: "/contact-us" },
    { icon: img("icon-phone.svg"), title: "Call Us Today", lines: [clinic.phone], link: clinic.phoneHref },
    { icon: img("icon-clock.svg"), title: "OPD hours", lines: clinic.hours },
  ],
};

export const welcome = {
  tag: clinic.doctor,
  title: "Surgical Care You Can Trust",
  subtitle: "General & laparoscopic surgery in NIT, Faridabad",
  paragraphs: [
    `${clinic.doctor} is a general and laparoscopic surgeon (${clinic.credentials}) consulting at ${clinic.name}, C-22-C, NIT, near Nehru Ground, Faridabad.`,
    "Many common operations — hernia repair, gallbladder removal and appendix surgery — can now be done through small keyhole cuts. That usually means less pain, smaller scars, a shorter hospital stay and a quicker return to work. Every patient is examined carefully, and surgery is advised only when it is the right option.",
  ],
  list: ["Hernia Repair", "Gallbladder Stones", "Appendicitis", "Piles, Fissure & Fistula"],
  images: [img("welcome-1.jpg"), img("ward.jpg")],
};

export const servicesIntro = {
  tag: "What we treat",
  title: "Surgeries & Treatments",
  text: "Laparoscopic and open general surgery, from planned operations to minor procedures, with clear advice before and after.",
};

export const services = [
  { title: "Hernia Repair", image: img("svc-lap.jpg"), text: "Laparoscopic and open repair of inguinal, umbilical and incisional hernias with mesh.", to: "/hernia-surgery-faridabad" },
  { title: "Gallbladder Stones", image: img("svc-ultrasound.jpg"), text: "Laparoscopic cholecystectomy for painful gallstones, usually with a short hospital stay.", to: "/gallbladder-stone-surgery-faridabad" },
  { title: "Appendicitis", image: img("svc-consult.jpg"), text: "Prompt diagnosis and keyhole removal of an inflamed appendix.", to: "/appendix-surgery-faridabad" },
  { title: "Piles, Fissure & Fistula", image: img("svc-consult-2.jpg"), text: "Medicines first; minimally invasive procedures and surgery when needed.", to: "/piles-fissure-fistula-treatment-faridabad" },
  { title: "Lipoma & Cysts", image: img("svc-dressing.jpg"), text: "Removal of lumps under the skin, usually as a day-care procedure.", to: "/lipoma-cyst-removal-faridabad" },
  { title: "Diabetic Foot & Wounds", image: img("svc-dressing.jpg"), text: "Care of diabetic foot ulcers, infections and non-healing wounds.", to: "/diabetic-foot-wound-care-faridabad" },
];

export const doctor = {
  // No real portrait yet: an AI-generated operating-room photo (no faces) is shown instead.
  image: img("doctor.jpg"),
  tag: "Meet the Surgeon",
  title: `${clinic.doctor}, ${clinic.credentials}`,
  paragraphs: [
    `${clinic.doctor} is a general and laparoscopic surgeon with an MS in General Surgery, consulting at ${clinic.name}, NIT, Faridabad.`,
    "The practice covers the most common surgical problems — hernia, gallbladder stones, appendicitis, piles, fissure and fistula, lumps and cysts, breast lumps and diabetic foot — using laparoscopic (keyhole) techniques wherever they are suitable.",
    "Before any operation, patients get a clear explanation of the problem, the options (including non-surgical ones), the procedure, the expected recovery and the costs involved.",
  ],
};

export const whyChooseUs = {
  tag: "Why patients choose us",
  title: "Why Choose Dr. Devender Singh",
  text: "Modern surgical care with honest advice — surgery only when it is truly needed, and keyhole techniques whenever possible.",
  features: [
    { title: ["Laparoscopic", "expertise"], icon: img("icon-doctor.svg"), text: "Keyhole surgery for hernia, gallbladder and appendix means less pain and faster recovery." },
    { title: ["Hospital-based", "care"], icon: img("icon-check.svg"), text: "Consultations, tests, admission and surgery at Siyaram Multi-Speciality Hospital, NIT." },
    { title: ["Honest", "advice"], icon: img("icon-drop.svg"), text: "Every option explained, including when watchful waiting or medicines are enough." },
    { title: ["Evening", "OPD"], icon: img("icon-clock.svg"), text: "Evening consultations from 4 pm so working patients can visit." },
  ],
};

export const hospitalCta = {
  background: img("hero-3.jpg"),
  tag: clinic.doctor.toUpperCase(),
  title: "Consulting at Siyaram Multi-Speciality Hospital, NIT",
  text: `Visit ${clinic.name}, C-22-C, NIT, near Nehru Ground, Faridabad, for consultations and surgery. Call ${clinic.phone} to book a time.`,
};

export const testimonialsIntro = {
  tag: clinic.doctor,
  title: "What do our patients say?",
  text: "Read what patients say on Google.",
};

/** Add genuine patient reviews (with consent). The home slider is hidden while this is empty. */
export const testimonials: { name: string; avatar: string; quote: string }[] = [];

export const aboutPregnancy = {
  images: [img("svc-lap.jpg"), img("ward.jpg")],
  tag: "Laparoscopic Surgery",
  title: "What Is Keyhole Surgery?",
  paragraphs: [
    "In laparoscopic (keyhole) surgery, the operation is done through two to four small cuts using a camera and fine instruments, instead of one large opening. It is now the standard approach for gallbladder removal, appendix surgery and many hernia repairs.",
    "Smaller cuts usually mean less pain, smaller scars, lower risk of wound infection, a shorter hospital stay and a faster return to normal activities. Not every patient is suitable — the right approach is decided after a careful examination.",
  ],
};

export const newsIntro = {
  tag: "Health Tips",
  title: "Surgical Health Articles",
  text: ["Practical advice on common surgical problems,", "from hernia and gallstones to piles and wound care."],
};

export const news = [
  { title: "Hernia: Why It Won't Go Away on Its Own", image: img("svc-lap.jpg"), day: "12", month: "Oct", to: "/hernia-does-not-heal-on-its-own" },
  { title: "Gallbladder Stones: Do You Need Surgery?", image: img("svc-ultrasound.jpg"), day: "28", month: "Sep", to: "/gallbladder-stones-do-you-need-surgery" },
  { title: "Piles: Simple Steps That Really Help", image: img("svc-consult-2.jpg"), day: "14", month: "Sep", to: "/piles-simple-steps-that-help" },
];

export const stats: { icon: string; value: number; label: string }[] = [];

export const mapSection = {
  background: img("page-header.jpg"),
  tag: "Get in touch",
  title: "Visit the Hospital",
};

export const footerAbout =
  "Dr. Devender Singh (MBBS, MS General Surgery) is a general and laparoscopic surgeon at Siyaram Multi-Speciality Hospital, NIT, Faridabad.";
