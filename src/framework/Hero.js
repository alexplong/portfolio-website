/** @format */

import React from "react";
import Canvas from "./Canvas";
import Heading from "./Heading";

function Hero() {
  return (
    <div className="hero d-flex flex-column align-items-start justify-content-center p-4 mx-2">
      <Canvas />
      <Heading />
    </div>
  );
}

export default Hero;
