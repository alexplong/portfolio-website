/** @format */

import React from "react";
import Alex from "../assets/Alex.jpeg";
import LabeledContainer from "../components/LabeledContainer";
import FrontendSkillsContainer from "../components/FrontendSkillsContainer";
import BackendSkillsContainer from "../components/BackendSkillsContainer";
import OtherSkillsContainer from "../components/OtherSkillsContainer";

function About() {
  return (
    <div
      className="container flex flex-col justify-center items-center text-white"
      id="about"
    >
      <h1 className="uppercase text-xl m-10">About me</h1>
      <div className="rounded-full  w-9/12 aspect-square overflow-hidden m-6">
        <img className="object-none" alt="Me" src={Alex} />
      </div>
      <div className="p-6">
        <p>
          I am a former research scientist turned software engineer, I am
          dedicated to life-long learning mentality. I am a full stack developer
          with a background in JavaScript, React, and several coding languages
          with experience developing mobile applications and building websites.
          <br />
          <br />I am diligent and detail-oriented, with 9+ years of experience
          as a scientist in research laboratories.
        </p>
        <div>
          <h3>Skills</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <LabeledContainer
              className=""
              Class="left-10"
              label="Front End Skills"
            >
              <FrontendSkillsContainer />
            </LabeledContainer>
            <LabeledContainer
              className=""
              Class="left-20"
              label="Back End Skills"
            >
              <BackendSkillsContainer />
            </LabeledContainer>
            <LabeledContainer className="" Class="left-32" label="Other Skills">
              <OtherSkillsContainer />
            </LabeledContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
