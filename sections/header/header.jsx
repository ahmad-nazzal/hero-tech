"use client"

import {
  Box, useBreakpointValue
} from "@chakra-ui/react";
import React from "react";
import HeaderDesktop from "../header/HeaderDesktop";
import HeaderMobile from "../header/HeaderMobile";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true,sm:false, md: false });

  return (
    <Box>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </Box>
  );
};

export default Header;
