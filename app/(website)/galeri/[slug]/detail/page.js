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
      date : "27 May 2015",
    },
    {
      image: "/img/galeri.png",
      title: "Gili",
      date : "27 May 2014",
    },
    {
      image: "/img/galeri3.png",
      title: "Labon Bajo",
      date : "27 Maret 2014",
    },
    {
      image: "/img/galeri4.png",
      title: "Bali",
      date : "27 April 2014",
    },
    {
      image: "/img/galeri5.png",
      title: "Gili",
      date : "27 May 2014",
    },
    {
      image: "/img/galeri6.png",
      title: "Labon Bajo",
      date : "27 May 2014",
    },
  ];

const Page = async ({}) => {
  return (
    <>
     <div className="bg-white py-10">
        <div className="px-16 pb-4">
        
        </div>
        <div className="px-16 bg-[#F2F5F9] py-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
           
            {galeriItemsPage.map((item, index) => (
               <Link key={index} href="/galeri/1">
              <div key={index} className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              
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
