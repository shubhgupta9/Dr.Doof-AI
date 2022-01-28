import React from "react";
// import "../styles1.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg2 from "../jeremy-bishop-G9i_plbfDgk-unsplash.jpg";
import CardAction from "./cardAction";
// import c from "../jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

// const icon = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//     fill: "rgba(255, 255, 255, 0)",
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     // transition: {
//     //   duration: 2,
//     //   ease: "easeInOut",
//     // },
//     fill: "rgba(255, 255, 255, 1)",
//   },
// };

const mystyle = {
  // display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  minHeight: "100vh",
  backgroundImage: `url(${bg2})`,
};

const landing = () => {
  return (
    <div style={mystyle} top="0px">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ fontsize: 100, x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        whileHover={{ textShadow: "0px 0px 8px rgb(255,255,255)" }}
        className=" headerPosition w-full bg-black-800 opacity-80 border-b-5 border-gray-300 shadow-4xl mx-auto text-center py-20 bg-opacity-90s border-b-2 object-center fontc text-6xl text-center
          font-bold text-white "
      >
        <Link to="/Page2">
          Welcome &#160;&#160;&#160; To &#160;&#160;&#160; DR.DOOF
          &#160;&#160;&#160; AI
        </Link>
      </motion.h1>
      <Link to="/Page2">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 600, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="button-position my-6 bg-opacity-40 border-2 bg-black-500 hover:bg-gray-700 text-white font-bold py-2 px-28 mx-6 rounded-full"
        >
          Continue
        </motion.button>
      </Link>
    </div>
  );
};

export default landing;
