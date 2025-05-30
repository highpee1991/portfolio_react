import React from "react";
import HeroSection from "../components/HeroSection";
import AboutIntro from "../components/AboutIntro";
import About from "./About";
import Project from "../components/Project";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ResumeCv from "../components/ResumeCv";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutIntro />
      <About />
      <Project />
      <ResumeCv />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
