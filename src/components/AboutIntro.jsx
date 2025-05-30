import React from "react";
import CTAButton from "./CTAButton";
import { FaHandPointRight } from "react-icons/fa6";

const AboutIntro = () => {
  return (
    <div className="relative bg-black text-white py-8 px-8 overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/dev.jpg"
        alt="dev"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Content wrapper */}
      <div className="relative z-20  space-y-6 text-start">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          From Ideas to Impact
        </h2>
        <p className=" text-sm md:text-lg text-gray-200 leading-relaxed">
          I'm a frontend developer transitioning into full-stack development,
          currently expanding my backend skills through ALX. I love solving
          real-world problems with clean, efficient code and building digital
          experiences that make an impact.
        </p>
        <CTAButton
          icon={FaHandPointRight}
          text="Read More"
          variant="secondary"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
};

export default AboutIntro;
