"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  CalendarIcon,
  AddIcon,
  MinusIcon,
} from "@chakra-ui/icons";

// Helper function for formatting numbers
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const Page = () => {

    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
  // State for selecting the date
  const [selectedDate, setSelectedDate] = useState(
    "1 Agustus 2024 - 4 Agustus 2024"
  );

  // State for number of adults
  const [adultCount, setAdultCount] = useState(1);

  // State for number of children
  const [childCount, setChildCount] = useState(0);

  // State for notes and voucher code
  const [notes, setNotes] = useState("");
  const [voucherCode, setVoucherCode] = useState("");

  // Total price and discount (for demonstration)
  const pricePerAdult = 500000; // Example price
  const pricePerChild = 250000; // Example price
  const discount = 0; // No discount applied

  const totalPrice = adultCount * pricePerAdult + childCount * pricePerChild;
  const finalPrice = totalPrice - discount;

  // Handlers
  const handleDateSelect = (dateRange) => {
    setSelectedDate(dateRange);
  };

  const handleAdultCountChange = (action) => {
    setAdultCount((prevCount) => {
      if (action === "increment") return prevCount + 1;
      if (action === "decrement" && prevCount > 0) return prevCount - 1;
      return prevCount;
    });
  };

  const handleChildCountChange = (action) => {
    setChildCount((prevCount) => {
      if (action === "increment") return prevCount + 1;
      if (action === "decrement" && prevCount > 0) return prevCount - 1;
      return prevCount;
    });
  };

  return (
    <>
      <Box p={"4rem"} display="flex" gap={"4rem"} backgroundColor={"#fff"}>
        {/* Div Kiri (70%) */}
        <Box w="70%">
          <Box
            borderWidth={1}
            borderRadius="21px"
            borderColor={"#00429B"}
            p={10}
            boxShadow="md"
          >
            <Text className="text-2xl font-bold pb-10 px-8 pt-4">
              Data Pemesanan
            </Text>
            <div className="px-10 pb-10 flex flex-col gap-6">
              <FormControl>
                <Input
                  placeholder="Nama Lengkap"
                  className="border rounded-md border-gray-200 w-11/12 py-3 text-base px-5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="md"
                  variant="outline"
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="No. WhatsApp"
                  className="border rounded-md border-gray-200 w-11/12 py-3 text-base px-5"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  size="md"
                  variant="outline"
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Email"
                  className="border rounded-md border-gray-200 w-11/12 py-3 text-base px-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md"
                  variant="outline"
                />
              </FormControl>
            </div>
          </Box>
        </Box>

        {/* Div Kanan (30%) */}
        <Box w="30%" position="sticky" top={10}>
          <Box
            borderWidth={1}
            borderRadius="21px"
            borderColor={"#00429B"}
            p={4}
            boxShadow="md"
          >
            <div className="py-4 px-8 border-b border-b-gray-200">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                Ringkasan Pemesanan
              </Text>
              <Text fontSize="24px" fontWeight="800">
                Bali 4 Hari 3 Malam
              </Text>
            </div>
            <div className="py-4 px-8 border-b border-b-gray-200">
              <Text className="text-textcore text-lg font-semibold" mb={5}>
                <strong> {selectedDate}</strong>
              </Text>
              <div className="flex gap-2 justify-between items-center py-1">
                <span className="flex items-center">
                  <Text
                    mb={2}
                    marginRight={8}
                    paddingBlock={8}
                    paddingInline={12}
                    borderRadius={"100px"}
                    backgroundColor={"#EFEFEF"}
                  >
                    {adultCount}
                  </Text>
                  <Text>Dewasa</Text>
                </span>
                <Text className="pt-1">Rp. 3.200.000</Text>
              </div>
              <div className="flex gap-2 justify-between items-center py-1">
                <span className="flex items-center">
                  <Text
                    mb={2}
                    marginRight={8}
                    paddingBlock={8}
                    paddingInline={12}
                    borderRadius={"100px"}
                    backgroundColor={"#EFEFEF"}
                  >
                    {" "}
                    {childCount}
                  </Text>
                  <Text>Anak (3-15 Tahun)</Text>
                </span>
                <Text className="pt-1">Rp. 3.200.000</Text>
              </div>
              <FormControl mt={10} mb={4}>
                <FormLabel
                  paddingBottom={10}
                  fontSize={"18px"}
                  fontWeight={700}
                >
                  Catatan
                </FormLabel>
                <Textarea
                  width="100%"
                  className="border border-gray-200 pt-4 pb-14 px-4 rounded-lg bg-[#EFEFEF66]"
                  value={notes || "Tidak ada catatan"}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </FormControl>
            </div>

            <div className="pt-5 pb-8 px-8 border-b border-b-gray-200">
              <FormControl mb={4}>
                <FormLabel
                  paddingBottom={10}
                  fontSize={"18px"}
                  fontWeight={700}
                >
                  Kode Voucher
                </FormLabel>
                <div className="flex gap-4">
                  <Input
                    className="border rounded-md border-gray-200 w-full text-base px-3"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                  />
                  <Button className="py-4 px-8 text-white rounded-md bg-textcore text-base">
                    Pakai
                  </Button>
                </div>
                <div className="bg-gray-200 pt-2 w-full pb-14 mt-2 rounded-md px-4">
                  Voucher Hari Raya
                </div>
              </FormControl>
            </div>

            <div className="py-5 px-8 border-b border-b-gray-200">
              <div className="flex justify-between">
                <Text className="text-base font-medium">Total</Text>
                <Text className="text-base">{formatCurrency(totalPrice)}</Text>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <Text className="text-base font-medium">
                    {voucherCode || null}
                  </Text>
                  <Text className="text-base"> {formatCurrency(discount)}</Text>
                </div>
              )}
            </div>

            <div className="py-5 px-8">
              <div className="flex justify-between pb-8">
                <Text className="text-xl font-bold">Total Tagihan</Text>
                <Text className="text-xl font-bold">
                  
                  {formatCurrency(finalPrice)}
                </Text>
              </div>
              <Button _pressed={"../invoice/page.js"} className="w-full py-3 bg-textcore text-white text-base font-bold rounded-md">
                Selanjutnya
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
