import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import Heading from "./Shared/Heading";
const OrderOnline = () => {
  return (
    <div>
      <Heading
        title={"From 11:00am to 10:00pm"}
        text={"ORDER ONLINE"}
      ></Heading>
      <div className="w-[80%] mx-auto mt-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
