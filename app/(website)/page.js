import Paket from "../component/home/paket";
import SwiperComponent from "../component/home/slider";
import React from "react";
import Image from "next/image";
import { FaCoffee, FaApple, FaCocktail, FaBeer } from "react-icons/fa";
import CtaMenu from "../component/home/ctaMenu";
import Galeri from "../component/home/galeri";
import Cta from "../component/home/cta";
import Artikel from "../component/home/artikel";
import Ulasan from "../component/home/ulasan";

export default function HomePage() {
  return (
    <>
      <div className="md:px-16 pb-4">
        <SwiperComponent />
        <Paket />
        <CtaMenu />
        <div className="flex-col text-center md:px-0 px-5 ">
          <h1 className="md:text-4xl text-2xl font-bold pb-2">Galeri</h1>
          <p className="md:text-xl text-base font-normal">
            Liburan untuk menjadikan pengalaman Anda menyenangkan di Indonesia!
          </p>
          <Galeri />
        </div>
      </div>
      <Cta
        url="/"
        title="Melarikan diri sejenak dari rutinitas, menemukan keindahan baru di setiap sudut. Liburan singkat, tapi kenangan bertahan selamanya. "
        textButton="Konsultasi"
      />

      <Artikel />
      <Ulasan />
    </>
  );
}
