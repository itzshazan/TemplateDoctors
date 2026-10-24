// All page content lives here so it can be edited in one place.
// Every name, number and address below is fictional placeholder data.
// Generic images are loaded from the reference site; doctors are shown as initial avatars.

const IMG = "https://drsudershangupta.com/wp-content/uploads";

export const site = {
  name: "Little Sprouts Hospital",
  doctor: "Dr. Aarav Kapoor",
  tagline: "Caring for children and women in Greenvale since 1999",
  phone: "+91-98765-43210",
  phoneHref: "tel:+919876543210",
  email: "hello@littlesprouts.example",
  address: "21 Rosewood Avenue, Sector 7, Greenvale, Haryana 100001",
  hours: {
    days: "Monday – Sunday",
    morning: "10 AM – 2 PM",
    evening: "5:30 PM – 8:30 PM",
  },
  social: [
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "Instagram", icon: "instagram", href: "#" },
  ],
};

export const images = {
  about: `${IMG}/2025/11/Gemini_Generated_Image_opdayuopdayuopda.jpeg`,
  provide: `${IMG}/2023/05/pic-16.jpg`,
  plus: `${IMG}/2023/05/pic-13.png`,
  childCare: `${IMG}/2025/11/wmremove-transformed-1.png`,
  available: `${IMG}/2025/11/Gemini_Generated_Image_jtm66pjtm66pjtm6-e1762497445881.png`,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "child-care", label: "Child Care" },
  { id: "women-care", label: "Women Care" },
  { id: "contact", label: "Contact" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
];

export const slides = [
  {
    eyebrow: site.name,
    subtitle: site.doctor,
    title: "Trusted Pediatric Care for Your Little Ones",
    text: "Gentle, expert care for newborns, children and teenagers, seven days a week.",
    image: `${IMG}/2025/11/Gemini_Generated_Image_jtm66pjtm66pjtm6-e1762497445881.png`,
  },
  {
    eyebrow: site.name,
    subtitle: "Child Care · Women Care",
    title: "Healthy Kids, Happy Families",
    text: "From the NICU to the playground, we look after every stage of your child's growth.",
    image: `${IMG}/2025/11/Gemini_Generated_Image_fj0comfj0comfj0c-e1762497818724.png`,
  },
];

export const flipCards = [
  {
    title: "Pediatric Care",
    text: "Check-ups, illness treatment and growth monitoring for newborns through teenagers.",
    icon: `${IMG}/2025/11/pediatrics.png`,
    href: "#child-care",
  },
  {
    title: "NICU",
    text: "Dedicated neonatal intensive care for premature and unwell newborns.",
    icon: `${IMG}/2025/11/nicu.png`,
    href: "#child-care",
  },
  {
    title: "Fertility",
    text: "Evaluation and guidance for couples planning to grow their family.",
    icon: `${IMG}/2025/11/medical.png`,
    href: "#women-care",
  },
  {
    title: "Women Care",
    text: "Obstetric and gynaecology services, from adolescence through pregnancy and beyond.",
    icon: `${IMG}/2025/11/woman.png`,
    href: "#women-care",
  },
];

export const careFocus = [
  "Preventive care & vaccinations",
  "Emergency pediatric care",
  "Nutrition support",
  "Seasonal illness protection",
];

export const provideFeatures = [
  {
    title: "Personalised Care Assistance",
    text: "You and your child are part of the care team. Your concerns and preferences shape every plan.",
  },
  {
    title: "Medication Management",
    text: "Clear guidance on prescriptions and doses, so your child gets the safest, most effective treatment.",
  },
];

export const promises = [
  {
    title: "Gentle Treatment",
    text: "A calm, child-friendly setting where young patients feel at ease.",
  },
  {
    title: "Open Communication",
    text: "Clear explanations of every diagnosis and treatment plan.",
  },
  {
    title: "Unwavering Support",
    text: "Guidance for families that continues after the appointment ends.",
  },
];

export const childServices = [
  { title: "Neonatal / Pediatric OPD", note: "Ages 0–18 years" },
  { title: "IPD Services", note: "In-patient admission & care" },
  { title: "NICU", note: "Newborn intensive care" },
  { title: "Physiotherapy & Speech Therapy", note: "Developmental support" },
  { title: "Vaccination & Immunisation", note: "Complete schedules" },
  { title: "Asthma Clinic", note: "Diagnosis & long-term management" },
];

export const womenServices = [
  { title: "Obstetric & Gynaec OPD", note: "Consultations & follow-ups" },
  { title: "Adolescent Clinic", note: "Care for teenage girls" },
  { title: "Antenatal Care", note: "Pregnancy check-ups" },
  { title: "In-house Lab & Pharmacy", note: "Tests and medicines on site" },
  { title: "Well Women Clinic", note: "Routine screening" },
  { title: "Vaccination", note: "Antenatal & cervical cancer" },
  { title: "Office Hysteroscopy", note: "Outpatient procedure" },
  { title: "PCOD", note: "Diagnosis & treatment" },
  { title: "Fertility", note: "Evaluation & guidance" },
];

export const doctors = [
  {
    name: "Dr. Aarav Kapoor",
    degree: "MBBS, MD",
    role: "Pediatrician · Founder",
    languages: "Hindi, English",
    experience: "25+ years",
    previously: ["City General Hospital", "District Children's Hospital"],
  },
  {
    name: "Dr. Meera Kapoor",
    degree: "MBBS, MS",
    role: "Obstetrician & Gynaecologist",
    languages: "Hindi, English",
    experience: "22+ years",
    previously: ["Metro Women's Hospital", "District Civil Hospital"],
  },
  {
    name: "Dr. Kavya Rao",
    degree: "MBBS, MD",
    role: "Pediatrician",
    languages: "Hindi, English, Kannada",
    experience: "10+ years",
    previously: [],
  },
];

export const comforts = [
  {
    title: "Child-friendly facility",
    text: "Waiting areas and exam rooms designed to make young patients less anxious.",
  },
  {
    title: "Everything under one roof",
    text: "From routine physicals to complex cases, with lab tests and pharmacy on site.",
  },
  {
    title: "Modern infrastructure",
    text: "Up-to-date equipment and a steady push toward global standards of care.",
  },
];

export const blogCategories = ["All Post", "Activities", "Events", "Health", "Nursing"];

export const posts = [
  {
    title: "A Parent's Guide to Child Growth & Development",
    date: "December 27, 2025",
    category: "Health",
    summary:
      "What growth and development milestones to expect from infancy to the school years, and when to seek medical advice.",
    image: `${IMG}/2025/11/Gemini_Generated_Image_fj0comfj0comfj0c-e1762497818724.png`,
  },
  {
    title: "Baby Feeding Basics: A Pediatrician's Perspective",
    date: "September 10, 2025",
    category: "Nursing",
    summary:
      "Responsive feeding, hunger cues, breast vs. formula, and how to tell your baby is getting enough.",
    image: `${IMG}/2023/05/Gemini_Generated_Image_vfkhm3vfkhm3vfkh-e1762841712834.png`,
  },
];
