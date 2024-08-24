"use client"
import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Text, VStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, CalendarIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";

// Helper function for formatting numbers
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
};

const Page = () => {
  // State for selecting the date
  const [selectedDate, setSelectedDate] = useState("1 Agustus 2024 - 4 Agustus 2024");
  
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
    <Box p={5} display="flex" gap={5}>
      {/* Div Kiri (70%) */}
      <Box w="70%">
        {/* Date Selection Form */}
        <FormControl mb={4}>
          <FormLabel>Pilih Tanggal Keberangkatan</FormLabel>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="md"
              borderWidth={1}
              borderColor="gray.300"
              justifyContent="space-between"
              padding={4}
              variant="outline"
              width="full"
              textAlign="left"
            >
              <Box display="flex" alignItems="center" width="full">
                <CalendarIcon marginRight={2} />
                <Text flex="1" isTruncated>
                  {selectedDate}
                </Text>
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleDateSelect("1 Agustus 2024 - 4 Agustus 2024")}>
                1 Agustus 2024 - 4 Agustus 2024
              </MenuItem>
              <MenuItem onClick={() => handleDateSelect("5 Agustus 2024 - 10 Agustus 2024")}>
                5 Agustus 2024 - 10 Agustus 2024
              </MenuItem>
              <MenuItem onClick={() => handleDateSelect("11 Agustus 2024 - 15 Agustus 2024")}>
                11 Agustus 2024 - 15 Agustus 2024
              </MenuItem>
            </MenuList>
          </Menu>
        </FormControl>

        {/* Number of Adults Form */}
        <FormControl mb={4}>
          <FormLabel>Jumlah Dewasa</FormLabel>
          <Box
            display="flex"
            alignItems="center"
            borderWidth={1}
            borderRadius="md"
            borderColor="gray.300"
            p={2}
            gap={2}
            width="full"
          >
            <Text flex="1">Dewasa</Text>
            <IconButton
              aria-label="Kurangi jumlah dewasa"
              icon={<MinusIcon />}
              onClick={() => handleAdultCountChange("decrement")}
            />
            <Text>{adultCount}</Text>
            <IconButton
              aria-label="Tambah jumlah dewasa"
              icon={<AddIcon />}
              onClick={() => handleAdultCountChange("increment")}
            />
          </Box>
        </FormControl>

        {/* Number of Children Form */}
        <FormControl mb={4}>
          <FormLabel>Jumlah Anak-anak</FormLabel>
          <Box
            display="flex"
            alignItems="center"
            borderWidth={1}
            borderRadius="md"
            borderColor="gray.300"
            p={2}
            gap={2}
            width="full"
          >
            <Text flex="1">Anak-anak</Text>
            <IconButton
              aria-label="Kurangi jumlah anak-anak"
              icon={<MinusIcon />}
              onClick={() => handleChildCountChange("decrement")}
            />
            <Text>{childCount}</Text>
            <IconButton
              aria-label="Tambah jumlah anak-anak"
              icon={<AddIcon />}
              onClick={() => handleChildCountChange("increment")}
            />
          </Box>
        </FormControl>

        {/* Notes Form */}
        <FormControl mb={4}>
          <FormLabel>Catatan</FormLabel>
          <Textarea
            placeholder="Catatan tambahan"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormControl>

        {/* Voucher Code Form */}
        <FormControl mb={4}>
          <FormLabel>Kode Voucher</FormLabel>
          <Input
            placeholder="Masukkan kode voucher"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
          />
        </FormControl>

        {/* Next Button */}
        <Button colorScheme="blue">
          Selanjutnya
        </Button>
      </Box>

      {/* Div Kanan (30%) */}
      <Box w="30%" position="sticky" top={10}>
        <Box borderWidth={1} borderRadius="md" p={4} boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Ringkasan Paket</Text>
          <Text mb={2}><strong>Tanggal Keberangkatan:</strong> {selectedDate}</Text>
          <Text mb={2}><strong>Jumlah Dewasa:</strong> {adultCount}</Text>
          <Text mb={2}><strong>Jumlah Anak-anak:</strong> {childCount}</Text>
          <Text mb={2}><strong>Catatan:</strong> {notes || "Tidak ada catatan"}</Text>
          <Text mb={2}><strong>Kode Voucher:</strong> {voucherCode || "Tidak ada kode voucher"}</Text>
          <Text mb={2}><strong>Harga Total:</strong> {formatCurrency(totalPrice)}</Text>
          {discount > 0 && (
            <Text mb={2} color="red.500"><strong>Potongan Kode Voucher:</strong> {formatCurrency(discount)}</Text>
          )}
          <Text mb={4}><strong>Total Harga Setelah Diskon:</strong> {formatCurrency(finalPrice)}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
