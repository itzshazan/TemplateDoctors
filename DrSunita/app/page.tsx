import {
  AboutBlock,
  ContactBlock,
  FaqSection,
  Features,
  GallerySection,
  Hero,
  LifeStages,
  Reviews,
  ServicesGrid,
  Tips,
  VisitSteps,
  WhyChoose,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutBlock />
      <ServicesGrid />
      <LifeStages />
      <WhyChoose />
      <VisitSteps />
      <Tips />
      <GallerySection />
      <Reviews />
      <FaqSection />
      <ContactBlock />
    </>
  );
}
