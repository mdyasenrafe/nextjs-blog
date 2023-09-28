import React from "react";
import { BlogData } from "../data/BlogData";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import "./../styles/responsive.css";

export default function BlogList() {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[148px]">
        {BlogData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={` ${
                item.id % 2 === 0 ? "md:mt-[150px]" : "md:mb-[220px]"
              } w-[95%] pb-[50px] md:pb-0`}
            >
              <Image
                src={item.thumbPhoto}
                alt="Picture of the author"
                className="md:h-[382px] lg:h-[500px] 2xl:h-[682px] w-full object-cover"
              />
              <p className="mt-[24px] md:mt-[50px] 2xl:text-[21px] text-[#838383]">
                By {item.publisher}
              </p>
              <h1 className="text-[24px] lg:text-3xl 2xl:text-[2.5rem] 2xl:leading-[46px] text-bold mt-4">
                {item.title}
              </h1>
              <p className="text-[16px] md:text-xl text-[#898989] md:mt-8 mt-[16px]">
                {item.description.length > 120 ? (
                  <span>{item.description.substring(0, 120)}...</span>
                ) : (
                  <span>{item.description}</span>
                )}
              </p>
              <Link
                href={`blog/${item.id}`}
                className="flex justify-around items-center w-[232px] h-[59px] bg-[#181818]  md:mt-[44px] mt-[24px]"
              >
                <span className="text-white text-[18px]">READ MORE</span>
                <AiOutlineArrowRight className="text-[#F59414] text-3xl" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
