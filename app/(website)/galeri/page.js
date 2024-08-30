import React from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Galeri",
    // description: "Paket Umroh Terpercaya",
  };
}

const galeriItemsPage = [
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
const Page = async ({}) => {
  return (
    <>
      <div className="bg-white md:py-10 py-5">
        <div className="md:px-16 px-6 pb-4">
          <h1 className="md:text-2xl text-xl text-bold pb-2 text-[#333]">
            Momen 3Q Cloud Trip
          </h1>
          <p className="md:text-base text-sm pb-2 text-[#333]">
            Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!
          </p>
        </div>
        <div className="md:px-16 px-6 bg-[#F2F5F9] py-8 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
           
            {galeriItemsPage.map((item, index) => (
               <Link key={index} href="/galeri/1">
              <div key={index} className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full md:h-[300px] h-[200px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <span className="text-white md:text-lg text-sm font-semibold px-6 py-2 mb-5 bg-black bg-opacity-40 rounded">
                    {item.title}
                  </span>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
