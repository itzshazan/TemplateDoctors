// All content lives here. Source: drvarunlaparoscopy.com (home, About, Contact) and the
// Google Maps listing "Dr. Varun Palanati | Gastro & Laparoscopic Surgeon" (Nov 2026).
// Items to confirm are listed in IMAGE-PROMPTS.md.

const IMG = "/images";

export const site = {
  name: "Dr. Varun Palanati",
  title: "Gastro & Laparoscopic Surgeon",
  credentials: "MS, M.Ch (Surgical Gastroenterology), FIAGES",
  tagline: "General Surgery & Surgical Gastroenterology",
  city: "Guntur",
  phone: "+91 73370 37878",
  phoneHref: "tel:+917337037878",
  whatsapp: "917337037878",
  emergencyPhone: "0863-2213999",
  emergencyHref: "tel:08632213999",
  email: "drvarunpalanati@gmail.com",
  address: "Donka Road, Opp. 4th Line, Arundelpet, Guntur, Andhra Pradesh 522002",
  hours: "Open 24 hours · Emergency care 24/7",
  rating: "5.0",
  directions: "https://maps.app.goo.gl/1hEqDBH5CVtDYCST9",
  review: "https://g.page/r/CRfJUYFbPPgWEAI/review",
  social: {
    facebook: "https://www.facebook.com/drvarunpalanati",
    instagram: "https://www.instagram.com/dr.varun_gastroenterologist",
  },
};

export const images = {
  hero: `${IMG}/dr-varun-hero.png`,
  about: `${IMG}/dr-varun-standing.jpg`,
  logo: `${IMG}/logo.png`,
  logoWhite: `${IMG}/logo-white.png`,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

// From the counters on drvarunlaparoscopy.com.
export const stats = [
  { value: 12, suffix: "+", label: "Years in surgery" },
  { value: 1550, suffix: "+", label: "Successful surgeries" },
  { value: 2850, suffix: "+", label: "Happy patients" },
  { value: 4, suffix: "+", label: "Awards & achievements" },
];

export const education = [
  { years: "2006 – 2011", title: "MBBS", place: "NRI Medical College & GH, Dr. NTR University of Health Sciences, Vijayawada" },
  { years: "2012 – 2015", title: "MS, General Surgery", place: "NRI Medical College & GH, Dr. NTR University of Health Sciences, Vijayawada" },
  { years: "2016 – 2019", title: "M.Ch, Surgical Gastroenterology", place: "Narayana Medical College & GH, Nellore" },
];

export const experience = [
  { years: "Current", title: "Consultant", place: "Janardani Hospital, Guntur" },
  { years: "2019 – 2020", title: "Associate Consultant, Liver Transplant & Hepatobiliary Surgery", place: "Yashoda Hospitals, Secunderabad" },
  { years: "2015 – 2016", title: "Senior Resident", place: "Guntur Medical College & Government Hospital, Guntur" },
  { years: "2011 – 2012", title: "Internship", place: "NRI Medical College & GH, Chinnakakani" },
];

export const memberships = [
  "Association of Surgeons of India (ASI)",
  "Indian Association of Gastrointestinal Endoscopic Surgeons (IAGES)",
  "International Medical Sciences Academy (IMSA)",
];

export const academics = [
  { title: "International speaker", text: "Case presentation at KINGCA Week (Korea International Gastric Cancer Week), Seoul, 2018." },
  { title: "Published research", text: "Case reports in the World Journal of Surgery and Surgical Research and the Narayana Medical Journal (2018)." },
  { title: "International abstracts", text: "Two abstracts in Gut (IDDF 2018 and IDDF 2019) on pancreatic duct anomaly and gastric carcinoma." },
  { title: "Observerships", text: "MNJ Cancer Institute, and the Department of GI Surgery, Amrita Institute of Medical Sciences, Kochi." },
];

export const hospitals = [
  { name: "Janardani Hospital", city: "Guntur", image: `${IMG}/janardani-hospital.jpg` },
  { name: "Shri Hospital", city: "Guntur", image: `${IMG}/shri-hospital.jpg` },
];

/** Headline procedures (large cards). */
export const procedures = [
  { title: "Laparoscopic Surgery", text: "Keyhole surgery through small incisions, for less pain, minimal scarring and a faster return home." },
  { title: "Bariatric Surgery", text: "Weight-loss surgery for severe obesity, with careful assessment and long-term follow-up." },
  { title: "Liver Transplantation", text: "Transplant assessment and care, backed by experience in a liver transplant and hepatobiliary unit." },
  { title: "Emergency Surgery", text: "Round-the-clock care for gastrointestinal emergencies such as perforation, obstruction and bleeding." },
];

/** Organs and conditions treated (numbered list). */
export const conditions = [
  { title: "Esophagus", text: "Reflux, swallowing difficulty and esophageal disorders." },
  { title: "Stomach", text: "Ulcers, gastric outlet problems and stomach tumours." },
  { title: "Gall Bladder", text: "Laparoscopic removal for gallstones, with fast recovery." },
  { title: "Liver", text: "Liver cysts, abscesses and tumours." },
  { title: "Pancreas", text: "Pancreatitis, pancreatic cysts and tumours." },
  { title: "Biliary", text: "Bile duct stones, strictures and blockages." },
  { title: "Spleen", text: "Spleen surgery, laparoscopic where suitable." },
  { title: "Appendix", text: "Prompt keyhole surgery for appendicitis." },
  { title: "Small & Large Intestine", text: "Obstruction, perforation, tumours and inflammatory bowel disease." },
  { title: "Rectum & Anal Canal", text: "Piles, fissures, fistulas and rectal conditions." },
  { title: "Hernia", text: "Laparoscopic and open repair of inguinal, umbilical and incisional hernias." },
];

/** Shown on drvarunlaparoscopy.com. CONFIRM the patients are happy for these to be reused. */
export const testimonials = [
  { quote: "Dr. Varun is an exceptional surgeon. He was very kind and explained everything clearly, making me feel confident during my treatment.", name: "Ravi Teja", place: "Guntur" },
  { quote: "I travelled from Vijayawada to consult Dr. Varun, and I am so glad I did. My surgery went smoothly, and the recovery was quicker than expected.", name: "Shravani Rao", place: "Vijayawada" },
  { quote: "Dr. Varun's calm demeanor and exceptional skills made my entire treatment journey smooth. His staff was also very supportive.", name: "Venkatesh Babu", place: "Guntur" },
];

// dr-varun-*.jpg and the hospital photos come from drvarunlaparoscopy.com.
// g-lap-*.jpg are AI-generated to show laparoscopic surgery in general (no faces).
export const gallery: { src: string; alt: string; wide?: boolean; pos?: string }[] = [
  { src: `${IMG}/g-lap-theatre.jpg`, alt: "Laparoscopic surgery in theatre", wide: true },
  { src: `${IMG}/dr-varun-seated.jpg`, alt: "Dr. Varun Palanati", pos: "center 25%" },
  { src: `${IMG}/janardani-hospital.jpg`, alt: "Janardani Hospital, Guntur" },
  { src: `${IMG}/dr-varun-standing.jpg`, alt: "Dr. Varun Palanati in clinic", pos: "center 20%" },
  { src: `${IMG}/shri-hospital.jpg`, alt: "Shri Hospital, Guntur" },
  { src: `${IMG}/g-lap-instruments.jpg`, alt: "Laparoscopic instruments" },
];
