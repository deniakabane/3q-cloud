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
    <div className="flex flex-row justify-between py-10">
      {/* Container Pertama */}
      <div className="flex-1 p-5">
        <Image
          src="/img/illustrasi.png" // Ganti dengan path gambar yang sesuai
          alt="Descriptive Image"
          width={500}
          height={400}
          className="w-full h-[650px] object-contain"
        />
      </div>
      
      {/* Container Kedua */}
      <div className="flex-1 flex flex-col justify-start">
        {/* Kolom Pertama */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Selamat Datang di 3Q Cloud Trip</h2>
          <p className="text-gray-700 text-xl">Nikmati pengalaman berbeda di setiap tempat yang Anda kunjungi dan temukan petualangan baru dan terjangkau tentunya.</p>
        </div>
        
        {/* Kolom Kedua */}
        <div className="grid grid-cols-1 gap-6 px-5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center p-6 bg-white rounded-lg transition-transform duration-300 ${
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
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
