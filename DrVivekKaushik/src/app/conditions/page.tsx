import type { Metadata } from "next";
import TreatmentList from "@/components/TreatmentList";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description: `Conditions diagnosed and treated by ${SITE.name}.`,
};

export default function ConditionsPage() {
  return <TreatmentList kind="conditions" />;
}
