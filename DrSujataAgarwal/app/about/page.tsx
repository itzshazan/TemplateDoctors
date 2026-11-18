import type { Metadata } from "next";
import { AboutBlock, CtaBand, PageBanner } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = { title: `About ${site.name}`, description: `${site.name}, gynaecologist at ${site.clinic}, ${site.area}.` };

export default function AboutPage() {
  return (
    <>
      <PageBanner title={`About ${site.name}`} crumbs={[{ label: "About" }]} />
      <AboutBlock full />
      <CtaBand />
    </>
  );
}
