/* =========================================================
   SITE CONFIG — Dr. Ahmed Patel, Prosthodontist (Dubai & Mumbai).
   Header, footer, service cards, the contact-form dropdown and
   the floating buttons all read it.
   Source: Dr. Patel's LinkedIn profile (About + Experience) and the
   LOLDENT Dubai Google Maps listing. Items to confirm are listed in
   IMAGE-PROMPTS.md.
   ========================================================= */

export type SocialKey = "facebook" | "instagram" | "linkedin" | "youtube";

export interface Treatment {
  id: string;
  title: string;
  /** File name in public/img without extension */
  icon: string;
  desc: string;
}

export interface Location {
  name: string;
  role: string;
  since: string;
  address: string;
  phone?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  qualification: string;
  tagline: string;
  /** Main booking number (shown in the header, footer and call buttons) */
  phone: string;
  phoneNote: string;
  /** Digits only, including country code. Leave empty to hide WhatsApp. */
  whatsapp: string;
  email: string;
  /** Short address for the top bar */
  address: string;
  /** Leave empty while timings are not confirmed */
  hours: string;
  hoursList: string[];
  locations: Location[];
  socials: Partial<Record<SocialKey, string>>;
  services: Treatment[];
}

export const SITE: SiteConfig = {
  name: "Dr. Ahmed Patel",
  title: "Prosthodontist · Implants & Full Mouth Rehabilitation",
  qualification: "MDS (Prosthodontics)",
  tagline:
    "Immediate implants, fixed full-mouth implants and full mouth rehabilitation by a specialist prosthodontist, in Dubai and Mumbai.",
  // LOLDENT Dubai's number from its Google Maps listing. CONFIRM Dr. Patel's preferred booking number.
  phone: "+971 50 148 2977",
  phoneNote: "LOLDENT Speciality Clinic, Dubai",
  // CONFIRM: is this number on WhatsApp, and is the clinic happy to receive requests for Dr. Patel there?
  whatsapp: "971501482977",
  email: "",
  address: "LOLDENT, Jumeirah Lake Towers, Dubai · Khalil Dental Studio, Mumbai",
  // CONFIRM: Dr. Patel's consultation days and times.
  hours: "",
  hoursList: [],
  locations: [
    {
      name: "LOLDENT Speciality Clinic",
      role: "Specialist Prosthodontist (full-time)",
      since: "Since July 2026",
      address: "Platinum Tower 1508, Cluster I, Jumeirah Lake Towers, Dubai, UAE",
      phone: "+971 50 148 2977",
    },
    {
      name: "Khalil Dental Studio",
      role: "Owner & Prosthodontist",
      since: "Since 2017",
      // CONFIRM: full clinic address and phone (the studio is not on Google Maps).
      address: "Mumbai, India",
    },
  ],
  socials: { linkedin: "https://www.linkedin.com/in/ahmedpatel90/" },
  services: [
    {
      id: "immediate-implants",
      title: "Immediate Dental Implants",
      icon: "dent-implant",
      desc: "An implant placed at the same visit the tooth is removed, in suitable cases, so you are not left with a gap for months.",
    },
    {
      id: "full-mouth-rehabilitation",
      title: "Full Mouth Rehabilitation",
      icon: "dent-fullmouth",
      desc: "A planned rebuild of worn, broken or missing teeth to restore your bite, chewing and appearance together.",
    },
    {
      id: "fixed-full-mouth-implants",
      title: "Fixed Full-Mouth Implants",
      icon: "dent-arch",
      desc: "A complete set of fixed teeth supported on implants for patients who have lost most or all of their teeth.",
    },
    {
      id: "cast-partial-dentures",
      title: "Cast Partial Dentures",
      icon: "dent-partial",
      desc: "Strong, thin metal-framework partial dentures that replace several missing teeth and fit precisely.",
    },
    {
      id: "smile-correction",
      title: "Smile Correction",
      icon: "dent-smile",
      desc: "Improving the shape, shade and alignment of teeth so your smile looks natural and balanced.",
    },
    {
      id: "digital-planning-3d-printing",
      title: "Digital Planning & 3D Printing",
      icon: "dent-digital",
      desc: "Prosthetic treatment planned on dental software, with 3D-printed models and guides for accuracy.",
    },
    {
      id: "diagnosis-treatment-planning",
      title: "Examination & Treatment Planning",
      icon: "dent-diagnosis",
      desc: "A thorough clinical examination, diagnosis and a clear step-by-step plan before any treatment starts.",
    },
    {
      id: "oral-disabilities-disorders",
      title: "Care for Oral Disabilities & Disorders",
      icon: "dent-care",
      desc: "Surgery and treatment for patients with oral disabilities and disorders, with patient-centred care.",
    },
  ],
};

export const tel = (n: string) => "tel:" + n.replace(/[^\d+]/g, "");
export const treatmentPath = (_t: Treatment) => "/services";
