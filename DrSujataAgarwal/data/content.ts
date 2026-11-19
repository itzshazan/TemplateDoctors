// All text for the site lives here so it can be edited in one place.
// Profile of Dr. Sujata Agarwal, Gynaecologist, Infertility & IVF Specialist (New Delhi).
// Sources: the doctor sheet (Practo-based) and the Google Maps listing. Items to confirm are in IMAGE-PROMPTS.md.

const IMG = "/images";

export const site = {
  name: "Dr. Sujata Agarwal",
  clinic: "IVY Health & Infertility Center",
  role: "Gynaecologist & IVF Specialist",
  tagline: "Gynaecologist, Infertility & IVF Specialist in Badarpur, New Delhi",
  area: "Badarpur",
  city: "New Delhi",
  degrees: "MBBS, MD (Obstetrics & Gynaecology), FMAS (WALS)",
  experienceYears: 38,
  phone: "+91 98100 29024",
  phoneHref: "tel:+919810029024",
  // CONFIRM: is this number on WhatsApp?
  whatsappNumber: "919810029024",
  email: "",
  address: "IVY Health & Infertility Center, 6A/2, Block B, Main Jaitpur Road, opposite NTPC Gate No. 3, Molarband, Badarpur, New Delhi 110044",
  shortAddress: "6A/2, Main Jaitpur Road, Molarband, Badarpur",
  landmark: "Opposite NTPC Gate No. 3",
  landmarkInline: "opposite NTPC Gate No. 3",
  mapsUrl:
    "https://www.google.com/maps/place/Dr.Sujata+Agarwal/data=!4m7!3m6!1s0x390ce6e0d1d35113:0x2e71d695a3b22e72!8m2!3d28.4998734!4d77.3109785!16s%2Fg%2F11c71pn2yq!19sChIJE1HT0eDmDDkRci6yo5XWcS4",
  mapEmbed: "https://maps.google.com/maps?q=28.4998734,77.3109785&z=16&output=embed",
  // CONFIRM: the sheet says Mon–Sat 10 AM–3 PM; Google shows Mon–Fri 8 AM–8 PM, Sat 11 AM–2 PM.
  hours: ["IVY Health (Badarpur): Mon – Sat, 10:00 AM – 3:00 PM", "Heart & Gynae Clinic (Friends Colony East): Mon – Sat, 8:15 – 10:15 AM & 6:00 – 8:00 PM"],
  logo: `${IMG}/logo.svg`,
  heroImage: `${IMG}/hero.jpg`,
  aboutImage: `${IMG}/about.jpg`,
  // From the clinic's Google Maps listing (2017). CONFIRM it shows IVY Health.
  whyImage: `${IMG}/reception.jpg`,
  social: { facebook: "", instagram: "" },
};

export const hasPhone = site.phone.trim().length > 0;
export const whatsappLink = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Hello ${site.name}, I would like to book an appointment.`)}`
  : "";

export const hero = {
  eyebrow: `IVF & Fertility · ${site.area}, ${site.city}`,
  title: "38 Years of Helping Families Begin",
  text: `${site.name} (${site.degrees}) leads ${site.clinic} — infertility treatment, IUI, IVF, laparoscopy and complete gynaecology care, with in-house ultrasound.`,
};

export const features = [
  { icon: "baby", title: "Infertility & IVF", text: "Evaluation of both partners, ovulation induction, IUI and IVF." },
  { icon: "microscope", title: "In-house Ultrasound", text: "Follicle monitoring and pregnancy scans without a second trip." },
  { icon: "sparkle", title: "Keyhole Surgery", text: "Fellowship in Minimal Access Surgery for laparoscopy and hysteroscopy." },
];

export const about = {
  eyebrow: "Meet Your Doctor",
  heading: `${site.name}, ${site.role}`,
  paragraphs: [
    `${site.name} is Director and IVF Consultant at ${site.clinic}, Main Jaitpur Road, Molarband, Badarpur. She also consults as Senior Consultant at the Heart & Gynae Clinic, C-39 Friends Colony East, and has been a Visiting Consultant at Indraprastha Apollo Hospital since 2000.`,
    "Dr. Agarwal completed her MBBS at King George's Medical College, Lucknow (1988) and her MD in Obstetrics & Gynaecology at the University of Lucknow (1992), and later trained in minimal access surgery (FMAS, WALS) and sonography (2010). She worked as a Consultant at Nepean Hospital, Sydney (1998–1999).",
  ],
  highlights: [
    "38 years in obstetrics & gynaecology",
    "Infertility, IUI & IVF",
    "Laparoscopy & hysteroscopy (FMAS)",
    "Own ultrasound at the clinic",
  ],
};

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  intro: string;
  signs: string[];
  care: string[];
  tip: string;
};

export const services: Service[] = [
  {
    slug: "infertility-evaluation",
    icon: "baby",
    title: "Infertility Evaluation",
    short: "Complete assessment of both partners to find why pregnancy isn't happening.",
    intro: "If you have been trying for a year (or six months if over 35) without success, a structured evaluation of both partners finds the cause in most couples — and many need only simple treatment.",
    signs: ["Trying for a baby for 12 months without success", "Irregular or absent periods, PCOS", "Previous miscarriages or ectopic pregnancy", "Age above 35 and planning pregnancy"],
    care: ["Detailed history of both partners", "Hormone tests and pelvic ultrasound", "Semen analysis", "Tubal patency tests", "A clear, step-by-step treatment plan"],
    tip: "Infertility is a couple's concern — come together for the first visit, with all previous reports.",
  },
  {
    slug: "ivf",
    icon: "baby",
    title: "IVF (In-Vitro Fertilisation)",
    short: "IVF and related assisted-reproduction treatment when simpler options are not enough.",
    intro: "In IVF, eggs are collected after ovarian stimulation, fertilised in the laboratory, and a healthy embryo is placed in the uterus. It helps couples with blocked tubes, low sperm counts, endometriosis, poor ovarian reserve or unexplained infertility.",
    signs: ["Blocked or damaged fallopian tubes", "Severe male-factor infertility", "Failed IUI cycles", "Endometriosis or low ovarian reserve"],
    care: ["Counselling and pre-IVF work-up", "Ovarian stimulation with ultrasound monitoring", "Egg collection and embryo transfer", "Support through the two-week wait and early pregnancy"],
    tip: "Ask about success rates for your age group and the total cost of the cycle before you start.",
  },
  {
    slug: "iui-ovulation-induction",
    icon: "flower",
    title: "IUI & Ovulation Induction",
    short: "Medicines to help ovulation, follicle tracking and intrauterine insemination.",
    intro: "For many couples, treatment starts with ovulation induction — medicines that help an egg mature — combined with ultrasound follicle tracking and, when needed, IUI (placing prepared sperm directly into the uterus at the right time).",
    signs: ["Irregular ovulation or PCOS", "Mild male-factor infertility", "Unexplained infertility"],
    care: ["Ovulation induction medicines", "Follicle monitoring on the clinic's own ultrasound", "Trigger and timed IUI", "Luteal support"],
    tip: "Several IUI cycles are often tried before moving to IVF, depending on age and diagnosis.",
  },
  {
    slug: "laparoscopy-hysteroscopy",
    icon: "microscope",
    title: "Laparoscopy & Hysteroscopy",
    short: "Keyhole surgery for fibroids, cysts, endometriosis, blocked tubes and uterine problems.",
    intro: "With a Fellowship in Minimal Access Surgery, Dr. Agarwal uses laparoscopy (keyhole surgery of the abdomen) and hysteroscopy (a camera inside the uterus) to diagnose and treat problems that affect fertility and women's health.",
    signs: ["Ovarian cysts or endometriosis", "Fibroids or polyps", "Blocked tubes", "A septum or adhesions inside the uterus"],
    care: ["Diagnostic and operative laparoscopy", "Hysteroscopic removal of polyps, septum and adhesions", "Day-care or short-stay procedures"],
    tip: "Keyhole surgery usually means less pain, small scars and a quicker return to normal life.",
  },
  {
    slug: "pcos",
    icon: "flower",
    title: "PCOS & Period Problems",
    short: "Treatment for PCOS, irregular, heavy or painful periods and hormonal problems.",
    intro: "PCOS is a common cause of irregular periods and difficulty conceiving. Weight management, lifestyle changes and medicines can restore regular cycles and improve fertility.",
    signs: ["Irregular or missed periods", "Acne, excess hair or weight gain", "Heavy or very painful periods"],
    care: ["Ultrasound and hormone tests", "Weight and lifestyle counselling", "Medicines to regulate cycles", "Fertility treatment when planning a baby"],
    tip: "Even a 5–10% weight loss can bring periods back to a regular cycle in many women with PCOS.",
  },
  {
    slug: "pregnancy-care",
    icon: "pregnant",
    title: "Pregnancy & High-Risk Care",
    short: "Antenatal care with in-house scans, including pregnancies after fertility treatment.",
    intro: "Regular antenatal care keeps both mother and baby safe. Pregnancies after IVF or IUI, or with conditions like diabetes or high blood pressure, need closer monitoring.",
    signs: ["A positive pregnancy test", "Pregnancy after fertility treatment", "Previous miscarriage or complications", "Bleeding, pain or reduced movements (urgent)"],
    care: ["Early pregnancy scans", "Scheduled check-ups and tests", "Monitoring of high-risk pregnancies", "Diet and danger-sign counselling"],
    tip: "Start folic acid before trying to conceive and continue for the first three months.",
  },
  {
    slug: "ultrasound",
    icon: "microscope",
    title: "Gynaecological Ultrasound",
    short: "Pelvic and pregnancy ultrasound at the clinic, by a doctor with a PG Diploma in Sonography.",
    intro: "Having ultrasound in the same clinic saves time: follicle tracking, early pregnancy scans and pelvic scans can be done during the visit and discussed straight away.",
    signs: ["Follicle monitoring during fertility treatment", "Early pregnancy confirmation", "Pelvic pain, fibroids or cysts"],
    care: ["Transvaginal and abdominal scans", "Follicular study", "Early pregnancy and growth scans"],
    tip: "For a pelvic scan, you may be asked to come with a full bladder — check when you book.",
  },
  {
    slug: "contraception-gynaecology",
    icon: "family",
    title: "Contraception & General Gynaecology",
    short: "Family planning, Copper-T, infections, menopause and Pap smear screening.",
    intro: "Complete gynaecology care for every stage of life — from contraception and infections to menopause and cancer screening.",
    signs: ["Contraception advice or Copper-T insertion/removal", "White discharge or infections", "Menopause symptoms", "Due for a Pap smear"],
    care: ["Counselling on all contraceptive methods", "Treatment of infections", "Menopause care", "Pap smear and breast examination"],
    tip: "A Pap smear every 3 years from age 21 helps prevent cervical cancer.",
  },
];

export const lifeStages = [
  { icon: "flower", stage: "Adolescence", text: "First periods, painful or irregular cycles, PCOS, HPV vaccination and honest answers for young girls." },
  { icon: "heart", stage: "Marriage & Planning", text: "Pre-marriage and pre-pregnancy check-ups, contraception and fertility guidance." },
  { icon: "pregnant", stage: "Pregnancy", text: "Antenatal check-ups, scans, nutrition and preparation for a safe delivery." },
  { icon: "baby", stage: "After Delivery", text: "Post-natal check-ups, breastfeeding support, spacing and recovery." },
  { icon: "sparkle", stage: "Menopause & Beyond", text: "Symptom relief, bone health and regular cancer screening." },
];

export const whyChoose = [
  { icon: "heart", title: "38 Years of Experience", text: "MD from the University of Lucknow (1992) and decades of gynaecology and fertility practice." },
  { icon: "microscope", title: "Ultrasound On Site", text: "Follicle tracking and scans in the clinic itself — patients mention it saves time." },
  { icon: "sparkle", title: "Keyhole Surgery", text: "Fellowship in Minimal Access Surgery (WALS) for laparoscopy and hysteroscopy." },
  { icon: "pin", title: "Two Clinics + Apollo", text: "Badarpur and Friends Colony East, and Visiting Consultant at Indraprastha Apollo." },
];

export const visitSteps = [
  { title: "Book a visit", text: `Call or WhatsApp ${site.phone} to book at IVY Health, Badarpur, or the Heart & Gynae Clinic, Friends Colony East.` },
  { title: "Bring all reports", text: "Previous scans, hormone tests, semen analysis, HSG and treatment records for both partners." },
  { title: "Plan & treatment", text: "A clear plan after examination and ultrasound, with follow-up scans timed to your cycle." },
];

export const tips = [
  { icon: "calendar2", title: "Know Your Fertile Window", text: "Ovulation usually happens about 14 days before the next period. Regular intercourse every 2–3 days through the cycle gives the best chance." },
  { icon: "heart", title: "Age Matters", text: "Fertility declines gradually after 30 and faster after 35. If you are over 35, get checked after six months of trying." },
  { icon: "pill", title: "Prepare Your Body", text: "Start folic acid, keep a healthy weight, stop smoking and alcohol — for both partners — before trying to conceive." },
];

export type GalleryItem = { src: string; alt: string };

// clinic-entrance.jpg is a real photo of the clinic (Google Maps). The rest are AI-generated stock-style
// photos (not this clinic). Replace them with real clinic photos when available.
// reception.jpg is from the clinic's Google Maps listing; the rest are AI-generated (not this clinic).
export const gallery: GalleryItem[] = [
  { src: `${IMG}/reception.jpg`, alt: "Clinic" },
  { src: `${IMG}/g-ultrasound.jpg`, alt: "Follicle monitoring scan" },
  { src: `${IMG}/g-consultation.jpg`, alt: "Fertility consultation" },
  { src: `${IMG}/g-bp-check.jpg`, alt: "First pregnancy scan" },
  { src: `${IMG}/g-reception.jpg`, alt: "Reception" },
  { src: `${IMG}/g-waiting.jpg`, alt: "Waiting area" },
];

export type Testimonial = { name: string; quote: string };

// Add only genuine patient reviews (with consent). The section links to Google reviews while this is empty.
export const testimonials: Testimonial[] = [];

export const faqs = [
  { q: "Where does Dr. Sujata Agarwal consult?", a: "At IVY Health & Infertility Center, 6A/2 Main Jaitpur Road, opposite NTPC Gate No. 3, Molarband, Badarpur; at the Heart & Gynae Clinic, C-39 Friends Colony East; and as Visiting Consultant at Indraprastha Apollo Hospital." },
  { q: "What are the timings?", a: "IVY Health (Badarpur): Monday to Saturday, 10 AM – 3 PM. Heart & Gynae Clinic: Monday to Saturday, 8:15 – 10:15 AM and 6 – 8 PM. Please call to confirm before visiting." },
  { q: "When should we see a fertility specialist?", a: "After 12 months of trying without success, or after 6 months if the woman is over 35 — sooner if periods are irregular or there is a known problem." },
  { q: "Do we have to start with IVF?", a: "No. Many couples conceive with ovulation induction, timed intercourse or IUI. IVF is advised when it is the best option for your diagnosis." },
  { q: "Is ultrasound available at the clinic?", a: "Yes. Follicle monitoring and pregnancy scans are done at the clinic." },
  { q: "What should we bring?", a: "All previous reports and treatment records for both partners, including scans, hormone tests, semen analysis and HSG." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
