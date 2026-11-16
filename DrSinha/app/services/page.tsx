import type { Metadata } from "next";
import { CtaBand, PageBanner, Specialities } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Eye Care Services",
  description: `Cataract surgery, glaucoma care, oculoplasty, contact lenses, eye check-ups and more at ${site.clinic}, Faridabad.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" crumbs={[{ label: "Services" }]} />
      <Specialities />
      <CtaBand />
    </>
  );
}
