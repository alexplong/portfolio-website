/** @format */

import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className={`${props.classes} `}
      aria-label={props.ARIALabel}
    >
      <a
        className={props.classes}
        href={props.HREF}
        onClick={props.toggleButton}
      >
        <i className={props.icon}></i>
      </a>
    </button>
  );
}

export default Button;
