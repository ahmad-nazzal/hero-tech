"use client";
import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import IconWrapper from "./IconWrapper";
import type { StaticImageData } from "next/image";

interface CustomButtonProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  icon?: React.ReactNode | string | StaticImageData;
  href?: string;
}

const ButtonAC: React.FC<CustomButtonProps> = ({
  size = "md",
  text,
  icon,
  children,
  ...rest
}) => {
  const sizeStyles = {
    sm: {
      width: "140px",
      height: "44px",
    },
    md: {
      width: "200px",
      height: "60px",
    },
    lg: {
      width: "310px",
      height: "80px",
    },
  };

  return (
    <ChakraButton
      onClick={() => (window.location.href = `${rest.href}`)}
      borderRadius="10px"
      padding="0 16px"
      _hover={{ opacity: 0.9 }}
      _active={{ opacity: 0.8 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...sizeStyles[size]}
      {...rest}
    >
      <IconWrapper icon={icon} size={size} /> {/* using IconWrapper */}
      {text || children}
    </ChakraButton>
  );
};

export default ButtonAC;
