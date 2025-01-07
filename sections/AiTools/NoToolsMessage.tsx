import React from "react";
import { Flex } from "@chakra-ui/react";
import { useTheme } from "../../hooks/useTheme";

interface NoToolsMessageProps {
  isShowingFavorites: boolean;
}

export const NoToolsMessage: React.FC<NoToolsMessageProps> = ({
  isShowingFavorites,
}) => {
  const { color } = useTheme();

  return (
    <Flex
      justify="center"
      align="center"
      mt="60px"
      fontSize="30px"
      fontWeight="bold"
      color={color}
    >
      {isShowingFavorites ? "لا توجد عناصر في المفضلة" : "العنصر غير متوفر"}
    </Flex>
  );
};
