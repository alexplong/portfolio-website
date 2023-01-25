/** @format */

import React from "react";
import Canvas from "./Canvas";
import Heading from "./Heading";

function Hero() {
  return (
    <div className="hero flex flex-col align-items-start flex-jc-c p-4 mx-2">
      <Canvas />
      <Heading />
    </div>
  );
}

export default Hero;
