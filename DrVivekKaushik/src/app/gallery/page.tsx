import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Gallery from "@/components/Gallery";
import { SITE } from "@/config/site";
import { galleryImages } from "@/config/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos from ${SITE.name}'s clinic, events and conferences.`,
};

const images = [...galleryImages, { src: "/img/feature.jpg", alt: "X-ray consultation" }];

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" />
      <section className="gallery-section">
        <div className="container">
          <Gallery images={images} className="cols-3" />
        </div>
      </section>
    </>
  );
}
