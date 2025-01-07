import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useTheme } from "../../hooks/useTheme";

export const LoadingMessage: React.FC = () => {
  const { color } = useTheme();

  return (
    <Flex justify="center" align="center" mt={4} h="100px">
      <Box fontSize="3xl" fontWeight="bold" color={color}>
        جاري التحميل...
      </Box>
    </Flex>
  );
};
