// All page content lives here. Source: details supplied for Dr. Ram Pratap (PT), Nov 2026.
// Items still to confirm are listed in IMAGE-PROMPTS.md.

const IMG = "/images";

export const site = {
  name: "Dr. Ram Pratap (PT)",
  shortName: "Dr. Ram Pratap",
  role: "Sr. Consultant Physiotherapist",
  qualification: "BPT, MPT (Ortho)",
  speciality: "Orthopaedic Physiotherapy",
  phone: "+91 99277 35694",
  phoneHref: "tel:+919927735694",
  // CONFIRM: is this number on WhatsApp? The appointment form sends requests there.
  whatsapp: "919927735694",
  email: "rampratapprajapati99@gmail.com",
  // CONFIRM: clinic address (not supplied). Shown as "call for the clinic address" until filled in.
  address: "",
  // CONFIRM: which days these timings apply to.
  hours: [
    { label: "Morning", time: "10:00 AM – 1:00 PM" },
    { label: "Evening", time: "5:30 PM – 8:00 PM" },
  ],
};

export const images = {
  portrait: `${IMG}/dr-ram-pratap.jpg`,
  award: `${IMG}/award-physio-bharat.jpg`,
  about: `${IMG}/g-mfr.jpg`,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 9, suffix: "+", label: "Years of experience" },
  { value: 10000, suffix: "+", label: "Happy patients" },
  { value: 2000, suffix: "+", label: "Paralysis patients treated" },
  { value: 15, suffix: "+", label: "Awards" },
];

/** Hospitals Dr. Ram Pratap has practised at. */
export const hospitals = [
  { name: "Max Hospital", city: "New Delhi" },
  { name: "SBP Neuro Multispeciality Hospital", city: "Rajasthan" },
  { name: "Satya Multispeciality Orthopedics Hospital", city: "Bareilly" },
  { name: "Vijay Orthopedic Multispeciality Hospital", city: "Azamgarh" },
];

export type IconName =
  | "cup" | "fire" | "bamboo" | "drop" | "weight" | "wave" | "hand" | "tool"
  | "bone" | "walk" | "spine" | "knee";

/** "Advanced Therapy" list, as supplied. Descriptions are general explanations of each technique. */
export const advancedTherapies: { title: string; text: string; icon: IconName; featured?: boolean }[] = [
  { title: "Hijama Therapy", text: "Traditional wet cupping, done with sterile, single-use cups and blades as part of a treatment plan.", icon: "drop", featured: true },
  { title: "Dry Cupping Therapy", text: "Suction cups lift the skin and muscle to ease tightness and stiffness, with no cuts.", icon: "cup", featured: true },
  { title: "Weight Cupping Therapy", text: "A cupping technique that adds controlled weight for a deeper soft-tissue release.", icon: "weight" },
  { title: "Dynamic Therapy", text: "Cups or hands work on the muscle while you move the joint, releasing tight tissue in motion.", icon: "wave" },
  { title: "Fire Cupping Therapy", text: "A classic method where gentle heat creates the suction inside glass cups.", icon: "fire" },
  { title: "Bamboo Cupping Therapy", text: "Smooth bamboo cups used for gentle suction over larger muscle areas.", icon: "bamboo" },
  { title: "MFR Therapy", text: "Myofascial release: slow, sustained hands-on pressure that frees tight fascia and eases pain.", icon: "hand" },
  { title: "IASTM Tool Therapy", text: "Instrument-assisted soft-tissue mobilisation with steel tools to treat adhesions and scar tissue.", icon: "tool" },
];

// CONFIRM: the core physiotherapy services (the second service list was left blank).
// Orthopaedics and paralysis care come from the supplied details; the other two are typical for an MPT (Ortho).
export const rehabServices: { title: string; text: string; icon: IconName }[] = [
  { title: "Orthopaedic Physiotherapy", text: "Back, neck, shoulder and knee pain, stiffness and joint problems, assessed and treated with a clear plan.", icon: "bone" },
  { title: "Paralysis Rehabilitation", text: "Step-by-step rehab to rebuild strength, balance and walking after paralysis.", icon: "walk" },
  { title: "Post-Surgery & Fracture Rehab", text: "Getting movement and strength back after fractures and orthopaedic surgery.", icon: "knee" },
  { title: "Spine & Posture Care", text: "Exercises and manual therapy for back pain, slipped disc and posture problems.", icon: "spine" },
];

/** Scrolling strip under the hero. */
export const marquee = [
  "Hijama", "Dry Cupping", "Fire Cupping", "Bamboo Cupping", "Weight Cupping", "Dynamic Therapy",
  "MFR", "IASTM", "Orthopaedic Rehab", "Paralysis Rehab",
];

// award-physio-bharat.jpg and dr-ram-pratap.jpg are real photos supplied for this site.
// The others are AI-generated to show the therapies in general; they do not show Dr. Ram Pratap.
export const gallery = [
  { src: `${IMG}/award-physio-bharat.jpg`, alt: "Receiving the Physio Bharat 7 certificate", wide: true },
  { src: `${IMG}/g-dry-cupping.jpg`, alt: "Dry cupping therapy" },
  { src: `${IMG}/g-iastm.jpg`, alt: "IASTM tool therapy" },
  { src: `${IMG}/g-paralysis-rehab.jpg`, alt: "Walking practice in paralysis rehab" },
  { src: `${IMG}/g-cupping-set.jpg`, alt: "Glass and bamboo cups" },
  { src: `${IMG}/g-knee-rehab.jpg`, alt: "Knee strengthening exercises" },
];
