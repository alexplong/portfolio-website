/** @format */

import React from "react";
import Button from "./Button";

import { Link } from "react-router-dom";

function Navigation(props) {
  const [menuVisibility, setMenuVisibility] = React.useState(false);

  function toggleButton() {
    setMenuVisibility((prevState) => !prevState);
  }

  return (
    <header className="nav--container container">
      <nav className="primary-navigation" data-visible={menuVisibility}>
        <Link className="nav-link" to="/" onClick={toggleButton}>
          <h2>Home</h2>
        </Link>
        <Link className="nav-link" to="/blog" onClick={toggleButton}>
          <h2>Blog</h2>
        </Link>
        <Link className="nav-link" to="/about" onClick={toggleButton}>
          <h2>About</h2>
        </Link>
        <Link className="nav-link" to="/projects" onClick={toggleButton}>
          <h2>Projects</h2>
        </Link>
        <Link className="nav-link" to="/contact" onClick={toggleButton}>
          <h2>Contact</h2>
        </Link>
      </nav>
      <div className="button-container">
        <Button
          classes="dark-toggle"
          ARIALabel="toggle dark mode"
          // HREF="#toggleDark"
          icon="fa-solid fa-circle-half-stroke fa-xl"
          toggleButton={toggleButton}
        />
        <Button
          classes="menu-toggle"
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
