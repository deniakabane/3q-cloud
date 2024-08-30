"use server";

import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import React from "react";
import Cta from "@/app/component/home/cta";
import { notFound } from "next/navigation";

// Dummy data object
const dataTentangKami = {
  title: "3Q Cloud Trip",
  description:
    "Menawarkan produk perjalanan yang lengkap dan terbaik untuk mewujudkan pengalaman perjalanan yang tak terlupakan",
  titleAlamat: "Office",
  descriptionAlamat: "Jln. Taman Asri, No 1 Mumbul, Kec.Kuta Selatan, 80361",
  titleKontak: "Kontak",
  descriptionKontak: [
    "+62 812-3947-4489 | Admin I",
    "+62 838-3947-5593 | Admin II",
    "+62 896-3825-7519 | Admin III",
  ],
  image: {
    url_file: "/img/imageartikel.png",
  },
};

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Tentang Kami",
  };
}

const Page = () => {
  return (
    <>
      <div className="md:flex md:items-start md:justify-between md:p-16 md:gap-5">
        <div className="md:w-[39%]">
          <Image
            src={dataTentangKami?.image.url_file}
            title={dataTentangKami?.title}
            className="w-full h-[250px] md:h-[400px] object-cover object-bottom"
            width={321}
            height={196}
            priority
            alt={dataTentangKami?.title}
          />
        </div>
        <div className="md:w-[60%]">
          <div className="md:py-3 pt-5 pb-4 px-6">
            <h1 className="text-lg font-bold md:text-3xl">
              {dataTentangKami?.title}
            </h1>
            <p className="text-sm pt-2 md:text-xl">
              {dataTentangKami?.description}
            </p>
          </div>
          <div className="pb-4 px-6 md:pt-5">
            <h1 className="text-lg font-bold md:text-3xl">
              {dataTentangKami?.titleAlamat}
            </h1>
            <p className="text-sm pt-2 md:text-xl">
              {dataTentangKami?.descriptionAlamat}
            </p>
          </div>
          <div className="md:pb-4 pb-8   px-6 md:pt-5">
            <h1 className="text-lg font-bold md:text-3xl">
              {dataTentangKami?.titleKontak}
            </h1>
            {dataTentangKami?.descriptionKontak.map((line, index) => (
              <p key={index} className="text-sm pt-2 md:text-xl">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
