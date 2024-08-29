"use client";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar({ judul, back = true }) {
  const router = useRouter();

  return (
    <>
      <div className="md:hidden  flex items-center z-40 bg-semicore sticky left-0 top-0 text-white px-4 h-[54px]">
        <div className="w-[20%]">
          {back && (
            <button type="button" onClick={() => router.back()}>
              <TbArrowBackUp className="text-xl" />
            </button>
          )}
        </div>
        <div className="w-full text-center font-bold">{judul}</div>
        <div className="w-[20%]"></div>
      </div>
      <div className="hidden w-full md:flex bg-semicore sticky z-40 left-0 top-0 h-[54px]">
        <div className="max-w-4xl w-full mx-auto flex items-center  bg-semicore text-white px-4 ">
          <div className="w-[20%]">
            {back && (
              <button
                type="button"
                className="flex items-center"
                onClick={() => router.back()}
              >
                <TbArrowBackUp className="text-xl mr-2" /> Kembali
              </button>
            )}
          </div>
          <div className="w-full text-center font-bold">{judul}</div>
          <div className="w-[20%]"></div>
        </div>
      </div>
    </>
  );
}
