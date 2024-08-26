import React from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Artikel",
    // description: "Paket Umroh Terpercaya",
  };
}

const articlesItems = [
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

const Page = async ({}) => {
  return (
    <>
      <div className="py-10 bg-white">
        <div className="pb-4 pl-16">
          <h1 className="text-4xl pb-2 font-bold">
            Artikel yang bikin semangat liburanmu{" "}
          </h1>
          <p className="text-base pb-2 text-[#333]">
            Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!
          </p>
        </div>
        <div className="px-5 py-8 bg-[#F2F5F9] md:px-16">
          <div className="flex flex-wrap gap-6 justify-between">
            {articlesItems.map((article, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-[23%] xl:w-[23%] rounded-lg overflow-hidden"
              >
                <Link key={index} href="/artikel/1">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300}
                    height={217}
                    className="w-full h-[217px] object-cover"
                  />
                  <div className="py-4">
                    <div className="text-lg font-semibold">{article.title}</div>
                    <div className="text-sm text-gray-600 mt-2">
                      {article.date}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
