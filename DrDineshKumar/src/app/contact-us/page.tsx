import type { Metadata } from "next";
import Contact from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Dr. Dinesh Kumar, Kashvi Mediclinic",
  description: "Book an appointment with Dr. Dinesh Kumar, General Physician & Diabetologist at Kashvi Mediclinic, Sector 37D, Gurugram.",
};

export default function ContactPage() {
  return <Contact />;
}
