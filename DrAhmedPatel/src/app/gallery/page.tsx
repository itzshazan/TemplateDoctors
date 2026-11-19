import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Gallery from "@/components/Gallery";
import { SITE } from "@/config/site";
import { galleryImages } from "@/config/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Implant and prosthodontic care with ${SITE.name}.`,
};

const images = galleryImages;

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
