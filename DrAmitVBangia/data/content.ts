// All page content lives here so the single page can be edited in one place.
//
// Profile of Dr. Amit V Bangia (Doctor ID: 1).
// STATUS: content is PENDING FINAL DOCTOR APPROVAL. See IMAGE-PROMPTS.md → "Content checklist"
// for the items that must be confirmed by Dr. Bangia before this site goes live.

const IMG = "/images";

export const site = {
  doctorId: 1,
  name: "Dr. Amit V Bangia",
  shortName: "Dr. Bangia",
  brand: "Dr. Amit V Bangia – Hair and Skin Specialist",
  tagline: "Consultant Dermatologist & Cosmetologist",
  city: "Faridabad",
  experienceYears: 20,
  specialistYears: 19,
  languages: ["English", "Hindi"],
  phone: "+91 99108 12362",
  phoneHref: "tel:+919910812362",
  // Confirm with the doctor that this number is on WhatsApp.
  whatsappNumber: "919910812362",
  whatsapp: "https://wa.me/919910812362?text=Hi%20Dr.%20Bangia%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  email: "appointment@dramitbangia.com",
  logo: `${IMG}/logo.svg`,
  heroImage: `${IMG}/hero.jpg`,
  doctorImage: `${IMG}/dr-amit-bangia.jpg`,
  commitmentImage: `${IMG}/why-choose.jpg`,
  social: {
    instagram: "https://www.instagram.com/dramitbangia/",
    instagramHandle: "@dramitbangia",
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
    name: "Dr. Amit V Bangia – Hair and Skin Specialist",
    address: "Plot No. 308, Sector 46, Faridabad, Haryana 121010",
    hours: ["Mon – Sat: 10:00 AM – 7:00 PM", "By appointment · Sunday closed"],
    mapQuery: "Dr. Amit V Bangia Hair and Skin Specialist, Plot No. 308, Sector 46, Faridabad, Haryana 121010",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#why-us", label: "Why Dr. Bangia" },
  { href: "#visit", label: "Your Visit" },
  { href: "#clinic", label: "Clinic" },
  { href: "#skin-tips", label: "Skin Tips" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export type Stat = { label: string; value: number; suffix: string };

// Only verifiable numbers. Add patient counts etc. only if the doctor provides them.
export const stats: Stat[] = [
  { label: "Years of Experience", value: site.experienceYears, suffix: "+" },
  { label: "Years as a Specialist", value: site.specialistYears, suffix: "+" },
  { label: "Clinic Days a Week", value: 6, suffix: "" },
  { label: "Languages Spoken", value: site.languages.length, suffix: "" },
];

export const credentials = [
  "M.B.B.S. – Kasturba Medical College",
  `${site.experienceYears} years of overall experience, ${site.specialistYears} years as a specialist`,
  "Consultant Dermatologist & Cosmetologist",
  "Clinical experience at regional hospitals across Delhi NCR",
  `Consults in ${site.languages.join(" and ")}`,
];

export type ServiceCategory = "Skin Care" | "Hair & Scalp" | "Cosmetology";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  types: string[];
  benefits: string;
};

export const services: Service[] = [
  // ---------- Skin Care ----------
  {
    id: "consultation",
    title: "Dermatology Consultation & Diagnosis",
    category: "Skin Care",
    summary:
      "A detailed outpatient consultation for any skin, hair or nail concern: history, close examination and a clear explanation of what is going on.",
    types: [
      "First consultation for new skin, hair or nail problems",
      "Second opinion on an existing diagnosis or treatment",
      "Review of previous prescriptions and reports",
      "Follow-up visits to track progress",
    ],
    benefits:
      "An accurate diagnosis first, so treatment targets the real cause instead of only the symptoms.",
  },
  {
    id: "diagnostics",
    title: "Diagnostic Evaluation of Skin Conditions",
    category: "Skin Care",
    summary:
      "When a problem is not obvious on examination alone, a structured evaluation helps confirm the diagnosis before treatment begins.",
    types: [
      "Detailed clinical skin examination",
      "Assessment of rashes, spots, patches and lesions",
      "Relevant blood tests where an internal cause is suspected",
      "Referral for further tests when required",
    ],
    benefits: "Avoids trial-and-error treatment and picks up conditions that need early attention.",
  },
  {
    id: "acne",
    title: "Acne & Acne Scars",
    category: "Skin Care",
    summary:
      "Pimples, blackheads and cysts are among the most common reasons people see a dermatologist. Early treatment also helps prevent scarring.",
    types: [
      "Teenage and adult acne",
      "Hormonal acne",
      "Post-acne marks and pigmentation",
      "Acne scar assessment and treatment planning",
    ],
    benefits: "A step-by-step plan that controls breakouts, reduces marks and protects the skin barrier.",
  },
  {
    id: "pigmentation",
    title: "Pigmentation, Melasma & Uneven Skin Tone",
    category: "Skin Care",
    summary:
      "Dark patches, tanning and uneven tone can have many causes, including sun, hormones, medicines and inflammation. Each needs a different approach.",
    types: [
      "Melasma",
      "Sun tan and sun damage",
      "Post-inflammatory hyperpigmentation",
      "Dark circles and under-eye pigmentation",
    ],
    benefits: "Treatment matched to the type and depth of pigmentation, with realistic expectations set from day one.",
  },
  {
    id: "eczema-psoriasis",
    title: "Eczema, Dermatitis & Psoriasis",
    category: "Skin Care",
    summary:
      "Long-term inflammatory skin conditions that cause itching, dryness, redness or scaling, and often flare up with weather, stress or irritants.",
    types: [
      "Atopic eczema in children and adults",
      "Contact and allergic dermatitis",
      "Seborrhoeic dermatitis",
      "Plaque and scalp psoriasis",
    ],
    benefits: "Fewer flare-ups, calmer skin and a routine you can follow at home between visits.",
  },
  {
    id: "infections",
    title: "Skin Infections & Allergies",
    category: "Skin Care",
    summary:
      "Fungal, bacterial and viral skin infections, as well as hives and allergic reactions, are diagnosed and treated promptly.",
    types: [
      "Fungal infections (ringworm, tinea)",
      "Bacterial infections and boils",
      "Warts and molluscum",
      "Urticaria (hives) and itching",
    ],
    benefits: "Correct treatment early, which shortens the illness and lowers the chance of it coming back.",
  },
  {
    id: "vitiligo",
    title: "Vitiligo & White Patches",
    category: "Skin Care",
    summary:
      "Not every white patch is vitiligo. A careful examination tells the conditions apart and guides the right treatment.",
    types: ["Vitiligo", "Pityriasis alba", "Fungal white patches", "Other causes of light patches"],
    benefits: "Clarity about the diagnosis and a long-term plan to stabilise and improve patches.",
  },
  {
    id: "preventive",
    title: "Preventive Skin Check-ups",
    category: "Skin Care",
    summary:
      "Routine check-ups for moles, spots and changes in the skin, plus advice on sun protection and daily care.",
    types: [
      "Mole and spot examination",
      "Skin-type assessment",
      "Sun-protection and skincare guidance",
      "Routine dermatological care for the whole family",
    ],
    benefits: "Catches problems early and keeps healthy skin healthy.",
  },

  // ---------- Hair & Scalp ----------
  {
    id: "hair-fall",
    title: "Hair Fall & Hair Thinning",
    category: "Hair & Scalp",
    summary:
      "Hair loss can come from genetics, hormones, nutrition, stress, illness or scalp disease. Finding the cause is the key to treating it.",
    types: [
      "Pattern hair loss in men and women",
      "Telogen effluvium (sudden shedding)",
      "Hair fall linked to thyroid, anaemia or PCOS",
      "Hair-loss evaluation with relevant tests",
    ],
    benefits: "A cause-based plan that slows hair fall and supports regrowth where possible.",
  },
  {
    id: "alopecia",
    title: "Alopecia Areata & Patchy Hair Loss",
    category: "Hair & Scalp",
    summary:
      "Round bald patches on the scalp, beard or eyebrows need specialist assessment and timely treatment.",
    types: ["Scalp alopecia areata", "Beard and eyebrow patches", "Recurrent or extensive patches"],
    benefits: "Early treatment improves the chance of regrowth and reduces worry.",
  },
  {
    id: "scalp",
    title: "Dandruff & Scalp Conditions",
    category: "Hair & Scalp",
    summary:
      "Flaking, itching, oiliness or bumps on the scalp are common and treatable once the exact condition is identified.",
    types: ["Dandruff and seborrhoeic dermatitis", "Scalp psoriasis", "Scalp folliculitis", "Itchy, sensitive scalp"],
    benefits: "A comfortable, healthy scalp, which is also the foundation for healthy hair.",
  },
  {
    id: "nails",
    title: "Nail Disorders",
    category: "Hair & Scalp",
    summary:
      "Changes in nail colour, shape or strength may point to infection, skin disease or an internal condition.",
    types: ["Fungal nail infection", "Brittle or ridged nails", "Ingrown and painful nails", "Nail changes in psoriasis"],
    benefits: "Proper diagnosis before treatment, since many nail problems look alike.",
  },

  // ---------- Cosmetology ----------
  {
    id: "cosmetic-consultation",
    title: "Cosmetology Consultation",
    category: "Cosmetology",
    summary:
      "A doctor-led discussion of your cosmetic goals, what is realistic for your skin type and which options are safe and suitable.",
    types: [
      "Skin-type and concern assessment",
      "Honest advice on what will and won't help",
      "Combined medical and cosmetic planning",
    ],
    benefits: "Cosmetic care guided by a dermatologist, not by trends or advertising.",
  },
  {
    id: "peels",
    title: "Chemical Peels",
    category: "Cosmetology",
    summary:
      "Controlled peels that renew the outer layer of skin to improve tone, texture, acne and pigmentation.",
    types: ["Peels for acne and oily skin", "Peels for pigmentation and tan", "Peels for dull, uneven texture"],
    benefits: "Brighter, smoother skin with little downtime when chosen and done correctly.",
  },
  {
    id: "anti-ageing",
    title: "Anti-Ageing & Skin Rejuvenation",
    category: "Cosmetology",
    summary:
      "Guidance and treatment for fine lines, dullness, sun damage and loss of glow, tailored to your age and skin.",
    types: ["Fine lines and early wrinkles", "Sun-damaged skin", "Dull, tired-looking skin", "Under-eye concerns"],
    benefits: "Natural-looking results that keep your skin healthy over the long term.",
  },
  {
    id: "skincare-regimen",
    title: "Personalised Skincare Regimen",
    category: "Cosmetology",
    summary:
      "A simple, doctor-designed daily routine (cleanser, moisturiser, sunscreen and actives) chosen for your skin, not a generic one.",
    types: [
      "Routine for oily, dry, combination or sensitive skin",
      "Guidance on safe use of actives",
      "Avoiding products that worsen your condition",
    ],
    benefits: "Fewer products, better results, and no wasted money on the wrong ones.",
  },
];

export const serviceCategories: ServiceCategory[] = ["Skin Care", "Hair & Scalp", "Cosmetology"];

export const areasOfInterest = [
  "Acne & Acne Scars",
  "Hair Fall & Thinning",
  "Pigmentation & Melasma",
  "Eczema & Psoriasis",
];

export const qualities = [
  {
    title: "Diagnosis First",
    text: "Every skin and hair concern is examined carefully so the treatment matches the real cause.",
    icon: "◎",
  },
  {
    title: "Two Decades of Practice",
    text: `${site.experienceYears} years in medicine and ${site.specialistYears} years as a specialist in skin and hair care.`,
    icon: "✦",
  },
  {
    title: "Honest Advice",
    text: "Clear guidance on what will help, with no unnecessary procedures or products.",
    icon: "✚",
  },
  {
    title: "Medical + Cosmetic",
    text: "Medical dermatology and cosmetology under one roof, planned together for safer results.",
    icon: "❀",
  },
  {
    title: "Clear Communication",
    text: "Your condition and options explained simply, in English or Hindi, with time for your questions.",
    icon: "✉",
  },
  {
    title: "Care for the Whole Family",
    text: "Routine and preventive dermatological care for children, adults and seniors.",
    icon: "♥",
  },
];

export const whyChoose = [
  {
    title: `${site.experienceYears}+ years of experience`,
    text: `Including ${site.specialistYears} years as a specialist dermatologist and cosmetologist.`,
  },
  {
    title: "Trained at Kasturba Medical College",
    text: "M.B.B.S. from one of India's well-known medical colleges.",
  },
  {
    title: "Hospital experience across Delhi NCR",
    text: "A career that includes regional hospitals across the Delhi NCR region.",
  },
  {
    title: "Appointment-based clinic",
    text: "Consultations by appointment, Monday to Saturday, so you spend less time waiting.",
  },
  {
    title: "English & Hindi",
    text: "Comfortable, clear conversations in the language you prefer.",
  },
  {
    title: "Ethical & transparent",
    text: "Evidence-based treatment, realistic expectations and no pressure to buy products.",
  },
];

// The "Your Visit" section: what a patient can expect at the clinic.
export const visitSteps = [
  {
    title: "Book an Appointment",
    text: `Call ${site.phone}, send a WhatsApp message or email us to choose a time between 10 AM and 7 PM, Monday to Saturday.`,
  },
  {
    title: "Consultation & Examination",
    text: "Dr. Bangia takes a detailed history and examines your skin, hair or nails. Please bring any old prescriptions and reports.",
  },
  {
    title: "Diagnosis & Plan",
    text: "You get a clear explanation of the diagnosis and a treatment plan, including any tests, medicines or procedures needed.",
  },
  {
    title: "Follow-up",
    text: "Regular reviews track progress and adjust treatment, so you are supported until your skin or hair improves.",
  },
];

export type Testimonial = { name: string; quote: string };

// Leave EMPTY until you have real, permitted patient reviews (e.g. copied with consent from Google).
// The Reviews section is hidden automatically while this list is empty. Never invent reviews.
export const testimonials: Testimonial[] = [];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What does Dr. Amit V Bangia treat?",
    a: "Dr. Bangia is a Consultant Dermatologist & Cosmetologist. He sees patients for skin, hair, scalp and nail conditions such as acne, pigmentation, eczema, psoriasis, infections, allergies and hair fall, along with cosmetic skin concerns and preventive skin check-ups.",
  },
  {
    q: "What are the clinic timings?",
    a: "The clinic is open Monday to Saturday, 10:00 AM to 7:00 PM, by appointment. It is closed on Sundays.",
  },
  {
    q: "How do I book an appointment?",
    a: `Call ${site.phone}, message on WhatsApp, or email ${site.email}. You can also fill in the enquiry form on this page.`,
  },
  {
    q: "Where is the clinic located?",
    a: "Plot No. 308, Sector 46, Faridabad, Haryana 121010. A map is available in the Contact section below.",
  },
  {
    q: "Which languages does the doctor speak?",
    a: "Consultations are available in English and Hindi.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring any previous prescriptions, reports, and the creams or medicines you are currently using. Please come without make-up if your concern is on the face.",
  },
  {
    q: "When should I see a dermatologist for hair fall?",
    a: "If you notice more hair fall than usual for over 6–8 weeks, a widening parting, a receding hairline or bald patches, it is worth getting evaluated early, when treatment works best.",
  },
  {
    q: "Are cosmetic treatments safe for Indian skin?",
    a: "When chosen and performed by a qualified dermatologist after assessing your skin type, cosmetic treatments such as chemical peels are generally safe. A consultation comes first to decide what suits you.",
  },
];

export type GalleryImage = { src: string; alt: string };

// Replace these with REAL photos of the clinic (see IMAGE-PROMPTS.md).
export const gallery: GalleryImage[] = [
  { src: `${IMG}/clinic-1-exterior.jpg`, alt: "Skin & Laser Clinic signboard, Dr. Amit V. Bangia" },
  { src: `${IMG}/clinic-2-reception.jpg`, alt: "Reception" },
  { src: `${IMG}/clinic-3-waiting.jpg`, alt: "Patient waiting area" },
  { src: `${IMG}/clinic-4-consultation.jpg`, alt: "Consultation room" },
  { src: `${IMG}/clinic-5-procedure.jpg`, alt: "Procedure room" },
  { src: `${IMG}/clinic-6-doctor-at-work.jpg`, alt: "Dr. Amit V Bangia with a patient" },
  { src: `${IMG}/clinic-7-skin-exam.jpg`, alt: "Skin examination" },
  { src: `${IMG}/clinic-8-skincare.jpg`, alt: "Skincare guidance" },
];

export type BlogPost = { title: string; tag: string; excerpt: string; image: string };

// Short patient-education tips (shown as cards; no separate article pages).
export const blogs: BlogPost[] = [
  {
    title: "Acne: Why Squeezing Pimples Makes Things Worse",
    tag: "Acne",
    excerpt: "Picking pushes bacteria deeper and leaves marks that last longer than the pimple. What to do instead.",
    image: `${IMG}/tip-1-acne.jpg`,
  },
  {
    title: "Hair Fall: How Much Is Normal?",
    tag: "Hair",
    excerpt: "Losing 50–100 hairs a day is normal. Here's when shedding becomes a sign to see a dermatologist.",
    image: `${IMG}/tip-2-hair-fall.jpg`,
  },
  {
    title: "Sunscreen in Indian Weather: The Basics",
    tag: "Sun Care",
    excerpt: "SPF, PA ratings, how much to apply and when to reapply, even on cloudy days and indoors.",
    image: `${IMG}/tip-3-sunscreen.jpg`,
  },
  {
    title: "Melasma: Dark Patches That Need Patience",
    tag: "Pigmentation",
    excerpt: "Why melasma returns, why bleaching creams can backfire, and how it is managed safely.",
    image: `${IMG}/tip-4-pigmentation.jpg`,
  },
  {
    title: "Eczema in Winter: Keeping Skin Calm",
    tag: "Eczema",
    excerpt: "Short lukewarm baths, the right moisturiser and simple habits that prevent winter flare-ups.",
    image: `${IMG}/tip-5-eczema.jpg`,
  },
  {
    title: "Fungal Infections: Don't Self-Medicate",
    tag: "Infections",
    excerpt: "Steroid-mixed creams from the chemist can make ringworm spread. Why a proper diagnosis matters.",
    image: `${IMG}/tip-6-fungal.jpg`,
  },
];
