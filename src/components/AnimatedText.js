/** @format */

import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div>
      <div className="flex justify-center overflow-hidden">
        <motion.h1
          variants={quote}
          initial="initial"
          animate="animate"
          className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              className="inline-block"
              variants={singleWord}
              // initial="initial"
              // animate="animate"
              key={word + "-" + index}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default AnimatedText;
