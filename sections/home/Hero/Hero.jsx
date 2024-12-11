"use client";
import "./hero.css";
import { Text, Box, Container, Grid, GridItem } from "@chakra-ui/react";
import masaratlogo from "../../../public/images/masaratlogo.png";
import ButtonAC from "../../../components/ButtonAC";
import { useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import "./hero.css";
import Courses from "./courses.jsx";
import { Service } from "../ServiceSection/Service";
import Dad from "../../DadSection/Dad";
import SearchBar from "../../../components/SearchBar";

export default function Hero() {

  const [coursesData, setCoursesData] = useState([]);
  const [coursesError, setCoursesError] = useState(null);
  const [coursesLoading, setCoursesLoading] = useState(true);
  
  const sliderTextOneStyles = {
    height: "100%",
    display: "flex",
    justifyContent: { sm: "center" },
    width: { lg: 740, sm: 900 },
    lineHeight: { base: "normal", sm: "1.18", lg: "1.18" },
    alignItems: "center",
    paddingTop: { base: 5, sm: 5, lg: 19 },
    marginRight: { lg: 85, md: 28 },
    paddingRight: { base: 50, lg: 150 },
    paddingBottom: { base: 8, lg: 150 },
    paddingLeft: { base: 50, sm: 210, lg: 4 },
    fontSize: { base: "25px", sm: "50px", lg: "40px" },
    textAlign: { lg: "right", sm: "center", base: "center" },
    sx: {
      "@media (min-width: 1280px) and (max-width: 1400px)": {
        width: "610px",
      },
    },
  };

  const sliderTextTwoStyles = {
    height: "37%",
    lineHeight: "1.2",
    width: { base: "100%", lg: 770 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: { base: "16px", sm: "25px", lg: "23px" },
    textAlign: { base: "center", sm: "center", lg: "right" },
    paddingTop: { lg: 162, sm: 7 },
    paddingRight: { lg: 95, md: 10 },
    paddingLeft: { lg: 10 },
    paddingBottom: { sm: 70, lg: 0 },
    marginTop: { lg: 202, sm: 20 },
    marginBottom: { base: 20 },
    sx: {
      "@media (min-width: 1280px) and (max-width: 1650px)": {
        width: "590px",
      },
    },
  };

  const commonContainerStyles = {
    width: { base: "100%", sm: "70%", lg: "100%" },
    display: "flex",
    flexDirection: "column",
    gap: { lg: 10, sm: 10, base: 3 },
    alignItems: { sm: "center" },
    marginRight: { lg: 0, sm: 10, md: 110 },
  };

  useEffect(() => {

    const fetchCourses = async () => {
      try {
        setCoursesLoading(true);
        const resData = await fetch(`${process.env.API_ENDPOINT}/courses`);
        if (!resData.ok) {
          throw new Error(`HTTP error! status: ${resData.status}`);
        }
        const coursesData = await resData.json();
        setCoursesData(coursesData);
      }
      catch (error) {
        console.log("Error fetching courses data: ", error);
        setCoursesError(error.message);
      } finally {
        setCoursesLoading(false);
      }
    } 

    fetchCourses();

  }, []);

  return (
    <>
      <Box as="section" overflow="hidden" className="slider-image-section">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          style={{
            width: "100%",
          }}
        >
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('/images/medium-shot-happy-colleagues-working-together 1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="overlay overlay1"></div>
              <div className="overlay overlay2"></div>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                height="100%"
                mx="auto"
                px={{ base: 8, sm: 10, lg: 0 }}
              >
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextOneStyles}>
                    <p>
                      تعمل الاكادمية العربية للبرمجة كجسر يربط العقول
                      التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا
                    </p>
                  </Box>
                </GridItem>

                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextTwoStyles}>
                    <Container {...commonContainerStyles}>
                      {useBreakpointValue({
                        base: true,
                        sm: false,
                        lg: false,
                      }) && (
                        <ButtonAC
                          alignSelf="center"
                          mb={8}
                          size="lg"
                          color="white"
                          bg="secondary"
                          text="المسارات التعليمية"
                          icon={masaratlogo}
                          sx={{
                            width: "200px",
                            height: "60px",
                            fontSize: { base: "14px" },
                            fontWeight: 900,
                          }}
                        />
                      )}
                      <p>
                        تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من
                        خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية
                      </p>
                      <p>
                        وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية
                        للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة
                        عالمية في المجال التقني
                      </p>
                      {useBreakpointValue({
                        base: false,
                        sm: true,
                        lg: true,
                      }) && (
                        <ButtonAC
                          color="white"
                          bg="secondary"
                          size="lg"
                          text="المسارات التعليمية"
                          icon={masaratlogo}
                          marginTop={{ lg: 70, sm: 10 }}
                          marginLeft={{ lg: 300, sm: -10 }}
                          sx={{
                            width: "310px",
                            height: "80px",
                            fontSize: { sm: "19px", lg: "17px" },
                            fontWeight: "900",
                            "@media (min-width: 1280px) and (max-width: 1650px)":
                              {
                                marginLeft: "90px",
                              },
                          }}
                        />
                      )}
                    </Container>
                  </Box>
                </GridItem>
              </Grid>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('/images/medium-shot-happy-colleagues-working-together 1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="overlay overlay1"></div>
              <div className="overlay overlay2"></div>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                height="100%"
                mx="auto"
                px={{ base: 8, sm: 10, lg: 0 }}
              >
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextOneStyles}>
                    <p>
                      في الأكاديمية العربية للبرمجة، نسعى لإعداد جيل جديد من
                      المبرمجين العرب الذين يمتلكون الأدوات والمهارات اللازمة
                      لمواكبة التطور التكنولوجي العالمي
                    </p>
                  </Box>
                </GridItem>
                <GridItem className="content" flexGrow={1} flexShrink={0}>
                  <Box {...sliderTextTwoStyles}>
                    <Container {...commonContainerStyles}>
                      <p>
                        نؤمن بأن البرمجة ليست مجرد مهارة، بل هي لغة المستقبل
                        التي تفتح آفاقًا جديدة للإبداع والابتكار
                      </p>
                      <p>
                        انضم إلينا اليوم لتبدأ رحلتك في عالم التقنية بدعم من
                        خبرائنا، ومجتمعنا الملهم الذي يشجعك على التقدم خطوة
                        بخطوة نحو تحقيق أهدافك
                      </p>
                    </Container>
                  </Box>
                </GridItem>
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Service></Service>
<Dad></Dad>
      <main style={{ margin: "0", width: "100%", overflow: "hidden" }}>
  <Grid 
    templateColumns={{ 
      base: "1fr",   
      sm: "1fr",     
      md: "1fr",     
      lg: "repeat(4, 1fr)"  
    }} 
    gap="4"
  >
    <GridItem colSpan={{ base: 1, lg: 1 }}>
      <Text
        className="recommended"
        marginRight="237px"
        marginBottom="84px"
        paddingTop="153px"
        color="#713488"
        borderBottom="2px solid #713488"
        width="208px"
        fontWeight="bold"
        fontSize="27px"
      >
        الدورات التدريبية
      </Text>
    </GridItem>

    <GridItem colSpan={{ base: 1, lg: 3 }}>
      <SearchBar placeholder="..... مقدمة لمحرك الألعاب اليونتي" />
    </GridItem>
  </Grid>
          <Courses data={coursesData} isLoading={coursesLoading} errorMessage={coursesError} />
      </main>

    </>
  );
}
