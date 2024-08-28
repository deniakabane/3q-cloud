"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Button,
  Text,
  Icon,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { ChevronRightIcon, DownloadIcon, AddIcon } from "@chakra-ui/icons";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  // Dummy data for order history
  const orderHistory = [
    {
      id: 1,
      tour: "Bali 4 Hari 3 Malam",
      dateRange: "25 Agustus 2024 - 29 Agustus 2024",
      travelers: "2 Dewasa | 1 Anak",
      status: "Menunggu Pembayaran",
      orderDate: "1 Agustus 2024",
    },
    {
      id: 2,
      tour: "Yogyakarta 3 Hari 2 Malam",
      dateRange: "15 Juli 2024 - 17 Juli 2024",
      travelers: "1 Dewasa",
      status: "Lunas",
      orderDate: "10 Juli 2024",
    },
    {
      id: 3,
      tour: "Lombok 5 Hari 4 Malam",
      dateRange: "5 Oktober 2024 - 9 Oktober 2024",
      travelers: "3 Dewasa | 2 Anak",
      status: "Dibatalkan",
      orderDate: "20 September 2024",
    },
    {
      id: 4,
      tour: "Jakarta One Day Tour",
      dateRange: "12 November 2024",
      travelers: "4 Dewasa",
      status: "Lunas",
      orderDate: "2 November 2024",
    },
  ];

  const handleUploadClick = () => {
    // Logic untuk mengunggah gambar dan menyimpan URL gambar ke state
    const imageUrl = "url-gambar-anda"; // Ganti dengan logika yang sesuai untuk mendapatkan URL gambar
    setUploadedImage(imageUrl);
  };

  const handleDeleteClick = () => {
    setUploadedImage(null); // Hapus gambar yang diunggah
  };

  // Function to render content based on selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case "profile":
        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <div className="border border-[#E5E5E5] p-10 rounded-[10px]">
              <VStack align="start" spacing={4} mb={"3rem"}>
                <Text fontWeight="bold" fontSize="24px" paddingBottom={"15px"}>
                  Profile
                </Text>
                <div className="w-full flex gap-8 py-5">
                  {/* Left Column */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="150px"
                    height="150px"
                    borderRadius="full"
                    bg="gray.200"
                    overflow="hidden"
                    mr={4}
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Icon
                        as={FaUserCircle}
                        boxSize="150px"
                        color="gray.500"
                      />
                    )}
                  </Box>

                  {/* Right Column */}
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                  >
                    <DownloadIcon
                      boxSize="24px"
                      color="blue.500"
                      transform="rotate(180deg)"
                    />
                    <Text fontSize="sm" paddingTop={6} color="gray.700">
                      Upload Jpeg 2mb
                    </Text>
                  </Flex>
                </div>
                <div className="w-full flex flex-col gap-6 py-4">
                  <FormControl>
                    <FormLabel paddingBottom={"10px"}>Nama Lengkap</FormLabel>
                    <Input
                      placeholder="Tulis Nama Lengkap"
                      className="border border-[#838383] w-full py-3 text-base px-5"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      size="md"
                      variant="outline"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel paddingBottom={"10px"}>Email</FormLabel>
                    <Input
                      placeholder="Tulis Email"
                      className="border border-[#838383] w-full py-3 text-base px-5"
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
                      size="md"
                      variant="outline"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel paddingBottom={"10px"}>
                      No Handphone/WhatsApp
                    </FormLabel>
                    <Input
                      placeholder="No. WhatsApp"
                      className="border border-[#838383] w-full py-3 text-base px-5"
                      //   value={whatsapp}
                      //   onChange={(e) => setWhatsapp(e.target.value)}
                      size="md"
                      variant="outline"
                    />
                  </FormControl>
                </div>
              </VStack>
              <div className="flex justify-end">
                <Button className="py-3 px-12 bg-textcore text-white text-lg font-bold rounded-md">
                  Simpan
                </Button>
              </div>
            </div>
          </Box>
        );
      case "orders":
        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <div className="border border-[#E5E5E5] p-8 rounded-[10px]">
              <VStack align="start" spacing={4} mb={"3rem"}>
                <Text fontWeight="bold" fontSize="24px" paddingBottom={"24px"}>
                  Riwayat Pemesanan
                </Text>
                <div className="w-full flex flex-col gap-3">
                  {/* Header Row */}
                  <div className="p-2 font-bold text-lg rounded-md bg-[#F2F5F9] grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4">
                    <div>Tur</div>
                    <div>Status</div>
                    <div>Tanggal Pesan</div>
                    <div className="text-center">Invoice</div>
                  </div>
                  {/* Data Rows */}
                  {orderHistory.map((order) => (
                    <div
                      key={order.id}
                      className="pb-4 px-2 pt-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 border-b border-dashed border-[#8F8F8F] justify-between w-full"
                    >
                      <div>
                        <Text fontSize={"16px"} fontWeight={600}>
                          {order.tour}
                        </Text>
                        <Text fontSize={"14px"} fontWeight={400}>
                          {order.dateRange}
                        </Text>
                        <span className="flex gap-3 font-normal text-sm">
                          <Text>{order.travelers}</Text>
                        </span>
                      </div>
                      <div
                        className={`text-sm font-bold ${
                          order.status === "Lunas"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {order.status}
                      </div>
                      <div className="text-sm">{order.orderDate}</div>
                      <div className="text-center">
                        <DownloadIcon />
                      </div>
                    </div>
                  ))}
                </div>
              </VStack>
            </div>
          </Box>
        );
      case "documents":
        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <div className="border border-[#E5E5E5] p-8 rounded-[10px]">
              <VStack align="start" spacing={4} mb={"3rem"}>
                <Text fontWeight="bold" fontSize="24px" paddingBottom={"15px"}>
                  Dokumen
                </Text>
                <div className="w-full flex flex-col gap-3">
                  <Text fontSize={"17px"}>
                    Disclamer . Dokumen diperlukan untuk perjalanan anda
                  </Text>
                  <div className="flex gap-3 justify-start items-center">
                    <Button
                      leftIcon={<AddIcon fontSize={"10px"} />}
                      colorScheme="red"
                      variant="solid"
                      backgroundColor={"transparent"}
                      borderRadius={"8px"}
                      px={8}
                      py={4}
                      fontSize={"10px"}
                      fontWeight={500}
                      borderWidth={2}
                      borderColor={"black"}
                      justifyContent={"space-between"}
                      textColor={"#000"}
                      onClick={handleUploadClick}
                    >
                      Upload
                    </Button>
                    <Text>Jpg/PNG/PDF Max 2mb</Text>
                  </div>

                  {/* Kondisi untuk menampilkan gambar yang diunggah */}
                  {uploadedImage && (
                    <div className="flex items-center justify-between mt-4 p-2 border rounded-md">
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        style={{ width: "100px", height: "auto" }}
                      />
                      <Button onClick={handleDeleteClick}>
                        <DeleteIcon />
                      </Button>
                    </div>
                  )}
                </div>
              </VStack>
            </div>
          </Box>
        );
      default:
        return renderContent("profile");
    }
  };

  return (
    <Flex
      height="100vh"
      padding="4rem"
      backgroundColor={"#fff"}
      fontFamily={"montserrat"}
      gap={"2rem"}
    >
      {/* Left Column */}
      <Box
        width="30%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <div className="border border-[#E5E5E5] p-8 rounded-[10px]">
          {/* User Name */}
          <VStack align="start" spacing={4} mb={"3rem"}>
            <Text fontWeight="bold" fontSize="24px" paddingBottom={"24px"}>
              Farhan_
            </Text>

            {/* Menu Items */}
            <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              pb={7}
              mb={8}
              borderBottomWidth={1}
              borderColor={"#F4F4F4"}
              cursor="pointer"
              onClick={() => setSelectedMenu("orders")}
            >
              <Text fontSize={"17px"} fontWeight={500}>
                Riwayat Pemesanan
              </Text>
              <ChevronRightIcon fontSize={"20px"} />
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              pb={7}
              mb={8}
              borderBottomWidth={1}
              borderColor={"#F4F4F4"}
              cursor="pointer"
              onClick={() => setSelectedMenu("profile")}
            >
              <Text fontSize={"17px"} fontWeight={500}>
                Profile
              </Text>
              <ChevronRightIcon fontSize={"20px"} />
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              pb={7}
              mb={8}
              borderBottomWidth={1}
              borderColor={"#F4F4F4"}
              cursor="pointer"
              onClick={() => setSelectedMenu("documents")}
            >
              <Text fontSize={"17px"} fontWeight={500}>
                Dokumen
              </Text>
              <ChevronRightIcon fontSize={"20px"} />
            </Flex>
          </VStack>

          {/* Logout Button */}
          <Button
            rightIcon={<FaSignOutAlt fontSize={"20px"} />}
            colorScheme="red"
            variant="solid"
            backgroundColor={"#00429B"}
            borderRadius={"8px"}
            width="100%"
            p={15}
            fontSize={"17px"}
            fontWeight={500}
            justifyContent={"space-between"}
            textColor={"#fff"}
            onClick={() => alert("Logout")}
          >
            Keluar
          </Button>
        </div>
      </Box>

      {/* Right Column */}
      <Box width="70%" p={4}>
        {renderContent()}
      </Box>
    </Flex>
  );
};

export default ProfilePage;
