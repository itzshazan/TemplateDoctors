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
  // From his clinic poster (Nov 2026).
  clinic: "H Heals Physiotherapy Clinic",
  address: "Greenfield Colony, Sector 42, Faridabad, Haryana",
  directions: "https://www.google.com/maps/search/?api=1&query=H+Heals+Physiotherapy+Clinic+Greenfield+Colony+Faridabad",
  // CONFIRM: which days these timings apply to.
  hours: [
    { label: "Morning", time: "10:00 AM – 1:00 PM" },
    { label: "Evening", time: "5:30 PM – 8:00 PM" },
  ],
};

export const images = {
  portrait: `${IMG}/dr-ram-pratap.jpg`,
  award: `${IMG}/award-physio-bharat.jpg`,
  about: `${IMG}/fortis-fisiocon-2026.jpg`,
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
  | "bone" | "walk" | "spine" | "knee" | "run" | "brain";

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

// The six services on his H Heals clinic poster. Descriptions are short general explanations.
export const rehabServices: { title: string; text: string; icon: IconName }[] = [
  { title: "Pain Relief Therapy", text: "Hands-on treatment, exercise and modalities to ease acute and long-standing pain.", icon: "hand" },
  { title: "Post-Surgery Rehabilitation", text: "Getting movement, strength and confidence back after fractures and orthopaedic surgery.", icon: "knee" },
  { title: "Neurological Rehabilitation", text: "Step-by-step rehab after stroke and paralysis to rebuild strength, balance and walking.", icon: "brain" },
  { title: "Back & Neck Pain Treatment", text: "Assessment and care for back pain, neck pain, slipped disc and posture problems.", icon: "spine" },
  { title: "Sports Injury", text: "Treatment and graded return to sport after sprains, strains and ligament injuries.", icon: "run" },
  { title: "Manual Therapy", text: "Skilled hands-on mobilisation and soft-tissue work to free stiff joints and muscles.", icon: "bone" },
];

/** Scrolling strip under the hero. */
export const marquee = [
  "Hijama", "Dry Cupping", "Fire Cupping", "Bamboo Cupping", "Weight Cupping", "Dynamic Therapy",
  "MFR", "IASTM", "Manual Therapy", "Neuro Rehab", "Sports Injury", "Post-Surgery Rehab",
];

// All photos here are real photos supplied by Dr. Ram Pratap (fortis-talk.jpg is cropped from his clinic poster),
// except g-dry-cupping.jpg, which is AI-generated to show the therapy in general (no faces).
// `pos` is the CSS object-position used when a photo is cropped into its tile.
export const gallery: { src: string; alt: string; wide?: boolean; pos?: string }[] = [
  { src: `${IMG}/physio-event-group.jpg`, alt: "With fellow physiotherapists at an event", wide: true, pos: "center 40%" },
  { src: `${IMG}/fortis-fisiocon-2026.jpg`, alt: "Receiving a certificate at Fortis FISIOCON 2026", pos: "center 50%" },
  { src: `${IMG}/g-dry-cupping.jpg`, alt: "Dry cupping therapy" },
  { src: `${IMG}/iap-certificate.jpg`, alt: "Certificate of appreciation, Indian Association of Physiotherapists", pos: "center 40%" },
  { src: `${IMG}/award-physio-bharat.jpg`, alt: "Receiving the Physio Bharat 7 certificate", pos: "center 45%" },
  { src: `${IMG}/fortis-talk.jpg`, alt: "Speaking at Fortis Memorial Research Institute", pos: "center 30%" },
];
