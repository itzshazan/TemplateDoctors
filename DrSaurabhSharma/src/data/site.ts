// Central content for the site. Practice details live here so every page stays in sync.
// Source: Google Maps listing for Dr Saurabh Sharma (Old Faridabad). Credentials are not published and
// several orthopaedic surgeons share this name, so qualifications are left out until confirmed.

export const doctor = {
  name: "Dr. Saurabh Sharma",
  shortName: "Dr. Saurabh Sharma",
  // CONFIRM: qualifications (e.g. MBBS, MS Ortho). Shown under the name everywhere.
  qualifications: "Orthopaedic Surgeon · Bone & Joint Clinic",
};

export const contact = {
  email: "",
  phone: "+91 95605 11186",
  phoneHref: "tel:+919560511186",
  /** Digits only with country code. CONFIRM the number is on WhatsApp. */
  whatsapp: "919560511186",
  facebook: "",
  twitter: "",
  mapsUrl:
    "https://www.google.com/maps/place/Dr+Saurabh+Sharma/data=!4m7!3m6!1s0x390cddcbf100248f:0xba87171ae11b8b87!8m2!3d28.4225799!4d77.3186461!16s%2Fg%2F11g0gphfmc!19sChIJjyQA8cvdDDkRh4sb4RoXh7o",
  googleReviews:
    "https://www.google.com/maps/place/Dr+Saurabh+Sharma/data=!4m7!3m6!1s0x390cddcbf100248f:0xba87171ae11b8b87!8m2!3d28.4225799!4d77.3186461!16s%2Fg%2F11g0gphfmc!19sChIJjyQA8cvdDDkRh4sb4RoXh7o",
  mapEmbed: "https://maps.google.com/maps?q=28.4225799,77.3186461&z=16&output=embed",
};

export const canContact = Boolean(contact.phone || contact.email || contact.whatsapp);

export const clinics = [
  {
    name: "Dr Saurabh Sharma – Bone & Joint Clinic",
    address: "Baradari Chowk, near Rotary School, Gopi Colony, Old Faridabad, Haryana 121002",
    // From Google Maps (Monday 10 AM – 8 PM). CONFIRM the other days.
    timing: ["Mon: 10:00 AM – 8:00 PM", "Please call to confirm other days"],
    mapEmbed: contact.mapEmbed,
  },
];

export const primaryClinic = clinics[0];

export const bannerCaption = "BONE & JOINT CARE · OLD FARIDABAD";

export const stats = [
  { icon: "quality", value: "4.9★", label: "Rating on Google" },
  { icon: "patients", value: "8", label: "Bone & Joint Services" },
  { icon: "experience", value: "10–8", label: "Long OPD Hours" },
] as const;

export type StatIcon = (typeof stats)[number]["icon"];

// AI-generated photos (no doctor faces). Replace with real clinic photos when available.
export const images = {
  logo: "/images/logo.png",
  banners: ["/images/banner/1.jpg", "/images/banner/2.jpg", "/images/banner/3.jpg"],
  welcome: "/images/welcome.jpg",
  doctorCutout: "/images/about.jpg",
  doctorProfile: "/images/about.jpg",
  doctorSidebar: "/images/sidebar.jpg",
  innerBanners: {
    doctor: "/images/inner-banner1.jpg",
    services: "/images/inner-banner2.jpg",
    testimonials: "/images/inner-banner1.jpg",
    blog: "/images/inner-banner2.jpg",
  },
  googleReviewLogo: "/images/google-review-logo.png",
  testimonialVideos: [] as string[],
};

export type ServiceIcon = "knee" | "spine" | "fracture" | "sports" | "joint" | "bone" | "shoulder" | "rehab";

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
    id: "fractures",
    menuLabel: "Fractures & injuries",
    title: "Fractures & Injuries",
    icon: "fracture",
    teaser: "Prompt care for broken bones, sprains and dislocations, with plaster, splints or surgery.",
    body: [
      { text: "Falls, road accidents and sports can break bones or damage ligaments. Early assessment with X-rays decides whether a plaster, splint or brace is enough, or whether the fracture needs fixing with surgery." },
      { heading: "When to come in urgently", text: "Deformity, severe swelling, inability to move or bear weight, numbness, or an open wound over a suspected fracture." },
    ],
  },
  {
    id: "knee-pain",
    menuLabel: "Knee pain & arthritis",
    title: "Knee Pain & Arthritis",
    icon: "knee",
    teaser: "Treatment for osteoarthritis, knee swelling and difficulty walking or climbing stairs.",
    body: [
      { text: "Knee osteoarthritis is the most common cause of knee pain after 45. Treatment starts with strengthening exercises, weight control and medicines, with injections or knee replacement considered for advanced arthritis." },
      { heading: "Knee replacement", text: "When pain no longer responds to other treatment, knee replacement can restore comfortable walking. The decision is made after a careful examination and X-rays." },
    ],
  },
  {
    id: "back-neck",
    menuLabel: "Back & neck pain",
    title: "Back & Neck Pain",
    icon: "spine",
    teaser: "Care for lower back pain, sciatica, slipped disc and cervical spondylosis.",
    body: [
      { text: "Most back and neck pain is due to muscle strain, posture or disc problems and improves with medicines, posture correction and targeted exercises. Scans and surgery are needed only in a small number of patients." },
      { heading: "Warning signs", text: "Weakness in the legs, numbness around the private parts, or loss of bladder or bowel control need emergency care." },
    ],
  },
  {
    id: "sports-injuries",
    menuLabel: "Sports injuries",
    title: "Sports & Ligament Injuries",
    icon: "sports",
    teaser: "ACL and meniscus tears, ankle sprains and shoulder injuries, with a safe return to play.",
    body: [
      { text: "Twisting injuries can tear knee ligaments (ACL) or cartilage (meniscus), causing swelling and a feeling of the knee giving way. Accurate diagnosis decides between bracing and rehabilitation or arthroscopic surgery." },
    ],
  },
  {
    id: "joint-replacement",
    menuLabel: "Joint replacement",
    title: "Hip & Knee Replacement",
    icon: "joint",
    teaser: "Assessment and surgery for badly damaged hip and knee joints.",
    body: [
      { text: "Joint replacement relieves pain and restores movement when arthritis or injury has badly damaged a hip or knee. Every step — preparation, surgery and rehabilitation — is explained in advance." },
    ],
  },
  {
    id: "shoulder",
    menuLabel: "Shoulder & elbow",
    title: "Shoulder & Elbow Problems",
    icon: "shoulder",
    teaser: "Frozen shoulder, rotator cuff injuries, tennis elbow and dislocations.",
    body: [
      { text: "Shoulder stiffness, pain on lifting the arm and elbow pain from overuse are common. Most improve with medicines, guided exercises and, in some cases, injections." },
    ],
  },
  {
    id: "osteoporosis",
    menuLabel: "Osteoporosis & bone health",
    title: "Osteoporosis & Bone Health",
    icon: "bone",
    teaser: "Testing and treatment for weak bones to prevent fractures.",
    body: [
      { text: "Osteoporosis thins bones silently until a minor fall causes a fracture. Calcium, vitamin D, medicines and fall prevention significantly reduce the risk, especially for women after menopause." },
    ],
  },
  {
    id: "physiotherapy",
    menuLabel: "Rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    icon: "rehab",
    teaser: "Exercise plans to regain strength and movement after injury or surgery.",
    body: [
      { text: "Recovery after a fracture, ligament injury or joint replacement depends on good rehabilitation. A step-by-step exercise plan rebuilds strength, flexibility and balance." },
    ],
  },
];

export const welcome = {
  heading: "Welcome to",
  highlight: "Dr Saurabh Sharma's Bone & Joint Clinic",
  paragraphs: [
    "The clinic at Baradari Chowk, near Rotary School, Old Faridabad, treats bone, joint, spine and muscle problems for patients of all ages — from children with fractures to older adults with arthritis.",
    "Patients rate the clinic 4.9★ on Google. Every visit starts with a careful examination and a clear explanation, and surgery is advised only when it is the best option.",
  ],
};

// Written without pronouns: the doctor's pronouns aren't published.
export const doctorBio = {
  intro: `${doctor.name} is an orthopaedic surgeon practising at Baradari Chowk, near Rotary School, Gopi Colony, Old Faridabad — treating fractures, arthritis, back pain, sports injuries and other bone and joint problems.`,
  education:
    "The clinic offers consultation, X-ray review, plaster and splinting, joint injections where appropriate, and planning for orthopaedic surgery and rehabilitation.",
  more: [
    "Treatment starts conservatively — medicines, physiotherapy, braces and lifestyle advice — with surgery recommended only when it will clearly help.",
    "Bring previous X-rays, MRI reports and prescriptions to your visit.",
    "For a serious accident or an open fracture, go straight to the nearest hospital emergency department.",
  ],
};

export const patientInfo = [
  { title: "Careful Examination", image: "/images/p1.jpg", icon: "quality" },
  { title: "Plaster & Splinting", image: "/images/p2.jpg", icon: "sterile" },
  { title: "Same-day Appointments", image: "/images/p3.jpg", icon: "urgent" },
  { title: "Bone Health Tips", image: "/images/p4.jpg", icon: "video" },
  { title: "X-ray Review", image: "/images/p5.jpg", icon: "lab" },
] as const;

export const gallery = [
  "/images/welcome.jpg",
  "/images/about.jpg",
  "/images/sidebar.jpg",
  "/images/g-1.jpg",
  "/images/g-2.jpg",
  "/images/g-3.jpg",
];

// Add genuine reviews from patients here (with their permission), e.g.
// { quote: "…", name: "Patient name" }. Until then the page points visitors to Google reviews.
export const testimonials: { quote: string; name: string }[] = [];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/meet-the-doctor", label: "About" },
  { href: "/services", label: "Services", children: true },
  { href: "/contact-us", label: "Contact" },
] as const;

// CONFIRM: the final domain for this site.
export const siteUrl = "https://www.example.com"; // CONFIRM the final domain
