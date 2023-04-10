/** @format */

import React from "react";
import Icon from "../components/Icon";
import node from "../assets/icons/icons8-node-js.svg";
import express from "../assets/icons/icons8-express-js (2).svg";
import mongodb from "../assets/icons/icons8-mongodb-96.png";

import js from "../assets/icons/icons8-javascript.svg";

const BackendSkillsContainer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-around">
        <Icon link={node} alt="node-icon" title="NodeJS" />
        <Icon link={express} alt="express-icon" title="ExpressJS" />
      </div>
      <div className="flex flex-row justify-around">
        <Icon link={mongodb} alt="mongodb-icon" title="MongoDB" />
        <Icon link={js} alt="js-icon" title="JavaScript" />
      </div>
    </div>
  );
};

export default BackendSkillsContainer;
