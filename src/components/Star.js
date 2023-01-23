/** @format */

import React from "react";
import { nanoid } from "nanoid";

function Star() {
  let stars = [];

  for (let i = 0; i < 50; i++) {
    stars.push({
      cx: Math.round(Math.random() * 10000) / 100 + "%",
      cy: Math.round(Math.random() * 10000) / 100 + "%",
      r: Math.round(Math.random() * 0.5 * 10) / 10,
    });
  }

  let starElement = stars.map((star, index) => {
    return (
      <circle
        id={index}
        className="star"
        cx={star.cx}
        cy={star.cy}
        r={star.r}
      />
    );
  });

  return <div>{starElement}</div>;
}

export default Star;
