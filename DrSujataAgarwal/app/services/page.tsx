import type { Metadata } from "next";
import { CtaBand, PageBanner, ServicesGrid } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = { title: "Services", description: `Gynaecology and pregnancy services at ${site.clinic}, ${site.area}.` };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" crumbs={[{ label: "Services" }]} />
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
