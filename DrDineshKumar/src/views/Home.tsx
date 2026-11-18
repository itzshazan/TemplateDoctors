import React from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import Welcome from "../components/home/Welcome";
import Services from "../components/home/Services";
import Doctor from "../components/home/Doctor";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Welcome />
      <Services />
      <Doctor />
    </>
  );
}
