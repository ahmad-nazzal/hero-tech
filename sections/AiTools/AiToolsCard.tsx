import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import masedLogo from "../../public/images/circled_outline.png";
import ButtonAC from "../../components/ButtonAC";
import { AiToolsCardProps } from "./types";
import empHeartlogo from "../../public/images/emp-heart.png";
import heartlogo from "../../public/images/heart.png";
import ai from "../../public/images/ai.jpg";
interface AiToolsCardComponentProps {
  tool: AiToolsCardProps;
  isFavorite: boolean;
  onToggleFavorite: (toolId: number) => void;
}

export function AiToolsCard({
  tool,
  isFavorite,
  onToggleFavorite,
}: AiToolsCardComponentProps) {
  const { tool_id, title, description, tags } = tool;
  const words = description.split(" ");
  const truncatedDescription = words.slice(0, 20).join(" ") + "...";
  const bg = useColorModeValue("white", "gray.800");

  const handleFavoriteClick = () => {
    if (tool_id) {
      onToggleFavorite(tool_id);
    }
  };

  return (
    <Box
      shadow="lg"
      width={{
        xl: "400px",
        lg: "330px",
        md: "400px",
        sm: "250px",
        base: "300px",
      }}
      rounded="sm"
      transition="all 0.3s ease-in-out"
      cursor="pointer"
      overflow="hidden"
      sx={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
      }}
    >
      <Flex direction="column" gap={4} h="full">
        <Box position="relative" width="100%" height="193px">
          <Image
            // src="https://via.placeholder.com/400x193"
            src={ai}
            alt="AI Tool Image"
            layout="fill"
            objectFit="cover"
          />
          <IconButton
            aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
            icon={
              <Image
                src={isFavorite ? heartlogo : empHeartlogo}
                alt="Favorite Icon"
                style={{ width: "100", height: "20" }}
              />
            }
            size="lg"
            rounded="full"
            position="absolute"
            mt="15px"
            left={4}
            bg={bg}
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.35)"
            onClick={handleFavoriteClick}
          />
        </Box>

        <Box
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="calc(100% - 193px)"
        >
          <Box
            fontWeight="700"
            fontSize="23px"
            textAlign="end"
            textColor="primary"
            mb={2}
            noOfLines={1}
            isTruncated
            flexShrink={0}
          >
            {title}
          </Box>
          <Flex direction={"column"} justifyContent="start" height={"120px"}>
            <Box
              fontWeight="700"
              fontSize="18px"
              textAlign="end"
              textColor="primary"
              mb={2}
              noOfLines={1}
              isTruncated
              flexShrink={0}
            >
              {tags}
            </Box>

            <Text
              fontWeight="500"
              color="primary"
              fontSize="17px"
              textAlign="start"
              mb={3}
              noOfLines={3}
              flexShrink={0}
            >
              {truncatedDescription}
            </Text>
          </Flex>

          <ButtonAC
            mx="auto"
            text="المزيد"
            fontSize={{ lg: 17, base: 14 }}
            size="sm"
            alignSelf="center"
            bg="secondary"
            textColor="white"
            mb={2}
            sx={{
              flexDirection: {
                lg: "row-reverse",
                sm: "row-reverse",
                md: "row-reverse",
              },
              gap: "5px",
            }}
            icon={masedLogo}
          />
        </Box>
      </Flex>
    </Box>
  );
}
