// All text for the site lives here so it can be edited in one place.
// Very little about Dr. Sunita is published online. Everything marked CONFIRM in
// IMAGE-PROMPTS.md must be checked with the clinic before the site goes live.

const IMG = "/images";

export const site = {
  name: "Dr. Sunita",
  clinic: "Dr Sunita Clinic",
  role: "Gynaecologist",
  tagline: "Gynaecologist in Lal Kuan & Faridabad",
  area: "Lal Kuan",
  city: "Faridabad",
  // CONFIRM: qualifications (e.g. MBBS, MS/DGO) – shown under the name once filled in.
  degrees: "",
  // CONFIRM: years of experience – the badge and stats appear once this is a number above 0.
  experienceYears: 0,
  // Not on the Google listing yet. Leave empty and the site shows "Get Directions" instead of call buttons.
  phone: "",
  phoneHref: "",
  whatsappNumber: "",
  email: "",
  address: "B 254, near Pankaj Medical Store, Chungi No 2, Kotla Mahingiran, Lal Kuan, New Delhi, Faridabad, Haryana 121009",
  shortAddress: "B 254, Chungi No 2, Kotla Mahingiran, Lal Kuan",
  landmark: "Near Pankaj Medical Store, Chungi No 2",
  // Same landmark for use mid-sentence.
  landmarkInline: "near Pankaj Medical Store, Chungi No 2",
  mapsUrl:
    "https://www.google.com/maps/place/Dr+Sunita+Clinic/data=!4m7!3m6!1s0x390ce1667e4cd421:0xeefd3d1a5672ae68!8m2!3d28.4939155!4d77.28013!16s%2Fg%2F11kvqxvbp2!19sChIJIdRMfmbhDDkRaK5yVho9_e4",
  mapEmbed: "https://maps.google.com/maps?q=28.4939155,77.28013&z=16&output=embed",
  // Not found online. Shown as "Please call or visit to confirm timings" while empty.
  hours: [] as string[],
  logo: `${IMG}/logo.svg`,
  // AI-generated stock-style photos (no doctor faces). Replace with real photos when available.
  heroImage: `${IMG}/hero.jpg`,
  aboutImage: `${IMG}/about.jpg`,
  // Real photo from the Google Maps listing (contributed by a Google user, Oct 2025). Get permission before going live.
  whyImage: `${IMG}/clinic-entrance.jpg`,
  social: {
    facebook: "",
    instagram: "",
  },
};

export const hasPhone = site.phone.trim().length > 0;
export const whatsappLink = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Hello ${site.name}, I would like to book an appointment.`)}`
  : "";

export const hero = {
  eyebrow: `${site.role} · ${site.area}, ${site.city}`,
  title: "Caring for Every Stage of a Woman's Health",
  text: `From the first period to pregnancy and menopause, ${site.clinic} offers private, respectful gynaecology care close to home in ${site.area}.`,
};

export const features = [
  { icon: "pregnant", title: "Pregnancy Care", text: "Regular check-ups, scans and guidance through all three trimesters." },
  { icon: "female", title: "Women's Health", text: "Periods, PCOS, infections, family planning and menopause." },
  { icon: "lock", title: "Private & Respectful", text: "Every concern is heard in confidence, without judgement." },
];

export const about = {
  eyebrow: "Meet Your Doctor",
  heading: `${site.name}, ${site.role}`,
  paragraphs: [
    `${site.name} is a gynaecologist who runs ${site.clinic} at B 254, Kotla Mahingiran, Lal Kuan, ${site.landmarkInline}. The clinic looks after women and girls from the neighbourhood and nearby Faridabad for pregnancy care and everyday gynaecological problems.`,
    "Consultations are unhurried and private. Many women put off discussing period problems, discharge or fertility worries – at the clinic these are treated as routine health matters, explained in simple Hindi or English, with a clear plan for what to do next.",
  ],
  highlights: [
    "Pregnancy check-ups and antenatal care",
    "Period problems, PCOS and hormonal issues",
    "Family planning and contraception advice",
    "Easy to find, near Pankaj Medical Store",
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
    slug: "pregnancy-care",
    icon: "pregnant",
    title: "Pregnancy & Antenatal Care",
    short: "Regular check-ups, tests and scans through every trimester for a healthy mother and baby.",
    intro:
      "Good antenatal care is the best way to keep both mother and baby healthy. Regular visits help track the baby's growth, catch problems like anaemia, high blood pressure or gestational diabetes early, and prepare the family for delivery.",
    signs: [
      "A positive pregnancy test or a missed period",
      "Planning a pregnancy (pre-conception check-up)",
      "Previous miscarriage or a complicated pregnancy",
      "Swelling, headache, bleeding or reduced baby movements (seek care urgently)",
    ],
    care: [
      "Confirmation of pregnancy and due-date calculation",
      "Scheduled check-ups with BP, weight and growth monitoring",
      "Advice on blood tests, ultrasound scans and vaccinations",
      "Iron, calcium and folic acid supplements",
      "Diet, exercise and danger-sign counselling",
    ],
    tip: "Start folic acid at least one month before trying to conceive and continue for the first three months of pregnancy.",
  },
  {
    slug: "period-problems",
    icon: "calendar2",
    title: "Period Problems",
    short: "Heavy, painful, irregular or missed periods evaluated and treated with care.",
    intro:
      "Periods that are very heavy, very painful, irregular or missing are common but not something to simply put up with. They can point to hormonal imbalance, thyroid problems, fibroids, PCOS or anaemia – most of which are easily treatable.",
    signs: [
      "Bleeding for more than 7 days or soaking a pad every hour",
      "Severe pain that stops daily activities",
      "Cycles shorter than 21 days or longer than 35 days",
      "Bleeding between periods or after intercourse",
      "No periods for three months (when not pregnant)",
    ],
    care: [
      "Detailed history and examination",
      "Blood tests (haemoglobin, thyroid, hormones) and ultrasound if needed",
      "Medicines to regulate cycles and control pain or bleeding",
      "Treatment of anaemia",
    ],
    tip: "Keep a simple period diary – start date, number of days and flow – and bring it to your visit.",
  },
  {
    slug: "pcos-pcod",
    icon: "flower",
    title: "PCOS / PCOD Care",
    short: "Diagnosis and long-term management of PCOS – irregular periods, acne, weight and fertility.",
    intro:
      "Polycystic ovary syndrome (PCOS/PCOD) is one of the most common hormonal conditions in young women. It can cause irregular periods, acne, extra facial hair, weight gain and difficulty conceiving. With the right lifestyle changes and treatment it can be controlled well.",
    signs: [
      "Irregular or missed periods",
      "Acne, oily skin or excess facial and body hair",
      "Weight gain, especially around the waist",
      "Difficulty getting pregnant",
    ],
    care: [
      "Ultrasound and blood tests to confirm PCOS",
      "Diet and exercise plan suited to you",
      "Medicines to regulate periods and hormones",
      "Fertility guidance when planning pregnancy",
    ],
    tip: "Even a 5–10% reduction in weight can bring periods back to a regular cycle in many women with PCOS.",
  },
  {
    slug: "fertility-guidance",
    icon: "baby",
    title: "Infertility Evaluation",
    short: "First-step fertility check-ups and guidance for couples trying to conceive.",
    intro:
      "If you have been trying to conceive for a year (or six months if you are over 35) without success, a fertility evaluation helps find the reason. Both partners are assessed, and many couples need only simple treatment.",
    signs: [
      "Trying for a baby for 12 months without success",
      "Irregular periods or known PCOS",
      "Previous miscarriages",
      "Age above 35 and planning pregnancy",
    ],
    care: [
      "Detailed history of both partners",
      "Basic tests: hormones, ultrasound, semen analysis",
      "Ovulation tracking and timing advice",
      "Ovulation induction where appropriate",
      "Referral for IUI / IVF when needed",
    ],
    tip: "Infertility is a couple's concern – it helps when both partners come for the first consultation.",
  },
  {
    slug: "family-planning",
    icon: "family",
    title: "Family Planning & Contraception",
    short: "Advice on the right method – pills, Copper-T, injections and permanent options.",
    intro:
      "Choosing when to have children, and how many, is an important health decision. The clinic explains every option clearly so you can choose what suits your body, your relationship and your future plans.",
    signs: [
      "Newly married couples wanting to delay pregnancy",
      "Spacing between children",
      "Side effects with your current method",
      "Need for emergency contraception",
    ],
    care: [
      "Oral contraceptive pills",
      "Copper-T (IUCD) insertion and removal",
      "Injectable contraceptives",
      "Counselling on permanent methods",
    ],
    tip: "Copper-T is a safe, long-acting, reversible option for spacing between children.",
  },
  {
    slug: "infections-discharge",
    icon: "shield",
    title: "White Discharge & Infections",
    short: "Treatment for vaginal discharge, itching, urine infections and pelvic infections.",
    intro:
      "Abnormal white discharge, itching, burning while passing urine and lower abdominal pain are very common and usually easy to treat. Self-medication often makes infections come back, so a proper check-up matters.",
    signs: [
      "Thick, smelly or coloured discharge",
      "Itching or burning in the private area",
      "Burning or frequent urination",
      "Lower abdominal or pelvic pain",
    ],
    care: [
      "Examination and swab or urine tests when needed",
      "Correct antibiotic or antifungal treatment",
      "Partner treatment when required",
      "Hygiene and prevention advice",
    ],
    tip: "Avoid scented washes and douches – plain water and cotton underwear are best for intimate hygiene.",
  },
  {
    slug: "menopause-care",
    icon: "sparkle",
    title: "Menopause Care",
    short: "Help with hot flushes, mood changes, bone health and bleeding after menopause.",
    intro:
      "Menopause is a natural stage of life, but the years around it can bring hot flushes, sleep problems, mood changes and weaker bones. The right advice and treatment can make this transition much easier.",
    signs: [
      "Hot flushes and night sweats",
      "Irregular periods after 40",
      "Mood swings, poor sleep or vaginal dryness",
      "Any bleeding after periods have stopped for a year (needs prompt check-up)",
    ],
    care: [
      "Symptom relief and lifestyle advice",
      "Bone health assessment and calcium/vitamin D",
      "Screening for BP, sugar and cholesterol",
      "Evaluation of post-menopausal bleeding",
    ],
    tip: "Weight-bearing exercise like brisk walking for 30 minutes a day helps protect bones after menopause.",
  },
  {
    slug: "cancer-screening",
    icon: "microscope",
    title: "Pap Smear & Women's Screening",
    short: "Pap smear, breast check and routine well-woman check-ups for early detection.",
    intro:
      "Cervical and breast cancer are among the most common cancers in Indian women, and both are highly treatable when found early. A simple Pap smear and a breast examination take only a few minutes.",
    signs: [
      "Women aged 21–65 – Pap smear every 3 years (or as advised)",
      "Lump or change in the breast",
      "Bleeding after intercourse or after menopause",
      "Family history of breast or ovarian cancer",
    ],
    care: [
      "Pap smear collection",
      "Clinical breast examination and self-examination training",
      "Advice on HPV vaccination for girls and young women",
      "Annual well-woman check-up",
    ],
    tip: "The HPV vaccine works best when given between 9 and 14 years of age.",
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
  { icon: "lock", title: "Privacy First", text: "Consultations are private and confidential. Bring a family member if you like – or come alone." },
  { icon: "heart", title: "Listened To, Not Rushed", text: "Time is taken to understand the problem and explain it in simple words." },
  { icon: "pill", title: "Only What You Need", text: "Tests and medicines are advised only when they are really needed." },
  { icon: "pin", title: "Close To Home", text: `Easy to reach in Kotla Mahingiran, Lal Kuan – ${site.landmarkInline}.` },
];

export const visitSteps = [
  { title: "Find the clinic", text: `${site.clinic} is at B 254, Kotla Mahingiran, Lal Kuan, ${site.landmarkInline}. Tap "Get Directions" for Google Maps.` },
  { title: "Bring your records", text: "Old prescriptions, scan and blood reports, and your period dates. For pregnancy, bring your antenatal card." },
  { title: "Consult & follow up", text: "Discuss your concern in private, get a clear plan, and return for follow-up as advised." },
];

export const tips = [
  { icon: "pill", title: "Iron and Anaemia", text: "Anaemia is very common in Indian women. Eat green leafy vegetables, jaggery, dates and pulses, and take iron tablets in pregnancy as prescribed – with lemon water, not tea." },
  { icon: "calendar2", title: "Track Your Cycle", text: "Note the first day of every period. A cycle between 21 and 35 days is normal; anything outside this deserves a check-up." },
  { icon: "pregnant", title: "Danger Signs in Pregnancy", text: "Bleeding, leaking fluid, severe headache, blurred vision, swelling of the face or reduced baby movements need immediate medical attention." },
];

export type GalleryItem = { src: string; alt: string };

// clinic-entrance.jpg is a real photo of the clinic (Google Maps). The rest are AI-generated stock-style
// photos (not this clinic). Replace them with real clinic photos when available.
export const gallery: GalleryItem[] = [
  { src: `${IMG}/clinic-entrance.jpg`, alt: "Dr Sunita Clinic entrance" },
  { src: `${IMG}/g-bp-check.jpg`, alt: "Antenatal check-up" },
  { src: `${IMG}/g-ultrasound.jpg`, alt: "Pregnancy scans & guidance" },
  { src: `${IMG}/g-consultation.jpg`, alt: "Private consultation" },
  { src: `${IMG}/g-reception.jpg`, alt: "Reception" },
  { src: `${IMG}/g-waiting.jpg`, alt: "Comfortable waiting area" },
];

export type Testimonial = { name: string; quote: string };

// Add only genuine patient reviews (with consent). The section links to Google reviews while this is empty.
export const testimonials: Testimonial[] = [];

export const faqs = [
  { q: `Where is ${site.clinic}?`, a: `At ${site.address} – ${site.landmark}. Use the "Get Directions" button to open Google Maps.` },
  { q: "What are the clinic timings?", a: "Please call or visit the clinic to confirm current OPD timings before your visit." },
  { q: "Do I need an appointment?", a: "Walk-ins are welcome during OPD hours. For pregnancy follow-ups, please come on the date advised at your last visit." },
  { q: "Can I come for a check-up during my periods?", a: "Yes. For most problems you can visit any day. For a Pap smear, it is better to come when you are not bleeding." },
  { q: "Can unmarried girls consult a gynaecologist?", a: "Absolutely. Period problems, PCOS, acne, discharge and HPV vaccination are all common reasons young girls visit a gynaecologist." },
  { q: "What should I bring for a pregnancy visit?", a: "Your antenatal card, all scan and blood reports, current medicines, and your last menstrual period date." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
