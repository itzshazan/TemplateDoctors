// All page content lives here so it can be edited in one place.
// Source: Google Maps listing for Dr. Sarika Raj (Sector 48, Gurugram). Very little else is published,
// so qualifications, experience and timings are left out until confirmed — see IMAGE-PROMPTS.md.

const IMG = "/images";

export const site = {
  name: "Dr. Sarika Raj",
  doctor: "Paediatrician · Child Specialist",
  tagline: "Gentle, expert care for newborns, children and teenagers in Gurugram",
  phone: "+91 98189 21888",
  phoneHref: "tel:+919818921888",
  // CONFIRM: is this number on WhatsApp? The appointment form sends requests via WhatsApp.
  whatsapp: "919818921888",
  email: "",
  address: "603, JMD Galleria Mall, Badshahpur Sohna Road, Sector 48, Gurugram, Haryana 122018",
  // CONFIRM: OPD timings are not on Google. Shown as "call to confirm" until filled in.
  hours: { days: "Please call to confirm OPD days", morning: "", evening: "" },
  rating: 4.8,
  mapsUrl:
    "https://www.google.com/maps/place/Dr.+Sarika+Raj/data=!4m7!3m6!1s0x390d229e70150275:0x6f1c840d2dd95553!8m2!3d28.4207504!4d77.0383658!16s%2Fg%2F11dyqz1h_7!19sChIJdQIVcJ4iDTkRU1XZLQ2EHG8",
  mapEmbed: "https://maps.google.com/maps?q=28.4207504,77.0383658&z=16&output=embed",
  social: [] as { name: string; icon: "facebook" | "twitter" | "instagram"; href: string }[],
};

// play-area.jpg is a real photo from the clinic's Google listing; the rest are AI-generated (no doctor faces).
export const images = {
  about: `${IMG}/about.jpg`,
  provide: `${IMG}/provide.jpg`,
  plus: `${IMG}/icon-growth.svg`,
  childCare: `${IMG}/play-area.jpg`,
  available: `${IMG}/available.jpg`,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const slides = [
  {
    eyebrow: site.name,
    subtitle: "Paediatrician · Sector 48, Gurugram",
    title: "Caring for Your Little Ones, From Day One",
    text: "Newborn care, vaccinations, growth check-ups and treatment for childhood illnesses — at JMD Galleria, Sohna Road.",
    image: `${IMG}/hero-1.jpg`,
  },
  {
    eyebrow: site.name,
    subtitle: "Newborns · Children · Teenagers",
    title: "Healthy Kids, Happy Families",
    text: "Unhurried consultations and clear advice for parents, with a child-friendly play area that keeps little patients at ease.",
    image: `${IMG}/hero-2.jpg`,
  },
];

export const flipCards = [
  {
    title: "Newborn Care",
    text: "First check-ups, feeding support, jaundice review and answers for new parents.",
    icon: `${IMG}/icon-newborn.svg`,
    href: "#child-care",
  },
  {
    title: "Vaccination",
    text: "Complete immunisation from birth to adolescence, with reminders for what's due next.",
    icon: `${IMG}/icon-vaccine.svg`,
    href: "#women-care",
  },
  {
    title: "Growth & Development",
    text: "Height, weight and milestone checks so any concern is picked up early.",
    icon: `${IMG}/icon-growth.svg`,
    href: "#child-care",
  },
  {
    title: "Sick Child Care",
    text: "Prompt assessment of fever, cough, cold, stomach upsets and infections.",
    icon: `${IMG}/icon-sick.svg`,
    href: "#child-care",
  },
];

export const careFocus = [
  "Preventive care & vaccinations",
  "Fever, cough & common infections",
  "Nutrition & healthy growth",
  "Clear advice for parents",
];

export const provideFeatures = [
  {
    title: "Parents Are Part of the Team",
    text: "Your questions and concerns shape every plan. Everything is explained in simple Hindi or English.",
  },
  {
    title: "Only the Medicines Needed",
    text: "Careful prescribing — antibiotics and tests only when they truly help your child.",
  },
];

export const promises = [
  { title: "Gentle Examination", text: "A calm, child-friendly setting with a play area so young patients feel at ease." },
  { title: "Open Communication", text: "Clear explanations of every diagnosis and the reason for each medicine." },
  { title: "Follow-up Support", text: "Guidance for families that continues after the appointment ends." },
];

export const childServices = [
  { title: "Newborn Check-ups", note: "Weight, feeding, jaundice & cord care" },
  { title: "Fever & Infections", note: "Viral fever, dengue, typhoid, UTI" },
  { title: "Cough, Cold & Asthma", note: "Wheezing, allergies & inhaler guidance" },
  { title: "Stomach Problems", note: "Loose motions, vomiting & dehydration" },
  { title: "Nutrition & Growth", note: "Picky eating, weight & height concerns" },
  { title: "Development Milestones", note: "Speech, motor & behaviour checks" },
  { title: "Vaccinations", note: "Birth to 18 years, as per the IAP schedule" },
];

/** Shown in the second services grid (Vaccination & newborn). */
export const womenServices = [
  { title: "Birth Vaccines", note: "BCG, Hepatitis B & OPV" },
  { title: "6, 10 & 14 Week Vaccines", note: "DTP, IPV, Hib, Rotavirus, PCV" },
  { title: "Measles / MMR", note: "From 9 months" },
  { title: "Typhoid & Hepatitis A", note: "As per IAP schedule" },
  { title: "Influenza", note: "Yearly flu vaccine" },
  { title: "Booster Doses", note: "At 15–18 months & 4–6 years" },
  { title: "HPV Vaccine", note: "For girls from 9 years" },
  { title: "Tdap", note: "At 10–12 years" },
  { title: "Vaccination Record", note: "Reminders for what's due next" },
];

// CONFIRM: qualifications, experience and languages — shown only once filled in.
export const doctors = [
  {
    name: "Dr. Sarika Raj",
    degree: "",
    role: "Paediatrician",
    languages: "Hindi, English",
    experience: "",
    previously: [] as string[],
  },
];

export const comforts = [
  { title: "Child-friendly clinic", text: "A play area with toys keeps children relaxed while they wait." },
  { title: "Easy to reach", text: "In JMD Galleria on Sohna Road, Sector 48 — convenient for South City, Nirvana and nearby sectors." },
  { title: "Women-owned practice", text: "A women-owned clinic focused entirely on children's health." },
];

export const blogCategories = ["All Posts", "Newborns", "Health", "Nutrition"];

export const posts = [
  {
    title: "Fever in Children: When to Worry",
    date: "October 2026",
    category: "Health",
    summary:
      "Most fevers are viral and settle in a few days. See a doctor if fever lasts beyond 2–3 days, or comes with a rash, drowsiness, fast breathing or poor feeding.",
    image: `${IMG}/post-fever.jpg`,
  },
  {
    title: "Your Baby's First Weeks: What's Normal",
    date: "September 2026",
    category: "Newborns",
    summary:
      "Feeding every 2–3 hours, mild jaundice in the first week and lots of sleep are normal. Know the warning signs that need a check-up.",
    image: `${IMG}/post-newborn.jpg`,
  },
  {
    title: "Picky Eaters: Building Healthy Habits",
    date: "August 2026",
    category: "Nutrition",
    summary:
      "Offer variety without pressure, eat together as a family and limit juice and junk. Small, steady changes work better than force-feeding.",
    image: `${IMG}/post-nutrition.jpg`,
  },
];

/** Gallery section on the home page. */
export const gallery: { src: string; alt: string; position: string }[] = [
  { src: "/images/play-area.jpg", alt: "Play area at the clinic", position: "center" },
  { src: "/images/about.jpg", alt: "Child check-up", position: "center" },
  { src: "/images/available.jpg", alt: "Caring for newborns", position: "center" },
  { src: "/images/provide.jpg", alt: "Advice for parents", position: "center" },
  { src: "/images/post-newborn.jpg", alt: "Newborn care", position: "center" },
  { src: "/images/post-nutrition.jpg", alt: "Healthy eating habits", position: "center" },
];
