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
     <div className="bg-white md:py-10 py-5">
        <div className="md:px-16 px-6 pb-4">
        
        </div>
        <div className="md:px-16 px-6 bg-[#F2F5F9] py-8 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
           
            {galeriItemsPage.map((item, index) => (
               <Link key={index} href="/galeri/${id}/detail">
              <div key={index} className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full md:h-[300px] h-[200px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-end justify-start md:ml-5 ml-3">
                  <div className="text-white md:px-8 px-4 py-2 md:mb-5 mb-3 bg-black bg-opacity-40 rounded">
                    <h1 className="md:text-lg text-sm font-bold">{item.title}</h1>
                    <p className="md:text-sm text-xs">{item.date}</p>
                  </div>
                
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
