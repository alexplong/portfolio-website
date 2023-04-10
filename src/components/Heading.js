/** @format */

import React from "react";

function Heading() {
  return (
    <div className="heading">
      <div className="heading--line_1">
        <h1 className="h1">
          Hi there! I'm<span> Alex</span>.
        </h1>
      </div>
      <div className="heading--line_2">
        <h2 className="">Junior Software Engineer</h2>
      </div>
      <a href="#about" className="heading--link">
        <div className="heading--text text-dark">
          {" "}
          Read more <span>about me</span> or <span>contact me</span>
        </div>
      </a>
    </div>
  );
}

export default Heading;
