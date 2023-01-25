/** @format */

import React from "react";

function HamburgerButton(props) {
  return (
    <div className="pt-2 pb-2 p-1 border-bottom">
      <a
        className="pl-2 pr-2 p-1"
        href="#hamburger-icon"
        onClick={props.toggleMenu}
      >
        <i class="fa-solid fa-bars"></i>
      </a>
    </div>
  );
}

export default HamburgerButton;
