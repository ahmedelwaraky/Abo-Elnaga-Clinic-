import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import AboutDoctor from "../components/AboutDoctor";
import ReelsVideos from "../components/ReelsVideos";
import Services from "../components/Services";
import Team from "../components/Team";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutDoctor />
      <Services />
      <Team />
      <ReelsVideos />
      <BeforeAfter />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
}
