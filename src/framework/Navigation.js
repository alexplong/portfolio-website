/** @format */

import React from "react";
import Button from "../components/Button";

function Navigation(props) {
  const [menuVisibility, setMenuVisibility] = React.useState(false);

  function toggleButton() {
    setMenuVisibility((prevState) => !prevState);
  }

  return (
    <header
      className="nav--container 
    m-1 d-flex align-items-center
    justify-content-center container bg-white"
    >
      <nav className="primary-navigation row" data-visible={menuVisibility}>
        <a
          className="nav-link col-md-auto my-2 px-4"
          id="hero"
          href="#home"
          onClick={(event) => {
            props.currentSelection(event);
            toggleButton();
          }}
        >
          {" "}
          Home{" "}
        </a>

        <a
          className="nav-link col-md-auto my-2 px-4"
          id="blog"
          href="#blog"
          onClick={(event) => {
            props.currentSelection(event);
            toggleButton();
          }}
        >
          {" "}
          Blog{" "}
        </a>

        <a
          className="nav-link col-md-auto my-2 px-4"
          id="about"
          href="#about"
          onClick={(event) => {
            props.currentSelection(event);
            toggleButton();
          }}
        >
          {" "}
          About{" "}
        </a>

        <a
          className="nav-link col-md-auto my-2 px-4"
          id="projects"
          href="#projects"
          onClick={(event) => {
            props.currentSelection(event);
            toggleButton();
          }}
        >
          {" "}
          Projects{" "}
        </a>

        <a
          className="nav-link col-md-auto my-2 px-4"
          id="contact"
          href="#contact"
          onClick={(event) => {
            props.currentSelection(event);
            toggleButton();
          }}
        >
          {" "}
          Contact{" "}
        </a>
      </nav>
      <div className="button-container m-2 p-2 col-md-auto">
        <Button
          classes="dark-toggle px-1 py-1 rounded"
          ARIALabel="toggle dark mode"
          // HREF="#toggleDark"
          icon="fa-solid fa-circle-half-stroke fa-xl"
          toggleButton={toggleButton}
        />
        <Button
          classes="menu-toggle px-1 rounded d-md-none"
          ARIALabel="toggle menu"
          // HREF="#toggleDark"
          icon="fa-solid fa-bars fa-xl"
          toggleButton={toggleButton}
        />
      </div>
    </header>
  );
}

export default Navigation;
