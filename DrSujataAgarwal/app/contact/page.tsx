import type { Metadata } from "next";
import { ContactBlock, PageBanner } from "@/components/Sections";
import { site } from "@/data/content";

export const metadata: Metadata = { title: "Contact & Directions", description: `Visit ${site.clinic} at ${site.address}.` };

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumbs={[{ label: "Contact" }]} />
      <ContactBlock />
    </>
  );
}
