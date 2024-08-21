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
    <div className="py-10 bg-white">
         <h1 className="text-4xl font-bold pb-2 pl-16">Artikel yang bikin semangat liburanmu </h1>
    <div className="px-5 pt-6 md:px-16">
      <div className="flex flex-nowrap gap-6 justify-between">
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
            <div className="p-4">
              <div className="text-lg font-semibold">{article.title}</div>
              <div className="text-sm text-gray-600 mt-2">{article.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
