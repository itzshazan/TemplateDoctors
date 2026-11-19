/* Page content that is easier to edit as data than as JSX. */

export interface GalleryImage {
  src: string;
  alt: string;
}

/* All gallery photos (unlike the portrait, dr-ahmed-patel.jpg) are AI-generated to show implant and prosthodontic care in general.
   They do not show Dr. Patel, LOLDENT or Khalil Dental Studio. Replace them with real
   clinic and case photos (with patient consent) when available. */
export const galleryImages: GalleryImage[] = [
  { src: "/img/g-implant-model.jpg", alt: "How a dental implant replaces a tooth" },
  { src: "/img/g-full-arch.jpg", alt: "Fixed full-arch teeth on implants" },
  { src: "/img/g-xray.jpg", alt: "Implant planning on a panoramic X-ray" },
  { src: "/img/g-surgery-tray.jpg", alt: "Sterile implant surgery set-up" },
  { src: "/img/g-crowns.jpg", alt: "Crowns, bridges and shade matching" },
  { src: "/img/consult.jpg", alt: "Explaining treatment options" },
  { src: "/img/g-smile.jpg", alt: "A confident new smile" },
  { src: "/img/hero.jpg", alt: "A comfortable dental check-up" },
  { src: "/img/g-reception.jpg", alt: "A calm, modern dental clinic" },
];

/** Shown as a check-list on the About page. */
export const highlights = [
  "MDS (Prosthodontics)",
  "Practising since 2017",
  "Specialist Prosthodontist, LOLDENT Speciality Clinic, Dubai (since July 2026)",
  "Owner, Khalil Dental Studio, Mumbai (since 2017)",
  "Visiting consultant for implants and full mouth rehabilitation",
];
