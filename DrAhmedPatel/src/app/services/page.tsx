import type { Metadata } from "next";
import TreatmentList from "@/components/TreatmentList";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Dental implants, full mouth rehabilitation, fixed full-mouth implants, cast partial dentures and smile correction by ${SITE.name}.`,
};

export default function ServicesPage() {
  return <TreatmentList />;
}
