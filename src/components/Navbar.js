/** @format */

import React from "react";
import Button from "./Button";
import Backdrop from "./Backdrop";

import { NavHashLink } from "react-router-hash-link";
import { motion, useCycle } from "framer-motion";

function Navigation({ menuVisibility, toggleButton }) {
  const dropIn = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      y: "90%",
      opacity: 1,
      transition: {
        duration: 0.1,
        // type: "spring",
        // damping: 25,
        // stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <header className="container relative">
      <Backdrop onClick={toggleButton}>
        {menuVisibility && (
          <motion.nav
            className="primary-navigation modal m-auto flex flex-col items-center
        fixed z-10 gap-2 bg-white"
            data-visible={menuVisibility}
            whileHover={{ scale: 1.1 }}
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            // animate={menuVisibility ? "visible" : "exit"}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavHashLink className="" to="#hero" onClick={toggleButton}>
              <h1 className="text-2xl">Home</h1>
            </NavHashLink>
            <NavHashLink className="" to="#blog" onClick={toggleButton}>
              <h1 className="text-2xl">Blog</h1>
            </NavHashLink>
            <NavHashLink className="" to="#about" onClick={toggleButton}>
              <h1 className="text-2xl">About</h1>
            </NavHashLink>
            <NavHashLink className="" to="#projects" onClick={toggleButton}>
              <h1 className="text-2xl">Projects</h1>
            </NavHashLink>
            <NavHashLink className="" to="#contact" onClick={toggleButton}>
              <h1 className="text-2xl">Contact</h1>
            </NavHashLink>
          </motion.nav>
        )}
      </Backdrop>
      {/* <div
        className="button-container fixed 
        top-0 right-0 m-2 p-4 z-[100]"
      >
        <Button
          classes="background-off-black text-neon-blue"
          ARIALabel="toggle dark mode"
          // HREF="#toggleDark"
          icon="fa-solid fa-circle-half-stroke fa-xl"
          toggleButton={toggleButton}
        />
        <Button
          classes="background-off-black text-neon-blue"
          ARIALabel="toggle menu"
          // HREF="#toggleDark"
          icon="fa-solid fa-bars fa-xl"
          toggleButton={toggleButton}
        />
      </div> */}
    </header>
  );
}

export default Navigation;
