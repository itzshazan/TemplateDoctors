import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import { About, Footer, Hero } from "@/components/Sections";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
