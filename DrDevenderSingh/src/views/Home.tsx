import HeroCarousel from "../components/home/HeroCarousel";
import Welcome from "../components/home/Welcome";
import DoctorProfilePage from "./DoctorProfilePage";
import GridPage from "./GridPage";
import GalleryPage from "./GalleryPage";
import Contact from "./Contact";
import { gridPages } from "../data/pages";

/** One-page site: every section lives here and the menu scrolls to it. */
export default function Home() {
  return (
    <>
      <div id="home">
        <HeroCarousel />
      </div>
      <div id="about">
        <Welcome />
        <DoctorProfilePage embedded />
      </div>
      <div id="services">
        <GridPage page={gridPages[0]} embedded />
      </div>
      <div id="gallery">
        <GalleryPage embedded />
      </div>
      <div id="contact">
        <Contact embedded />
      </div>
    </>
  );
}
