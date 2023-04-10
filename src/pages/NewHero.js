/** @format */

import React from "react";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";

const NewHero = () => {
  return (
    <div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="hero flex flex-col 
      justify-center items-start 
      h-screen text-white font-sans
      ms-20 gap-8"
      id="hero"
    >
      <AnimatedText text="Hi there! I'm Alex." className="!text-4xl" />
      <AnimatedText
        text="A full stack software engineer"
        className="!text-2xl uppercase"
      />

      <Link href="#" target={"_blank"}>
        Resume
      </Link>
      <Link href="mailto:alexplong+contact@gmail.com">Contact</Link>

      {/* <p className="text-xl">
        Learn more <span className="text-neon-blue">about me</span> <br />
        or
        <span className="text-neon-blue"> contact me</span>
      </p> */}
    </div>
  );
};

export default NewHero;
