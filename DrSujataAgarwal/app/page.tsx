import { AboutBlock, ContactBlock, GallerySection, Hero, ServicesGrid } from "@/components/Sections";

/** One-page site: every section lives here and the menu scrolls to it. */
export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutBlock full />
      </div>
      <div id="services">
        <ServicesGrid />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="contact">
        <ContactBlock />
      </div>
    </>
  );
}
