/** @format */

import React from "react";
import Icon from "../components/Icon";
import html5 from "../assets/icons/icons8-html5-96.png";
import css3 from "../assets/icons/icons8-css3.svg";
import sass from "../assets/icons/icons8-sass.svg";
import js from "../assets/icons/icons8-javascript.svg";
import react from "../assets/icons/icons8-react-native.svg";
import tailwind from "../assets/icons/icons8-tailwindcss.svg";
import spring from "../assets/icons/react-spring-svgrepo-com.svg";

const FrontendSkillsContainer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-between">
        <Icon link={html5} alt="html5-icon" title="HTML5" />
        <Icon link={css3} alt="css3-icon" title="CSS3" />
        <Icon link={sass} alt="sass-icon" title="Sass" />
      </div>
      <div className="flex flex-row justify-around">
        <Icon link={js} alt="js-icon" title="JavaScript" />
        <Icon link={react} alt="react-icon" title="React" />
      </div>
      <div className="flex flex-row justify-around">
        <Icon link={tailwind} alt="tailwind-icon" title="Tailwind" />
        <Icon link={spring} alt="spring-icon" title="React Spring" />
      </div>
    </div>
  );
};

export default FrontendSkillsContainer;
