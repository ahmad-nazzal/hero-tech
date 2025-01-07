"use client";

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import notfound from "../public/images/notfound.png";
import { useTheme } from "../hooks/useTheme";
export default function NotFound() {
  const { color } = useTheme();
  return (
    <>
      <Flex
        minH="100vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={notfound}
          alt="404 page not found"
          width={250}
          height={250}
        />

        <Text
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          mt="4"
          color={color}
        >
          Error 404
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
          color={color}
        >
          Page Not Found
        </Text>
      </Flex>
    </>
  );
}
