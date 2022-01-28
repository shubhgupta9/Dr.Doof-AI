import React from "react";
import { motion } from "framer-motion";
// import "../sql.css";
import { Link } from "react-router-dom";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // transition: {
    //   duration: 2,
    //   ease: "easeInOut",
    // },
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Header = () => {
  return (
    <motion.header
      id="Headerstyle"
      className="w-full bg-black-800 opacity-80 border-b-5 border-gray-300 shadow-lg mx-auto text-center py-6 bg-opacity-90s border-b-2"
    >
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ fontsize: 100, x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)" }}
        className=" fontc text-xl text-left leading-9 font-bold tracking-tight text-white sm:text-5xl sm:leading-10 px-5"
      >
        <Link to="/">Dr.Doof &#160;&#160;&#160; AI</Link>
      </motion.h2>
    </motion.header>
  );
};

export default Header;
