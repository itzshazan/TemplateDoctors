import type { Metadata } from "next";
import TreatmentList from "@/components/TreatmentList";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Treatments and procedures offered by ${SITE.name}.`,
};

export default function ServicesPage() {
  return <TreatmentList kind="services" />;
}
