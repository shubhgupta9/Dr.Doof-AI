import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const mystyle = {
  alignItems: "center",
  backgroundColor: "white",
};

export default function slider() {
  return (
    <>
      <div
        className="bg-black-800 opacity-80 border-b-5 border-gray-300 shadow-lg text-center inline-block px-4 py-20"
        style={mystyle}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            Slide 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Sunt odio ipsum dolor facilis officia tenetur earum id esse eum
            reprehenderit.
          </SwiperSlide>
          <SwiperSlide>
            Slide 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Modi, fuga.
          </SwiperSlide>
          <SwiperSlide>
            Slide 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid neque est repellat!
          </SwiperSlide>
          <SwiperSlide>
            Slide 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias porro atque molestiae maxime et, impedit iure blanditiis
            libero eligendi, quis autem? Sequi, earum illum nam temporibus velit
            veritatis et ut.
          </SwiperSlide>
          <SwiperSlide>Slide 5 Lorem ipsum dolor sit amet.</SwiperSlide>
          <SwiperSlide>
            Slide 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat, dolorum dicta accusamus ducimus culpa id in maxime.
          </SwiperSlide>
          <SwiperSlide>
            Slide 7 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Modi, dolores.
          </SwiperSlide>
          <SwiperSlide>Slide 8 Lorem ipsum dolor sit.</SwiperSlide>
          <SwiperSlide>
            Slide 9 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime eaque at sed, iure assumenda eius dolore. Temporibus!
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
