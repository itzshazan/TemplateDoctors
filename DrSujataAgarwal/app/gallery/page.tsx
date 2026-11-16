import type { Metadata } from "next";
import { CtaBand, GallerySection, PageBanner } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = { title: "Gallery", description: `Photos of ${site.clinic}, ${site.area}.` };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" crumbs={[{ label: "Gallery" }]} />
      <GallerySection />
      <CtaBand />
    </>
  );
}
