import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Project = () => {
  return (
    <div
      id="portfolio"
      className=" flex flex-col items-center justify-center mt-16 px-4"
    >
      <h2 className="relative mb-8 tracking-widest inline-block px-6 py-2 text-lg uppercase text-black font-bold border-4 border-black">
        My Portfolio
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            index={index}
            imageSrc={item.image}
            title={item.title}
            description={item.description}
            techStack={item.techStack}
            challenges={item.challenges}
            liveDemoLink={item.liveDemo}
            gitHubLink={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
