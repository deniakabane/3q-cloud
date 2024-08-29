import React from "react";
import Image from "next/image";
import ListTur from "@/app/component/tur/list";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Tur",
    // description: "Paket Umroh Terpercaya",
  };
}

const Page = async ({}) => {
  const populerItems = [
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

  return (
    <>
      <div className="md:px-16 px-6 bg-white">
        <div className="mx-auto md:py-10 py-6 bg-white">
          <h1 className="md:text-[28px] text-2xl font-bold pb-4">Tujuan Populer</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 md:gap-6 gap-3">
            {populerItems.map((item, i) => (
              <div key={i} className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={170}
                  height={209}
                  className="w-full h-[209px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <span className="text-white md:text-lg text-sm font-semibold px-6 py-2 mb-5 bg-black bg-opacity-40 rounded">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ListTur />
    </>
  );
};

export default Page;
