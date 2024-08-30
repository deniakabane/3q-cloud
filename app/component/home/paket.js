"use client";
import React from "react";
import Image from "next/image";
import { FaHotel, FaSuitcase, FaPlane, FaUtensils } from "react-icons/fa"; // Contoh ikon, Anda bisa menggunakan ikon lainnya

const packages = [
  {
    image: "/img/cardpaket.png",
    title: "Bali 4 Days 3 Night",
    price: "3.200.000",
    includes: ["Hotel", "Transportasi", "Makan"],
  },
  {
    image: "/img/cardpaket.png",
    title: "Bali 4 Days 3 Night",
    price: "4.500.000",
    includes: ["Hotel", "Tour", "Makan"],
  },
  {
    image: "/img/cardpaket.png",
    title: "Bali 4 Days 3 Night",
    price: "2.800.000",
    includes: ["Transportasi", "Makan"],
  },
  {
    image: "/img/cardpaket.png",
    title: "Bali 4 Days 3 Night",
    price: "5.000.000",
    includes: ["Hotel", "Tour", "Transportasi", "Makan"],
  },
];

export default function Paket() {
  return (
    <div className="md:py-10 py-5">
       <h1 className="md:text-4xl text-2xl font-bold pb-2 px-5">Explore Destinasi</h1>
       <p className="md:text-lg text-sm pb-5 px-5">Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!</p>
      <div className="md:container md:mx-auto mx-4 ">
        <div className="md:flex md:flex-nowrap md:gap-10 grid grid-cols-2 gap-4 justify-between">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={256}
                height={160}
                className="w-full md:h-40 h-32 object-cover"
              />
              <div className="p-4">
                <div className="md:text-lg text-base text-textcore font-semibold">{pkg.title}</div>
                <div className="flex flex-col md:mt-2 md:space-y-1">
                  <div className="text-sm text-gray-600">Start from</div>
                  <div className="md:text-xl text-lg font-bold text-textcore">{pkg.price}/Pax</div>
                </div>
                <div className="md:mt-4 mt-1 text-sm text-gray-600">Include:</div>
                <div className="flex flex-row mt-2 gap-2">
                  {pkg.includes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center md:w-8 md:h-8 w-6 h-6 bg-[#00FFFF] text-white rounded-lg"
                    >
                      {item === "Hotel" && <FaHotel className="md:text-lg text-sm" />}
                      {item === "Transportasi" && <FaSuitcase className="md:text-lg text-sm" />}
                      {item === "Makan" && <FaUtensils className="md:text-lg text-sm" />}
                      {item === "Tour" && <FaPlane className="md:text-lg text-sm" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
