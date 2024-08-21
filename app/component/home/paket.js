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
    <div className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-nowrap gap-10 justify-between">
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
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="text-lg font-semibold">{pkg.title}</div>
                <div className="flex flex-col mt-2 space-y-1">
                  <div className="text-sm text-gray-600">Start from</div>
                  <div className="text-xl font-bold">{pkg.price}/Pax</div>
                </div>
                <div className="mt-4 text-sm text-gray-600">Include:</div>
                <div className="flex flex-row mt-2 gap-2">
                  {pkg.includes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-8 h-8 bg-[#00FFFF] text-white rounded-lg"
                    >
                      {item === "Hotel" && <FaHotel className="text-lg" />}
                      {item === "Transportasi" && <FaSuitcase className="text-lg" />}
                      {item === "Makan" && <FaUtensils className="text-lg" />}
                      {item === "Tour" && <FaPlane className="text-lg" />}
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
