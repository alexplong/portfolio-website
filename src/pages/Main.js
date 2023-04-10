/** @format */

import React from "react";
import NewHero from "./NewHero";
import About from "./About";
// import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";
const Main = () => {
  return (
    <div>
      <NewHero />
      <About />
      {/* <Blog /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
