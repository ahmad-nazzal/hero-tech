"use client";
import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import aboutus from "../../../public/images/aboutus.png";
import masaratlogo from "../../../public/images/masaratlogo.png";
import CustomBox from "../../../components/CustomBox";
import ButtonAC from "../../../components/ButtonAC";
import { useTheme } from "../../../hooks/useTheme";

export default function AboutUs() {
  const { color, bg } = useTheme();
  return (
    <Box as="section" minH="screen" overflow="hidden" py={10}>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap={4}
        maxW={{ base: "100%", lg: "1200px" }}
        mx="auto"
        px={{ base: 10, sm: 10, lg: 0 }}
      >
        <GridItem>
          <Box
            width={{ base: "100%", lg: "auto" }}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // px={{ base: 6, sm: 8 }}
          >
            <Image
              src={aboutus.src}
              alt="About us"
              objectFit="cover"
              width={{ base: "100%", lg: "886px" }}
              height={{ base: "auto", lg: "550px" }}
              maxH="700px"
              zIndex={1}
            />
          </Box>
        </GridItem>

        <GridItem flexGrow={1} flexShrink={0}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: "center", lg: "left" }}
            p={{ base: 8, sm: 10, lg: 0 }}
          >
            <Container
              maxW="1200px"
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={3}
              p={{ base: 4, sm: 6 }}
            >
              <CustomBox
                color={color}
                bg={bg}
                title=" التجربة التعليمية في الأكاديمية العربية للبرمجة "
                description="الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث التقنيات والأساليب التعليمية."
                p={10}
                opacity={0.9}
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
                <ButtonAC
                  alignSelf={"center"}
                  mt={{ base: "5px", md: "39px", lg: "56px" }}
                  mb={{ base: "5x", md: "28px", lg: "40px" }}
                  size="lg"
                  color={"white"}
                  bg={"secondary"}
                  text="المسارات التعليمية"
                  icon={masaratlogo}
                ></ButtonAC>
              </CustomBox>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
