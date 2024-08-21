// component/home/Gallery.js
import React from "react";
import Image from "next/image";

const galeriItems = [
  {
    image: "/img/galeri1.png",
    title: "Lombok",
  },
  {
    image: "/img/galeri.png",
    title: "Gili",
  },
  {
    image: "/img/galeri3.png",
    title: "Labon Bajo",
  },
  {
    image: "/img/galeri4.png",
    title: "Bali",
  },
  {
    image: "/img/galeri5.png",
    title: "Gili",
  },
  {
    image: "/img/galeri6.png",
    title: "Labon Bajo",
  },
];

export default function Galeri() {
  return (
    <div className="container mx-auto py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galeriItems.map((item, index) => (
        <div key={index} className="relative">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-semibold px-6 py-2 bg-black bg-opacity-60 rounded">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
