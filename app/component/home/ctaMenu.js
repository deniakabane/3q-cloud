// component/home/CTA.js
"use client"
import React, { useState } from "react";
import Image from "next/image";

const menuItems = [
  {
    image: "/icon/flight.svg",
    title: "Spesial Trip",
    description: "Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!",
    id: 1,
  },
  {
    image: "/icon/hotel.svg",
    title: "Arrangements",
    description: "Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!",
    id: 2,
  },
  {
    image: "/icon/koper.svg",
    title: "Private Guide",
    description: "Liburan untuk menjadikan pengalaman Anda ",
    id: 3,
  },
  {
    image: "/icon/price.svg",
    title: "Best Price",
    description: "Liburan untuk menjadikan pengalaman Anda ",
    id: 4,
  },
];

export default function CtaMenu() {
  const [activeItem, setActiveItem] = useState(1);
  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="flex md:flex-row flex-col justify-between md:py-10 pb-5">
      {/* Container Pertama */}
      <div className="flex-1 p-5">
        <Image
          src="/img/illustrasi.png" // Ganti dengan path gambar yang sesuai
          alt="Descriptive Image"
          width={500}
          height={400}
          className="w-full md:h-[650px] h-[300px] object-contain"
        />
      </div>
      
      {/* Container Kedua */}
      <div className="flex-1 flex flex-col px-5 md:p-0 justify-start">
        {/* Kolom Pertama */}
        <div className="md:mb-8 mb-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-2">Selamat Datang di 3Q Cloud Trip</h2>
          <p className="text-gray-700 md:text-xl text-base">Nikmati pengalaman berbeda di setiap tempat yang Anda kunjungi dan temukan petualangan baru dan terjangkau tentunya.</p>
        </div>
        
        {/* Kolom Kedua */}
        <div className="grid grid-cols-1 md:gap-6 gap-4 md:px-5 px-2">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center md:p-6 p-4 bg-white rounded-lg transition-transform duration-300 ${
                activeItem === item.id || item.id === activeItem
                  ? 'shadow-lg transform scale-105'
                  : 'hover:shadow-lg hover:scale-105'
              }`}
              onClick={() => handleClick(item.id)}
            >
              <div className="w-12 h-12 bg-[#FFFF] flex items-center justify-center rounded-full mr-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="md:text-lg text-base font-semibold">{item.title}</h3>
                <p className="text-gray-600 md:text-base text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
