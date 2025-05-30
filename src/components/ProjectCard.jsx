import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  techStack,
  challenges,
  liveDemoLink,
  gitHubLink,
}) => {
  return (
    <motion.div
      className=" bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={imageSrc}
        alt={title}
        className=" w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className=" text-xl font-semibold mb-2">{title}</h3>
      <p className=" text-gray-600 mb-3">{description}</p>

      <div className="mb-3">
        <strong>Tech Stack: </strong> {techStack.join(", ")}
      </div>

      <div className=" mb-3">
        <strong>Challenges: </strong>
        <ul className=" list-disc list-inside text-sm text-gray-700">
          {challenges.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className=" flex space-x-4">
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-600 font-semibold hover:underline"
        >
          Live Demo
        </a>
        <a
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-800 font-semibold hover:underline"
        >
          Github
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
