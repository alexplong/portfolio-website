/** @format */

import React from "react";
// import Star from "./Star";
import { nanoid } from "nanoid";

function Stars() {
  let stars = [];

  for (let i = 0; i < 200; i++) {
    stars.push({
      cx: Math.round(Math.random() * 10000) / 100 + "%",
      cy: Math.round(Math.random() * 10000) / 100 + "%",
      r: Math.round(Math.random() * 0.5 * 10) / 10,
    });
  }

  let starElement = stars.map((star, index) => {
    return (
      <circle
        // id={index}
        className="star"
        cx={star.cx}
        cy={star.cy}
        r={star.r}
      />
    );
  });

  return (
    <div>
      <div className="stars--wrapper">
        <svg
          id="s1"
          className="stars"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {starElement}
        </svg>
        <svg
          id="s2"
          className="stars"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {starElement}
        </svg>
        <svg
          id="s3"
          className="stars"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {starElement}
        </svg>
      </div>
    </div>
  );
}

export default Stars;
