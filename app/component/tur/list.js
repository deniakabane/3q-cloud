"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaHotel,
  FaSuitcase,
  FaPlane,
  FaUtensils,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

import Link from "next/link";

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Terbaru");

  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };

  const handleCloseClick = () => {
    setIsFilterOpen(false);
  };

  const handleFilterSelection = (filter) => {
    setActiveFilter(filter);
    setIsFilterOpen(false);
  };

  const sortedPackages = [...packagesItems].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\./g, ""));
    const priceB = parseInt(b.price.replace(/\./g, ""));

    if (activeFilter === "Termurah") return priceA - priceB;
    if (activeFilter === "Termahal") return priceB - priceA;
    return 0;
  });

  return (
    <div className="md:py-10 md:px-16 p-6 bg-gray-50">
      <div className="mx-auto">
        {/* Header dengan Text dan Button Filter */}
        <div className="flex justify-between items-center md:mb-8 mb-6">
          <h2 className="md:text-[28px] text-2xl font-bold ">38 Tour Tersedia</h2>
          <button
            className="flex items-center md:text-base text-sm bg-[#00429B] text-white md:px-4 px-3 py-2 rounded-md"
            onClick={handleFilterClick}
          >
            <FaFilter className="mr-3"/>
            FILTER
          </button>
        </div>

        {/* Floating Filter Container */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg py-6 px-8 w-[90%] md:w-[500px]">
              {/* Baris pertama dengan teks "Filter" dan ikon close */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold font-montserrat">
                  Filter
                </h3>
                <FaTimes
                  className="text-xl text-[#c4c4c4] cursor-pointer"
                  onClick={handleCloseClick}
                />
              </div>

              {/* Baris kedua dan ketiga dengan tombol filter */}
              <div className="flex justify-between items-center mb-4">
                <button
                  className={`w-1/2 py-2 rounded-md mr-2 font-montserrat font-semibold text-xl border border-[#C4C4C4]  ${
                    activeFilter === "Terbaru"
                      ? "bg-[#C4C4C4] text-white"
                      : "bg-transparent text-[#C4C4C4]"
                  }`}
                  onClick={() => handleFilterSelection("Terbaru")}
                >
                  Terbaru
                </button>

                <button
                  className={`w-1/2 py-2 rounded-md ml-2 font-montserrat font-semibold text-xl border border-[#C4C4C4]  ${
                    activeFilter === "Terlama"
                      ? "bg-[#C4C4C4] text-white"
                      : "bg-transparent text-[#C4C4C4]"
                  }`}
                  onClick={() => handleFilterSelection("Terlama")}
                >
                  Terlama
                </button>
              </div>

              {/* Divider */}
              <hr className="mb-4" />

              {/* Baris keempat dan kelima dengan tombol filter */}
              <div className="flex justify-between items-center mb-4">
                <button
                  className={`w-1/2 py-2 rounded-md mr-2  font-montserrat font-semibold text-xl border border-[#C4C4C4] ${
                    activeFilter === "Termurah"
                      ? "bg-[#C4C4C4] text-white"
                      : "bg-transparent text-[#C4C4C4]"
                  }`}
                  onClick={() => handleFilterSelection("Termurah")}
                >
                  Termurah
                </button>
                <button
                  className={`w-1/2 py-2 rounded-md ml-2  font-montserrat font-semibold text-xl border border-[#C4C4C4] ${
                    activeFilter === "Termahal"
                      ? "bg-[#C4C4C4] text-white"
                      : "bg-transparent text-[#C4C4C4]"
                  }`}
                  onClick={() => handleFilterSelection("Termahal")}
                >
                  Termahal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Card Packages */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-4">
          {sortedPackages.map((pkg, i) => (
            <Link key={i} href="/tur/1">
              <div className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={299}
                  height={199}
                  className="w-full md:h-40 h-32 object-cover"
                />
                <div className="p-4">
                  <div className="md:text-lg text-base font-semibold text-textcore">
                    {pkg.title}
                  </div>
                  <div className="flex flex-col mt-1 md:mt-2 md:space-y-1">
                    <div className="text-xs text-gray-600">Start from</div>
                    <div className="md:text-xl text-lg font-bold text-textcore">
                      {pkg.price}/Pax
                    </div>
                  </div>
                  <div className="md:mt-4 mt-1 text-sm text-gray-600">Include:</div>
                  <div className="flex flex-row mt-2 gap-2">
                    {pkg.includes.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center md:w-8 md:h-8 w-6 h-6 bg-[#00FFFF] text-white rounded-lg"
                      >
                        {item === "Hotel" && <FaHotel className="md:text-lg text-sm" />}
                        {item === "Transportasi" && (
                          <FaSuitcase className="md:text-lg text-sm" />
                        )}
                        {item === "Makan" && <FaUtensils className="md:text-lg text-sm" />}
                        {item === "Tour" && <FaPlane className="md:text-lg text-sm" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
