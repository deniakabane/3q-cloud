import React from "react";
import Image from "next/image";
import { Accordion } from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import AccordionItemComponent from "../../../component/tur/accordionItemComponent";
import SwiperComponent from "@/app/component/tur/imageslider";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Tur",
    // description: "Paket Umroh Terpercaya",
  };
}

const dummyData = [
  {
    title: "Hari 1",
    description: "Kedatangan dan Eksplorasi Seminyak",
    details: [
      "Pick up at Hotel",
      "Go to Ubud",
      "Go to Tegalang",
      "Go To Kintamani And Lunch",
      "Go back to Hotel",
    ],
  },
  {
    title: "Hari 2",
    description: "Eksplorasi Ubud",
    details: [
      "Visit Monkey Forest",
      "Explore Ubud Market",
      "Lunch at Local Restaurant",
      "Visit Rice Terraces",
      "Return to Hotel",
    ],
  },
  {
    title: "Hari 3",
    description: "Perjalanan ke Nusa Dua",
    details: [
      "Transfer to Nusa Dua",
      "Beach Day",
      "Lunch at Beachside Cafe",
      "Snorkeling Activity",
      "Return to Hotel",
    ],
  },
  {
    title: "Hari 4",
    description: "Kembali ke Bandara",
    details: [
      "Check-out from Hotel",
      "Transfer to Airport",
      "Last Minute Shopping",
      "Departure",
    ],
  },
];

const Page = async ({}) => {
  return (
    <>
      <div className="flex px-14 py-10 gap-8">
        <div className="w-[75%] px-5">
          <div className="flex flex-col gap-5 pb-5">
            <div>
              <h1 className="font-bold text-3xl pb-3">Bali 4 Hari 3 Malam</h1>
            </div>
            <div className="w-full">
              <SwiperComponent />
            </div>
            <div className="bg-[#EFEFEF66] rounded-md p-4">
              <p className="text-base ">Perjalanan ini adalah kombinasi sempurna antara petualangan, relaksasi, dan pembelajaran budaya. Bali memiliki sesuatu untuk semua orang, baik itu pantai yang indah, budaya yang kaya, atau kuliner yang menggugah selera. Saya sangat merekomendasikan travel ini bagi siapa pun yang ingin mengeksplorasi keindahan dan keunikan Bali.</p>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-textcore p-5 rounded-t-md">
              <h1 className="text-2xl font-bold text-white">itinerary</h1>
            </div>
            <div className="py-8 px-6 border border-[#F3F3F3] rounded-b-md">
              <Accordion defaultIndex={[1]} allowMultiple>
                {dummyData.map((item, index) => (
                  <AccordionItemComponent
                    key={index}
                    title={item.title}
                    description={item.description}
                    details={item.details}
                  />
                ))}
              </Accordion>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-textcore p-5 rounded-t-md">
              <h1 className="text-2xl font-bold text-white">
                Fasilitas Termasuk
              </h1>
            </div>
            <div className="py-8 px-6 border border-[#F3F3F3] rounded-b-md">
              <div className="flex mb-2 items-center">
                <div className="w-[24px] mr-2">
                  <FaCircleCheck className="text-green-600" />
                </div>
                <div className="-mt-[3px] text-xl">ajhsfasjkdfb</div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-textcore p-5 rounded-t-md">
              <h1 className="text-2xl font-bold text-white">
                Fasilitas Tidak Termasuk
              </h1>
            </div>
            <div className="py-8 px-6 border border-[#F3F3F3] rounded-b-md">
              <div className="flex mb-2 items-center">
                <div className="w-[24px] mr-2">
                  <FaCircleXmark className="text-red-600" />
                </div>
                <div className="-mt-[3px] text-xl">ajhsfasjkdfb</div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-textcore p-5 rounded-t-md">
              <h1 className="text-2xl font-bold text-white">Ketentuan</h1>
            </div>
            <div className="py-8 px-10 border border-[#F3F3F3] rounded-b-md">
              <ul className="font-bold text-xl list-disc">
                <li className="mb-2">Pembayaran full</li>
                <li className="mb-2">Cancel H-1 Pembayaran Hangus</li>

                <li className="mb-2">Cancel H-1 Pembayaran Hangus</li>

                <li className="mb-2">Cancel H-1 Pembayaran Hangus</li>

              </ul>
            </div>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="flex-col gap-5 p-8 rounded-md">
          <div className="mb-5 pb-1.5">
                <h2 className="font-bold text-2xl">Daftar </h2>
              </div>
              <div className="px-2 py-4 flex justify-between bg-[#F3F3F3]">
                <div>Dewasa</div>
                <div></div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
