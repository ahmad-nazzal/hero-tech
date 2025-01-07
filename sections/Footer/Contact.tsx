"use client";
import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import CustomLine from "./CustomLine";
import Image from "next/image";
import location from "../../public/images/location.png";
import tele from "../../public/images/tele.png";
import msg from "../../public/images/msg.png";
import vector1tele from "../../public/images/vector1tele.png";
import { useTheme } from "../../hooks/useTheme";
import ButtonAC from "../../components/ButtonAC";

export default function Contact() {
  const { color, bg } = useTheme();
  return (
    <>
      <GridItem width="100%" px={{ base: 4, md: 0 }}>
        <Box
          w="100%"
          maxW={{ base: "80%", md: "320px", lg: "400px" }}
          p={4}
          bg={bg}
          borderRadius="5px"
          mx="auto"
          height={{ base: "310px", md: "330px", lg: "auto" }}
          minHeight={{ base: "280px", md: "300px", lg: "350px" }}
        >
          <Text
            color={color}
            alignItems={"flex-start"}
            fontSize={"25px"}
            mb={4}
          >
            التواصل
          </Text>
          <CustomLine
            alignItems={"flex-start"}
            width="30%"
            bg={color}
            marginBottom={8}
          />
          <Flex direction="column" gap={6} alignItems={"flex-start"}>
            <Flex alignItems="flex-start" gap={4}>
              <Image src={location} alt="location" width={17} height={27} />
              <Text color={color}>المقر الرئيسي: بريطانيا، لندن</Text>
            </Flex>
            <Flex alignItems="flex-start" gap={4}>
              <Image src={tele} alt="tele" width={23} height={22} />
              <Text color={color}>+447918713367</Text>
            </Flex>
            <Flex alignItems="flex-start" gap={4}>
              <Image src={msg} alt="msg" width={23} height={17} />
              <Text color={color}>info@arabcodeacademy.com</Text>
            </Flex>
            <Box alignItems="flex-start">
              <ButtonAC
                marginTop={{ base: 1, md: 2 }}
                bg="secondary"
                color={"white"}
                _hover={{ bg: "secondaryDark" }}
                w={"150px"}
                h={"40px"}
                display="flex"
                alignItems={"center"}
                gap={2}
                fontWeight="normal"
                textAlign={"center"}
              >
                <Image
                
                  src={vector1tele}
                  alt="call us"
                  width={23}
                  height={21}
                />
                تواصل معنا
              </ButtonAC>
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </>
  );
}
