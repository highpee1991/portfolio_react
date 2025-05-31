import React from "react";
import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <section className=" hidden md:block relative h-screen w-full items-center justify-center overflow-hidden pt-10">
        <Navbar className=" absolute top-0 left-0 z-50 text-white" />
        {/* large screen slanted overlay */}
        <div className=" absolute inset-0 bg-gray-100 w-full h-full z-0" />

        {/* left grey section */}
        <div
          className=" absolute inset-0 w-full h-full z-10"
          style={{
            clipPath: "polygon(54% 0, 100% 0, 100% 100%, 46% 100%)",
            background: "#000",
          }}
        />

        {/* content */}
        <div className=" relative z-20 flex w-full max-w-7xl h-full px-8">
          {/* left text block */}
          <div className=" w-1/2 flex flex-col justify-center pl-60 space-y-4">
            <p className=" text-xl font-bold"> Hi, I am</p>
            <h1 className=" text-5xl font-bold"> Ipadeola Taiwo</h1>
            <p className=" text-gray-500 text-lg mt-0">Software Engineer</p>

            <div className=" flex space-x-4 mt-4 pt-14 text-xl">
              <a
                href="https://x.com/highpee3"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800 hover:text-black transition"
              >
                <FaSquareXTwitter size={20} />
              </a>
              <a
                href="https://github.com/highpee1991"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800 hover:text-black transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ipadeola-taiwo/"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800 hover:text-black transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* right image */}
          <div className=" w-1/2 flex  items-end justify-center">
            <img
              src="./assets/img.jpeg"
              alt="my-image"
              className=" max-h-full h-[500px] object-contain z-20"
            />
          </div>
        </div>
      </section>

      {/* Small screen version */}
      <section className="block md:hidden relative h-screen w-full bg-black  text-white pt-10 overflow-hidden">
        <Navbar className="absolute top-0 left-0 z-50 text-white" />

        {/* Image flush bottom-right */}
        <div className="absolute bottom-0 left-0 w-full flex items-end justify-end">
          <img
            src="./assets/img.jpeg"
            alt="my-image"
            className="h-[520px] object-contain z-10"
          />
        </div>

        {/* Slanted clipPath base with centered content */}
        <div className="absolute bottom-0 w-full h-64 z-20">
          {/* ClipPath shape */}
          <div
            className="absolute inset-0 w-full h-full opacity-90"
            style={{
              clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 100%)",
              background: "#c9c9c9",
            }}
          />

          {/* Content centered on the shape */}
          <div className="absolute inset-0 flex items-center justify-end z-30 text-black pr-9">
            <div className=" flex items-center justify-center gap-6">
              <div>
                <p className="text-lg font-bold">Hi, I am</p>
                <h1 className="text-3xl font-bold">Ipadeola Taiwo</h1>
                <p className="text-gray-700 text-lg mt-0">Software Engineer</p>
              </div>

              <div className="flex flex-col justify-center gap-2 ">
                <a
                  href="https://x.com/highpee3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" rounded-full text-black hover:text-gray-600 transition"
                >
                  <FaSquareXTwitter size={20} />
                </a>
                <a
                  href="https://x.com/highpee3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-black hover:text-gray-600 transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://x.com/highpee3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-black hover:text-gray-600 transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
