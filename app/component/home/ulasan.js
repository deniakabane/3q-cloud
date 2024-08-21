"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { FaUser } from "react-icons/fa"; // Import user icon

// Dummy data
const ulasanData = [
  {
    image: "",
    title: "Ariq Muallaf",
    subtitle: "Traveler",
    description:
      "Luar biasa di Bali, dan pengalaman ini benar-benar mengesankan! Bali dikenal sebagai Pulau Dewata, dan setelah menghabiskan waktu di sana, saya bisa mengerti kenapa.",
  },
  {
    image: "", 
    title: "Obet Overlord",
    subtitle: "Adventurer",
    description:
      "Luar biasa di Bali, dan pengalaman ini benar-benar mengesankan! Bali dikenal sebagai Pulau Dewata, dan setelah menghabiskan waktu di sana, saya bisa mengerti kenapa.",
  },
  {
    image: "",
    title: "Deni Akabane",
    subtitle: "Explorer",
    description:
      "Luar biasa di Bali, dan pengalaman ini benar-benar mengesankan! Bali dikenal sebagai Pulau Dewata, dan setelah menghabiskan waktu di sana, saya bisa mengerti kenapa.",
  },
  {
    image: "", 
    title: "Pey Makinyo",
    subtitle: "Voyager",
    description:
      "Luar biasa di Bali, dan pengalaman ini benar-benar mengesankan! Bali dikenal sebagai Pulau Dewata, dan setelah menghabiskan waktu di sana, saya bisa mengerti kenapa.",
  },
];

export default function Ulasan() {
  return (
    <>
      <div className="bg-core px-5 py-6 md:bg-[#F7F7F7] md:px-16 md:py-10">
        <h1 className="text-xl md:pb-5 md:pl-2 md:text-4xl  pb-2 mb-3 font-bold">
          Ulasan Terbaik
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            },
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(`swiper`)}
          modules={[Autoplay]}
        >
          {ulasanData.map((ar, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white md:mx-2 md:px-5 md:py-10 md:rounded-lg shadow-md flex flex-col h-full">
                <div className="flex-grow">
                  <p className="py-1 md:text-base">{ar.description}</p>
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-[65px]">
                    {ar.image ? (
                      <Image
                        src={ar.image}
                        title={ar.title}
                        className="w-[50px] h-[50px] rounded-full object-cover"
                        width={400}
                        height={300}
                        alt={ar.title}
                      />
                    ) : (
                      <div className="w-[50px] h-[50px] bg-gray-300 flex items-center justify-center rounded-full">
                        <FaUser className="text-gray-600 w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold">{ar.title}</div>
                    <div className="text-sm">{ar.subtitle}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-4 bg-gray-700"></div>
      </div>
    </>
  );
}
