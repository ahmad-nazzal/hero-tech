"use client";
import { useColorModeValue } from "@chakra-ui/react";

export function useTheme() {
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("primary", "white");

  return {
    bg,
    color,
  };
}
