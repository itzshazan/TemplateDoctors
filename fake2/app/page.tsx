import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import {
  About,
  AreasOfInterest,
  Blogs,
  Faq,
  Footer,
  Hero,
  Qualities,
  Testimonials,
  WhyChoose,
} from "@/components/Sections";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <AreasOfInterest />
        <Qualities />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <Gallery />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
