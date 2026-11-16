import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { gallery, images } from "@/data/site";
import { asset } from "@/lib/assets";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.services} />
      <Breadcrumb trail={[{ label: "Gallery" }]} />
      <div className="inner-cont">
        <div className="lay-width">
          <h2>Gallery</h2>
          <GalleryGrid items={gallery.map((src) => asset(src))} />
        </div>
      </div>
    </>
  );
}
