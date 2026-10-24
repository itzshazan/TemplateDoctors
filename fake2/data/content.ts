// All page content lives here so the single page can be edited in one place.
// NOTE: every person, clinic, phone number, address and review below is FICTIONAL demo data.

const IMG = "/images";

export const site = {
  name: "Dr. Ananya Mehra",
  brand: "Bloom Fertility & IVF Centre",
  tagline: "IVF & Fertility Specialist",
  city: "Gurugram",
  experienceYears: 12,
  // Deliberately invalid placeholder number (Indian mobiles start with 6–9).
  phone: "+91 12345 67890",
  phoneHref: "tel:+911234567890",
  whatsappNumber: "911234567890",
  whatsapp: "https://wa.me/911234567890?text=Hi",
  email: "care@bloomfertility.example",
  logo: `${IMG}/logo.svg`,
  heroImage: `${IMG}/hero.svg`,
  doctorImage: `${IMG}/doctor.svg`,
  commitmentImage: `${IMG}/commitment.svg`,
  rating: { score: 4.9, count: 120 },
  social: {
    facebook: "#",
    instagram: "#",
  },
};

export type Clinic = {
  name: string;
  address: string;
  hours: string[];
  mapQuery: string;
};

export const clinics: Clinic[] = [
  {
    name: "Bloom Fertility & IVF Centre",
    address: "Unit 304, 3rd Floor, Lotus Business Park, Sector 48, Gurugram, Haryana 122018",
    hours: ["Mon – Fri: 10:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM"],
    mapQuery: "Sector 48 Gurugram Haryana",
  },
  {
    name: "Lotus Women & Child Hospital",
    address: "Sector 50, Gurugram",
    hours: ["By prior appointment"],
    mapQuery: "Sector 50 Gurugram Haryana",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#gallery", label: "Gallery" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [
  { label: "Happy Patients", value: 25, suffix: "K+" },
  { label: "Years of Experience", value: site.experienceYears, suffix: "+" },
  { label: "Surgeries", value: 3500, suffix: "+" },
  { label: "Deliveries", value: 2800, suffix: "+" },
  { label: "Successful Pregnancies", value: 1900, suffix: "+" },
];

export const credentials = [
  "MBBS, MS (Obstetrics & Gynaecology) – Gold Medallist",
  "Fellowship in Reproductive Medicine & IVF",
  "Advanced training in minimally invasive gynecological surgery",
  "Speaker at national fertility conferences; author of patient-education guides",
];

export type ServiceCategory = "Fertility & IVF" | "Gynecology" | "Pregnancy Care";

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
    id: "infertility-evaluation",
    title: "Evaluation of Male & Female Infertility",
    category: "Fertility & IVF",
    summary:
      "A structured work-up of both partners to find out what is standing in the way of conception, covering hormones, reproductive anatomy, lifestyle and medical history.",
    types: [
      "Female: hormone tests, pelvic ultrasound, ovulation tracking, tubal & uterine assessment",
      "Male: semen analysis, hormone profile, examination, genetic tests if needed",
      "Couple-based assessment for a complete picture",
    ],
    benefits:
      "Pinpoints the cause, avoids unnecessary procedures and lets treatment be chosen on evidence rather than guesswork.",
  },
  {
    id: "preconceptional-counselling",
    title: "Preconceptional Counselling",
    category: "Fertility & IVF",
    summary:
      "A planning consultation before you try to conceive, to review health, spot risks early and get body and mind ready for pregnancy.",
    types: [
      "Review of conditions like diabetes, thyroid, hypertension or PCOS",
      "Basic fertility assessment",
      "Genetic and family-history screening",
      "Lifestyle, nutrition and folic-acid guidance",
      "Vaccination review",
    ],
    benefits:
      "Lowers the risk of complications and birth defects and helps couples start pregnancy prepared and confident.",
  },
  {
    id: "ovulation-disorders",
    title: "Ovulation Disorders – Diagnosis & Treatment",
    category: "Fertility & IVF",
    summary:
      "When the ovaries release eggs irregularly or not at all, conception becomes difficult. Identifying the reason is the first step to restoring ovulation.",
    types: [
      "PCOS",
      "Hypothalamic dysfunction (stress, weight change, extreme exercise)",
      "High prolactin",
      "Thyroid disorders",
      "Premature ovarian insufficiency",
      "Luteal phase defect",
    ],
    benefits:
      "Targeted treatment can regularise cycles, improve natural conception and support better results from fertility treatment.",
  },
  {
    id: "follicular-monitoring",
    title: "Follicular Monitoring – Tracking Ovulation",
    category: "Fertility & IVF",
    summary:
      "Serial ultrasound scans follow how follicles and the uterine lining develop through the cycle so the fertile window can be timed precisely.",
    types: [
      "Natural cycle monitoring",
      "Ovulation-induction cycle monitoring",
      "IUI and IVF cycle monitoring",
      "Hormone tests alongside scans when required",
    ],
    benefits:
      "Removes guesswork from timing, catches problems early and helps fine-tune medication doses.",
  },
  {
    id: "poor-ovarian-reserve",
    title: "Poor Ovarian Reserve – Fertility Solutions",
    category: "Fertility & IVF",
    summary:
      "A lower number or quality of eggs, often age-related but sometimes due to surgery, chemotherapy, genetics or unknown causes, needs a carefully tailored plan.",
    types: [
      "Age-related decline",
      "Genetic / familial",
      "After ovarian surgery or cancer treatment",
      "Unexplained reduced reserve",
      "Poor response to stimulation",
    ],
    benefits:
      "AMH, FSH and ultrasound-based assessment leads to individualised protocols and honest, realistic counselling.",
  },
  {
    id: "egg-freezing",
    title: "Egg Freezing – Preserving Fertility",
    category: "Fertility & IVF",
    summary:
      "Oocyte cryopreservation lets women store eggs at a younger age for use later, whether for personal reasons or before treatments that may affect fertility.",
    types: [
      "Elective (social) egg freezing",
      "Medical egg freezing before cancer treatment",
      "Preservation for declining ovarian reserve",
      "Egg freezing as part of IVF",
    ],
    benefits: "Gives flexibility in family planning and protects against age-related decline in egg quality.",
  },
  {
    id: "ssg",
    title: "Sonosalpingography (SSG) – Tubal Patency Test",
    category: "Fertility & IVF",
    summary:
      "A radiation-free ultrasound test in which saline is passed gently into the uterus to check whether the fallopian tubes are open.",
    types: ["Saline SSG", "Contrast-enhanced SSG"],
    benefits:
      "Done without anaesthesia or admission, well tolerated, and also shows the uterine cavity for polyps, fibroids or adhesions.",
  },
  {
    id: "iui",
    title: "IUI – Intrauterine Insemination",
    category: "Fertility & IVF",
    summary:
      "Prepared sperm is placed directly in the uterus around ovulation. A simple, outpatient first-line treatment for many couples.",
    types: [
      "Natural or stimulated cycle IUI",
      "Partner or donor sperm IUI",
      "Single or double IUI",
    ],
    benefits:
      "Minimally invasive and cost-effective; suited to unexplained infertility, mild male factor, ovulation and cervical issues.",
  },
  {
    id: "ivf",
    title: "IVF – Advanced In-Vitro Fertilization",
    category: "Fertility & IVF",
    summary:
      "Eggs are collected and fertilised in the laboratory, embryos are monitored, and the best embryo is transferred to the uterus.",
    types: [
      "Conventional IVF",
      "ICSI for male-factor infertility",
      "Donor egg / donor sperm IVF",
      "Frozen embryo transfer (FET)",
      "IVF with PGT",
    ],
    benefits:
      "Highest success rates among fertility treatments for blocked tubes, severe male factor, endometriosis and low reserve.",
  },
  {
    id: "tesa",
    title: "Testicular Sperm Aspiration (TESA)",
    category: "Fertility & IVF",
    summary:
      "A minimally invasive procedure to retrieve sperm directly from the testes for men with azoospermia, for use with ICSI.",
    types: ["Obstructive azoospermia", "Non-obstructive azoospermia", "Local or mild anaesthesia, day procedure"],
    benefits: "Makes biological fatherhood possible even when no sperm are found in the semen, with quick recovery.",
  },
  {
    id: "pgt",
    title: "Preimplantation Genetic Testing (PGT)",
    category: "Fertility & IVF",
    summary:
      "A few cells from a blastocyst-stage embryo are tested for chromosomal or genetic problems before transfer.",
    types: [
      "PGT-A – chromosome number (aneuploidy)",
      "PGT-M – single-gene disorders",
      "PGT-SR – structural rearrangements",
    ],
    benefits: "Helps choose healthy embryos, reduces miscarriage risk and supports safe single-embryo transfer.",
  },
  {
    id: "rif",
    title: "Recurrent Implantation Failure",
    category: "Fertility & IVF",
    summary:
      "When good-quality embryos repeatedly fail to implant, a detailed search for embryo, uterine, hormonal, immune or clotting factors is needed.",
    types: [
      "Embryo-related factors",
      "Uterine factors (thin lining, polyps, fibroids, adhesions)",
      "Endometrial receptivity issues",
      "Hormonal, metabolic, immune & thrombophilic factors",
    ],
    benefits: "A personalised plan reduces repeated failed cycles and the emotional and financial strain they bring.",
  },
  {
    id: "era",
    title: "Endometrial Receptivity Array (ERA)",
    category: "Fertility & IVF",
    summary:
      "A molecular test of the uterine lining that identifies your personal window of implantation so embryo transfer can be timed precisely.",
    types: ["Natural cycle ERA", "Hormone replacement cycle ERA", "Repeat ERA when required"],
    benefits: "Especially useful after repeated IVF failure despite good embryos.",
  },
  {
    id: "hysteroscopy-laparoscopy",
    title: "Fertility-Enhancing Hysteroscopy & Laparoscopy",
    category: "Fertility & IVF",
    summary:
      "Keyhole procedures to look inside the uterus and pelvis and correct problems that affect conception or implantation.",
    types: [
      "Diagnostic & operative hysteroscopy",
      "Diagnostic & operative laparoscopy",
      "Combined hystero-laparoscopy",
    ],
    benefits: "Less pain, minimal scarring and faster recovery, with improved natural and IVF success.",
  },
  {
    id: "aub",
    title: "Abnormal Uterine Bleeding",
    category: "Gynecology",
    summary:
      "Heavy, prolonged, irregular or post-menopausal bleeding should be evaluated early to find the cause and prevent anaemia.",
    types: [
      "Hormonal (ovulatory / anovulatory)",
      "Structural – fibroids, polyps, adenomyosis",
      "Medication-related",
      "Systemic – thyroid, clotting disorders",
      "Post-menopausal bleeding",
    ],
    benefits: "Targeted medical or minimally invasive treatment restores normal cycles and protects fertility where possible.",
  },
  {
    id: "pcos",
    title: "PCOS Management",
    category: "Gynecology",
    summary:
      "Polycystic ovary syndrome can cause irregular periods, acne, excess hair, weight gain and difficulty ovulating, with long-term metabolic risks.",
    types: ["Insulin-resistant", "Inflammatory", "Adrenal", "Post-pill", "Ovulatory dysfunction"],
    benefits: "Structured care regularises cycles, restores ovulation, improves symptoms and lowers diabetes risk.",
  },
  {
    id: "fibroids",
    title: "Fibroid Uterus – Advanced Treatment",
    category: "Gynecology",
    summary:
      "Non-cancerous growths of the uterine muscle that may cause heavy bleeding, pain, pressure or fertility problems.",
    types: ["Intramural", "Submucosal", "Subserosal", "Pedunculated"],
    benefits:
      "Medical, minimally invasive and fertility-preserving surgical options chosen around size, location and pregnancy plans.",
  },
  {
    id: "endometriosis",
    title: "Endometriosis – Specialized Care",
    category: "Gynecology",
    summary:
      "Tissue similar to the uterine lining growing outside the uterus, causing painful periods, pelvic pain and infertility. Often under-diagnosed.",
    types: [
      "Superficial peritoneal",
      "Ovarian endometrioma (chocolate cyst)",
      "Deep infiltrating",
      "Extragenital (bowel, bladder)",
    ],
    benefits: "Early, specialised care controls pain, protects fertility and improves quality of life.",
  },
  {
    id: "gynecological-care",
    title: "Comprehensive Gynecological Care",
    category: "Gynecology",
    summary:
      "Whole-life women's health care from adolescence through menopause: prevention, diagnosis and treatment.",
    types: [
      "Routine check-ups & screening (Pap smear, ultrasound)",
      "Menstrual and hormonal disorders",
      "Contraception counselling",
      "Infections and menopausal care",
      "Minimally invasive gynecological surgery",
    ],
    benefits: "Early detection and continuous, personalised care for long-term wellbeing.",
  },
  {
    id: "pregnancy-loss",
    title: "Preventing Pregnancy Loss",
    category: "Pregnancy Care",
    summary:
      "For women who have had miscarriages, a thorough evaluation looks for treatable causes before and during the next pregnancy.",
    types: [
      "Genetic and chromosomal evaluation",
      "Uterine and hormonal assessment",
      "Immune and clotting work-up",
      "Close early-pregnancy monitoring",
    ],
    benefits: "Treating the underlying cause improves the chance of a healthy, ongoing pregnancy.",
  },
  {
    id: "antenatal-care",
    title: "Antenatal Care",
    category: "Pregnancy Care",
    summary:
      "Regular medical supervision through pregnancy to track mother's health and baby's growth and catch complications early.",
    types: [
      "Trimester-based check-ups",
      "Ultrasound and growth scans",
      "Screening for diabetes, anaemia, thyroid and infections",
      "Nutrition, supplements and vaccination advice",
      "Childbirth education",
    ],
    benefits: "Safer pregnancy, fewer complications and better preparation for delivery.",
  },
  {
    id: "high-risk-pregnancy",
    title: "High-Risk Pregnancy & Monitoring",
    category: "Pregnancy Care",
    summary:
      "Closer monitoring and specialised management when the mother or baby faces a higher chance of complications.",
    types: [
      "Diabetes, hypertension, thyroid or autoimmune disease",
      "Preeclampsia, placenta previa, preterm labour",
      "Advanced maternal age",
      "Previous miscarriage, preterm birth or stillbirth",
      "Twins or multiples; fetal growth concerns",
    ],
    benefits: "Early detection, timely intervention and coordinated care for the safest possible outcome.",
  },
  {
    id: "delivery",
    title: "Labor or Caesarean – Delivery Options",
    category: "Pregnancy Care",
    summary:
      "The mode of delivery is decided together, based on the mother's health, the baby's condition and how the pregnancy progresses.",
    types: [
      "Normal vaginal delivery",
      "Assisted vaginal delivery",
      "Elective & emergency caesarean section",
      "VBAC – vaginal birth after caesarean",
    ],
    benefits: "Thoughtful planning lowers risk, supports faster recovery and a positive birth experience.",
  },
];

export const serviceCategories: ServiceCategory[] = ["Fertility & IVF", "Gynecology", "Pregnancy Care"];

export const areasOfInterest = [
  "High-Risk Pregnancy",
  "Gynecological Cancer",
  "PCOD & Period Problems",
  "Infertility",
];

export const qualities = [
  {
    title: "Expert Professionalism",
    text: "Respectful, confidential and ethical care from the first consultation to follow-up.",
    icon: "✦",
  },
  {
    title: "Meticulous Approach",
    text: "Every history, report and symptom is reviewed carefully to build a precise treatment plan.",
    icon: "◎",
  },
  {
    title: "Advanced Medical Expertise",
    text: "Specialist training in reproductive medicine, kept current with the latest evidence and techniques.",
    icon: "✚",
  },
  {
    title: "Calm & Supportive",
    text: "A composed, patient manner that eases anxiety through a stressful journey.",
    icon: "❀",
  },
  {
    title: "Clear Communication",
    text: "Diagnoses and options explained in simple terms, with time for every question.",
    icon: "✉",
  },
  {
    title: "Compassionate, Personal Care",
    text: "Every patient is heard, respected and guided with sensitivity.",
    icon: "♥",
  },
];

export const whyChoose = [
  {
    title: "Fertility & IVF expertise",
    text: "Experienced in complex infertility and advanced reproductive procedures.",
  },
  {
    title: "High-risk pregnancy care",
    text: "Personalised plans and close monitoring for mother and baby.",
  },
  {
    title: "Compassionate approach",
    text: "Emotional support, clarity and reassurance at each step.",
  },
  {
    title: "Modern techniques",
    text: "Evidence-based protocols in well-equipped clinical settings.",
  },
  {
    title: "Holistic, patient-centred",
    text: "Attention to physical, emotional and reproductive wellbeing.",
  },
  {
    title: "Ethical & transparent",
    text: "Honest counselling, no unnecessary procedures or medicines.",
  },
];

export type Testimonial = { name: string; quote: string };

// Sample testimonials for the demo; names and quotes are invented.
export const testimonials: Testimonial[] = [
  {
    name: "Priya S.",
    quote: "We were nervous about IVF, but every step was explained so clearly that we always knew what came next.",
  },
  {
    name: "Rohan & Meera",
    quote: "She tried simpler options first instead of rushing us into treatment. We are now proud parents!",
  },
  {
    name: "Kavita M.",
    quote: "My PCOS symptoms finally feel under control. Practical advice and no unnecessary medicines.",
  },
  {
    name: "Aditi R.",
    quote: "Always reachable when I had questions during my pregnancy. I felt genuinely cared for.",
  },
  {
    name: "Sameer K.",
    quote: "Warm, patient and honest about our chances. That honesty meant a lot to us.",
  },
  {
    name: "Neha T.",
    quote: "The clinic team made a stressful journey feel calm. Highly recommend Dr. Mehra.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What services does Dr. Ananya Mehra offer?",
    a: "Fertility evaluation, ovulation induction, IUI, IVF/ICSI, egg freezing, and treatment of PCOS, endometriosis and recurrent miscarriage, along with general gynecology and pregnancy care.",
  },
  {
    q: "How do I know if I need fertility treatment?",
    a: "If you have been trying for a year without success (or six months if you are over 35), it is a good time to see a specialist. Your history and tests will guide the most suitable option.",
  },
  {
    q: "Can recurrent pregnancy loss be treated?",
    a: "Yes. Detailed testing helps identify underlying causes, and a tailored plan can improve the chance of a successful pregnancy.",
  },
  {
    q: "What causes infertility in women and men?",
    a: "In women: ovulation problems, blocked tubes, endometriosis or age. In men: low sperm count, poor motility or structural issues. A couple evaluation finds the specific cause.",
  },
  {
    q: "Is fertility treatment painful?",
    a: "Most treatments such as IUI and IVF involve mild discomfort rather than pain, and every step is planned to keep you comfortable.",
  },
  {
    q: "How long does treatment take?",
    a: "It depends on the method and your response. A typical IVF cycle takes about 4–6 weeks from stimulation to embryo transfer.",
  },
  {
    q: "Can lifestyle changes improve fertility?",
    a: "Yes — a balanced diet, regular exercise, stress management, a healthy weight and avoiding smoking and alcohol all help. Personalised advice is part of every consultation.",
  },
  {
    q: "When should I seek help for irregular periods?",
    a: "If you have irregular or heavy periods, acne, excess hair growth or mood changes suggesting hormonal imbalance, early consultation helps prevent complications.",
  },
];

export const gallery = [
  "Reception",
  "Consultation Room",
  "Ultrasound Suite",
  "Embryology Lab",
  "Recovery Lounge",
  "Patient Care",
  "Appointments",
  "Happy Families",
  "Wellness Garden",
  "Medical Team",
].map((label, i) => ({
  src: `${IMG}/gallery-${i + 1}.svg`,
  alt: label,
}));

export type BlogPost = { title: string; date: string; excerpt: string; image: string };

export const blogs: BlogPost[] = [
  {
    title: "PCOS: Early Signs You Shouldn't Ignore",
    date: "October 18, 2026",
    excerpt: "Irregular cycles, acne and weight changes can all point to PCOS. Here's when to get checked.",
    image: `${IMG}/blog-1.svg`,
  },
  {
    title: "Understanding Infertility: Causes in Men and Women",
    date: "October 11, 2026",
    excerpt: "Infertility affects both partners equally often. A look at the common causes and first tests.",
    image: `${IMG}/blog-2.svg`,
  },
  {
    title: "Living With Endometriosis: Diagnosis & Treatment",
    date: "October 4, 2026",
    excerpt: "Painful periods aren't something you have to accept. How endometriosis is found and managed.",
    image: `${IMG}/blog-3.svg`,
  },
  {
    title: "Your First IVF Cycle: What to Expect",
    date: "September 27, 2026",
    excerpt: "From stimulation to embryo transfer, a step-by-step guide to a typical IVF timeline.",
    image: `${IMG}/blog-4.svg`,
  },
  {
    title: "Follicular Scans: Timing Ovulation Precisely",
    date: "September 20, 2026",
    excerpt: "Why serial ultrasound scans are one of the most useful tools when trying to conceive.",
    image: `${IMG}/blog-5.svg`,
  },
  {
    title: "Planning a Healthy Pregnancy After 35",
    date: "September 13, 2026",
    excerpt: "Pre-pregnancy check-ups, nutrition and screening that make a real difference.",
    image: `${IMG}/blog-6.svg`,
  },
];
