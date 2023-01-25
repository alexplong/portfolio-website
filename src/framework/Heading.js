/** @format */

import React from "react";

function Heading() {
  return (
    <div className="heading d-flex flex-column">
      <div className="heading--line_1">
        <h2 className="h1">
          Hi there! I'm<span> Alex</span>.
        </h2>
      </div>
      <div className="heading--line_2">
        <h3 className="fs-5 fw-normal">Junior Software Engineer</h3>
      </div>
      <a href="#about" className="heading--link fs-6 fw-lighter">
        <div className="heading--text">
          {" "}
          Read more <span>about me</span> or <span>contact me</span>
        </div>
      </a>
    </div>
  );
}

export default Heading;
