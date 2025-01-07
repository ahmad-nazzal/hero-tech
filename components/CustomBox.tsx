"use client";
import { Box, BoxProps, Text } from "@chakra-ui/react";
import { useTheme } from "../hooks/useTheme";

interface CustomBoxProps extends BoxProps {
  title: string;
  description: string;

  children?: React.ReactNode;
}

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  title,
  description,

  ...props
}) => {
  const { color} = useTheme();
  return (
    <Box {...props} color={color} >
      <Text
        fontSize="2xl"
        fontWeight="700"
        color={color}
        mb={{ base: "12px", md: "82px", lg: "90px" }}
      >
        {title}
      </Text>
      <Text
        fontSize="19px"
        fontWeight="500"
        color={color}
        lineHeight={"30px"}
      >
        {description}
      </Text>
      {children}
    </Box>
  );
};

export default CustomBox;
