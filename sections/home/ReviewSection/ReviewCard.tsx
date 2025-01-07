"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import Star1 from "../../../public/images/Star1.png";
import Rectangle from "../../../public/images/Rectangle.png";
import Starempty from "../../../public/images/Starempty.png";

import ReviewCardProps from "./ReviewCardProps";
import { useTheme } from "../../../hooks/useTheme";

export default function ReviewCard({
  reviewerName,
  reviewerLastName,
  reviewText,
  rating,
  date,
}: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? Star1.src : Starempty.src
  ).reverse();
  const { color, bg } = useTheme();

  return (
    <Box
      color={color}
      px={10}
      py={10}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        bg={bg}
        color={color}
        height="400px"
        width="100%"
        maxW="384px"
        overflow="hidden"
        boxShadow="xl"
        borderRadius="md"
        position="relative"
      >
        <Image
          src={Rectangle.src}
          alt="Rectangle"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="150px"
          objectFit="cover"
          zIndex={0}
        />

        {/* User Image */}
        <Image
          mt={12}
          src="https://via.placeholder.com/100"
          alt="صورة المستخدم"
          borderRadius="full"
          boxSize="100px"
          mx="auto"
          position="relative"
          zIndex={2}
        />

        <CardBody gap="4" position="relative" zIndex={2}>
          <Heading
            size="md"
            textAlign="center"
            mb={5}
            bg={bg}
            color={color}
            fontWeight="700"
            fontSize="19px"
          >
            {reviewerName}
            {""} {reviewerLastName}
          </Heading>
          <Text
            textAlign="center"
            noOfLines={3}
            bg={bg}
            color={color}
            fontWeight="500"
            fontSize="18px"
          >
            {reviewText}
          </Text>
        </CardBody>

        <CardFooter
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          zIndex={2}
        >
          {/* Stars */}
          <Flex
            gap={1}
            justifyContent="flex-end"
            dir="rtl"
            sx={{
              img: {
                width: ["15px", "20px", "23px"],
                height: ["15px", "20px", "24px"],
              },
            }}
          >
            {stars.map((starSrc, index) => (
              <Image
                key={index}
                src={starSrc}
                alt={`star-${index}`}
                objectFit="contain"
              />
            ))}
          </Flex>

          {/* Date */}
          <Box bg={bg} color={color} mx={5} fontSize="14px">
            {date}
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
}
