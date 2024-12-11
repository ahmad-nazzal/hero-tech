import React from "react";
import { Center, Text } from "@chakra-ui/react";

const ACAError = ({message}) => {
  return (
    <Center height="30vh" flexDirection="column" color="#462576">
   
    <Text fontSize="2.5rem" fontWeight="bold" textAlign="center" mt="4">
    حدث خطأ بالإتصال 
    </Text>
    <Text fontSize="1.5rem" textAlign="center" mt="4">{message}</Text>
  </Center>
);
};

export default ACAError;
