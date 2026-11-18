// All page content lives here so it can be edited without touching the components.
// Source: Regency Healthcare doctor profile (regencyhealthcare.in/doctors/dr-abhinit-gupta/)
// and the Google Maps listing. Items to confirm are listed in IMAGE-PROMPTS.md.

export type IconName =
  | "heart"
  | "pulse"
  | "device"
  | "valve"
  | "gauge"
  | "drop"
  | "stethoscope"
  | "award"
  | "graduation"
  | "hospital"
  | "calendar"
  | "book"
  | "mic"
  | "news"
  | "building";

export const contact = {
  doctorName: "Dr. Abhinit Gupta",
  initials: "AG",
  photo: "/images/face.jpg",
  title: "Interventional Cardiologist · Kanpur",
  role: "Associate Director, Cardiology",
  hospital: "Regency Hospital, Kanpur",
  // CONFIRM: no public email found. Leave empty to hide email links.
  email: "",
  // From the Google Maps listing (created when he was at Max Saket). CONFIRM it is still in use.
  phone: "+91 99688 57048",
  phoneHref: "tel:+919968857048",
  phoneNote: "For hospital appointments you can also book through Regency Healthcare.",
  address: "Regency Hospital (Tower 1), Sarvodaya Nagar, Kanpur, Uttar Pradesh",
  bookingUrl: "https://regencyhealthcare.in/doctors/dr-abhinit-gupta/",
  linkedin: "",
  linkedinActivity: "",
  profiles: [{ label: "Regency Healthcare profile", url: "https://regencyhealthcare.in/doctors/dr-abhinit-gupta/" }],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const heroSlides = [
  {
    eyebrow: "Associate Director, Cardiology · Regency Hospital, Kanpur",
    title: "Dr. Abhinit Gupta, DM (Cardiology)",
    text: "Interventional cardiologist and electrophysiologist trained at AIIMS New Delhi, with gold medals in MBBS, MD and DM.",
    image: "/images/abhinit-portrait.jpg",
    position: "center top",
  },
  {
    eyebrow: "Angioplasty · Pacemakers · Electrophysiology",
    title: "Precise heart care, explained clearly.",
    text: "From complex angioplasty and leadless pacemakers to 24×7 primary PCI for heart attacks — modern cardiology delivered with care.",
    image: "/images/abhinit-portrait.jpg",
    position: "center top",
  },
];

export const keyFacts: { icon: IconName; title: string; text: string }[] = [
  { icon: "graduation", title: "Training", text: "DM Cardiology from AIIMS New Delhi (2015), Gold Medalist." },
  { icon: "award", title: "Gold Medals", text: "Gold Medalist in MBBS (2006), MD Medicine (2011) and DM Cardiology (2015)." },
  { icon: "heart", title: "Specialisation", text: "Interventional cardiology, electrophysiology and cardiac device implantation." },
  { icon: "hospital", title: "Appointment", text: "Associate Director, Cardiology, Regency Hospital, Kanpur." },
];

export const about = {
  intro:
    "Dr. Abhinit Gupta is Associate Director of Cardiology at Regency Hospital, Kanpur. An interventional cardiologist and electrophysiologist, he treats the full spectrum of heart disease — from blocked arteries and heart attacks to rhythm problems, heart failure and structural heart defects.",
  body: "He completed his MBBS at LLRM Medical College, Meerut (2006), MD in Medicine at SN Medical College, Agra (2011) and DM in Cardiology at AIIMS, New Delhi (2015) — winning the gold medal at every stage. He then worked as Associate Consultant, Interventional Cardiology & Electrophysiology at Max Super Speciality Hospital, Saket, New Delhi (2015–2017).",
  philosophy:
    "At Regency he started a STEMI registry and a 24×7 primary PCI programme, so heart-attack patients in Kanpur can have their blocked artery opened as quickly as possible.",
  career: [
    "Associate Director, Cardiology — Regency Hospital, Kanpur",
    "Associate Consultant, Interventional Cardiology & Electrophysiology — Max Super Speciality Hospital, Saket (2015–2017)",
    "Fellowships: FIACM (2017), FSCAI, USA (2021)",
  ],
  pillars: [
    {
      title: "Education",
      items: [
        "DM Cardiology (Gold Medalist) — AIIMS New Delhi, 2015",
        "MD Medicine (Gold Medalist) — SN Medical College, Agra, 2011",
        "MBBS (Gold Medalist) — LLRM Medical College, Meerut, 2006",
      ],
    },
    {
      title: "Memberships",
      items: [
        "Professional Member, European Society of Cardiology",
        "International Associate, American College of Cardiology",
        "Life Member, Cardiological Society of India",
        "Life Member, Indian Association of Clinical Medicine",
        "Life Member, Indian Medical Association",
      ],
    },
  ],
};

export const stats = [
  { value: 3, suffix: "", label: "Gold Medals: MBBS, MD & DM" },
  { value: 6, suffix: "", label: "Awards & Fellowships" },
  { value: 3, suffix: "", label: "OPD Locations in Kanpur" },
  { value: 24, suffix: "×7", label: "Primary PCI Programme" },
];

export const expertise: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "heart",
    title: "Angiography & Angioplasty",
    text: "Trans-radial and trans-femoral coronary angiography and angioplasty, including complex PCI, CTO, rotablation and IVL.",
  },
  {
    icon: "gauge",
    title: "Imaging-Guided PCI",
    text: "Intravascular imaging and physiology — OCT, IVUS and FFR — to plan and optimise every stent.",
  },
  {
    icon: "pulse",
    title: "Primary PCI for Heart Attack",
    text: "Emergency angioplasty to open a blocked artery during a heart attack, through Regency's 24×7 programme.",
  },
  {
    icon: "device",
    title: "Pacemakers & Devices",
    text: "Pacemaker, CRT and ICD implantation, including leadless (capsule) pacemakers.",
  },
  {
    icon: "valve",
    title: "Structural Heart Interventions",
    text: "Device closure of PDA, ASD and VSD, and balloon valvuloplasty of the mitral, aortic and pulmonary valves.",
  },
  {
    icon: "stethoscope",
    title: "Electrophysiology & Echo",
    text: "EP studies and radiofrequency ablation; paediatric, transoesophageal, dobutamine stress and strain echocardiography.",
  },
];

/** Awards & honours (shown in the "research" section). */
export const publications = [
  { journal: "Indian Heart Journal", year: "2015", title: "AV Gandhi Award for Excellence in Cardiology", note: "National award for excellence in cardiology." },
  { journal: "AIIMS, New Delhi", year: "2015", title: "Dr. Jagdish Lal Kapila Gold Medal", note: "Best DM student in Cardiology." },
  { journal: "SN Medical College, Agra", year: "2011", title: "Prof. K.S. Mathur Gold Medal", note: "Best student during MD (Medicine)." },
  { journal: "LLRM Medical College, Meerut", year: "2006", title: "S.K. Goel Gold Medal", note: "Overall best candidate of the year in MBBS; first in all professional examinations." },
  { journal: "Indian Association of Clinical Medicine", year: "2017", title: "Fellowship (FIACM)", note: "Fellowship of the Indian Association of Clinical Medicine." },
  { journal: "Society for Cardiovascular Angiography & Interventions, USA", year: "2021", title: "Fellowship (FSCAI)", note: "Fellowship in interventional cardiology." },
];

export const presentation = {
  title: "Government of India National Merit-cum-Means Scholarship (2000); CSIR Youth for Leadership in Science (1999)",
  venue: "Early academic honours",
};

export const pressOutlets = ["Dainik Jagran", "Amar Ujala", "Hindustan", "i-Next", "Rashtriya Sahara"];

// Only the i-Next clipping was read; the other papers are listed from the hospital's news page (24 Apr 2019).
export const pressClippings = [
  { outlet: "i-Next (Dainik Jagran group) · 24 April 2019", headline: "Heart patient fitted with the world's smallest pacemaker — a capsule-sized device implanted in a 62-year-old" },
  { outlet: "Amar Ujala · Hindustan · Rashtriya Sahara · 24 April 2019", headline: "Also reported the capsule pacemaker implant at Regency Hospital, Kanpur" },
];

/** "Milestones" block (reuses the speaking layout). */
export const speaking = {
  event: "Capsule pacemaker",
  place: "Regency Hospital, Kanpur",
  date: "April 2019",
  topic: "Implanted one of the world's smallest (leadless, capsule-sized) pacemakers in a 62-year-old patient — a first for the city, covered by the local press",
  image: "/images/press-dainik-jagran.jpg",
  gallery: "/images/abhinit-portrait.jpg",
  extra: "He also started Regency's STEMI registry and 24×7 primary PCI programme for heart-attack patients.",
};

/** Shown as tags under "Memberships & Fellowships". */
export const corporatePartners = [
  "European Society of Cardiology",
  "American College of Cardiology",
  "Cardiological Society of India",
  "Indian Association of Clinical Medicine",
  "Indian Medical Association",
  "FIACM · FSCAI (USA)",
];

export const faqs = [
  {
    q: "Where does Dr. Abhinit Gupta consult?",
    a: "At three Regency locations in Kanpur: Regency Hospital (Tower 1), Regency Hospital Govind Nagar, and Regency Super Speciality Clinic. Timings are listed in the OPD section below.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call the number on this page or book through the Regency Healthcare website. Please carry previous ECGs, echo reports, angiography CDs and your current medicines.",
  },
  {
    q: "What are the warning signs of a heart attack?",
    a: "Chest pain or pressure lasting more than a few minutes, pain spreading to the arm, jaw or back, breathlessness, sweating or nausea. Call an ambulance immediately — every minute matters.",
  },
  {
    q: "What is a leadless (capsule) pacemaker?",
    a: "A tiny pacemaker, about the size of a large capsule, placed directly inside the heart through a vein in the leg. It needs no chest incision or wires, and recovery is quick. It suits selected patients with slow heart rhythms.",
  },
  {
    q: "Is angioplasty done through the wrist?",
    a: "Yes, most angiographies and angioplasties can be done through the radial artery in the wrist, which usually means less bleeding, more comfort and earlier walking.",
  },
  {
    q: "Can I get medical advice through this website?",
    a: "No. This site is for information only. For an emergency, go to the nearest hospital emergency department or call 112.",
  },
];

/** Heart-health guides (no external links: shown as cards). */
export const writing: {
  type: string;
  date: string;
  title: string;
  summary: string;
  url: string;
  image?: string;
}[] = [
  {
    type: "Patient Guide",
    date: "Heart attack",
    title: "Heart Attack: Why Every Minute Counts",
    summary: "Primary angioplasty works best when done early. Know the symptoms and go straight to a hospital with a cath lab.",
    url: "",
    image: "/images/guide-heart-attack.jpg",
  },
  {
    type: "Patient Guide",
    date: "Angioplasty",
    title: "Angioplasty Through the Wrist",
    summary: "What to expect before, during and after a radial angioplasty — and why most patients walk the same day.",
    url: "",
    image: "/images/guide-angioplasty.jpg",
  },
  {
    type: "Patient Guide",
    date: "Pacemakers",
    title: "Living Well With a Pacemaker",
    summary: "Mobile phones, travel, exercise and follow-up checks: practical answers for pacemaker patients.",
    url: "",
    image: "/images/guide-pacemaker.jpg",
  },
  {
    type: "Prevention",
    date: "Risk factors",
    title: "Know Your Numbers: BP, Sugar and Cholesterol",
    summary: "Controlling these three numbers is the most powerful way to prevent heart disease.",
    url: "",
  },
];

export const clinics = [
  {
    name: "Regency Hospital (Tower 1)",
    hours: ["Mon, Wed, Fri: 10:00 AM – 2:00 PM", "Tue, Thu, Sat: 10:00 AM – 4:00 PM"],
  },
  { name: "Regency Hospital, Govind Nagar", hours: ["Mon, Wed, Fri: 2:00 PM – 4:00 PM"] },
  { name: "Regency Super Speciality Clinic", hours: ["Tue & Thu: 6:00 PM – 8:00 PM"] },
];

export const clinic = {
  name: "Regency Hospital, Kanpur",
  address: "Regency Hospital (Tower 1), Sarvodaya Nagar, Kanpur, Uttar Pradesh",
  hours: "See OPD timings for each location",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Regency+Hospital+Sarvodaya+Nagar+Kanpur",
  embed: "https://www.google.com/maps?q=Regency+Hospital+Sarvodaya+Nagar+Kanpur&output=embed",
};
