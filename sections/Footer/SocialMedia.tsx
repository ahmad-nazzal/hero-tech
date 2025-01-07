"use client";
import Image from "next/image";
import facebook from "../../public/images/facebook.png";
import discord from "../../public/images/discord.png";
import x from "../../public/images/x.png";
import youtubesvg from "../../public/icons/youtubesvg.svg";
import instagram from "../../public/images/instagram.png";
import tiktok from "../../public/images/tiktok.png";
import threds from "../../public/images/threds.png";
import linkedin from "../../public/images/linkedin.png";

import { GridItem, Flex, Box, Text } from "@chakra-ui/react";
import CustomLine from "./CustomLine";
import { useTheme } from "../../hooks/useTheme";

export default function SocialMedia() {
  const { color, bg } = useTheme();
  return (
    <GridItem width="100%" px={{ base: 4, md: 0 }}>
      <Box
        w="100%"
        maxW={{ base: "80%", md: "320px", lg: "400px" }}
        p={4}
        bg={bg}
        borderRadius="5px"
        color={color}
        mx="auto"
        height={{ base: "310px", md: "330px", lg: "auto" }}
        minHeight={{ base: "280px", md: "300px", lg: "350px" }}
      >
        <Text alignItems="flex-start" fontSize="20px" mb={4}>
          مواقع التواصل الاجتماعي
        </Text>
        <CustomLine
          width="70%"
          bg={color}
          marginBottom={8}
          alignItems="flex-start"
        />
        <Flex
          direction="column"
          gap={3}
          alignItems="flex-start"
          justifyItems="flex-start"
        >
          <Flex
            gap={4}
            justifyContent="flex-start"
            width="100%"
            maxW="100%"
            mb={3}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={facebook}
                alt="Facebook"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={discord}
                alt="Discord"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={33}
                height={33}
                priority
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={youtubesvg}
                alt="YouTube"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "32px",
                  height: "32px",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={x}
                alt="X"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
          </Flex>
          <Flex gap={4} justifyContent="flex-start" width="100%" maxW="100%">
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={tiktok}
                alt="TikTok"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={threds}
                alt="Threads"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={instagram}
                alt="Instagram"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
                width={32}
                height={32}
                priority
              />
            </div>
          </Flex>
        </Flex>
        <Text alignItems="flex-start" color={color} mt={10}>
          انضم الآن إلى مجتمع المبرمجين في الأكاديمية وابدأ رحلتك نحو احتراف
          البرمجة!
        </Text>
      </Box>
    </GridItem>
  );
}
