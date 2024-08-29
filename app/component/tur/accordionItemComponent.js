import React from "react";
import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Flex } from "@chakra-ui/react";

const AccordionItemComponent = ({ title, description, details }) => {
  return (
    <AccordionItem marginBottom={"7px"}>
      <Flex >
        {/* Left Section Title */}
        <Box width={"20%"} paddingRight={10}>
          <AccordionButton
            bg="#F3F3F3"
            p={8}
            _expanded={{ bg: "gray.300" }}
            borderRadius="md"
            justifyContent="space-between"
          >
            <Box className="text-sm md:text-xl" as="span" flex="1" textAlign="center">
              {title}
            </Box>
          </AccordionButton>
        </Box>

        {/* Right Section Title and Panel */}
        <Box width={"80%"}>
          <AccordionButton
            bg="#F3F3F3"
            p={8}
            _expanded={{ bg: "gray.300" }}
            borderRadius="md"
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <Box className="text-sm md:text-xl" as="span" flex="1" paddingLeft={10} textAlign="left">
              {description}
            </Box>
            <AccordionIcon fontSize={'27px'} />
          </AccordionButton>
          <AccordionPanel pb={4} pl={6}>
            <ul className="list-disc md:px-10 px-7 py-5 flex flex-col gap-2 md:text-lg text-sm">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </AccordionPanel>
        </Box>
      </Flex>
    </AccordionItem>
  );
};

export default AccordionItemComponent;
