"use client";
import React from "react";
import Image from "next/image";
import { FaHotel, FaSuitcase, FaPlane, FaUtensils, FaFilter } from "react-icons/fa"; // Tambahkan ikon filter

const packagesItems = [
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

export default function List() {
  return (
    <div className="py-10 px-16 bg-gray-50">
      <div className="mx-auto">
        {/* Header dengan Text dan Button Filter */}
        <div className="flex justify-between mb-8">
          <h2 className="text-[28px] font-bold pb-2">
          38 Tour Tersedia
          </h2>
          <button className="flex items-center text-base bg-[#00429B] text-white px-4 py-2 rounded-md">
            <FaFilter className="mr-3" />
            FILTER
          </button>
        </div>

        {/* Card Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {packagesItems.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={299}
                height={199}
                className="w-full h-48 object-cover"
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
                      {item === "Transportasi" && (
                        <FaSuitcase className="text-lg" />
                      )}
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
