import React from "react";
import { ReactNode } from "react";
import {
  Card,
  Spacer,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
interface CustomCardProps {
  title: string | ReactNode;
  price: string;
  trainerName?: string;
  duration?: string;
  imageSrc: string;
  applyFilter?: boolean;
  buttons: ReactNode[];
}
const CustomCard: React.FC<CustomCardProps> = ({
  title,
  price,
  trainerName,
  duration,
  imageSrc,
  buttons,
  applyFilter,
}: CustomCardProps) => {
  return (
    <Card
      marginBottom="55px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.17)"
      borderRadius="11px"
      bg="white"
      width="350.03px"
      height="510px"
    >
      <CardHeader pt="0" pr="0">
        <Box
          bg="#FF6542"
          p="10"
          borderRadius="11px 11px 0 0"
          width="350px"
          height="286px"
        >
          <Image
            height="200px"
            width="200px"
            marginRight="38px"
            src={imageSrc}
            alt={String(title)}
            style={{
              filter: applyFilter ? "invert(1)" : "none",
            }}
          />
        </Box>
      </CardHeader>

      <CardBody marginRight="20px">
        <Flex marginLeft="20px">
          <Text
            size="lg"
            fontWeight="bold"
            fontSize="23px"
            color="#713488"
            paddingTop={1}
            textAlign="center"
          >
            {" "}
            {title}
          </Text>

          <Spacer />
          <Text color="#713488" fontSize="30px" fontWeight="bold">
            {price}
          </Text>
        </Flex>

        <Box color="#713488" fontSize="18px" fontWeight="normal">
          <Text mb="1">{trainerName}</Text>
          <Text>{duration}</Text>
        </Box>
      </CardBody>

      <CardFooter paddingTop={0}>
        <Flex gap="13px">
          {buttons && buttons.length > 0 ? (
            buttons.map((button, index) => (
              <React.Fragment key={index}>{button}</React.Fragment>
            ))
          ) : (
            <p>No buttons available</p>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
