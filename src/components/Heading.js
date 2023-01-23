/** @format */

import React from "react";

function Heading() {
  return (
    <div className="heading">
      <div className="heading--line_1">
        Hi there! I'm
        <span> Alex</span>.
      </div>
      <div className="heading--line_2">
        I'm a full stack developer and programmer.
      </div>
      <a href="#about" className="heading--link">
        <div>
          {" "}
          See Some Of My Work
          <svg></svg>
        </div>
      </a>
    </div>
  );
}

export default Heading;
