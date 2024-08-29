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
import Link from "next/link";

// Helper function for formatting numbers
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const Page = () => {
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
      <div className="md:hidden">
        <Box
          p={"1.5rem"}
          display="flex"
          flexDirection={"column"}
          gap={"2rem"}
          backgroundColor={"#fff"}
        >
          {/* Div Kiri (70%) */}
          <Box w="100%">
            {/* Date Selection Form */}
            <FormControl mb={"2rem"}>
              <FormLabel paddingBottom={10} fontSize={"16px"} fontWeight={500}>
                Pilih Jadwal
              </FormLabel>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={
                    <ChevronDownIcon fontSize={22} color={"#33333333"} />
                  }
                  borderRadius="8px"
                  borderWidth={1}
                  borderColor="#33333333"
                  justifyContent="space-between"
                  padding={10}
                  variant="outline"
                  width="100%"
                  textAlign="left"
                >
                  <Box display="flex" alignItems="center" width="full">
                    <CalendarIcon
                      marginRight={10}
                      marginLeft={8}
                      color={"#33333333"}
                      fontSize={18}
                    />
                    <Text
                      fontSize={"14px"}
                      fontWeight={500}
                      flex="1"
                      isTruncated
                    >
                      {selectedDate}
                    </Text>
                  </Box>
                </MenuButton>
                <Portal>
                  <MenuList
                    zIndex={2}
                    position={"relative"}
                    borderRadius="8px"
                    borderWidth={1}
                    borderColor="#33333333"
                    justifyContent="space-between"
                    paddingLeft={10}
                    variant="outline"
                    width="100%"
                    textAlign="left"
                    backgroundColor={"#FFF"}
                  >
                    <MenuItem
                      onClick={() =>
                        handleDateSelect("1 Agustus 2024 - 4 Agustus 2024")
                      }
                      _hover={{ bg: "#EFEFEF66  " }}
                    >
                      <Box
                        borderBottomWidth={1}
                        borderColor="#33333333"
                        paddingBottom={8}
                        paddingEnd={8}
                        paddingTop={8}
                        display="flex"
                        alignItems="center"
                        width="full"
                      >
                        <CalendarIcon
                          marginRight={10}
                          marginLeft={8}
                          color={"#33333333"}
                          fontSize={18}
                        />
                        <Text
                          fontSize={"14px"}
                          fontWeight={500}
                          flex="1"
                          isTruncated
                        >
                          1 Agustus 2024 - 4 Agustus 2024
                        </Text>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleDateSelect("5 Agustus 2024 - 10 Agustus 2024")
                      }
                      _hover={{ bg: "#EFEFEF66  " }}
                    >
                      <Box
                        borderBottomWidth={1}
                        borderColor="#33333333"
                        paddingBottom={8}
                        paddingEnd={8}
                        paddingTop={8}
                        display="flex"
                        alignItems="center"
                        width="full"
                      >
                        <CalendarIcon
                          marginRight={10}
                          marginLeft={8}
                          color={"#33333333"}
                          fontSize={18}
                        />
                        <Text
                          fontSize={"14px"}
                          fontWeight={500}
                          flex="1"
                          isTruncated
                        >
                          5 Agustus 2024 - 10 Agustus 2024
                        </Text>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleDateSelect("11 Agustus 2024 - 15 Agustus 2024")
                      }
                      _hover={{ bg: "#EFEFEF66  " }}
                    >
                      <Box
                        paddingBottom={8}
                        paddingEnd={8}
                        paddingTop={8}
                        display="flex"
                        alignItems="center"
                        width="full"
                      >
                        <CalendarIcon
                          marginRight={10}
                          marginLeft={8}
                          color={"#33333333"}
                          fontSize={18}
                        />
                        <Text
                          fontSize={"14px"}
                          fontWeight={500}
                          flex="1"
                          isTruncated
                        >
                          11 Agustus 2024 - 15 Agustus 2024
                        </Text>
                      </Box>
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </FormControl>

            {/* Number of Adults Form */}
            <FormControl mb={10}>
              <FormLabel paddingBottom={10} fontSize={"16px"} fontWeight={500}>
                Wisatawan
              </FormLabel>
              <Box
                display="flex"
                alignItems="center"
                borderWidth={1}
                borderRadius="8px"
                borderColor="gray.300"
                gap={2}
                width="full"
              >
                <div className="flex-1 py-2 px-5">
                  <Text className="text-sm font-medium">Dewasa</Text>
                </div>
                <div className="flex rounded-s-md rounded-e-lg border border-gray-200">
                  <div className="px-3 py-2.5 rounded-s-lg border border-gray-200">
                    <IconButton
                      fontSize={18}
                      aria-label="Kurangi jumlah dewasa"
                      icon={<MinusIcon width={16} />}
                      onClick={() => handleAdultCountChange("decrement")}
                    />
                  </div>
                  <div className="px-4 py-2.5 border border-textcore bg-textcore">
                    <Text className="text-white">{adultCount}</Text>
                  </div>
                  <div className="px-3 py-2.5 rounded-e-lg border border-gray-200">
                    <IconButton
                      fontSize={18}
                      aria-label="Tambah jumlah dewasa"
                      icon={<AddIcon width={16} />}
                      onClick={() => handleAdultCountChange("increment")}
                    />
                  </div>
                </div>
              </Box>
            </FormControl>

            {/* Number of Children Form */}
            <FormControl mb={20}>
              <Box
                display="flex"
                alignItems="center"
                borderWidth={1}
                borderRadius="8px"
                borderColor="gray.300"
                gap={2}
                width="full"
              >
                <div className="flex-1 py-2 px-5">
                  <Text className="font-medium text-sm">Anak-anak</Text>
                </div>
                <div className="flex rounded-s-md rounded-e-lg border border-gray-200">
                  <div className="px-3 py-2.5 rounded-s-lg border border-gray-200">
                    <IconButton
                      fontSize={18}
                      aria-label="Kurangi jumlah anak-anak"
                      icon={<MinusIcon width={16} />}
                      onClick={() => handleChildCountChange("decrement")}
                    />
                  </div>
                  <div className="px-4 py-2.5 border border-textcore bg-textcore">
                    <Text className="text-white">{childCount}</Text>
                  </div>
                  <div className="px-3 py-2.5 rounded-e-lg border border-gray-200">
                    <IconButton
                      fontSize={18}
                      aria-label="Tambah jumlah anak-anak"
                      icon={<AddIcon width={16} />}
                      onClick={() => handleChildCountChange("increment")}
                    />
                  </div>
                </div>
              </Box>
            </FormControl>

            {/* Notes Form */}
            <FormControl mb={4}>
              <FormLabel paddingBottom={10} fontSize={"16px"} fontWeight={500}>
                Catatan
              </FormLabel>
              <Textarea
                width="100%"
                className="border border-gray-200 pt-4 pb-14 px-4 text-sm rounded-lg"
                placeholder="Tulis disini"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormControl>
          </Box>
          {/* Div Kanan (30%) */}
          <Box w="100%" top={10}>
            <Box
              borderWidth={1}
              borderRadius="21px"
              borderColor={"#00429B"}
              p={4}
              boxShadow="md"
            >
              <div className="p-4 border-b border-b-gray-200">
                <Text fontSize="16px" fontWeight="bold" mb={2}>
                  Ringkasan Pemesanan
                </Text>
                <Text fontSize="20px" fontWeight="800">
                  Bali 4 Hari 3 Malam
                </Text>
              </div>
              <div className="py-4 px-8 border-b border-b-gray-200">
                <Text className="text-textcore text-base font-semibold" mb={10}>
                  <strong> {selectedDate}</strong>
                </Text>
                <div className="flex gap-2 justify-between items-center py-1">
                  <span className="flex items-center">
                    <Text
                      mb={2}
                      marginRight={8}
                      paddingBlock={8}
                      paddingInline={10}
                      borderRadius={"100px"}
                      backgroundColor={"#EFEFEF"}
                      fontSize={"14px"}
                    >
                      {adultCount}
                    </Text>
                    <Text fontSize={"14px"}>Dewasa</Text>
                  </span>
                  <Text className="pt-1 text-sm">Rp. 3.200.000</Text>
                </div>
                <div className="flex gap-2 justify-between items-center py-1">
                  <span className="flex items-center">
                    <Text
                      mb={2}
                      marginRight={8}
                      paddingBlock={8}
                      paddingInline={10}
                      fontSize={"14px"}
                      borderRadius={"100px"}
                      backgroundColor={"#EFEFEF"}
                    >
                      {childCount}
                    </Text>
                    <Text fontSize={"14px"}>Anak (3-15 Tahun)</Text>
                  </span>
                  <Text className="pt-1 text-sm">Rp. 3.200.000</Text>
                </div>
                <FormControl mt={10} mb={4}>
                  <FormLabel
                    paddingBottom={10}
                    fontSize={"16px"}
                    fontWeight={700}
                  >
                    Catatan
                  </FormLabel>
                  <Textarea
                    width="100%"
                    className="border text-sm border-gray-200 pt-4 pb-14 px-4 rounded-lg bg-[#EFEFEF66]"
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
                      className="border p-0 rounded-md border-gray-200 w-full text-base"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                    />
                    <Button className="p-4 text-white rounded-md bg-textcore text-base">
                      Pakai
                    </Button>
                  </div>
                  <div className="bg-gray-200 text-base pt-2 w-full pb-14 mt-2 rounded-md px-4">
                    Voucher Hari Raya
                  </div>
                </FormControl>
              </div>

              <div className="py-5 px-8 border-b border-b-gray-200">
                <div className="flex justify-between">
                  <Text className="text-sm font-medium">Total</Text>
                  <Text className="text-sm">{formatCurrency(totalPrice)}</Text>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <Text className="text-base font-medium">
                      {voucherCode || null}
                    </Text>
                    <Text className="text-base">
                      {" "}
                      {formatCurrency(discount)}
                    </Text>
                  </div>
                )}
              </div>

              <div className="py-5 px-8">
                <div className="flex justify-between pb-8">
                  <Text className="text-lg font-bold">Total Tagihan</Text>
                  <Text className="text-lg font-bold">
                    {" "}
                    {formatCurrency(finalPrice)}
                  </Text>
                </div>
                <Button
                  href="/app/(transaksi)/formPemesanan/page.js"
                  className="w-full py-3 bg-textcore text-white text-base font-bold rounded-md"
                >
                  Selanjutnya
                </Button>
              </div>
            </Box>
          </Box>
          <FormControl mb={40}>
            <Box
              display="flex"
              alignItems="center"
              borderWidth={1}
              borderRadius="8px"
              borderColor="gray.300"
              gap={2}
              width="full"
            >
              <div className="flex-1 py-2 px-5">
                <Text className="font-medium text-lg">Anak-anak</Text>
              </div>
              <div className="flex rounded-s-md rounded-e-lg border border-gray-200">
                <div className="px-3 py-2.5 rounded-s-lg border border-gray-200">
                  <IconButton
                    fontSize={22}
                    aria-label="Kurangi jumlah anak-anak"
                    icon={<MinusIcon />}
                    onClick={() => handleChildCountChange("decrement")}
                  />
                </div>
                <div className="px-4 py-2.5 border border-textcore bg-textcore">
                  <Text className="text-white">{childCount}</Text>
                </div>
                <div className="px-3 py-2.5 rounded-e-lg border border-gray-200">
                  <IconButton
                    aria-label="Tambah jumlah anak-anak"
                    icon={<AddIcon />}
                    onClick={() => handleChildCountChange("increment")}
                  />
                </div>
              </div>
            </Box>
          </FormControl>
          {/* Notes Form */}
          <FormControl mb={4}>
            <FormLabel paddingBottom={15} fontSize={"18px"} fontWeight={500}>
              Catatan
            </FormLabel>
            <Textarea
              width="100%"
              className="border border-gray-200 pt-4 pb-14 px-4 rounded-lg"
              placeholder="Tulis disini"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
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
                  {" "}
                  {formatCurrency(finalPrice)}
                </Text>
              </div>
              <Link href="/formPemesanan">
                <Button className="w-full py-3 bg-textcore text-white text-base font-bold rounded-md">
                  Selanjutnya
                </Button>
              </Link>
            </div>
          </Box>
        </Box>
      </div>

      {/* ini desktop yang di atas mobile */}
      <div className="hidden md:block">
        <Box p={"4rem"} display="flex" gap={"4rem"} backgroundColor={"#fff"}>
          {/* Div Kiri (70%) */}
          <Box w="70%">
            {/* Date Selection Form */}
            <FormControl mb={"2rem"}>
              <FormLabel paddingBottom={10} fontSize={"18px"} fontWeight={500}>
                Pilih Jadwal
              </FormLabel>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={
                    <ChevronDownIcon fontSize={22} color={"#33333333"} />
                  }
                  borderRadius="8px"
                  borderWidth={1}
                  borderColor="#33333333"
                  justifyContent="space-between"
                  padding={10}
                  variant="outline"
                  width="100%"
                  textAlign="left"
                >
                  <Box display="flex" alignItems="center" width="full">
                    <CalendarIcon
                      marginRight={10}
                      marginLeft={8}
                      color={"#33333333"}
                      fontSize={22}
                    />
                    <Text
                      fontSize={"18px"}
                      fontWeight={500}
                      flex="1"
                      isTruncated
                    >
                      {selectedDate}
                    </Text>
                  </Box>
                </MenuButton>
                <Portal>
                  <MenuList
                    zIndex={2}
                    position={"relative"}
                    borderRadius="8px"
                    borderWidth={1}
                    borderColor="#33333333"
                    justifyContent="space-between"
                    paddingLeft={10}
                    variant="outline"
                    width="100%"
                    textAlign="left"
                    backgroundColor={"#FFF"}
                  >
                    <MenuItem
                      onClick={() =>
                        handleDateSelect("1 Agustus 2024 - 4 Agustus 2024")
                      }
                      _hover={{ bg: "#EFEFEF66  " }}
                    >
                      <Box
                        borderBottomWidth={1}
                        borderColor="#33333333"
                        paddingBottom={8}
                        paddingEnd={8}
                        paddingTop={8}
                        display="flex"
                        alignItems="center"
                        width="full"
                      >
                        <CalendarIcon
                          marginRight={10}
                          marginLeft={8}
                          color={"#33333333"}
                          fontSize={22}
                        />
                        <Text
                          fontSize={"18px"}
                          fontWeight={500}
                          flex="1"
                          isTruncated
                        >
                          1 Agustus 2024 - 4 Agustus 2024
                        </Text>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleDateSelect("5 Agustus 2024 - 10 Agustus 2024")
                      }
                      _hover={{ bg: "#EFEFEF66  " }}
                    >
                      <Box
                        borderBottomWidth={1}
                        borderColor="#33333333"
                        paddingBottom={8}
                        paddingEnd={8}
                        paddingTop={8}
                        display="flex"
                        alignItems="center"
                        width="full"
                      >
                        <CalendarIcon
                          marginRight={10}
                          marginLeft={8}
                          color={"#33333333"}
                          fontSize={22}
                        />
                        <Text
                          fontSize={"18px"}
                          fontWeight={500}
                          flex="1"
                          isTruncated
                        >
                          5 Agustus 2024 - 10 Agustus 2024
                        </Text>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleDateSelect("11 Agustus 2024 - 15 Agustus 2024")
                      }
                      _hover={{ bg: "#EFEFEF66  " }}
                    >
                      <Box
                        paddingBottom={8}
                        paddingEnd={8}
                        paddingTop={8}
                        display="flex"
                        alignItems="center"
                        width="full"
                      >
                        <CalendarIcon
                          marginRight={10}
                          marginLeft={8}
                          color={"#33333333"}
                          fontSize={22}
                        />
                        <Text
                          fontSize={"18px"}
                          fontWeight={500}
                          flex="1"
                          isTruncated
                        >
                          11 Agustus 2024 - 15 Agustus 2024
                        </Text>
                      </Box>
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </FormControl>

            {/* Number of Adults Form */}
            <FormControl mb={10}>
              <FormLabel paddingBottom={10} fontSize={"18px"} fontWeight={500}>
                Wisatawan
              </FormLabel>
              <Box
                display="flex"
                alignItems="center"
                borderWidth={1}
                borderRadius="8px"
                borderColor="gray.300"
                gap={2}
                width="full"
              >
                <div className="flex-1 py-2 px-5">
                  <Text className="text-lg font-medium">Dewasa</Text>
                </div>
                <div className="flex rounded-s-md rounded-e-lg border border-gray-200">
                  <div className="px-3 py-2.5 rounded-s-lg border border-gray-200">
                    <IconButton
                      fontSize={22}
                      aria-label="Kurangi jumlah dewasa"
                      icon={<MinusIcon />}
                      onClick={() => handleAdultCountChange("decrement")}
                    />
                  </div>
                  <div className="px-4 py-2.5 border border-textcore bg-textcore">
                    <Text className="text-white">{adultCount}</Text>
                  </div>
                  <div className="px-3 py-2.5 rounded-e-lg border border-gray-200">
                    <IconButton
                      aria-label="Tambah jumlah dewasa"
                      icon={<AddIcon />}
                      onClick={() => handleAdultCountChange("increment")}
                    />
                  </div>
                </div>
              </Box>
            </FormControl>

            {/* Number of Children Form */}
            <FormControl mb={40}>
              <Box
                display="flex"
                alignItems="center"
                borderWidth={1}
                borderRadius="8px"
                borderColor="gray.300"
                gap={2}
                width="full"
              >
                <div className="flex-1 py-2 px-5">
                  <Text className="font-medium text-lg">Anak-anak</Text>
                </div>
                <div className="flex rounded-s-md rounded-e-lg border border-gray-200">
                  <div className="px-3 py-2.5 rounded-s-lg border border-gray-200">
                    <IconButton
                      fontSize={22}
                      aria-label="Kurangi jumlah anak-anak"
                      icon={<MinusIcon />}
                      onClick={() => handleChildCountChange("decrement")}
                    />
                  </div>
                  <div className="px-4 py-2.5 border border-textcore bg-textcore">
                    <Text className="text-white">{childCount}</Text>
                  </div>
                  <div className="px-3 py-2.5 rounded-e-lg border border-gray-200">
                    <IconButton
                      aria-label="Tambah jumlah anak-anak"
                      icon={<AddIcon />}
                      onClick={() => handleChildCountChange("increment")}
                    />
                  </div>
                </div>
              </Box>
            </FormControl>

            {/* Notes Form */}
            <FormControl mb={4}>
              <FormLabel paddingBottom={15} fontSize={"18px"} fontWeight={500}>
                Catatan
              </FormLabel>
              <Textarea
                width="100%"
                className="border border-gray-200 pt-4 pb-14 px-4 rounded-lg"
                placeholder="Tulis disini"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormControl>
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
                  <Text className="text-base">
                    {formatCurrency(totalPrice)}
                  </Text>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <Text className="text-base font-medium">
                      {voucherCode || null}
                    </Text>
                    <Text className="text-base">
                      {" "}
                      {formatCurrency(discount)}
                    </Text>
                  </div>
                )}
              </div>

              <div className="py-5 px-8">
                <div className="flex justify-between pb-8">
                  <Text className="text-xl font-bold">Total Tagihan</Text>
                  <Text className="text-xl font-bold">
                    {" "}
                    {formatCurrency(finalPrice)}
                  </Text>
                </div>
                <Button
                  href="/app/(transaksi)/formPemesanan/page.js"
                  className="w-full py-3 bg-textcore text-white text-base font-bold rounded-md"
                >
                  Selanjutnya
                </Button>
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Page;
