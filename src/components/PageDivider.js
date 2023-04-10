/** @format */

import React from "react";

const PageDivider = ({ Label }) => {
  return (
    <div class="relative flex py-5 m-8 items-center">
      <div class="flex-grow border-t-2 border-off-white"></div>
      <span class="flex-shrink mx-4 text-off-white uppercase text-xl ">
        {Label}
      </span>
      <div class="flex-grow border-t-2 border-off-white"></div>
    </div>
  );
};

export default PageDivider;
