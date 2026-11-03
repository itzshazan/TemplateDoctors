// All page content lives here so it can be edited in one place.
// Source: profile details supplied for Dr. Shamsher Ali (Doctor ID: 6).
//
// PENDING CONFIRMATION FROM THE DOCTOR (fields are left empty and hidden on the page until filled):
//   - medical qualifications + university      -> doctor.qualifications
//   - medical registration number + council    -> doctor.registration
//   - languages spoken                         -> doctor.languages
//   - prior career history                     -> doctor.previously
//   - registration verification, publication consent and final content approval
//       -> flip site.approvedForLaunch to true only after all three are done
//
// Images live in /public/images. See IMAGE-PROMPTS.md for what each file shows.

const PRACTISING_SINCE = 1987;
// Completed years in practice, counted conservatively so the number never overstates.
export const experienceYears = new Date().getFullYear() - PRACTISING_SINCE - 1;

const address = "Pocket A, A-16, Raju Park, Near Agarwal Sweets, Devli, Khanpur, New Delhi, Delhi 110062";

export const site = {
  name: "Family Care Centre",
  doctor: "Dr. Shamsher Ali",
  specialty: "General Physician & Child Specialist",
  area: "Devli, Khanpur, New Delhi",
  practisingSince: PRACTISING_SINCE,
  phone: "+91 98911 78604",
  phoneHref: "tel:+919891178604",
  email: "drsali0786@gmail.com",
  address,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Family Care Centre, ${address}`)}`,
  hours: {
    days: "Monday – Saturday",
    morning: "10:00 AM – 1:00 PM",
    evening: "5:00 PM – 8:00 PM",
    closed: "Sunday",
  },
  // Add the clinic's real pages here, e.g. { name: "Facebook", icon: "facebook", href: "https://..." }.
  // The icons are hidden while this list is empty.
  social: [] as { name: string; icon: string; href: string }[],
  // Keeps search engines from indexing the site until the doctor has approved it.
  approvedForLaunch: false,
};

export const doctor = {
  name: "Dr. Shamsher Ali",
  title: "General Physician & Child Specialist",
  photo: "/images/dr-shamsher-ali.jpg",
  qualifications: "", // e.g. "MBBS (University name)"
  registration: "", // e.g. "DMC Reg. No. 12345"
  languages: "", // e.g. "Hindi, English, Urdu"
  previously: [] as string[],
  areas: ["General Medicine", "Family Healthcare", "Child Healthcare"],
  expertise: [
    "Pediatric consultations",
    "Skin conditions",
    "ENT care",
    "Minor surgical procedures",
    "Routine diagnostics",
  ],
};

export const images = {
  about: "/images/about-clinic.jpg",
  approach: "/images/approach.jpg",
  childCare: "/images/child-care.jpg",
  clinic: "/images/clinic-exterior.jpg",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "child-care", label: "Child Care" },
  { id: "services", label: "Services" },
  { id: "doctor", label: "Meet the Doctor" },
  { id: "procedures", label: "Procedures & Tests" },
  { id: "tips", label: "Health Tips" },
  { id: "contact", label: "Contact" },
];

export const slides = [
  {
    eyebrow: `${site.name} · ${site.area}`,
    subtitle: `${site.doctor} · ${site.specialty}`,
    title: `Your Trusted Family Doctor Since ${PRACTISING_SINCE}`,
    text: `${experienceYears}+ years of caring for children, parents and grandparents with patience and practical advice.`,
    image: "/images/hero-family.jpg",
  },
  {
    eyebrow: site.name,
    subtitle: "Child Care",
    title: "Gentle Care for Growing Children",
    text: "Vaccinations, developmental check-ups, childhood infections and nutrition advice, all under one roof.",
    image: "/images/hero-child.jpg",
  },
  {
    eyebrow: site.name,
    subtitle: "Minor Procedures · Diagnostic Tests",
    title: "Procedures & Tests, Close to Home",
    text: "Wound care, stitching and abscess drainage, plus routine blood tests and ECG at the clinic.",
    image: "/images/hero-tests.jpg",
  },
];

export const flipCards = [
  {
    title: "General Consultation",
    text: "Fever, cold, cough, sore throat, allergies and skin problems for every member of the family.",
    icon: "stethoscope",
    href: "#services",
  },
  {
    title: "Child Care",
    text: "Vaccinations, growth and development check-ups, childhood infections and nutrition advice.",
    icon: "baby",
    href: "#child-care",
  },
  {
    title: "Minor Procedures",
    text: "Wound dressing and stitching, abscess drainage, and cyst and wart removal.",
    icon: "scissors",
    href: "#procedures",
  },
  {
    title: "Diagnostic Tests",
    text: "CBC, blood sugar, thyroid, lipid, liver and kidney tests, vitamin levels and ECG.",
    icon: "flask",
    href: "#procedures",
  },
];

export const careFocus = ["General Medicine", "Child Healthcare", "Minor Procedures", "Diagnostic Tests"];

export const approach = [
  {
    title: "One Doctor for the Whole Family",
    text: "From a child's first vaccines to a grandparent's routine check-up, your family is seen by a doctor who knows your history.",
  },
  {
    title: "Clear Advice in Plain Language",
    text: "Every diagnosis, medicine and test is explained simply, so you know what to expect and how to care for yourself at home.",
  },
];

export const generalServices = [
  { title: "Viral Fever", note: "Diagnosis, treatment and follow-up", icon: "thermometer" },
  { title: "Cold & Cough", note: "For adults and children", icon: "stethoscope" },
  { title: "Sore Throat & ENT Care", note: "Throat, ear and nose problems", icon: "ear" },
  { title: "Allergies", note: "Seasonal and recurring allergies", icon: "leaf" },
  { title: "Eczema", note: "Relief and long-term skin care", icon: "droplet" },
  { title: "Skin Infections", note: "Bacterial, fungal and other infections", icon: "shield" },
];

export const childServices = [
  { title: "Pediatric Consultations", note: "Everyday illnesses in children" },
  { title: "Child Vaccinations", note: "Keeping immunisation on schedule" },
  { title: "Developmental Check-ups", note: "Growth and milestone monitoring" },
  { title: "Childhood Infections", note: "Fever, cough, ear and skin infections" },
  { title: "Nutritional Advice", note: "Healthy eating for growing children" },
  { title: "Skin & ENT Care for Kids", note: "Rashes, eczema, ear and throat problems" },
];

export const procedures = [
  { title: "Wound Dressing", note: "Cleaning and dressing of cuts and wounds" },
  { title: "Wound Stitching", note: "Suturing of minor cuts" },
  { title: "Abscess Drainage", note: "Drainage of boils and abscesses" },
  { title: "Cyst Removal", note: "Removal of small skin cysts" },
  { title: "Wart Removal", note: "Removal of common warts" },
];

export const tests = [
  { title: "CBC", note: "Complete blood count" },
  { title: "Blood Sugar", note: "Diabetes screening & monitoring" },
  { title: "Thyroid Profile", note: "Thyroid function" },
  { title: "Lipid Profile", note: "Cholesterol & heart health" },
  { title: "Liver Function Test", note: "LFT" },
  { title: "Kidney Function Test", note: "KFT" },
  { title: "Vitamin Tests", note: "Common vitamin deficiencies" },
  { title: "ECG", note: "Heart rhythm check" },
];

export const promises = [
  {
    title: "Experience You Can Trust",
    text: `In practice since ${PRACTISING_SINCE}, caring for families across the neighbourhood.`,
  },
  {
    title: "Child-Friendly Care",
    text: "A patient, gentle approach that helps young children feel at ease.",
  },
  {
    title: "Open Communication",
    text: "Clear explanations of every diagnosis, medicine and test.",
  },
  {
    title: "Everything in One Place",
    text: "Consultations, minor procedures and routine tests at one clinic.",
  },
  {
    title: "Morning & Evening OPD",
    text: "Two sessions a day, Monday to Saturday, to fit around school and work.",
  },
  {
    title: "Close to Home",
    text: "Easy to find in Raju Park, Devli, near Agarwal Sweets.",
  },
];

export const appointmentReasons = [
  "General Consultation",
  "Child Care / Vaccination",
  "Minor Procedure",
  "Diagnostic Tests",
  "Other",
];

export const tipCategories = ["All", "Children", "Common Illness", "Skin & Wounds", "Tests"];

export const tips = [
  {
    title: "Fever in Children: When to See the Doctor",
    category: "Children",
    summary:
      "Most viral fevers settle within 2–3 days with rest and fluids. See a doctor sooner if your baby is under 3 months old, the fever lasts more than 3 days, or your child is unusually drowsy, breathing fast or not drinking.",
    image: "/images/tips/fever-child.jpg",
  },
  {
    title: "Keeping Your Child's Vaccinations on Track",
    category: "Children",
    summary:
      "Bring your child's vaccination card to every visit. If a dose has been missed, there is usually no need to start over: we'll help you plan a safe catch-up.",
    image: "/images/tips/vaccination.jpg",
  },
  {
    title: "Cold, Cough or Allergy? Telling Them Apart",
    category: "Common Illness",
    summary:
      "A cold often brings a mild fever and body ache and clears in about a week. Allergies cause itchy eyes and sneezing that keep coming back around triggers like dust or pollen.",
    image: "/images/tips/cold-allergy.jpg",
  },
  {
    title: "Caring for a Small Cut at Home",
    category: "Skin & Wounds",
    summary:
      "Rinse with clean running water, press gently to stop the bleeding and cover with a clean dressing. Come in if the cut is deep or gaping, won't stop bleeding, or turns red, swollen or painful.",
    image: "/images/tips/wound-care.jpg",
  },
  {
    title: "Everyday Skin Care for Eczema",
    category: "Skin & Wounds",
    summary:
      "Moisturise right after bathing, use a mild soap-free cleanser and keep nails short to limit scratching. Patches that crack, ooze or spread need a check-up.",
    image: "/images/tips/eczema.jpg",
  },
  {
    title: "Why Routine Blood Tests Matter",
    category: "Tests",
    summary:
      "Tests like blood sugar, thyroid and lipid profile can pick up diabetes, thyroid problems or high cholesterol before symptoms appear. Ask us which check-ups suit your age and family history.",
    image: "/images/tips/blood-test.jpg",
  },
];
