// Central content for the site. Practice details (name, address, timings, contact)
// live here so every page stays in sync. Items to confirm are listed in IMAGE-PROMPTS.md.

export const doctor = {
  name: "Dr. Sunita",
  shortName: "Dr. Sunita",
  // CONFIRM: qualifications (e.g. MBBS, MS/DGO). Shown under the name everywhere.
  qualifications: "Gynaecologist · Women's Health Clinic",
};

// Phone and email are not on the Google listing yet. Leave them empty and the site shows
// directions instead of call buttons; the appointment form appears once either is added.
export const contact = {
  email: "",
  phone: "",
  phoneHref: "",
  /** Digits only with country code, e.g. "919876543210". */
  whatsapp: "",
  facebook: "",
  twitter: "",
  mapsUrl:
    "https://www.google.com/maps/place/Dr+Sunita+Clinic/data=!4m7!3m6!1s0x390ce1667e4cd421:0xeefd3d1a5672ae68!8m2!3d28.4939155!4d77.28013!16s%2Fg%2F11kvqxvbp2!19sChIJIdRMfmbhDDkRaK5yVho9_e4",
  googleReviews:
    "https://www.google.com/maps/place/Dr+Sunita+Clinic/data=!4m7!3m6!1s0x390ce1667e4cd421:0xeefd3d1a5672ae68!8m2!3d28.4939155!4d77.28013!16s%2Fg%2F11kvqxvbp2!19sChIJIdRMfmbhDDkRaK5yVho9_e4",
  mapEmbed: "https://maps.google.com/maps?q=28.4939155,77.28013&z=16&output=embed",
};

export const canContact = Boolean(contact.phone || contact.email || contact.whatsapp);

export const clinics = [
  {
    name: "Dr Sunita Clinic",
    address:
      "B 254, near Pankaj Medical Store, Chungi No 2, Kotla Mahingiran, Lal Kuan, New Delhi, Faridabad, Haryana 121009",
    // CONFIRM: OPD timings (not published online).
    timing: ["Please call or visit the clinic to confirm OPD timings"],
    mapEmbed: contact.mapEmbed,
  },
];

export const primaryClinic = clinics[0];

export const bannerCaption = "DR SUNITA CLINIC · LAL KUAN";

export const stats = [
  { icon: "quality", value: "8", label: "Women's Health Services" },
  { icon: "patients", value: "Teens", label: "To Menopause" },
  { icon: "experience", value: "100%", label: "Private Consultations" },
] as const;

export type StatIcon = (typeof stats)[number]["icon"];

// Files under /public. clinic-entrance.jpg is a real photo from the clinic's Google listing;
// the others are AI-generated (no doctor faces). Replace with real photos when available.
export const images = {
  logo: "/images/logo.png",
  banners: ["/images/banner/1.jpg", "/images/banner/2.jpg", "/images/banner/3.jpg"],
  welcome: "/images/clinic-entrance.jpg",
  doctorCutout: "/images/about.jpg",
  doctorProfile: "/images/about.jpg",
  doctorSidebar: "/images/hero.jpg",
  innerBanners: {
    doctor: "/images/inner-banner1.jpg",
    services: "/images/inner-banner2.jpg",
    testimonials: "/images/inner-banner3.jpg",
    blog: "/images/inner-banner-blog.jpg",
  },
  googleReviewLogo: "/images/google-review-logo.png",
  testimonialVideos: [] as string[],
};

export type ServiceIcon =
  | "pregnancy"
  | "period"
  | "pcos"
  | "fertility"
  | "family"
  | "infection"
  | "menopause"
  | "screening";

export type Service = {
  id: string;
  menuLabel: string;
  title: string;
  icon: ServiceIcon;
  teaser: string;
  body: { heading?: string; text: string }[];
  images?: string[];
};

export const services: Service[] = [
  {
    id: "pregnancy",
    menuLabel: "Pregnancy & antenatal care",
    title: "Pregnancy & Antenatal Care",
    icon: "pregnancy",
    teaser: "Regular check-ups, tests and scans through every trimester for a healthy mother and baby.",
    body: [
      {
        text: "Good antenatal care is the best way to keep both mother and baby healthy. Regular visits track the baby's growth and pick up problems like anaemia, high blood pressure or gestational diabetes early.",
      },
      {
        heading: "What the visits include",
        text: "Confirmation of pregnancy and due date, BP and weight checks, advice on blood tests, ultrasound scans and vaccinations, iron, calcium and folic acid supplements, and guidance on diet, exercise and warning signs.",
      },
      {
        heading: "When to come in urgently",
        text: "Bleeding, leaking fluid, severe headache, blurred vision, swelling of the face or reduced baby movements need immediate attention.",
      },
    ],
    images: ["/images/g-bp-check.jpg", "/images/g-ultrasound.jpg"],
  },
  {
    id: "periods",
    menuLabel: "Period problems",
    title: "Period Problems",
    icon: "period",
    teaser: "Heavy, painful, irregular or missed periods evaluated and treated with care.",
    body: [
      {
        text: "Periods that are very heavy, very painful, irregular or missing are common but not something to simply put up with. They can point to hormonal imbalance, thyroid problems, fibroids, PCOS or anaemia — most of which are easily treatable.",
      },
      {
        heading: "When to get checked",
        text: "Bleeding for more than 7 days, soaking a pad every hour, cycles shorter than 21 or longer than 35 days, bleeding between periods or after intercourse, or no periods for three months when not pregnant.",
      },
    ],
  },
  {
    id: "pcos",
    menuLabel: "PCOS / PCOD care",
    title: "PCOS / PCOD Care",
    icon: "pcos",
    teaser: "Diagnosis and long-term management of PCOS — irregular periods, acne, weight and fertility.",
    body: [
      {
        text: "Polycystic ovary syndrome is one of the most common hormonal conditions in young women. It can cause irregular periods, acne, extra facial hair, weight gain and difficulty conceiving.",
      },
      {
        text: "Treatment combines an ultrasound and blood tests to confirm the diagnosis, a realistic diet and exercise plan, medicines to regulate periods and hormones, and fertility guidance when planning a pregnancy. Even a 5–10% weight loss can bring periods back to a regular cycle.",
      },
    ],
  },
  {
    id: "fertility",
    menuLabel: "Infertility evaluation",
    title: "Infertility Evaluation",
    icon: "fertility",
    teaser: "First-step fertility check-ups and guidance for couples trying to conceive.",
    body: [
      {
        text: "If you have been trying for a year (or six months if over 35) without success, an evaluation of both partners helps find the reason. Many couples need only simple treatment.",
      },
      {
        heading: "What is involved",
        text: "A detailed history of both partners, basic hormone tests, ultrasound and semen analysis, ovulation tracking and timing advice, and referral for IUI or IVF when needed.",
      },
    ],
  },
  {
    id: "family-planning",
    menuLabel: "Family planning & contraception",
    title: "Family Planning & Contraception",
    icon: "family",
    teaser: "Advice on the right method — pills, Copper-T, injections and permanent options.",
    body: [
      {
        text: "Choosing when to have children, and how many, is an important health decision. Every option is explained clearly so you can choose what suits your body and your plans: oral contraceptive pills, Copper-T insertion and removal, injectable contraceptives and counselling on permanent methods.",
      },
    ],
  },
  {
    id: "infections",
    menuLabel: "White discharge & infections",
    title: "White Discharge & Infections",
    icon: "infection",
    teaser: "Treatment for vaginal discharge, itching, urine infections and pelvic infections.",
    body: [
      {
        text: "Abnormal discharge, itching, burning while passing urine and lower abdominal pain are very common and usually easy to treat. Self-medication often makes infections come back, so a proper check-up matters.",
      },
      {
        text: "Care includes an examination, swab or urine tests when needed, the correct treatment, partner treatment where required, and hygiene advice. Avoid scented washes — plain water and cotton underwear are best.",
      },
    ],
  },
  {
    id: "menopause",
    menuLabel: "Menopause care",
    title: "Menopause Care",
    icon: "menopause",
    teaser: "Help with hot flushes, mood changes, bone health and bleeding after menopause.",
    body: [
      {
        text: "Menopause is a natural stage of life, but the years around it can bring hot flushes, sleep problems, mood changes and weaker bones. The right advice and treatment make the transition much easier.",
      },
      {
        heading: "Important",
        text: "Any bleeding after periods have stopped for a year needs a prompt check-up.",
      },
    ],
  },
  {
    id: "screening",
    menuLabel: "Pap smear & women's screening",
    title: "Pap Smear & Women's Screening",
    icon: "screening",
    teaser: "Pap smear, breast check and routine well-woman check-ups for early detection.",
    body: [
      {
        text: "Cervical and breast cancer are among the most common cancers in Indian women, and both are highly treatable when found early. A Pap smear and a breast examination take only a few minutes.",
      },
      {
        text: "The clinic offers Pap smear collection, clinical breast examination and self-examination training, advice on HPV vaccination for girls and young women, and an annual well-woman check-up.",
      },
    ],
  },
];

export const welcome = {
  heading: "Welcome to",
  highlight: "Dr Sunita Clinic",
  paragraphs: [
    "Dr Sunita Clinic in Kotla Mahingiran, Lal Kuan, cares for women and girls at every stage of life — from first periods to pregnancy, family planning and menopause. Consultations are private and respectful, and every concern is heard without judgement.",
    "The approach is simple: listen carefully, explain the problem in plain Hindi or English, and recommend only the tests and medicines that are really needed. The clinic is easy to find near Pankaj Medical Store, Chungi No 2.",
  ],
};

// Written without pronouns: the doctor's preferred pronouns aren't published.
export const doctorBio = {
  intro: `${doctor.name} is a gynaecologist who runs Dr Sunita Clinic at B 254, Kotla Mahingiran, Lal Kuan, near Pankaj Medical Store, Chungi No 2 — caring for women and girls from the neighbourhood and nearby Faridabad.`,
  education:
    "The clinic looks after pregnancy and everyday gynaecological problems: period problems, PCOS, infections, family planning, fertility concerns, menopause and women's health screening.",
  more: [
    "Many women put off discussing period problems, discharge or fertility worries. At the clinic these are treated as routine health matters, explained in simple language, with a clear plan for what to do next.",
    "Tests and medicines are advised only when needed, and the reason is always explained.",
    "Walk-ins are welcome during OPD hours. Bring old prescriptions, scan and blood reports, and your period dates; for pregnancy visits, bring your antenatal card.",
  ],
};

export const patientInfo = [
  { title: "Privacy & Respect", image: "/images/p1.jpg", icon: "quality" },
  { title: "Sterile Instruments", image: "/images/p2.jpg", icon: "sterile" },
  { title: "Walk-ins Welcome", image: "/images/p3.jpg", icon: "urgent" },
  { title: "Health Tips", image: "/images/p4.jpg", icon: "video" },
  { title: "Lab Test Guidance", image: "/images/p5.jpg", icon: "lab" },
] as const;

export const gallery = [
  "/images/clinic-entrance.jpg",
  "/images/g-bp-check.jpg",
  "/images/g-ultrasound.jpg",
  "/images/g-consultation.jpg",
  "/images/g-reception.jpg",
  "/images/g-waiting.jpg",
  "/images/hero.jpg",
  "/images/about.jpg",
];

// Add genuine reviews from patients here (with their permission), e.g.
// { quote: "…", name: "Patient name" }. Until then the page points visitors to Google reviews.
export const testimonials: { quote: string; name: string }[] = [];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/meet-the-doctor", label: "Meet The Doctor" },
  { href: "/services", label: "Our Services", children: true },
  { href: "/testimonials", label: "Patients Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Health Tips" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

// CONFIRM: the final domain for this site.
export const siteUrl = "https://www.example.com";
