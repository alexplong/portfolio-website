/** @format */

import React from "react";
import Alex from "../assets/Alex.jpeg";

function About() {
  return (
    <section
      className="about container d-flex flex-column align-items-center justify-content-center p-4 mt-5"
      id="about"
    >
      <img alt="Me" src={Alex} />
      <h2 className="mt-5">About</h2>
      <div className="container d-flex flex-column align-items-center mt-3">
        <p>
          As a former research scientist turned software engineer, I am fully
          committed to the philosophy of life-long learning. I am a full stack
          developer with a background in JavaScript, React, and several coding
          languages with experience developing mobile applications and building
          websites.
          <br />
          <br />I am diligent and detail-oriented, with 9+ years of experience
          as a scientist in research laboratories.
        </p>
        <h3 className="mt-5">Skills</h3>
        <div className="mt-3">
          <i className="fa-brands fa-square-js fa-2xl mx-3"></i>
          <i className="fa-brands fa-html5 fa-2xl mx-3"></i>
          <i className="fa-brands fa-css3-alt fa-2xl mx-3"></i>
          <i className="fa-brands fa-node fa-2xl mx-3"></i>
          <i className="fa-brands fa-react fa-2xl mx-3"></i>
          <i className="fa-brands fa-python fa-2xl mx-3"></i>
          <i className="fa-brands fa-r-project fa-2xl mx-3"></i>
        </div>
      </div>
    </section>
  );
}

export default About;
