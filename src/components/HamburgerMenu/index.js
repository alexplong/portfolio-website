/** @format */

import React from "react";
import Button from "../Button";

const HamburgerMenu = ({ onClick }) => {
  return (
    <Button
      classes="background-off-black text-neon-blue"
      ARIALabel="toggle menu"
      // HREF="#toggleDark"
      icon="fa-solid fa-bars fa-xl"
      toggleButton={onClick}
    />
  );
};

export default HamburgerMenu;
