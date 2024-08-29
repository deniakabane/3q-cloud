"use client";

import Navbar from "../../component/transaksi/navbar";
import moment from "moment";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { formatCurrency } from "../../utils/formatCurrency";
import { Suspense } from "react";
import { Box, Button } from "@chakra-ui/react";
import { MdOutlineContentCopy } from "react-icons/md";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";

const Page = () => {
  // Dummy data for invoices and payments
  const dataInvoice = {
    transaksi: {
      code: "INV123456",
      expire_date: "2024-08-30T14:00:00",
      nominal: 1500000,
      transaksi_detail: [
        { item: "Product A", qty: 1, total: 500000 },
        { item: "Product B", qty: 2, total: 1000000 },
      ],
      payment: {
        norek: "1234567890",
        bank_name: "Bank Mandiri",
        account_name: "Hamba Allah yang Ganteng",
        image: {
          url_file: "/img/Mandiri.png", // Update this path with a valid image path
        },
        payment_method: [
          {
            nama: "Transfer Bank",
            langkah: [
              { deskripsi: "Masuk ke aplikasi perbankan Anda." },
              { deskripsi: "Pilih transfer ke rekening BCA." },
              { deskripsi: "Masukkan nomor rekening dan jumlah yang sesuai." },
              { deskripsi: "Konfirmasi dan selesaikan transaksi." },
            ],
          },
        ],
      },
    },
  };

  const dataInv = dataInvoice.transaksi;
  const dataPayment = dataInvoice.transaksi.payment;
  const dataExpire = moment(dataInv.expire_date).format(
    "dddd, DD MMMM YYYY [pukul] HH:mm"
  );

  const copyNominal = () => {
    const nominalValue = dataInv.nominal;
    navigator.clipboard.writeText(String(nominalValue));
    toast.success("Nominal Berhasil di Copy!");
  };

  const copyNorek = () => {
    const norekValue = dataPayment.norek;
    navigator.clipboard.writeText(String(norekValue));
    toast.success("Nomor Rekening Berhasil di Copy!");
  };

  return (
    <Suspense>
      <div className="min-h-screen zoom-costume-inv">
        <div className="md:hidden text-sm flex items-center z-40 bg-semicore sticky left-0 top-0 text-white px-4 h-[54px]">
          <div className="w-[40%]">
            <Link href="/">
              <button type="button" className="flex items-center">
                <AiOutlineHome className="text-lg mr-2" /> Beranda
              </button>
            </Link>
          </div>
          <div className="w-[10%] text-center font-bold"></div>
          <div className="w-[50%] flex justify-end">
            <Link href={`/pdf/invoice/${dataInv.code}`} target="_blank">
              <button type="button" className="flex items-center">
                <FaFileInvoice className="text-lg mr-2" /> Download Invoice
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden bg-core w-full md:flex bg-semicore sticky z-40 left-0 top-0 h-[54px]">
          <div className="max-w-xl w-full mx-auto flex items-center  bg-semicore text-white px-4 ">
            <div className="w-[30%]">
              <Link href="/">
                <button type="button" className="flex items-center">
                  <AiOutlineHome className="text-xl mr-2" /> Beranda
                </button>
              </Link>
            </div>
            <div className="w-[40%] text-center font-bold"></div>
            <div className="w-[30%]">
              <Link href={`/pdf/invoice/${dataInv.code}`} target="_blank">
                <button type="button" className="flex items-center">
                  <FaFileInvoice className="text-xl mr-2" /> Download Invoice
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:max-w-xl mx-auto md:flex md:mt-4">
          <div className="p-4">
            <div className="text-center text-sm font-montserrat bg-white border border-[#8F8F8F] rounded-xl p-5 pt-6 pb-7">
              <div className="border-b border-[#E3E3E3] pb-3">
                <div className="text-lg font-semibold">Status Invoice</div>
                <div className="text-lg font-bold text-textcore">
                  Menunggu Pembayaran
                </div>
              </div>
              <div className="border-b border-[#E3E3E3] py-3">
                <div className="text-lg font-semibold">No Invoice</div>
                <div className="text-lg font-bold text-textcore">
                  {dataInv.code}
                </div>
                <div className="text-sm pt-1">
                  Kami telah mengirimkan tagihan pembayaran ke email kamu,
                  Lakukan pembayaran sebelum
                </div>
                <div className="font-semibold text-[16px] pt-1 mb-2">
                  {dataExpire}
                </div>
              </div>
              <div className="pt-3 text-sm font-medium">
                Jumlah yang harus dibayar
              </div>
              <div className="font-bold text-3xl pt-1.5 flex justify-center items-center">
                {/* {formatCurrency(dataInv.nominal)} */} 9.500.000
                <Button
                  onClick={copyNominal}
                  className="flex items-center bg-semicore py-2 ml-2 text-white bg-textcore rounded-lg text-sm"
                >
                  <MdOutlineContentCopy className="w-[34px]" />
                </Button>{" "}
              </div>
              <div className="mt-4">Kirim Ke</div>
              <div>
                <Image
                  className="w-[80px] mx-auto h-[50px] object-contain"
                  src={dataPayment.image.url_file}
                  alt={dataPayment.bank_name}
                  width={200}
                  height={200}
                  title={dataPayment.bank_name}
                />
              </div>
              <div className="font-bold text-[16px]  mb-2">
                {dataPayment.bank_name}
              </div>
              <div className="font-bold text-[16px] mb-2">
                a/n: {dataPayment.account_name}
              </div>
              <div className="font-bold text-xl flex justify-center items-center">
                {dataPayment.norek}
                <Button
                  className="flex items-center bg-semicore py-1 px-2 ml-2 bg-textcore text-white rounded-lg text-sm"
                  onClick={copyNorek}
                >
                  <MdOutlineContentCopy className="" />
                </Button>
              </div>
            </div>
            <div className="text-left font-montserrat mt-4 text-sm bg-white border border-[#8F8F8F] rounded-xl p-5 pt-6 pb-6">
              <div className="font-bold text-lg border-b border-[#E3E3E3] pb-2 pt-0">
                Rincian Pemesanan :
              </div>
              <div className="text-left text-sm bg-white border-b border-[#E3E3E3] py-3">
                <div className="flex mb-1 items-end justify-between">
                  <div className=" font-semibold text-lg ">
                    Bali 4 Hari 3 Malam
                  </div>
                  <div className=" text-sm">Trip Code</div>
                </div>
                <div className="flex mb-4 items-end justify-between">
                  <div className="font-medium text-sm ">
                    25 Agustus 2024 - 29 Agustus 2024
                  </div>
                  <div className="font-semibold text-sm">#3QTRIP - A1YX16</div>
                </div>

                <div className="flex gap-2 justify-between text-sm items-center py-1">
                  <span className="flex items-center gap-1.5">
                    <div>2x</div>
                    <div>Dewasa</div>
                  </span>
                  <div className="pt-1">Rp. 3.200.000</div>
                </div>
                <div className="flex gap-2 justify-between text-sm items-center ">
                  <span className="flex items-center gap-1.5">
                    <div>1x</div>
                    <div>Anak Anak</div>
                  </span>
                  <div className="pt-1">Rp. 3.200.000</div>
                </div>
              </div>
              <div className="flex gap-2 justify-end pt-3 font-semibold text-sm items-center ">
                <span className="flex items-center gap-16">
                  <div>SubTotal</div>
                  <div>Rp. 9.500.000</div>
                </span>
              </div>
              <div className="flex gap-2 justify-end pt-3 font-semibold text-sm items-center ">
                <span className="flex items-center justify-start gap-16">
                  <div className="text-right">GrandTotal</div>
                  <div>Rp. 9.500.000</div>
                </span>
              </div>
            </div>

            <div className="font-bold text-lg pb-2 px-1 mt-5 pt-0">
              Panduan Pembayaran:
            </div>
            <Accordion allowToggle className="bg-white rounded-xl">
              {dataPayment.payment_method.map((pm, i) => (
                <AccordionItem
                  key={i}
                  className="border border-r-0 border-l-0 border-t-0 border-solid border-gray-200 last:border-none"
                >
                  <div className="bg-white text-thirdcore p-4 rounded-xl ">
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-bold "
                      >
                        <span className="text-sm">{pm.nama}</span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </div>
                  <AccordionPanel pb={4}>
                    <div className="px-4 pb-4">
                      <ul className="list-decimal pl-4 text-sm">
                        {pm.langkah.map((pl, i) => (
                          <li className="mb-2" key={i}>
                            {pl.deskripsi}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
