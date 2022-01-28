import React from "react";
import CardAction from "./cardAction";

export default function card() {
  return (
    <div>
      <span>
        <CardAction
          title="MNAds"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
        ></CardAction>
      </span>

      <span>
        <CardAction
          title="MNAds"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
        ></CardAction>
      </span>

      <span>
        <CardAction
          title="MNAds"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil."
        ></CardAction>
      </span>
    </div>
    // <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
    //   {/* <image class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    //     <p className="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    //       quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    //       nihil.
    //     </p>
    //   </div>
    // </div>
  );
}
