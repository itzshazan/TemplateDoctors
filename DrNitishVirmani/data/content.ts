// All page content lives here so the single page can be edited in one place.
//
// Profile of Dr. Nitish Virmani, ENT & Head-Neck Surgeon, Faridabad.
// Sources: details supplied in the doctor sheet (Practo profile), the Google Maps listing.
// Items to confirm are listed in IMAGE-PROMPTS.md. The copy avoids pronouns (none are published).

const IMG = "/images";

export const site = {
  name: "Dr. Nitish Virmani",
  shortName: "Dr. Virmani",
  brand: "Dr. Nitish Virmani – ENT & Head-Neck Surgeon",
  tagline: "ENT & Head-Neck Surgeon",
  role: "ENT & Head-Neck Surgeon",
  degrees: "MBBS, MS (ENT), DNB (ENT)",
  institute: "JIPMER Puducherry · KEM Hospital Mumbai",
  city: "Faridabad",
  experienceYears: 16,
  phone: "+91 92897 65628",
  phoneHref: "tel:+919289765628",
  // CONFIRM: is this number on WhatsApp?
  whatsappNumber: "919289765628",
  whatsapp: "https://wa.me/919289765628?text=Hi%20Dr.%20Virmani%2C%20I%20would%20like%20to%20book%20an%20ENT%20appointment.",
  hospital: "Lala Diwan Chand Memorial Hospital",
  hospitalUrl: "",
  hospitalPhone: "",
  hospitalPhoneHref: "",
  registration: "Delhi Medical Council Reg. No. 7449",
  rating: 4.3,
  logo: `${IMG}/logo.svg`,
  heroImage: `${IMG}/hero.jpg`,
  doctorImage: `${IMG}/about.jpg`,
  commitmentImage: `${IMG}/why.jpg`,
};

/** Page copy that used to be hard-coded in the components. */
export const copy = {
  heroEyebrow: `${site.hospital} & ENT Care Centre · Sector 37, Faridabad`,
  heroTitle: `ENT & Head-Neck Surgeon in Faridabad – ${site.name}`,
  heroText:
    "Expert care for ear, nose and throat problems in adults and children — from sinusitis, tonsils and hearing loss to voice problems and head-and-neck surgery.",
  heroExtra: `MBBS from JIPMER, MS (ENT) from Seth GS Medical College & KEM Hospital, Mumbai, and DNB (ENT), with ${site.experienceYears} years in medicine.`,
  heroBadges: [`${site.experienceYears} Years in Medicine`, "MS (ENT) – KEM Mumbai", "20+ Publications"],
  aboutBadge: "Years in medicine",
  aboutTitle: "ENT & Head-Neck Surgeon in Faridabad",
  aboutParagraphs: [
    `${site.name} is an ENT and head-and-neck surgeon who consults at ${site.hospital} & ENT Care Centre, Sector 37, Faridabad, and at Pushpawanti Health Care Clinic, Sector 86. Dr. Virmani is also a teaching faculty surgeon at Al-Falah School of Medical Sciences & Research Centre (AFSMS&RC), Faridabad.`,
    "Training includes an MBBS from JIPMER, Puducherry (2010), an MS in ENT from Seth GS Medical College & KEM Hospital, Mumbai (2015) and the DNB in ENT (2015), followed by senior posts at Sarvodaya Hospital Faridabad, St. Stephen's Hospital and BSA Hospital, Delhi. Dr. Virmani has more than 20 publications in national and international journals.",
  ],
  areasCtaTitle: "Blocked nose, ear pain or a hoarse voice that won't settle?",
  areasCtaText: `Consult ${site.name} for a proper ENT examination and a clear treatment plan — medicines first, surgery only when it is truly needed.`,
  servicesTitle: "Ear, Nose & Throat",
  servicesAccent: "Care",
  servicesText:
    "Diagnosis and treatment of ear, nose, throat and head-and-neck problems in adults and children, with endoscopic examination and surgery when needed.",
  whyTitle: "Experienced ENT Surgeon",
  whyText: "Training at JIPMER and KEM Mumbai, academic work, and careful, conservative ENT care close to home in Faridabad.",
  visitTitle: "What to Expect at",
  visitAccent: "the ENT OPD",
  hospitalEyebrow: "Clinic & Hospital",
  hospitalTitle: "Where Dr. Virmani",
  hospitalText: "Lala Diwan Chand Memorial Hospital & ENT Care Centre on Bypass Road, Sector 37, Faridabad.",
  contactText: `Call, WhatsApp or send an enquiry to book a visit with ${site.name} in Faridabad.`,
  footerText: `${site.tagline} in Faridabad. ${site.degrees}, with ${site.experienceYears} years in medicine and 20+ publications.`,
  topbarHours: "ENT Care Centre: evenings 7–9 PM",
};

export type Clinic = {
  name: string;
  address: string;
  hours: string[];
  mapQuery: string;
};

export const clinics: Clinic[] = [
  {
    name: "Lala Diwan Chand Memorial Hospital & ENT Care Centre",
    address: "Bypass Road, Ashoka Enclave Part II, Sector 37, Faridabad, Haryana 121003",
    // CONFIRM: Google shows Mon 7–8 PM; the sheet says evenings 7–9 PM; hospital surgery by prior appointment.
    hours: ["ENT Care Centre: evenings 7:00 – 9:00 PM", "Hospital: by prior appointment"],
    mapQuery: "28.4804779,77.3144472",
  },
  {
    name: "Pushpawanti Health Care Clinic",
    address: "Sector 86, Faridabad",
    hours: ["Please call to confirm timings"],
    mapQuery: "Pushpawanti Health Care Clinic Sector 86 Faridabad",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
  { href: "#hospital", label: "Clinic" },
  { href: "#health-tips", label: "ENT Tips" },
  { href: "#contact", label: "Contact" },
];

export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [
  { label: "Years in Medicine", value: site.experienceYears, suffix: "" },
  { label: "Publications", value: 20, suffix: "+" },
  { label: "Consulting Locations", value: 2, suffix: "" },
  { label: "Hospitals Trained / Worked At", value: 5, suffix: "" },
];

export const credentials = [
  "MBBS – JIPMER, Puducherry (2010)",
  "MS (ENT) – Seth GS Medical College & KEM Hospital, Mumbai (2015)",
  "DNB (ENT) – 2015",
  "Teaching Faculty Surgeon – AFSMS&RC, Faridabad",
  site.registration,
];

export const experience = [
  { place: "Lala Diwan Chand Memorial Hospital & ENT Care Centre, Faridabad", role: "ENT & Head-Neck Surgeon", current: true },
  { place: "BSA Hospital, Delhi (2017–2018)", role: "Senior Resident", current: false },
  { place: "St. Stephen's Hospital, Delhi (2017)", role: "Senior Resident", current: false },
  { place: "Sarvodaya Hospital, Faridabad (2016–2017)", role: "Associate Consultant", current: false },
  { place: "KEM Hospital, Mumbai (2012–2016)", role: "Junior & Senior Resident", current: false },
];

export type ServiceCategory = "Ear" | "Nose & Sinus" | "Throat, Head & Neck";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  types: string[];
  benefits: string;
};

export const services: Service[] = [
  {
    id: "ear-infections",
    title: "Ear Pain, Discharge & Infections",
    category: "Ear",
    summary: "Ear pain, discharge and recurrent infections in children and adults, including perforated eardrums.",
    types: ["Acute and chronic otitis media", "Ear discharge and eardrum perforation", "Outer-ear (canal) infections", "Wax removal"],
    benefits: "Microscope-guided examination and cleaning, with the right treatment to prevent repeated infections.",
  },
  {
    id: "hearing",
    title: "Hearing Loss & Tinnitus",
    category: "Ear",
    summary: "Evaluation of reduced hearing, ringing in the ears and blocked-ear sensation.",
    types: ["Hearing tests (audiometry)", "Sudden hearing loss (urgent)", "Tinnitus (ringing)", "Hearing-aid guidance"],
    benefits: "Finding the cause early protects hearing — sudden hearing loss in particular needs treatment within days.",
  },
  {
    id: "ear-surgery",
    title: "Ear Surgery",
    category: "Ear",
    summary: "Surgery to repair the eardrum and middle ear when infections or perforations don't heal.",
    types: ["Tympanoplasty (eardrum repair)", "Mastoidectomy for chronic infection", "Removal of foreign bodies"],
    benefits: "A dry, safe ear and, in many cases, better hearing.",
  },
  {
    id: "vertigo",
    title: "Vertigo & Balance Problems",
    category: "Ear",
    summary: "Spinning sensation, imbalance and dizziness linked to the inner ear.",
    types: ["BPPV (positional vertigo)", "Vestibular neuritis", "Ménière's disease"],
    benefits: "Many types of vertigo improve quickly with simple repositioning manoeuvres and the right medicines.",
  },
  {
    id: "sinusitis",
    title: "Sinusitis & Nasal Blockage",
    category: "Nose & Sinus",
    summary: "Blocked nose, facial pain and repeated sinus infections, assessed with nasal endoscopy.",
    types: ["Acute and chronic sinusitis", "Deviated nasal septum", "Nasal polyps", "Turbinate hypertrophy"],
    benefits: "Clear breathing and fewer infections — with medicines first and endoscopic surgery (FESS) if needed.",
  },
  {
    id: "allergy",
    title: "Nasal Allergy & Nosebleeds",
    category: "Nose & Sinus",
    summary: "Sneezing, running nose and recurrent nosebleeds.",
    types: ["Allergic rhinitis", "Recurrent nosebleeds (epistaxis)", "Snoring evaluation"],
    benefits: "Long-term control of allergy symptoms and safe management of nosebleeds.",
  },
  {
    id: "nose-surgery",
    title: "Endoscopic Nose & Sinus Surgery",
    category: "Nose & Sinus",
    summary: "Minimally invasive surgery through the nostrils, without external cuts.",
    types: ["FESS (functional endoscopic sinus surgery)", "Septoplasty", "Polyp removal"],
    benefits: "Faster recovery and no visible scars.",
  },
  {
    id: "tonsils",
    title: "Tonsils & Adenoids",
    category: "Throat, Head & Neck",
    summary: "Repeated sore throats, enlarged tonsils and adenoids in children and adults.",
    types: ["Recurrent tonsillitis", "Adenoid enlargement and mouth breathing in children", "Tonsillectomy and adenoidectomy"],
    benefits: "Fewer infections, better sleep and breathing — surgery only when clearly indicated.",
  },
  {
    id: "voice",
    title: "Voice & Swallowing Problems",
    category: "Throat, Head & Neck",
    summary: "Hoarseness, voice strain, throat discomfort and difficulty swallowing.",
    types: ["Hoarse voice lasting over 3 weeks", "Vocal cord nodules and polyps", "Acid reflux affecting the throat", "Laryngoscopy"],
    benefits: "A clear look at the voice box and early detection of anything serious.",
  },
  {
    id: "head-neck",
    title: "Head & Neck Lumps and Cancer",
    category: "Throat, Head & Neck",
    summary: "Evaluation and surgery for neck lumps, thyroid swellings, salivary gland and mouth or throat cancers.",
    types: ["Neck lumps and swollen glands", "Thyroid and salivary gland swellings", "Mouth, throat and voice-box cancer surgery", "Non-healing mouth ulcers"],
    benefits: "Early diagnosis and surgical treatment greatly improve outcomes in head and neck cancer.",
  },
];

export const serviceCategories: ServiceCategory[] = ["Ear", "Nose & Sinus", "Throat, Head & Neck"];

export const areasOfInterest = ["Sinus & Nasal Surgery", "Ear Surgery", "Head & Neck Surgery", "Paediatric ENT"];

export const qualities = [
  { title: "Endoscopic Examination", text: "Nasal endoscopy and laryngoscopy give a clear view of the problem before treatment is decided.", icon: "◎" },
  { title: "Medicines First", text: "Many ENT problems settle with the right medicines. Surgery is advised only when it will truly help.", icon: "✦" },
  { title: "Surgical Expertise", text: "Training at JIPMER and KEM Mumbai in ear, sinus and head-and-neck surgery.", icon: "✚" },
  { title: "Clear Communication", text: "Diagnosis, options and recovery explained simply, with time for your questions.", icon: "✉" },
  { title: "Care for Children", text: "Gentle examination for children with ear infections, tonsils and adenoids.", icon: "❀" },
  { title: "Evidence-Based", text: "20+ publications and teaching work keep practice up to date.", icon: "♥" },
];

export const whyChoose = [
  { title: "JIPMER & KEM Mumbai trained", text: "MBBS from JIPMER, MS (ENT) from Seth GS Medical College & KEM Hospital, plus DNB (ENT)." },
  { title: `${site.experienceYears} years in medicine`, text: "Including posts at Sarvodaya Hospital Faridabad, St. Stephen's and BSA Hospital, Delhi." },
  { title: "Head & neck surgeon", text: "Experience in head-and-neck cancer surgery, alongside routine ENT care." },
  { title: "Teaching faculty", text: "Teaching faculty surgeon at AFSMS&RC, Faridabad." },
  { title: "20+ publications", text: "Research published in national and international journals." },
  { title: "Evening OPD", text: "Evening consultations at the ENT Care Centre for working patients." },
];

export const visitSteps = [
  { title: "Book an Appointment", text: `Call or WhatsApp ${site.phone} to book an evening slot at the ENT Care Centre, Sector 37.` },
  { title: "Bring Your Records", text: "Old prescriptions, hearing tests, CT scans of the sinuses and any other reports help the diagnosis." },
  { title: "ENT Examination", text: "A careful ear, nose and throat examination, with endoscopy or a hearing test if needed." },
  { title: "Plan & Follow-up", text: "A clear plan — medicines, follow-up, or surgery at the hospital when it is the right option." },
];

export type Testimonial = { name: string; quote: string };

// Add only genuine patient reviews (with consent). The section stays hidden while this list is empty.
export const testimonials: Testimonial[] = [];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Where does Dr. Nitish Virmani consult?",
    a: "At Lala Diwan Chand Memorial Hospital & ENT Care Centre, Bypass Road, Ashoka Enclave Part II, Sector 37, Faridabad, and at Pushpawanti Health Care Clinic, Sector 86, Faridabad.",
  },
  { q: "What are the OPD timings?", a: "The ENT Care Centre runs evening OPD from about 7 to 9 PM. Hospital consultations are by prior appointment. Please call to confirm." },
  { q: "When should I see an ENT specialist?", a: "For ear pain or discharge, reduced hearing, ringing in the ears, vertigo, blocked nose or sinus pain lasting weeks, repeated sore throats, a hoarse voice beyond 3 weeks, or a lump in the neck." },
  { q: "Is sinus surgery painful?", a: "Endoscopic sinus surgery is done through the nostrils without external cuts. Most patients have mild discomfort and go home within a day or two." },
  { q: "Should my child's tonsils be removed?", a: "Not always. Tonsillectomy is considered for frequent, severe throat infections or enlarged tonsils that block breathing during sleep. Many children improve with medicines." },
  { q: "Is a hoarse voice serious?", a: "Most hoarseness is due to a cold or voice strain. A hoarse voice lasting more than 3 weeks — especially in smokers — should be examined with a laryngoscope." },
  { q: "What should I bring to my appointment?", a: "Old prescriptions, hearing test reports, CT or MRI scans and a list of your current medicines." },
];

export type GalleryImage = { src: string; alt: string };

// AI-generated images showing ENT care in general (not this clinic). Replace with real clinic photos.
export const gallery: GalleryImage[] = [
  { src: `${IMG}/g-ear-exam.jpg`, alt: "Ear examination" },
  { src: `${IMG}/g-endoscopy.jpg`, alt: "Nasal endoscopy" },
  { src: `${IMG}/g-audiometry.jpg`, alt: "Hearing test" },
  { src: `${IMG}/g-child.jpg`, alt: "ENT care for children" },
];

export type BlogPost = { title: string; tag: string; excerpt: string; image: string };

export const blogs: BlogPost[] = [
  { title: "Ear Wax: Don't Use Cotton Buds", tag: "Ear", excerpt: "Ears clean themselves. Buds push wax deeper and can injure the eardrum — see a doctor if ears feel blocked.", image: `${IMG}/g-ear-exam.jpg` },
  { title: "Sinusitis or a Cold?", tag: "Nose", excerpt: "A cold settles in 7–10 days. Facial pain, blocked nose and thick discharge beyond that may be sinusitis.", image: `${IMG}/g-endoscopy.jpg` },
  { title: "Sudden Hearing Loss Is an Emergency", tag: "Ear", excerpt: "Hearing loss in one ear over hours or days needs treatment within a few days for the best recovery.", image: `${IMG}/g-audiometry.jpg` },
  { title: "Snoring in Children", tag: "Throat", excerpt: "Loud snoring and mouth breathing can be due to enlarged adenoids and tonsils. Get it checked.", image: `${IMG}/g-child.jpg` },
  { title: "Hoarse Voice for 3 Weeks?", tag: "Throat", excerpt: "Persistent hoarseness, especially in smokers, needs an examination of the voice box.", image: `${IMG}/why.jpg` },
  { title: "Neck Lump: When to Worry", tag: "Head & Neck", excerpt: "A painless, firm lump that doesn't go away in 2–3 weeks should be examined by an ENT surgeon.", image: `${IMG}/about.jpg` },
];
