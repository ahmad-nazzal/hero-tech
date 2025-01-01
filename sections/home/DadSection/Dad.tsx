"use client";
import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import dad from "../../../public/icons/dad.svg";
import ButtonAC from "../../../components/ButtonAC";
import googleDocs from "../../../public/icons/google docs.svg";

const Dad = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src={
            isMobile
              ? "/videos/acavideomobile.mp4"
              : "/videos/acavideodesktop.mp4"
          }
          type="video/mp4"
        />
        <p>متصفحك لا يدعم تشغيل الفيديوهات. يرجى التحديث!</p>
      </video>
      <Box>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={4}>
          <GridItem>
            <Flex
              color="white"
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                height={{ base: 78, md: 183, lg: 210 }}
                width={{ base: 150, md: 350, lg: 400 }}
              >
                <Image src={dad} alt="Dad Logo" />
              </Box>
              <Text
                fontSize={{
                  base: "18",
                  md: "50",
                  lg: "80",
                }}
                fontWeight={700}
                mt={4}
                textAlign={{ base: "center", lg: "right" }}
              >
                لغة ضاد
              </Text>
            </Flex>
          </GridItem>

          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex
              flexDir={"column"}
              alignItems={{ base: "center", lg: "start" }}
              gap={{ base: 5, md: "10" }}
            >
              <Text
                fontSize={{ base: "14", md: "25px", lg: "27" }}
                fontWeight={{ base: 400, md: 700 }}
                width={{ base: 222, md: 700, lg: 633 }}
                color="white"
                lineHeight={{ base: "25px", md: "40px" }}
                textAlign={{ base: "center", lg: "right" }}
              >
                في الأكاديمية العربية للبرمجة، نسعى دائمًا إلى تقديم محتوى
                تعليمي يساهم في تمكين وتطوير مهارات المبرمجين الناطقين باللغة
                العربية. ومن هذا المنطلق، يهدف هذا القسم إلى تبسيط المفاهيم
                البرمجية لأي شخص، سواء كان مبتدئًا أو محترفًا، من فهمها
                واستيعابها بسهولة. نحرص على أن تكون الشروحات دقيقة وشاملة، مع
                توفير أمثلة عملية تساعد المتعلمين على تطبيق ما يتعلمونه بشكل
                فعّال.
              </Text>
              <ButtonAC icon={googleDocs} bg="tomato" color="white" size="md">
                لغة ضاد
              </ButtonAC>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dad;
