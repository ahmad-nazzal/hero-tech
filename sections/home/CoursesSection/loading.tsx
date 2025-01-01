import React from "react";
import { Center, Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center height="30vh" flexDirection="column" color="#462576">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#462576"
      size="xl"
    />
    <Text fontSize="2.5rem" fontWeight="bold" textAlign="center" mt="4">
      Loading...
    </Text>
  </Center>
);
};

export default Loading;
