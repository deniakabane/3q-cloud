"use client";
import React from "react";
import Image from "next/image";

const articles = [
  {
    image: "/img/artikel.png",
    title: "Discovering Bali's Hidden Gems",
    date: "August 20, 2024",
  },
  {
    image: "/img/artikel.png",
    title: "A Guide to Bali's Cultural Sites",
    date: "August 15, 2024",
  },
  {
    image: "/img/artikel.png",
    title: "Top 10 Beaches in Bali",
    date: "August 10, 2024",
  },
  {
    image: "/img/artikel.png",
    title: "The Best Food Experiences in Bali",
    date: "August 5, 2024",
  },
];

export default function Artikel() {
  return (
    <div className="md:py-10 py-6 bg-white">
         <h1 className="md:text-4xl text-2xl font-bold pb-2 md:pl-16 px-5">Artikel yang bikin semangat liburanmu </h1>
    <div className="px-5 md:pt-6 pt-3 md:px-16">
      <div className="md:flex md:flex-nowrap grid grid-cols-2 gap-6 justify-between">
        {articles.map((article, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={300}
              height={217}
              className="w-full h-auto object-cover"
            />
            <div className="md:p-4 p-2">
              <div className="md:text-lg text-sm font-semibold">{article.title}</div>
              <div className="md:text-sm text-xs text-gray-600 md:mt-2 mt-1">{article.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
