/** @format */

import React from "react";

const ProjectCards = ({ myProjects }) => {
  const projectsPanel = myProjects.map((project, index) => (
    <div className="flex border flex-col items-center text-off-white mb-4 mx-8 last:mb-0 ">
      <img
        className="w-3/6 object-scale-down m-2"
        alt={`project ${index + 1}`}
        src={project.imgLink}
      />
      <h1 className="text-xl text-neon-blue m-2">{project.title}</h1>
      <div className="flex flex-row justify-center flex-wrap gap-2 m-1">
        {project.skills.map((skill, jIndex) => (
          <div className="flex flex-row justify-center items-center gap-1 border rounded border-transparent bg-white/50 py-1 px-2">
            <img
              className="w-[16px] "
              src={project.skillsIcon[jIndex]}
              alt="icon"
            />
            <span className="text-xs">{skill}</span>
          </div>
        ))}
      </div>
      <p className="text-base">{project.description}</p>
      <div className="flex flex-row gap-4">
        <button className="border rounded border-neon-blue" href="#">
          <span className="p-2">Review the code</span>
        </button>
        <button className="border rounded border-neon-blue">
          <span className="p-2">See it live</span>
        </button>
      </div>
    </div>
  ));

  return <div>{projectsPanel}</div>;
};

export default ProjectCards;
