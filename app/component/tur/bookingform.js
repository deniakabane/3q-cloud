"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, CalendarIcon , AddIcon, MinusIcon} from "@chakra-ui/icons";

export default function BookingForm() {
  // State untuk memilih tanggal
  const [selectedDate, setSelectedDate] = useState("1 Agustus 2024 - 4 Agustus 2024");

  // Handler untuk memilih tanggal dari dropdown
  const handleDateSelect = (dateRange) => {
    setSelectedDate(dateRange);
  };

  // State for number of adults
  const [adultCount, setAdultCount] = useState(1);

  // State for number of children
  const [childCount, setChildCount] = useState(0);

  const handleAdultCountChange = (action) => {
    setAdultCount((prevCount) => {
      if (action === "increment") return prevCount + 1;
      if (action === "decrement" && prevCount > 0) return prevCount - 1;
      return prevCount;
    });
  };

  // Handler untuk mengubah jumlah anak-anak
  const handleChildCountChange = (action) => {
    setChildCount((prevCount) => {
      if (action === "increment") return prevCount + 1;
      if (action === "decrement" && prevCount > 0) return prevCount - 1;
      return prevCount;
    });
  };
  return (
    <Box p={5} boxShadow="md" borderWidth={1} borderRadius="md">
      <VStack spacing={4} align="stretch">
        {/* Form Pemilihan Jadwal */}
        <FormControl>
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

        {/* Form Jumlah Dewasa */}
        <FormControl>
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

        {/* Form Jumlah Anak-anak */}
        <FormControl>
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
        {/* Form Catatan */}
        <FormControl>
          <FormLabel>Catatan</FormLabel>
          <Textarea placeholder="Catatan tambahan" />
        </FormControl>

        {/* Kode Voucher */}
        <FormControl>
          <FormLabel>Kode Voucher</FormLabel>
          <Input placeholder="Masukkan kode voucher" />
        </FormControl>

        {/* Button Selanjutnya */}
        <Button colorScheme="blue">
          Selanjutnya
        </Button>
      </VStack>
    </Box>
  );
}
