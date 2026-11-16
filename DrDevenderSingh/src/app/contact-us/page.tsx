import type { Metadata } from "next";
import Contact from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Dr. Devender Singh, Laparoscopic Surgeon, Faridabad",
  description: "Book a consultation with Dr. Devender Singh, general & laparoscopic surgeon at Siyaram Multi-Speciality Hospital, NIT, Faridabad.",
};

export default function ContactPage() {
  return <Contact />;
}
