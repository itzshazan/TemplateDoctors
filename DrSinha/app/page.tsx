import {
  AboutBlock,
  Credentials,
  FaqSection,
  GallerySection,
  Hero,
  PriorityBand,
  Specialities,
  Testimonials,
  WhyChoose,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <Specialities />
      <PriorityBand />
      <WhyChoose />
      <Credentials />
      <GallerySection />
      <Testimonials />
      <FaqSection />
    </>
  );
}
