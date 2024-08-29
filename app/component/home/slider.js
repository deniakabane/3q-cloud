"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const dummyData = [
  {
    title: "Beautiful Landscape",
    image: {
      url_file: "/img/slider.png",
    },
  },
  
];

export default function SwiperComponent({ data = dummyData }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(`swiper`)}
      modules={[Autoplay]}
    >
      {data.map((slider, index) => (
        <SwiperSlide key={index}>
          {slider?.image?.url_file ? (
            <Image
              src={slider?.image?.url_file}
              title={slider?.title || "No title available"}
              className="w-full h-auto md:t-10"
              width={2560}
              height={314}
              alt={slider?.title || "No title available"}
            />
          ) : (
            <div className="w-full h-[800px] flex items-center justify-center bg-gray-200">
              <p>No Image Available</p>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
