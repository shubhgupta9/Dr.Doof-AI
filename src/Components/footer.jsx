import React from "react";
// import "../sql.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      id="footer"
      className=" fixed -my-2 bottom-0 opacity-80 inset-x-0 w-full h-auto bg-black-800 text-white border-t-2 border-black-400 shadow-lg mx-auto text-center py-1 bg-opacity-90s"
    >
      <p>Made with ❤ by Shubh.</p>
    </motion.footer>
  );
};

export default Footer;
