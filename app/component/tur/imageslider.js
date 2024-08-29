"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Tambahkan ini untuk CSS navigasi
import React from "react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SwiperComponent() {
  const dummyData = [
    { title: "Beautiful Landscape 1", image: "/img/cardpaket.png" },
    { title: "Beautiful Landscape 2", image: "/img/cardpaket.png" },
    { title: "Beautiful Landscape 3", image: "/img/cardpaket.png" },
    { title: "Beautiful Landscape 4", image: "/img/cardpaket.png" },
    { title: "Beautiful Landscape 5", image: "/img/cardpaket.png" },
    { title: "Beautiful Landscape 6", image: "/img/cardpaket.png" },
  ];

  return (
    <div className="relative hapus-icon-swiper">
      <div className="md:pr-10 pr-2">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          // Breakpoint untuk mobile
          0: {
            slidesPerView: 2, // Hanya 2 slide per view di layar kecil
          },
          // Breakpoint untuk layar lebih besar
          768: {
            slidesPerView: 4, // 4 slide per view di layar lebih besar
          },
        }}
      >
        {dummyData.map((slider, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slider?.image}
              title={slider?.title || "No title available"}
              className="w-full h-[250px] object-cover rounded-md"
              width={250}
              height={250}
              alt={slider?.title || "No title available"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      

      {/* Tombol Next dan Prev */}
      <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
      {/* <FaChevronLeft className="text-4xl text-white" /> */}
      </div>
      <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
      <FaChevronRight className="text-4xl mt-5 pt-5 text-[#616161]" />
      </div>
    </div>
  );
}
