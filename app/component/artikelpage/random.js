"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../utils/date";
import { FaCalendarWeek } from "react-icons/fa6";

// Dummy data for random articles
const dummyArtikels = [
  {
    slug: "discovering-bali",
    image: {
      url_file: "/img/artikel.png",
    },
    title: "Discovering Bali's Hidden Gems",
    updatedAt: "2024-08-20T10:30:00Z",
    text: "Explore the beautiful hidden spots in Bali that tourists often miss.",
  },
  {
    slug: "bali-cultural-sites",
    image: {
      url_file: "/img/artikel.png",
    },
    title: "A Guide to Bali's Cultural Sites",
    updatedAt: "2024-08-15T14:00:00Z",
    text: "An in-depth look at Bali's rich cultural heritage and landmarks.",
  },
  {
    slug: "top-10-beaches",
    image: {
      url_file: "/img/artikel.png",
    },
    title: "Top 10 Beaches in Bali",
    updatedAt: "2024-08-10T08:45:00Z",
    text: "The best beaches in Bali for sunbathing, swimming, and surfing.",
  },
];

export default function DetailArtikelRandom({ slugnya }) {
  // Use dummy data instead of fetching
  const artikels = dummyArtikels;

  return (
    <>
      <div className="px-4 pb-6 pt-2 md:pb-10 md:pt-7 md:px-5">
        <div className="grid grid-cols-1 gap-3 md:gap-x-10 md:gap-y-7">
          {artikels?.map((ar, i) => (
            <Link href={`/artikel/${ar.slug}`} key={i}>
              <div className="flex p-3 rounded-lg md:p-5 bg-white border border-solid border-gray-200 text-sm shadow1">
                <div className="w-[20%]">
                  <Image
                    src={ar?.image?.url_file}
                    title={ar?.title}
                    className="h-[80px] w-[100px] md:w-full md:h-auto rounded-lg object-cover border border-solid border-gray-200"
                    width={400}
                    height={300}
                    alt={ar?.title}
                  />
                </div>
                <div className="pl-4 w-[80%]">
                  <h2 className="font-semibold text-sm md:text-lg">
                    {ar?.title}
                  </h2>
                  <div className="flex items-center pb-0.5 md:pb-1.5">
                    <div className="md:w-[18px] mr-1 text-[9px]">
                      <FaCalendarWeek className="md:text-sm text-semicore" />
                    </div>
                    <span className="text-semicore md:text-sm text-[9px] pt-1">
                      {formatDate(ar?.updatedAt)}
                    </span>
                  </div>
                  <p className="font-medium text-xs md:text-base">{ar?.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
