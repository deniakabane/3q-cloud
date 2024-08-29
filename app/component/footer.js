"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { useState } from "react";

export default function Footer() {
  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageSwitch = (language) => {
    setIsEnglish(language === "en");
  };

  return (
    <footer className="bg-core py-6 px-8 text-center relative">
      {/* Desktop Footer */}
      <div className="hidden md:flex md:flex-row md:items-center md:gap-8 md:py-5 md:px-16">
        {/* Logo Column */}
        <div className="w-[15%] flex justify-center md:justify-start mb-4 md:mb-0">
          <Image
            src="/logo.png"
            title="logo hasanahub"
            className="h-[110px] w-[110px] mx-auto md:mx-0"
            width={100}
            height={100}
            alt="logo hasanahub"
          />
        </div>

        {/* Main Content Column */}
        <div className="w-[85%] flex md:flex-col">
          {/* Upper Row */}
          <div className="flex justify-between w-full mb-4">
            <div className="flex flex-row gap-8 font-montserrat text-base">
              <Link
                href="/"
                className="mb-2 font-medium text-black hover:underline"
              >
                Beranda
              </Link>
              <Link
                href="/tur"
                className="mb-2 font-medium text-black hover:underline"
              >
                Tur
              </Link>
              <Link
                href="/galeri"
                className="mb-2 font-medium text-black hover:underline"
              >
                Galeri
              </Link>
              <Link
                href="/artikel"
                className="mb-2 font-medium text-black hover:underline"
              >
                Artikel
              </Link>
              <Link
                href="/tentangkami"
                className="mb-2 font-medium text-black hover:underline"
              >
                Tentang Kami
              </Link>
              <Link
                href="/kebijakan"
                className="mb-2 font-medium text-black hover:underline"
              >
                Kebijakan
              </Link>
            </div>
            <div className="flex items-center text-3xl gap-2 text-black">
              <Link href="/">
                <RiInstagramFill />
              </Link>
              <Link href="/">
                <RiFacebookBoxFill />
              </Link>
              <Link href="/">
                <RiYoutubeFill />
              </Link>
              <Link href="/">
                <RiTwitterFill />
              </Link>
            </div>
          </div>

          <div className="border-t-[1px] border-black w-full my-4"></div>

          {/* Lower Row */}
          <div className="flex justify-between w-full">
            <div className="text-sm text-[#333] flex-1 flex justify-center items-end">
            © 2024 - 3Q Cloud Trip - PT. Mumbul Kreasi Abadi
            </div>
            <div className="flex items-center">
              <div className="language-switch bg-white rounded-lg p-1 flex">
                <button
                  className={`px-4 py-2 ${!isEnglish ? "bg-blue-500 text-white" : "text-blue-500"
                    }`}
                  onClick={() => handleLanguageSwitch("id")}
                >
                  Indonesia
                </button>
                <button
                  className={`px-4 py-2 ${isEnglish ? "bg-blue-500 text-white" : "text-blue-500"
                    }`}
                  onClick={() => handleLanguageSwitch("en")}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden">
        <div className="text-center mx-auto mb-4">
          <Image
            src="/logo_foot.png"
            title="logo 3q"
            className="h-[60px] w-[60px] mx-auto"
            width={100}
            height={100}
            alt="logo hasanahub"
          />
        </div>
        <div className="flex items-center font-bold justify-center gap-x-4 gap-y-2 py-2 underline flex-wrap">
          <Link href="/">Beranda</Link>
          <Link href="/umrah">Umrah</Link>
          <Link href="/gallery">Galeri</Link>
          <Link href="/artikel">Artikel</Link>
          <Link href="/aboutus">Tentang Kami</Link>
          <Link href="/kebijakan">Kebijakan</Link>
        </div>
        <p className="my-4">
          Jl. Jendral Sudirman No 60 Sempur Kec Bogor Tengah Kota Bogor
        </p>
        <div className="font-bold">62-812-345-6789 | 0251-75923xx</div>
        <div className="font-bold">info@hanasahhub.com</div>
        <div className="flex items-center text-3xl gap-2 mt-4 text-semicore mb-4 justify-center">
          <Link href="/">
            <RiInstagramFill />
          </Link>
          <Link href="/">
            <RiFacebookBoxFill />
          </Link>
          <Link href="/">
            <RiYoutubeFill />
          </Link>
          <Link href="/">
            <RiTwitterFill />
          </Link>
        </div>
        <div className="text-sm">© Copyright HasanahHub 2024</div>
      </div>
    </footer>
  );
}
