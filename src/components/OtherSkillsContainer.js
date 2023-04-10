/** @format */

import React from "react";
import Icon from "../components/Icon";
import python from "../assets/icons/icons8-python.svg";
import rstats from "../assets/icons/icons8-r-project.svg";
import github from "../assets/icons/icons8-github-96.png";

const OtherSkillsContainer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-around">
        <Icon link={github} alt="github-icon" title="GitHub" />
        <Icon link={python} alt="python-icon" title="Python" />
      </div>
      <div className="flex flex-row justify-around">
        <Icon link={rstats} alt="rstats-icon" title="R" />
      </div>
    </div>
  );
};

export default OtherSkillsContainer;
