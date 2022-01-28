import React from "react";
// import "../sql.css";
import { motion } from "framer-motion";

const Sql_container = ({ search }) => {
  return (
    <form action="" className="flex flex-col space-y-4">
      <div>
        <motion.textarea
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.9, x: 0 }}
          type="TextArea"
          value={search ? query : ""}
          className="textColor fixed bg-gray-800 scrolll opacity-90 shadow-2xl SQLBoxPositions container h-2/5 w-2/6 mt-12 mr-4 mb-8 ml-2 px-4 ring-1 ring-gray-300 rounded-md px-4 py-2"
        />
      </div>
    </form>
  );
};

export default Sql_container;

const query = `select * from emp  where sal> any(select sal from emp where sal<500000);`;
