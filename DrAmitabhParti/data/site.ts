// All page content lives here so it can be edited without touching the components.

export type IconName =
  | "virus"
  | "gauge"
  | "drop"
  | "butterfly"
  | "thermometer"
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
  doctorName: "Dr. Amitabh Parti",
  initials: "AP",
  photo: "/images/face.png",
  title: "Internal Medicine · Gurugram",
  role: "Senior Director & Head, Internal Medicine",
  hospital: "Fortis Memorial Research Institute",
  email: "amitabhparti@gmail.com",
  phone: "0124-4962 200",
  phoneHref: "tel:+911244962200",
  phoneNote: "Fortis Memorial switchboard. Ask for Dr. Parti's office",
  address:
    "Fortis Memorial Research Institute, Sector 44, opp. HUDA City Centre Metro Station, Gurugram, Haryana 122002",
  bookingUrl: "https://www.fortishealthcare.com/doctors/dr-amitabh-parti-1097",
  linkedin: "https://www.linkedin.com/in/dr-amitabh-parti-779a117/",
  linkedinActivity: "https://www.linkedin.com/in/dr-amitabh-parti-779a117/recent-activity/all/",
  profiles: [
    { label: "Fortis Healthcare", url: "https://www.fortishealthcare.com/doctors/dr-amitabh-parti-1097" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dr-amitabh-parti-779a117/" },
    { label: "Practo", url: "https://www.practo.com/gurgaon/doctor/dr-amitabh-parthi-general-physician" },
    { label: "Credihealth", url: "https://www.credihealth.com/gurgaon/doctor/dr-amitabh-parti-internal-medicine" },
    { label: "HexaHealth", url: "https://www.hexahealth.com/gurgaon/doctor/dr-amitabh-parti-internal-medicine" },
    { label: "Lybrate", url: "https://www.lybrate.com/gurgaon/doctor/dr-amitabh-parti-internal-medicine-specialist" },
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "research", label: "Research" },
  { id: "media", label: "Media" },
  { id: "writing", label: "Writing" },
  { id: "faq", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

export const heroSlides = [
  {
    eyebrow: "Head of Internal Medicine · Fortis Memorial Research Institute",
    title: "Dr. Amitabh Parti, MD",
    text: "An internal medicine physician in Gurugram with 38 years of clinical practice, known for careful diagnosis of complex, everyday and tropical illness.",
    image: "/images/parti-portrait.png",
    position: "center top",
  },
  {
    eyebrow: "38 years in clinical practice",
    title: "Listen carefully. Treat precisely.",
    text: "Good medicine starts with an unhurried conversation. Every diagnosis is built on listening first and treating with precision.",
    image: "/images/parti-portrait.png",
    position: "center top",
  },
];

export const keyFacts: { icon: IconName; title: string; text: string }[] = [
  { icon: "calendar", title: "Experience", text: "38 years in clinical practice, two decades of them in corporate health." },
  { icon: "graduation", title: "Qualification", text: "MBBS (Gold Medallist, 1986) and MD, Internal Medicine (1991)." },
  { icon: "stethoscope", title: "Specialisation", text: "Internal medicine, covering infections, diabetes, hypertension and thyroid disorders." },
  { icon: "hospital", title: "Appointment", text: "Senior Director & Unit Head, Internal Medicine, Fortis Memorial, Gurugram." },
];

export const about = {
  intro:
    "Dr. Amitabh Parti is Senior Director and Unit Head of Internal Medicine at Fortis Memorial Research Institute, Gurugram. Over 38 years of practice he has treated the full breadth of adult medicine, from tropical fevers and infections to long-term diabetes, hypertension and thyroid disease.",
  body: "He graduated MBBS from the University of Punjab in 1986, topping all three professional examinations and receiving the Gold Medal as best graduate of his batch, and completed his MD in Internal Medicine there in 1991. Before Fortis he was Medical Director of Florence Nursing Home and a visiting consultant at Max Hospital and Artemis Health Sciences Institute.",
  philosophy:
    "For more than twenty years he has also worked in corporate health, setting up surveillance, triage and annual screening programmes. He is often quoted in the national press on dengue, chikungunya and public health.",
  career: [
    "Senior Director & Unit Head, Internal Medicine, Fortis Memorial Research Institute",
    "Former Medical Director, Florence Nursing Home",
    "Former Visiting Consultant, Max Hospital & Artemis Health Sciences Institute",
  ],
  pillars: [
    {
      title: "Education",
      items: ["MBBS, University of Punjab, 1986 (Gold Medal)", "MD, Internal Medicine, University of Punjab, 1991"],
    },
    {
      title: "Memberships",
      items: [
        "Association of Physicians of India",
        "Cardiological Society of India",
        "Research Society for the Study of Diabetes in India",
        "Indian Medical Association",
      ],
    },
  ],
};

export const stats = [
  { value: 38, suffix: "", label: "Years in Clinical Practice" },
  { value: 6, suffix: "", label: "Peer-Reviewed Publications" },
  { value: 8, suffix: "+", label: "National Media Outlets" },
  { value: 7, suffix: "", label: "Corporate Health Empanelments" },
];

export const expertise: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "virus",
    title: "Infectious Disease",
    text: "Diagnosis and treatment of everyday, systemic and hospital infections, including dengue and chikungunya.",
  },
  {
    icon: "gauge",
    title: "Hypertension",
    text: "Finding the cause of high blood pressure and controlling it to protect the heart, kidneys and brain.",
  },
  {
    icon: "drop",
    title: "Diabetes Management",
    text: "Long-term diabetes and metabolic care, including newer therapies such as GLP-1 based medicines.",
  },
  {
    icon: "butterfly",
    title: "Thyroid Disorders",
    text: "Evaluation and management of under- and over-active thyroid and related hormonal problems.",
  },
  {
    icon: "thermometer",
    title: "Tropical Medicine",
    text: "Fevers and tropical illnesses common in India, such as malaria, typhoid and other vector-borne diseases.",
  },
  {
    icon: "stethoscope",
    title: "General Internal Medicine",
    text: "Whole-person care for adults with complex, multi-system or undiagnosed medical problems.",
  },
];

export const publications = [
  {
    journal: "The Lancet Respiratory Medicine",
    year: "2021",
    title: "COVINTOC: Phase III randomised trial of tocilizumab in COVID-19",
    note: "Co-investigator in a multi-centre trial for COVID-19 cytokine release syndrome.",
  },
  {
    journal: "International Journal of Case Reports and Images",
    year: "2026",
    title: "Primary Sjögren's syndrome presenting as acute pancreatitis and interstitial nephritis",
    note: "Corresponding author on a diagnostically challenging case.",
  },
  {
    journal: "International Journal of Case Reports and Images",
    year: "2025",
    title: "HbS-β° thalassemia with multifocal emphysematous osteomyelitis and E. coli septicaemia",
    note: "Case report on a rare complication in a haemoglobinopathy.",
  },
  {
    journal: "Gut (BMJ)",
    year: "1991",
    title: "Diagnostic efficiency of an ultrarapid endoscopy-room test for H. pylori",
    note: "Evaluated a rapid, one-minute test performed in the endoscopy room.",
  },
  {
    journal: "American Journal of Gastroenterology",
    year: "1991",
    title: "Gastroenterology research",
    note: "Published research in gastroenterology.",
  },
  {
    journal: "Journal of the Indian Medical Association",
    year: "1991",
    title: "Spontaneous bacterial peritonitis in nephrotic syndrome",
    note: "Clinical study of an uncommon infection in kidney disease.",
  },
];

export const presentation = {
  title: "Thrombolytic therapy in acute myocardial infarction",
  venue: "Cardiological Society of India Conference, Bombay, 1990",
};

export const pressOutlets = [
  "Times of India",
  "Hindustan Times",
  "Economic Times",
  "Business Standard",
  "The Statesman",
  "Deccan Chronicle",
  "ANI News",
  "Dainik Bhaskar",
];

export const pressClippings = [
  { outlet: "Times of India", headline: "Chikungunya sneaks into Gurgaon" },
  { outlet: "Hindustan Times", headline: "Waterlogged roads after rain raise dengue scare" },
  { outlet: "Economic Times", headline: "Chronic fatigue syndrome: Know how to manage it" },
  { outlet: "The Statesman", headline: "Unclean surroundings fertile ground for dengue, say experts" },
  { outlet: "Sunday Standard", headline: "The code of ethics for patients" },
  { outlet: "Dainik Bhaskar", headline: "What is the cause of stress" },
];

export const speaking = {
  event: "SPECTRUM 2026",
  place: "Gurugram",
  date: "15 May 2026",
  topic: "Panellist on the liver benefits of semaglutide 2.4 mg in real-world F2–F3 MASH",
  image: "/images/speaking-group.jpeg",
  gallery: "/images/speaking.jpeg",
  extra: "A regular speaker at medical forums on diabetes care and metabolic therapies.",
};

export const corporatePartners = [
  "Engineers India Limited",
  "Ballarpur Industries Limited",
  "Indus Towers Limited",
  "Instyle Exports Limited",
  "MakeMyTrip",
  "Ibis Hotels",
  "University of Delhi",
];

export const faqs = [
  {
    q: "How do I book an appointment with Dr. Parti?",
    a: "Appointments are handled by Fortis Memorial Research Institute, Gurugram. Book through the Fortis doctor profile or call the hospital switchboard on 0124-4962 200 and ask for Dr. Parti's office.",
  },
  {
    q: "What conditions does an internal medicine physician treat?",
    a: "Internal medicine covers adult illness across the body: infections and fevers, diabetes, high blood pressure, thyroid problems and complex cases where the diagnosis is not yet clear.",
  },
  {
    q: "Where does Dr. Parti consult?",
    a: "At Fortis Memorial Research Institute in Sector 44, Gurugram, opposite the HUDA City Centre Metro Station.",
  },
  {
    q: "Can I get medical advice through this website or by email?",
    a: "No. This site is for information only and cannot be used for clinical consultation. For patient care, reports or records, please go through Fortis Memorial's official channels.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Go to the nearest hospital emergency department or call emergency services straight away. Do not wait for a reply by email.",
  },
  {
    q: "How can media or event organisers get in touch?",
    a: "Media, teaching and speaking enquiries are welcome by email at amitabhparti@gmail.com, or through the form on this page.",
  },
];

export const writing: {
  type: string;
  date: string;
  title: string;
  summary: string;
  url: string;
  image?: string;
}[] = [
  {
    type: "Essay",
    date: "1 Oct 2026",
    title: "The 8-8-8 Rule: Can It Help You Live a Healthier Life?",
    summary: "Why splitting the day into sleep, work and personal time is a useful start, but not the whole story.",
    url: "https://amitabhparti.com/writing/the-8-8-8-rule-healthier-life",
    image: "/images/articles/8-8-8-rule.jpg",
  },
  {
    type: "Patient Guide",
    date: "29 Jun 2026",
    title: "Your Journey with Semaglutide: A Patient Guide",
    summary: "How semaglutide works, plus dosing, side effects, diet and the warning signs to watch for.",
    url: "https://amitabhparti.com/writing/your-journey-with-semaglutide",
  },
  {
    type: "LinkedIn",
    date: "Jun 2026",
    title: "The New Era of Diabesity Treatment",
    summary: "Newer agents now achieve weight loss once thought out of reach. What this means for patients.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7466019960100753409/",
  },
  {
    type: "LinkedIn",
    date: "May 2026",
    title: "Metabolic Syndrome in Indian Patients",
    summary: "Choosing the right measurements for 'lean-obese' South Asian patients.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7462097947707494400/",
  },
  {
    type: "LinkedIn",
    date: "May 2026",
    title: "Indians Are Among the Most Privileged Healthcare Consumers",
    summary: "A contrarian look at how accessible and affordable Indian healthcare really is.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7460562846976987136/",
  },
  {
    type: "LinkedIn",
    date: "Apr 2026",
    title: "World Health Day 2026: The Real Key to Staying Healthy Every Day",
    summary: "Consistency, not intensity, is what keeps people well.",
    url: "https://www.linkedin.com/pulse/world-health-day-2026-real-key-staying-healthy-every-dr-amitabh-parti-dv08c",
  },
  {
    type: "LinkedIn",
    date: "Apr 2026",
    title: "We're Overcomplicating Health",
    summary: "Small daily habits beat extreme diets and punishing routines.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7447210984336793600/",
  },
  {
    type: "LinkedIn",
    date: "Apr 2026",
    title: "A Turning Point in the Fight Against Dengue",
    summary: "Dengue as a year-round problem, and what a new vaccine could change in India.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7446833594154799105/",
  },
];

export const clinic = {
  name: "Fortis Memorial Research Institute",
  address: "Sector 44, opposite HUDA City Centre Metro Station, Gurugram, Haryana 122002",
  hours: "OPD timings: please confirm with the Fortis switchboard",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Fortis+Memorial+Research+Institute+Gurugram",
  embed: "https://www.google.com/maps?q=Fortis+Memorial+Research+Institute+Sector+44+Gurugram&output=embed",
};
