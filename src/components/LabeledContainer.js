/** @format */

import React from "react";

const LabeledContainer = ({ children, label, Class }) => {
  return (
    <div className="text relative">
      <fieldset className="border-8" role="presentation">
        <legend className="m-auto p-2">{label}</legend>
        <div className="m-4">
          <div className="">{children}</div>
        </div>
      </fieldset>
    </div>
  );
};

export default LabeledContainer;
