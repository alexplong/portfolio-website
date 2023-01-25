/** @format */

import React from "react";
import Button from "../components/Button";

function Navigation() {
  const [menuVisibility, setMenuVisibility] = React.useState(false);

  function toggleButton() {
    setMenuVisibility((prevState) => !prevState);
  }

  console.log(menuVisibility);

  return (
    <header className="nav--container">
      <nav className="primary-navigation" data-visible={menuVisibility}>
        <a class="nav-link fs-1 border-bottom" href="#home">
          {" "}
          Home{" "}
        </a>

        <a class="nav-link fs-1  border-bottom" href="#blog">
          {" "}
          Blog{" "}
        </a>

        <a class="nav-link fs-1  border-bottom" href="#about">
          {" "}
          About{" "}
        </a>

        <a class="nav-link fs-1  border-bottom" href="#projects">
          {" "}
          Projects{" "}
        </a>

        <a class="nav-link fs-1  border-bottom" href="#contact">
          {" "}
          Contact{" "}
        </a>
      </nav>
      <div className="button-container">
        <Button
          classes="dark-toggle m-1 h-8 w-8 rounded p-1"
          ARIALabel="toggle dark mode"
          // HREF="#toggleDark"
          icon="fa-solid fa-moon"
          toggleButton={toggleButton}
        />
        <Button
          classes="menu-toggle m-1 h-8 w-8 rounded p-1"
          ARIALabel="toggle menu"
          // HREF="#toggleDark"
          icon="fa-solid fa-bars"
          toggleButton={toggleButton}
        />
      </div>
    </header>
  );
}

export default Navigation;
