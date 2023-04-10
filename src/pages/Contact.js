/** @format */

import React from "react";
import PageDivider from "../components/PageDivider";
import Icon from "../components/Icon";
import github from "../assets/icons/icons8-github-96.png";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-white"
      id="contact"
    >
      <PageDivider Label="Contact" />
      <h4>Send me a message at:</h4>
      <h2>alex.plong+contact@gmail.com</h2>
      <span>OR</span>
      <h4>Reach me through:</h4>
      <div className="flex flex-row gap-4">
        <Icon link={github} alt="github-icon" title="GitHub" />
        <Icon link={github} alt="github-icon" title="GitHub" />
      </div>
    </div>
  );
};

export default Contact;
