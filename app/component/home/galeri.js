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
    <div className="md:container md:mx-auto md:py-10 py-5">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-4">
      {galeriItems.map((item, index) => (
        <div key={index} className="relative">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full md:h-[300px] h-[200px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white md:text-lg text-sm font-semibold px-6 py-2 bg-black bg-opacity-60 rounded">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
