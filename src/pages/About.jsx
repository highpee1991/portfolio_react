import React from "react";
import skillss from "../data/skilss";
import ElevatorPitch from "../components/ElevatorPitch";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        id="about"
        className=" flex flex-col items-center justify-center pt-20 pb-8 px-12 transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className=" flex items-center justify-center">
          <h2 className="relative tracking-widest inline-block px-6 py-2 text-lg uppercase text-black font-bold border-4 border-black">
            About Me
          </h2>
        </div>
        <p className=" pt-4 max-w-[45rem] text-center">
          I’m a passionate self-taught frontend developer currently deepening my
          expertise in backend development through the ALX program, with a clear
          vision of becoming a well-rounded and innovative full-stack problem
          solver. I actively build side projects and continuously refine my
          frontend skills to deliver robust, user-centered solutions. For me,
          coding goes beyond building applications — it’s about solving
          real-world problems, bridging digital gaps, and empowering
          communities. My ultimate goal is to leverage technology to create
          scalable and meaningful impact across Africa and beyond.
        </p>

        <div id="skills" className=" flex items-center justify-center mt-12">
          <h2 className="relative tracking-widest inline-block px-6 py-2 text-lg uppercase text-black font-bold border-4 border-black">
            Key Skills and Strengths
          </h2>
        </div>
      </motion.div>
      {/* Skills Section */}
      <motion.div
        className="pt-8 max-w-[45rem] mx-auto px-4 transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-lg font-bold text-black uppercase mb-4 tracking-wider">
          Using Now:
        </h2>

        {/* Skill Card Example */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillss.using.map((using, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-full">
              <img src={using.icon} alt={using.text} className="h-12 mb-3" />
              <p className="uppercase text-sm font-medium text-gray-700 tracking-wide text-center whitespace-nowrap">
                {using.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Skills Section */}
      <motion.div
        className="pt-14 max-w-[45rem] mx-auto px-4 transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-lg font-bold text-black uppercase mb-4 tracking-wider">
          Learning:
        </h2>

        {/* Skill Card  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillss.learning.map((learning, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-full">
              <img
                src={learning.icon}
                alt={learning.text}
                className="h-12 mb-3"
              />
              <p className="uppercase text-sm font-medium text-gray-700 tracking-wide text-center whitespace-nowrap">
                {learning.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Skills Section */}
      <motion.div
        className="pt-14 max-w-[45rem] mx-auto px-4 transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-lg font-bold text-black uppercase mb-4 tracking-wider">
          Other:
        </h2>

        {/* Skill Card Example */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillss.other.map((other, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-full">
              <img src={other.icon} alt={other.text} className="h-12 mb-3" />
              <p className="uppercase text-sm font-medium text-gray-700 tracking-wide text-center whitespace-nowrap">
                {other.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      {/* elevator pitch */}
      <motion.div
        id="pitch"
        className=" flex flex-col items-center justify-center mt-16 transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="relative tracking-widest inline-block px-6 py-2 text-lg uppercase text-black font-bold border-4 border-black">
          Elevator Pitch
        </h2>
        <ElevatorPitch />
      </motion.div>
    </>
  );
};

export default About;
