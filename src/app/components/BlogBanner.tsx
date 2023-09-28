"use client";
import React, { useRef, useState } from "react";
import { BlogData } from "../data/BlogData";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogBanner() {
  const swiperRef = useRef<any>();

  const [_, setInit] = useState(false);
  return (
    <div className="banner">
      <div className="flex absolute top-[40%] left-0 transform z-10">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <img
            src="https://i.ibb.co/mH2TSsm/prev-shape.png"
            alt="arrow"
            className="h-[60px] md:h-[150px] 2xl:h-[200px] object-contain "
          />
        </button>
      </div>
      <div className="flex absolute top-[40%] right-0 transform z-10">
        <button onClick={() => swiperRef.current?.slideNext()}>
          <img
            src="https://i.ibb.co/p44FCRg/next-shape.png"
            alt="arrow"
            className="h-[60px] md:h-[150px]  2xl:h-[200px] object-contain"
          />
        </button>
      </div>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        mousewheel={true}
        keyboard={true}
      >
        {BlogData.map((blog, index) => (
          <div key={blog.id}>
            <SwiperSlide>
              <div
                className="h-[100vh] flex flex-col justify-center mx-auto w-[80%]"
                key={index}
              >
                <h1 className="2xl:text-[80px] md:text-[48px]  text-[24px] text-white text-bold">
                  {blog.title}
                </h1>
                <p className="text-white text-[14px] lg:text-[18px] xl:text-[20px]">
                  {blog.description}
                </p>
                <button className="flex justify-around items-center w-[198px] h-[57px] border border-white rounded-[80px] mt-[50px]">
                  <span className="text-[18px] text-white">Read More</span>
                  <img
                    src="https://i.ibb.co/F4TQgvR/Group-1693.png"
                    alt="arrow"
                    className="w-[38px] h-[38px]"
                  />
                </button>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      {/* half circle radius */}
    </div>
  );
}
