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
      <div className="md:py-10 py-5 bg-white">
        <div className="pb-4 md:pl-16 pl-6">
          <h1 className="md:text-4xl text-xl pb-2 font-bold">
            Artikel yang bikin semangat liburanmu
          </h1>
          <p className="md:text-base text-sm pb-2 text-[#333]">
            Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!
          </p>
        </div>
        <div className="py-8 bg-[#F2F5F9] md:px-16 px-4">
          <div className="md:flex md:flex-wrap md:gap-6 grid grid-cols-2 gap-3 justify-between">
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
                    className="w-full md:h-[217px] h-auto object-cover"
                  />
                  <div className="md:py-4 py-2 px-2">
                    <div className="md:text-lg text-sm font-semibold">{article.title}</div>
                    <div className="md:text-sm text-xs text-gray-600 md:mt-2 mt-1">
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
