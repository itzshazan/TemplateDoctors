// All page content lives here so the single page can be edited in one place.
//
// Profile of Dr. Madhu Saini, General Physician & Diabetologist, Ever Healthy Hospital, Hisar.
// STATUS: content is PENDING FINAL DOCTOR APPROVAL. See IMAGE-PROMPTS.md → "Content checklist"
// for the items that must be confirmed by Dr. Saini before this site goes live.

const IMG = "/images";

export const site = {
  name: "Dr. Madhu Saini",
  shortName: "Dr. Saini",
  brand: "Dr. Madhu Saini – Physician & Diabetologist",
  tagline: "General Physician & Diabetologist",
  role: "Sr. Consultant Physician & Diabetologist",
  degrees: "MBBS, MD (Medicine)",
  institute: "PGIMS Rohtak",
  city: "Hisar",
  experienceYears: 13,
  phone: "+91 92530 61331",
  phoneHref: "tel:+919253061331",
  // Confirm with the doctor that this number is on WhatsApp.
  whatsappNumber: "919253061331",
  whatsapp: "https://wa.me/919253061331?text=Hi%20Dr.%20Saini%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  hospital: "Ever Healthy Hospital",
  hospitalUrl: "https://everhealthyhospital.in/",
  // Hospital's published 24/7 emergency line (everhealthyhospital.in/contact).
  hospitalPhone: "+91 90348 33371",
  hospitalPhoneHref: "tel:+919034833371",
  logo: `${IMG}/logo.svg`,
  heroImage: `${IMG}/dr-madhu-saini-opd.jpg`,
  doctorImage: `${IMG}/dr-madhu-saini.jpg`,
  commitmentImage: `${IMG}/ever-healthy-team.jpg`,
};

export type Clinic = {
  name: string;
  address: string;
  hours: string[];
  mapQuery: string;
};

export const clinics: Clinic[] = [
  {
    name: "Ever Healthy Hospital",
    address: "Plot No. 1, Nursing Home Area, Sector 16-17, Near Shyam Baba Mandir, Hisar, Haryana 125001",
    hours: ["Mon – Sat · Morning: 10:00 AM – 3:00 PM", "Mon – Sat · Evening: 5:30 PM – 7:00 PM"],
    mapQuery: "Ever Healthy Hospital, Sector 16-17, Hisar, Haryana 125001",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#hospital", label: "Hospital" },
  { href: "#contact", label: "Contact" },
];

export type Stat = { label: string; value: number; suffix: string };

// Only verifiable numbers. Add patient counts etc. only if the doctor provides them.
export const stats: Stat[] = [
  { label: "Years of Experience", value: site.experienceYears, suffix: "+" },
  { label: "Hospitals Served", value: 4, suffix: "" },
  { label: "OPD Days a Week", value: 6, suffix: "" },
  { label: "OPD Sessions a Day", value: 2, suffix: "" },
];

export const credentials = [
  `${site.degrees} – ${site.institute}`,
  `${site.role}, ${site.hospital}, ${site.city}`,
  "Ex. Consultant Physician – Sapra Multispeciality Hospital, Hisar",
  "Ex. Consultant Physician – Adhar Hospital, Hisar",
  "Ex. Physician – Fortis Hospital, Mohali",
];

// Career journey shown in the About section, most recent first.
export const experience = [
  { place: `${site.hospital}, ${site.city}`, role: site.role, current: true },
  { place: "Sapra Multispeciality Hospital, Hisar", role: "Consultant Physician", current: false },
  { place: "Adhar Hospital, Hisar", role: "Consultant Physician", current: false },
  { place: "Fortis Hospital, Mohali", role: "Physician", current: false },
];

export type ServiceCategory = "General Medicine" | "Diabetes Care" | "Chronic & Preventive Care";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  types: string[];
  benefits: string;
};

export const services: Service[] = [
  // ---------- General Medicine ----------
  {
    id: "consultation",
    title: "Adult Medical Consultation",
    category: "General Medicine",
    summary:
      "A detailed outpatient consultation for any new or ongoing health problem in adults: history, examination and a clear explanation of what is going on.",
    types: [
      "Fever, weakness, body ache, headache or dizziness",
      "Unexplained weight loss, tiredness or loss of appetite",
      "Second opinion on an existing diagnosis or treatment",
      "Review of previous prescriptions and reports",
    ],
    benefits: "An accurate diagnosis first, so treatment targets the real cause instead of only the symptoms.",
  },
  {
    id: "fever-infections",
    title: "Fever & Infectious Diseases",
    category: "General Medicine",
    summary:
      "Seasonal and tropical infections are common in Haryana. Timely testing and treatment prevent complications and speed up recovery.",
    types: [
      "Viral fever and flu",
      "Dengue, malaria and typhoid",
      "Urinary tract and chest infections",
      "Tuberculosis and hepatitis – diagnosis and follow-up",
      "Monitoring of platelets and warning signs",
    ],
    benefits: "Early, evidence-based treatment with clear advice on when hospital admission is needed.",
  },
  {
    id: "respiratory",
    title: "Asthma, COPD & Chest Problems",
    category: "General Medicine",
    summary:
      "Cough, wheeze and breathlessness need a proper diagnosis. Long-term lung conditions can be kept well controlled with the right plan.",
    types: [
      "Bronchial asthma",
      "COPD and chronic bronchitis",
      "Pneumonia and chest infections",
      "Allergic cough and rhinitis",
      "Inhaler technique training",
    ],
    benefits: "Fewer flare-ups, better breathing and fewer emergency visits.",
  },
  {
    id: "stomach-liver",
    title: "Stomach, Liver & Digestive Problems",
    category: "General Medicine",
    summary: "Medical treatment of common digestive complaints, with tests and specialist referral when needed.",
    types: [
      "Acidity, gastritis and indigestion",
      "Loose motions, vomiting and food poisoning",
      "Fatty liver and abnormal liver tests",
      "Jaundice – evaluation and follow-up",
      "Constipation and irritable bowel",
    ],
    benefits: "Relief from symptoms and early detection of conditions that need closer attention.",
  },
  {
    id: "anaemia",
    title: "Anaemia & Nutritional Deficiencies",
    category: "General Medicine",
    summary:
      "Low haemoglobin, vitamin B12 and vitamin D deficiencies are very common and often cause tiredness, breathlessness and body pain.",
    types: [
      "Iron-deficiency anaemia",
      "Vitamin B12 and folate deficiency",
      "Vitamin D and calcium deficiency",
      "Diet and supplement guidance",
    ],
    benefits: "Finding and correcting the cause restores energy and prevents long-term problems.",
  },
  {
    id: "acute-care",
    title: "Acute Medical Care & Admission",
    category: "General Medicine",
    summary:
      "For patients who need closer monitoring, admission is available at Ever Healthy Hospital with in-house ICU & HDU support.",
    types: [
      "High fever, dehydration and severe infections",
      "Uncontrolled sugar or blood pressure",
      "Breathlessness and chest infections",
      "IV fluids, medication and round-the-clock monitoring",
    ],
    benefits: "Continuity of care: the physician who knows your history manages you through admission.",
  },

  // ---------- Diabetes Care ----------
  {
    id: "type-2-diabetes",
    title: "Type 2 Diabetes Management",
    category: "Diabetes Care",
    summary:
      "A personalised plan combining medicines, diet and activity to bring sugar under control and keep it there.",
    types: [
      "New diagnosis – what it means and first steps",
      "Choosing the right tablets and newer medicines",
      "HbA1c-based targets and regular review",
      "Diet and exercise guidance",
      "Weight management",
    ],
    benefits: "Steady sugar control reduces the risk of heart, kidney, eye and nerve damage.",
  },
  {
    id: "insulin-therapy",
    title: "Insulin Therapy & Type 1 Diabetes",
    category: "Diabetes Care",
    summary:
      "Starting or adjusting insulin is simpler than most patients fear. Every step is explained and supported.",
    types: [
      "Starting insulin safely",
      "Dose adjustment and sugar charting",
      "Insulin pen and injection technique",
      "Preventing and handling low sugar (hypoglycaemia)",
      "Care for adults with Type 1 diabetes",
    ],
    benefits: "Confident self-management with fewer highs and lows.",
  },
  {
    id: "prediabetes",
    title: "Pre-diabetes & Diabetes Screening",
    category: "Diabetes Care",
    summary:
      "Pre-diabetes often has no symptoms. Detecting it early gives you the best chance of preventing diabetes altogether.",
    types: [
      "Fasting & post-meal sugar and HbA1c testing",
      "Risk assessment for family history, weight and PCOD",
      "Lifestyle plan to bring sugar back to normal",
      "Regular follow-up testing",
    ],
    benefits: "Lifestyle changes started early can delay or prevent Type 2 diabetes.",
  },
  {
    id: "diabetes-complications",
    title: "Diabetes Complications Screening",
    category: "Diabetes Care",
    summary:
      "Regular checks catch kidney, eye, nerve and heart problems early, when they are easiest to treat.",
    types: [
      "Kidney function and urine protein tests",
      "Nerve (neuropathy) assessment",
      "Eye check referral for retinopathy",
      "Heart-risk assessment: BP, cholesterol, ECG",
    ],
    benefits: "Early detection protects kidneys, eyes, nerves and heart over the long term.",
  },
  {
    id: "diabetic-foot",
    title: "Diabetic Foot Care",
    category: "Diabetes Care",
    summary:
      "Numbness and poor circulation make feet vulnerable to wounds and infection. Prevention is the best treatment.",
    types: [
      "Foot examination and sensation testing",
      "Care of small wounds, corns and infections",
      "Footwear and daily foot-care advice",
      "Referral for surgical care when needed",
    ],
    benefits: "Reduces the risk of serious infections and ulcers.",
  },

  // ---------- Chronic & Preventive Care ----------
  {
    id: "hypertension",
    title: "High Blood Pressure (Hypertension)",
    category: "Chronic & Preventive Care",
    summary:
      "High BP usually has no symptoms but silently strains the heart, brain and kidneys. Good control is very achievable.",
    types: [
      "Diagnosis and home BP monitoring guidance",
      "Choosing and adjusting BP medicines",
      "Salt, diet and lifestyle advice",
      "Screening for kidney and heart effects",
    ],
    benefits: "Lowers the risk of heart attack, stroke and kidney disease.",
  },
  {
    id: "thyroid",
    title: "Thyroid Disorders",
    category: "Chronic & Preventive Care",
    summary:
      "An under- or over-active thyroid can affect weight, energy, mood, periods and heart rate. Simple tests confirm it.",
    types: [
      "Hypothyroidism",
      "Hyperthyroidism",
      "Thyroid in pregnancy planning",
      "Dose adjustment and follow-up testing",
    ],
    benefits: "The right dose and regular monitoring keep symptoms under control.",
  },
  {
    id: "cholesterol",
    title: "Cholesterol, Obesity & Heart Risk",
    category: "Chronic & Preventive Care",
    summary:
      "High cholesterol, excess weight and a sedentary lifestyle together raise the risk of heart disease and diabetes.",
    types: [
      "Lipid profile interpretation",
      "Metabolic syndrome assessment",
      "Medical weight management",
      "Heart-healthy diet and activity plan",
    ],
    benefits: "Reducing risk factors today prevents heart attacks and strokes tomorrow.",
  },
  {
    id: "health-checkup",
    title: "Preventive Health Check-ups",
    category: "Chronic & Preventive Care",
    summary:
      "A planned check-up with the right tests for your age and risk, reviewed personally by the physician.",
    types: [
      "Sugar, BP, cholesterol, kidney and liver tests",
      "Thyroid, vitamin and blood count",
      "Lifestyle and family-history review",
      "Adult vaccination advice",
    ],
    benefits: "Detects silent conditions early, with in-house laboratory and radiology at the hospital.",
  },
  {
    id: "elderly-care",
    title: "Elderly (Geriatric) Care",
    category: "Chronic & Preventive Care",
    summary:
      "Older adults often live with several conditions and many medicines. Care is coordinated so that it stays safe and simple.",
    types: [
      "Review of multiple medicines",
      "Joint pain, weakness and falls",
      "Memory, sleep and appetite concerns",
      "Management of several long-term conditions together",
    ],
    benefits: "Better day-to-day health and independence, with fewer side effects.",
  },
];

export const serviceCategories: ServiceCategory[] = ["General Medicine", "Diabetes Care", "Chronic & Preventive Care"];

export const areasOfInterest = ["Diabetes", "High Blood Pressure", "Thyroid Disorders", "Fever & Infections"];

export const qualities = [
  {
    title: "Careful Diagnosis",
    text: "A detailed history, examination and the right tests, never guesswork, before a treatment plan is made.",
    icon: "◎",
  },
  {
    title: "Ethical Treatment",
    text: "Only the medicines and tests you actually need, with honest advice on what each one is for.",
    icon: "✦",
  },
  {
    title: "Long-Term Partnership",
    text: "Diabetes, BP and thyroid need regular follow-up. Your progress is tracked visit after visit.",
    icon: "✚",
  },
  {
    title: "Clear Communication",
    text: "Reports and options explained in simple words, with time for every question you and your family have.",
    icon: "✉",
  },
  {
    title: "Lifestyle-First Advice",
    text: "Practical diet, activity and sleep guidance that fits everyday life in Haryana.",
    icon: "❀",
  },
  {
    title: "Compassionate Care",
    text: "Every patient is heard, respected and treated with patience and warmth.",
    icon: "♥",
  },
];

export const whyChoose = [
  {
    title: "MD Medicine from PGIMS Rohtak",
    text: "Trained at one of North India's leading government medical institutes.",
  },
  {
    title: `${site.experienceYears}+ years of experience`,
    text: "Clinical work at Fortis Hospital Mohali and leading hospitals in Hisar.",
  },
  {
    title: "Physician & Diabetologist",
    text: "Special focus on diabetes alongside complete adult general medicine.",
  },
  {
    title: "Hospital-based practice",
    text: "In-house laboratory, radiology and ICU & HDU at Ever Healthy Hospital.",
  },
  {
    title: "Morning & evening OPD",
    text: "Consultations in two sessions, Monday to Saturday, to suit working patients.",
  },
  {
    title: "Ethical & transparent",
    text: "Honest counselling, no unnecessary tests or medicines.",
  },
];

// The "Your Visit" section: what a patient can expect at the OPD.
export const visitSteps = [
  {
    title: "Book an Appointment",
    text: `Call or WhatsApp ${site.phone} to choose a morning (10 AM – 3 PM) or evening (5:30 – 7 PM) slot, Monday to Saturday.`,
  },
  {
    title: "Bring Your Records",
    text: "Please carry old prescriptions, recent reports and your current medicines. For diabetes, bring your sugar diary if you keep one.",
  },
  {
    title: "Consultation & Tests",
    text: "Dr. Saini takes a detailed history and examines you. Any tests needed can be done at the hospital's in-house laboratory.",
  },
  {
    title: "Plan & Follow-up",
    text: "You get a clear treatment plan and a follow-up date, so your sugar, BP or recovery is tracked over time.",
  },
];

export type Testimonial = { name: string; quote: string };

// Add only genuine patient reviews (with consent). The section stays hidden while this list is empty.
export const testimonials: Testimonial[] = [];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Where does Dr. Madhu Saini consult?",
    a: "At Ever Healthy Hospital, Plot No. 1, Nursing Home Area, Sector 16-17, near Shyam Baba Mandir, Hisar, where she is Sr. Consultant Physician & Diabetologist.",
  },
  {
    q: "What are the OPD timings?",
    a: "Monday to Saturday: morning 10:00 AM to 3:00 PM and evening 5:30 PM to 7:00 PM. Calling ahead on +91 92530 61331 is recommended.",
  },
  {
    q: "What does a general physician treat?",
    a: "A general physician (MD Medicine) diagnoses and treats illnesses of adults without surgery: fever and infections, diabetes, blood pressure, thyroid, asthma, stomach and liver problems, anaemia and more, and refers to a specialist when needed.",
  },
  {
    q: "How often should a diabetic patient see the doctor?",
    a: "Usually every 1–3 months, depending on how well your sugar is controlled. HbA1c is typically checked every 3 months, and kidney, eye and foot checks at least once a year.",
  },
  {
    q: "Can pre-diabetes be reversed?",
    a: "In many people, yes. Weight loss, regular physical activity and diet changes can bring sugar levels back to the normal range. Regular testing is still needed.",
  },
  {
    q: "When should I see a doctor for fever?",
    a: "If fever lasts more than 2–3 days, is very high, or comes with severe body ache, rash, bleeding, vomiting, breathlessness or drowsiness, see a doctor promptly. Tests for dengue, malaria or typhoid may be needed.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Your old prescriptions, recent test reports, the medicines you currently take and, for diabetes or BP, any home readings you have recorded.",
  },
  {
    q: "Are tests and admission available at the same place?",
    a: "Yes. Ever Healthy Hospital has an in-house laboratory, radiology, and ICU & HDU, so tests and admission, if needed, happen under one roof.",
  },
];

export type GalleryImage = { src: string; alt: string };

export const gallery: GalleryImage[] = [
  { src: `${IMG}/ever-healthy-hospital.jpg`, alt: "Ever Healthy Hospital, Sector 16-17, Hisar (architect's design)" },
  { src: `${IMG}/ever-healthy-team.jpg`, alt: "The Ever Healthy Hospital team" },
  { src: `${IMG}/dr-madhu-saini-opd.jpg`, alt: "Dr. Madhu Saini in her OPD" },
  { src: `${IMG}/dr-madhu-saini.jpg`, alt: "Dr. Madhu Saini, Sr. Consultant Physician & Diabetologist" },
];

export type BlogPost = { title: string; tag: string; excerpt: string; image: string };

export const blogs: BlogPost[] = [
  {
    title: "Early Signs of Diabetes You Shouldn't Ignore",
    tag: "Diabetes",
    excerpt: "Excess thirst, frequent urination, tiredness and slow-healing wounds are reasons to get your sugar tested.",
    image: `${IMG}/tip-1-diabetes.svg`,
  },
  {
    title: "HbA1c: What Your 3-Month Sugar Report Means",
    tag: "Diabetes",
    excerpt: "Why HbA1c is the most useful single number in diabetes care, and what target is right for you.",
    image: `${IMG}/tip-2-hba1c.svg`,
  },
  {
    title: "High BP: The Silent Risk",
    tag: "Blood Pressure",
    excerpt: "Most people with high BP feel perfectly fine. How often to check, and simple ways to bring it down.",
    image: `${IMG}/tip-3-bp.svg`,
  },
  {
    title: "Dengue Season: Warning Signs to Watch",
    tag: "Fever",
    excerpt: "Fever with body ache, rash or bleeding needs attention. Know when to get a platelet count and when to come in.",
    image: `${IMG}/tip-4-fever.svg`,
  },
  {
    title: "Thyroid Problems: Tired All the Time?",
    tag: "Thyroid",
    excerpt: "Weight change, fatigue and hair fall can be due to the thyroid. A simple blood test gives the answer.",
    image: `${IMG}/tip-5-thyroid.svg`,
  },
  {
    title: "Caring for Your Feet With Diabetes",
    tag: "Diabetes",
    excerpt: "Daily foot checks, the right footwear and early care of small wounds prevent serious infections.",
    image: `${IMG}/tip-6-foot-care.svg`,
  },
];
