// All content lives here. Source: the details you sent (Nov 2026) and aashirwadclinic.net
// (home, Doctor, Qualification, Accolades, Contact and service pages). Items to confirm are in IMAGE-PROMPTS.md.

const IMG = "/images";

export const site = {
  name: "Dr. Meenakshi Surve Pawar",
  shortName: "Dr. Meenakshi",
  role: "Sr. Consultant Obstetrician & Gynecologist",
  degrees: ["MS (OBGYN)", "MBBS", "DNB (OBGYN)", "FICS (UK)", "FPAI", "FIAGE", "FICOG", "FMAS", "DIH"],
  clinic: "Aashirwad Clinic & Sonography Center",
  since: 2013,
  city: "Chinchwad, Pune",
  phone: "+91 74993 57236",
  phoneHref: "tel:+917499357236",
  // CONFIRM: is this number on WhatsApp? The booking form and floating button use it.
  whatsapp: "917499357236",
  email: "aashirwadsocial4@gmail.com",
  address: "Sham Heights Building, 1st Floor, Shop No. 103, Old Chinchwad Jakat Naka, Opp. Bikaner Sweets, Chinchwad, Pimpri-Chinchwad, Pune 411033",
  directions: "https://maps.app.goo.gl/KeD1kdBwJp9aEjq77",
  schedule: [
    { day: "Monday – Saturday", time: "7:30 PM – 9:30 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],
  council: "Maharashtra Medical Council",
  social: {
    facebook: "https://www.facebook.com/MeenakshiPawarMS/",
    instagram: "https://www.instagram.com/aashirwadclinic_obgyn/",
    youtube: "https://www.youtube.com/@AashirwadClinic1",
    linkedin: "https://www.linkedin.com/company/aashirwadclinic/",
  },
};

export const images = {
  logo: `${IMG}/logo.png`,
  portrait: `${IMG}/dr-meenakshi-portrait.jpg`,
  clinicCard: `${IMG}/clinic-logo-wall.jpg`,
  aboutMain: `${IMG}/dr-meenakshi-sonography.jpg`,
  aboutSmall: `${IMG}/dr-meenakshi-award.jpg`,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const highlights = [
  { value: "2013", label: "Clinic founded in Chinchwad" },
  { value: "9", label: "Degrees & fellowships" },
  { value: "ISO", label: "9001:2015 certified clinic" },
  { value: "3D/4D", label: "In-house sonography" },
];

export const certifications = [
  "Laparoscopic tubal ligation",
  "Diagnostic hysteroscopy",
  "Ultrasonography in obstetrics & gynecology",
  "Gynecological endoscopy",
];

export const memberships = [
  "Pune Obstetric & Gynecological Society (POGS)",
  "Indian Medical Association (IMA)",
  "Maharashtra Medical Council (MMC)",
  "Indian College of Obstetricians & Gynecologists (FICOG)",
  "Indian Association of Gynaecological Endoscopists (FIAGE)",
  "Family Planning Association of India (FPAI)",
  "International College of Surgeons (FICS)",
  "Fellow of Minimal Access Surgery (FMAS)",
];

/** Services: hover/tap a name to see its panel. */
export const services = [
  {
    id: "gynecology",
    title: "Gynecology",
    kicker: "Every phase of womanhood",
    text: "Care for periods, PCOS, hormonal balance, infections and other gynecological conditions, including minimally invasive laparoscopic and hysteroscopic procedures.",
    points: ["Period & hormonal problems", "PCOS / PCOD", "Laparoscopy & hysteroscopy"],
    image: `${IMG}/s-gynecology.jpg`,
  },
  {
    id: "obstetrics",
    title: "Obstetrics",
    kicker: "Safe motherhood",
    text: "Complete obstetric care with special experience in managing high-risk pregnancies, from the first visit to delivery planning.",
    points: ["High-risk pregnancy care", "Antenatal check-ups", "Delivery planning"],
    image: `${IMG}/dr-meenakshi-sonography.jpg`,
  },
  {
    id: "pregnancy",
    title: "Pregnancy Care",
    kicker: "Mother and baby",
    text: "Safe, closely monitored and personalised care through every trimester, with nutrition, lifestyle and emotional support for the mother.",
    points: ["Trimester-wise monitoring", "Diet & lifestyle guidance", "Postnatal & breastfeeding support"],
    image: `${IMG}/s-pregnancy.jpg`,
  },
  {
    id: "fertility",
    title: "Fertility",
    kicker: "The road to parenthood",
    text: "Fertility evaluation and personalised treatment for couples, with confidentiality and care at every step.",
    points: ["Fertility evaluation", "Follicular monitoring", "IUI (intra-uterine insemination)"],
    image: `${IMG}/s-fertility.jpg`,
  },
  {
    id: "sonography",
    title: "Sonography",
    kicker: "Clear insights",
    text: "High-resolution ultrasound with 3D/4D imaging and expert interpretation, for pregnancy and gynecological assessment.",
    points: ["Early pregnancy, anomaly & growth scans", "Doppler studies", "Pelvic & follicular scans"],
    image: `${IMG}/clinic-ultrasound-room.jpg`,
  },
  {
    id: "womens-health",
    title: "Women's Health",
    kicker: "Adolescence to menopause",
    text: "Prevention, early diagnosis, lifestyle and emotional wellbeing for women at every stage of life.",
    points: ["Adolescent health", "Preventive screening", "Menopause care"],
    image: `${IMG}/s-womens-health.jpg`,
  },
];

export const journey = [
  { step: "01", title: "Planning & first trimester", text: "Confirmation, dating scan, folic acid and a care plan built around you." },
  { step: "02", title: "Second trimester", text: "Anomaly scan, growth checks and guidance on diet, activity and rest." },
  { step: "03", title: "Third trimester", text: "Growth and Doppler scans, warning signs and a clear plan for delivery." },
  { step: "04", title: "After birth", text: "Postnatal check-ups, recovery and breastfeeding support." },
];

// Real photos from aashirwadclinic.net. Only the s-*.jpg service panels are AI-generated.
export const gallery = [
  { src: `${IMG}/clinic-logo-wall.jpg`, alt: "Aashirwad Clinic, The Women Healthcare" },
  { src: `${IMG}/dr-meenakshi-sonography.jpg`, alt: "Dr. Meenakshi at the sonography center" },
  { src: `${IMG}/clinic-reception.jpg`, alt: "Clinic reception" },
  { src: `${IMG}/cme-faculty.jpg`, alt: "As faculty at a CME on breastfeeding and lactation" },
  { src: `${IMG}/clinic-cabin.jpg`, alt: "Consultation cabin" },
  { src: `${IMG}/dr-meenakshi-award.jpg`, alt: "Receiving an award as faculty" },
  { src: `${IMG}/clinic-ultrasound-room.jpg`, alt: "Ultrasound room" },
  { src: `${IMG}/clinic-awards-shelf.jpg`, alt: "Awards and honours" },
  { src: `${IMG}/clinic-corridor.jpg`, alt: "Waiting corridor" },
  { src: `${IMG}/clinic-consultation.jpg`, alt: "Examination room" },
];
