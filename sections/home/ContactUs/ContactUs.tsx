"use client";

import { Box, Container, useColorMode } from "@chakra-ui/react";
import contactus from "../../../public/images/contactus.png";
import CustomBox from "../../../components/CustomBox";
import ButtonAC from "../../../components/ButtonAC";
import tawaselmanaa from "../../../public/images/tawaselmanaa.png";
import { useTheme } from "../../../hooks/useTheme";

function ContactUs() {
  const { colorMode } = useColorMode();
  const { color, bg } = useTheme();
  return (
    <Box
      as="section"
      minH="100vh"
      bg="white"
      p={10}
      backgroundImage={`url(${contactus.src})`}
      backgroundSize={"cover"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", lg: "flex-end" }}
    >
      <Container
        maxW="1200px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", lg: "flex-end" }}
        gap={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={6}
          maxW="600px"
          width="100%"
          alignItems={{ base: "center", lg: "flex-end" }}
        >
          <CustomBox
            color={color}
            z-index={1}
            bg={colorMode === "dark" ? bg : "rgba(255, 255, 255, 0.89)"}
            title="أدوات تفاعلية والعاب تعليمية"
            description="تتميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية مبتكرة باستخدام أساليب الـتلعيب Gamification، مما يجعل عملية التعلم أكثر متعة وجاذبية. نقدم حلولًا مخصصة تلبي احتياجات المؤسسات والشركات، حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح."
            p={10}
            opacity={0.98}
            w={{ base: "100%", md: "100%", lg: "600px" }}
            minH={{ base: "100%", md: "100%", lg: "380px" }}
            borderWidth={{ base: 1, lg: 0 }}
            borderColor={"primary"}
            boxShadow={{
              base: "lg",
              lg: "-4px -4px 6px rgba(0, 0, 0, 0.1), 4px 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.1)",
            }}
            rounded={"lg"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box z-index={2}>
              <ButtonAC
                text="تواصل معنا  "
                icon={tawaselmanaa}
                alignSelf={"center"}
                size="md"
                fontWeight={"500"}
                fontSize={"18px"}
                bg={"secondary"}
                color={"white"}
                mt={{ base: "5px", md: "39px", lg: "56px" }}
                mb={{ base: "5x", md: "28px", lg: "40px" }}
              />
            </Box>
          </CustomBox>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
