/** @format */

import React from "react";

const Icon = ({ link, alt, title }) => {
  return (
    <div
      className="icon w-[65px] flex flex-col justify-center items-center m-2"
      // style={{ width: "50px", aspectRatio: 1 }}
    >
      <img style={{ width: "100%", aspectRatio: 1 }} src={link} alt={alt} />
      <span className="text-lg truncate mt-1.5">{title}</span>
    </div>
  );
};

export default Icon;
