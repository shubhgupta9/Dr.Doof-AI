import React from "react";
import Converter from "./Converter";
import { motion } from "framer-motion";
import Graphs from "./graphs.jsx";
// // import "../sql.css";
// import ReactScrollableFeed from "react-scrollable-feed";

const Output_container = ({ search, config }) => {
  return (
    <form action="" className="flex flex-col space-y-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.9, x: 0 }}
        style={{ overflow: "scroll" }}
        className="textColor font-bold fixed bg-gray-800 opacity-80 shadow-2xl OutputBoxPositions container h-3/5 w-3/5 -mt-2 mr-8 mb-8 ml-8 px-4 ring-1 ring-gray-300 rounded-md px-4 py-2"
      >
        {search && <Graphs config={config} />}
      </motion.div>
    </form>
  );
};

export default Output_container;
