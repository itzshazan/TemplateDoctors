/* Page content that is easier to edit as data than as JSX. */
import { SITE } from "./site";

export interface TabSection {
  heading: string;
  items: string[];
}

export interface Tab {
  label: string;
  sections: TabSection[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

const expertise: TabSection = {
  heading: "Areas of Expertise",
  items: [
    "Fractures, sprains and injury care",
    "Knee, hip and joint pain, including arthritis",
    "Back pain, sciatica and neck pain",
    "Sports injuries and ligament problems",
    "Osteoporosis and bone health",
    "Plaster, splinting and rehabilitation",
  ],
};

const practice: TabSection = {
  heading: "Current Practice",
  items: [`Orthopaedic consultant — ${SITE.clinic}, Jain Colony, Ballabhgarh, Faridabad`],
};

const timings: TabSection = { heading: "OPD Timings", items: SITE.hoursList };

const feedback: TabSection = {
  heading: "Patient Feedback",
  items: [
    `Rated ${SITE.rating.score} / 5 by ${SITE.rating.count}+ patients on Google`,
    "Patients often mention clear explanations and polite, caring behaviour",
    "Described by patients as \"the best ortho doctor in Ballabhgarh\"",
  ],
};

const approach: TabSection = {
  heading: "Approach to Care",
  items: [
    "Listens carefully and explains the problem in simple words",
    "Recommends only the tests and treatment you actually need",
    "Prefers conservative treatment first; surgery only when it is truly needed",
    "Follow-up until you are back to normal activity",
  ],
};

// CONFIRM: add degrees, colleges and hospital experience here once received from the clinic.
export const homeAchievements: Tab[] = [
  { label: "Expertise", sections: [expertise] },
  { label: "Practice & Timings", sections: [practice, timings] },
  { label: "Patient Feedback", sections: [feedback] },
  { label: "Approach", sections: [approach] },
];

export const aboutJourney: Tab[] = [
  { label: "Expertise", sections: [expertise] },
  { label: "Clinic", sections: [practice, timings] },
  { label: "Approach", sections: [approach] },
];

export const aboutResearch: Tab[] = [{ label: "Patient Feedback", sections: [feedback] }];

/* Short excerpts of public Google reviews of the clinic.
   CONFIRM: ask the clinic before publishing (or replace with reviews patients have agreed to share). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Excellent doctor — professional, knowledgeable and very caring. He listened to my concerns patiently, explained everything clearly and provided the right treatment.",
    name: "Himanshu K.",
    role: "Google review",
    avatar: "/img/avatar-1.svg",
    rating: 5,
  },
  {
    quote: "Nice behaviour and cooperative staff. Best ortho doctor in Ballabhgarh.",
    name: "Google reviewer",
    role: "Google review",
    avatar: "/img/avatar-2.svg",
    rating: 5,
  },
  {
    quote: "He is good, soft-spoken and humble. He recommends what you actually need.",
    name: "Google reviewer",
    role: "Google review",
    avatar: "/img/avatar-3.svg",
    rating: 5,
  },
  {
    quote: "Nice and knowledgeable doctor — explains each and every thing about the treatment. I recommend Dr. Vivek Kaushik.",
    name: "Google reviewer",
    role: "Google review",
    avatar: "/img/avatar-1.svg",
    rating: 5,
  },
];

/* consult.jpg is a real photo uploaded by the clinic to Google Maps (Aug 2022).
   The other photos are AI-generated to show orthopaedic care in general — not this clinic.
   Replace them with real clinic photos when available. */
export const galleryImages: GalleryImage[] = [
  { src: "/img/consult.jpg", alt: "Consultation at Shree Shyam Clinic" },
  { src: "/img/g-xray.jpg", alt: "X-ray review" },
  { src: "/img/g-knee-exam.jpg", alt: "Knee examination" },
  { src: "/img/g-cast.jpg", alt: "Plaster and splinting" },
  { src: "/img/g-rehab.jpg", alt: "Rehabilitation exercises" },
  { src: "/img/g-spine.jpg", alt: "Back pain assessment" },
  { src: "/img/g-brace.jpg", alt: "Knee brace fitting" },
  { src: "/img/g-sports.jpg", alt: "Sports injury care" },
];

/** YouTube embed URL for the home page video, e.g. https://www.youtube.com/embed/VIDEO_ID. Leave empty to hide. */
export const homeVideo = "";

export const emergencyContacts = [
  { icon: "phone", title: "Shree Shyam Clinic", number: SITE.phone, desc: "Call the clinic for urgent injuries during OPD hours." },
  { icon: "ambulance", title: "Ambulance", number: "108", desc: "Free government ambulance service across Haryana, 24 hours." },
  { icon: "hospital", title: "National Emergency", number: "112", desc: "Single emergency number for police, fire and medical help." },
] as const;
