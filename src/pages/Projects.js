/** @format */

import React from "react";
import PageDivider from "../components/PageDivider";
import ProjectCards from "../components/ProjectCards";
import Icons from "../components/Icons";

import workoutBuddyMedia from "../assets/Media1.gif";

const Projects = () => {
  const myProjects = [
    {
      imgLink: workoutBuddyMedia,
      title: "Workout Buddy",
      skills: ["React", "ExpressJS", "MongoDB", "NodeJS"],
      skillsIcon: [Icons.react, Icons.express, Icons.mongodb, Icons.node],
      description: "A workout tracker app.",
      codeLink: "link to code",
      liveLink: "link to live",
    },
    {
      imgLink: "link to image2",
      title: "Second Project",
      skills: ["skill1", "skill2"],
      description: "explaination and description text2",
      skillsIcon: [Icons.react, Icons.express, Icons.mongodb, Icons.node],

      codeLink: "link to code2",
      liveLink: "link to live2",
    },
    {
      imgLink: "link to image3",
      title: "Third Project",
      skills: ["skill1", "skill2"],
      description: "explaination and description text2",
      skillsIcon: [Icons.react, Icons.express, Icons.mongodb, Icons.node],

      codeLink: "link to code2",
      liveLink: "link to live2",
    },
    {
      imgLink: "link to image4",
      title: "Fourth Project",
      skills: ["skill1", "skill2"],
      description: "explaination and description text2",
      skillsIcon: [Icons.react, Icons.express, Icons.mongodb, Icons.node],

      codeLink: "link to code2",
      liveLink: "link to live2",
    },
    {
      imgLink: "link to image5",
      title: "Fifth Project",
      skills: ["skill1", "skill2"],
      description: "explaination and description text2",
      skillsIcon: [Icons.react, Icons.express, Icons.mongodb, Icons.node],

      codeLink: "link to code2",
      liveLink: "link to live2",
    },
  ];

  return (
    <div id="projects">
      <PageDivider Label="Projects" />
      <ProjectCards myProjects={myProjects} />
    </div>
  );
};

export default Projects;
