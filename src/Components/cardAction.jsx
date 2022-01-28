import React from "react";
import c from "../jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

const cardAction = (props) => {
  return (
    <div>
      <div className="h-30 bg-gray-800 mx-20 border-2 border-opacity-30 border-white my-4 bg-opacity-60 max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-20 h-30" src={c} />
        <div className="px-6 py-4">
          <div className="font-bold text-white text-xl mb-2">{props.title}</div>
          <p className="text-gray-300 text-base">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default cardAction;
