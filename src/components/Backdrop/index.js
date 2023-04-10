/** @format */

import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop absolute top-0 left-0 h-full w-full bg-white flex items-center justify-center overflow-y-hidden"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
