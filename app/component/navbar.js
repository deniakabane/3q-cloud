"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { IoIosCloseCircle } from "react-icons/io";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiArticleFill, RiGalleryFill, RiTeamFill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

// Dummy Data
const dummyUser = ""; // Ganti dengan path gambar user jika ada

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const data = [
    {
      icon: <IoIosHome />,
      title: "Beranda",
      url: "/",
    },
    {
      icon: <RiArticleFill />,
      title: "Tur",
      url: "/tur",
    },
    {
      icon: <RiGalleryFill />,
      title: "Galeri",
      url: "/galeri",
    },
    {
      icon: <RiArticleFill />,
      title: "Artikel",
      url: "/artikel",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+628988551395";
    const waUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    window.open(waUrl, "_blank");
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden h-[60px] bg-core z-40 flex sticky left-0 top-0 w-full items-center px-4 justify-between">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              title="logo hasanahub"
              className="h-[60px] w-[60px] -mt-[2px]"
              width={100}
              height={100}
              alt="logo hasanahub"
            />
          </Link>
        </div>
        <div>
          <Button
            className="mr-3 flex items-center text-xs bg-textcore text-white py-2 px-3 rounded-lg"
            onClick={handleWhatsAppClick}
          >
            <AiOutlineWhatsApp className=" text-[16px] mr-1" /> Konsultasi
          </Button>
          <Button onClick={isOpen ? onClose : onOpen}>
            {isOpen ? (
              <AiOutlineClose className="text-xl" />
            ) : (
              <AiOutlineMenu className="text-xl" />
            )}
          </Button>
        </div>
      </div>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <div className="bg-white z-50 min-h-screen px-4 ">
              <div className="py-4 w-full flex items-center">
                <div>
                  <Image
                    src="/logohub.png"
                    title="logo hasanahub"
                    className="h-[60px] w-[60px] -mt-[2px]"
                    width={100}
                    height={100}
                    alt="logohub"
                  />
                </div>
                <div className="w-full text-right">
                  <Button
                    onClick={onClose}
                    className="border border-solid border-black rounded-lg text-sm py-1 px-2"
                  >
                    <IoIosCloseCircle className="mr-1" />
                    Tutup
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {data.map((dt, i) => (
                  <Link
                    href={dt.url}
                    key={`link-${i}`}
                    onClick={handleLinkClick}
                    passHref
                  >
                    <div
                      className={`${
                        pathname === dt.url
                          ? "bg-buttoncore   text-white font-bold"
                          : "bg-core"
                      } flex items-center p-3 rounded-lg font-bold hover:bg-semicore hover:text-white`}
                    >
                      {dt.icon}
                      <div className="pl-2">{dt.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Desktop Navbar */}
      <div className="hidden z-40 md:flex justify-between items-center px-16 bg-core sticky h-[79.4px] top-0 left-0 w-full">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              title="logo 3q desktop"
              className="h-[80px] w-[90px] -mt-[2px] bg-white"
              width={100}
              height={100}
              alt="logo hasanahub"
            />
          </Link>
          <div className="flex space-x-8 ml-8">
            {data.map((dt, i) => (
              <Link href={dt.url} key={`link-desktop-${i}`} passHref>
                <span
                  className={`${
                    pathname === dt.url ? "font-bold" : ""
                  } hover:font-bold`}
                >
                  {dt.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <Button
            colorScheme="teal"
            onClick={handleWhatsAppClick}
            variant="solid"
            className="bg-[#00429B] py-2 px-5 rounded-md flex items-center text-base font-semibold text-white mr-4"
          >
            <AiOutlineWhatsApp className=" text-xl mr-1" /> Konsultasi
          </Button>

          <div className="flex items-center">
            {/* Divider */}
            <div className="w-px bg-gray-400 h-8 ml-3 mr-5"></div>

            {/* User Icon/Image */}
            <Link href="/profile">
              {dummyUser ? (
                <Image
                  src={dummyUser}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                  href="../(website)/profile/page.js"
                />
              ) : (
                <FaUserCircle className="text-2xl bg-slate-500 rounded-xl text-white" />
              )}
              <div className="text-sm ml-2">Farhan_</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
