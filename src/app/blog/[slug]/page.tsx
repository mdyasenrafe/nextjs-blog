"use client";
import { BlogData } from "@/app/data/BlogData";
import React, { useEffect, useState } from "react";
import "../../styles/responsive.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const parse = require("html-react-parser");
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function page({ params }: { params: { slug: string } }) {
  const [currentBlog, setCurrentBlog] = useState<BlogDataType>();
  const [suggestedBlogs, setSuggestedBlogs] = useState<BlogDataType[]>([]);

  useEffect(() => {
    if (params.slug) {
      let foundBlog: any = null;
      const otherBlogs = [];

      for (let item of BlogData) {
        if (item.id == params.slug) {
          foundBlog = item;
        } else {
          otherBlogs.push(item);
        }
      }

      setCurrentBlog(foundBlog);
      setSuggestedBlogs(otherBlogs);
    }
  }, [params.slug]);

  return (
    <main className="mt-[100px]">
      <div>
        <div className="flex justify-center">
          <p className="text-regular text-[#838383] md:text-[21px] border-r border-r-[##D9D9D9] pr-[16px] text-[18px]">
            {currentBlog?.date}
          </p>
          <hr />
          <p className="text-regular text-[#838383] md:text-[21px] ml-[16px] text-[18px]">
            By {currentBlog?.publisher}
          </p>
        </div>
        <div className="flex justify-center xl:w-[90%] 2xl:w-[80%] mx-auto">
          <h1 className="text-[30px] md:text-[48px] xl:text-[60px]  2xl:text-[80px] text-bold mt-4 text-center md:mt-[30px]">
            {currentBlog?.title}
          </h1>
        </div>
        <div className="mb-[145px]">
          {currentBlog?.blog_content && parse(currentBlog?.blog_content)}
        </div>
        <div className="bg-[#F8F8F8] py-[150px]">
          <div className="blog_detail_container">
            <p className="text-[28px] text-[#F59414]">Browse</p>
            <h1 className="text-[30px] md:text-[60px] blog_title md:mb-[40px] mb-[24px]">
              Our Related Blogs
            </h1>

            <Swiper
              className="mySwiper"
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              mousewheel={true}
              keyboard={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {suggestedBlogs.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image src={item.thumbPhoto} alt="Picture of the author" />
                    <p className="mt-[24px] md:mt-[40px] text-[16px] text-[#838383]">
                      By {item.publisher}
                    </p>
                    <h1 className="text-[24px] lg:text-3xl 2xl:text-[2rem]  text-bold mt-4">
                      {item.title}
                    </h1>
                    <p className="text-[15px] text-[#898989] mt-[24px]">
                      {item.description.length > 120 ? (
                        <span>{item.description.substring(0, 120)}...</span>
                      ) : (
                        <span>{item.description}</span>
                      )}
                    </p>
                    <Link
                      href={`blog/${item.id}`}
                      className="flex justify-around items-center w-[181px] h-[46px] bg-[#181818]  md:mt-[30px] mt-[24px]"
                    >
                      <span className="text-white text-[14px]">READ MORE</span>
                      <AiOutlineArrowRight
                        className="text-[#F59414]"
                        size={24}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
}
