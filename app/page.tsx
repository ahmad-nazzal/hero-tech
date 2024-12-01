"use client";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import { Suspense } from "react";
import Courses from "../sections/home/Hero/courses";
import Loading from "../sections/home/Hero/loading";
import SearchBar from "../components/SearchBar";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";
import Header from "../sections/header/header";
import { Service } from "../sections/home/ServiceSection/Service";
import Quiz from "../sections/home/Quiz/Quiz";
import { Box } from "@chakra-ui/react";
import Dad from "../sections/DadSection/Dad";
import DiscountBanner from "../sections/DiscountBanner/DiscountBanner";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import ReviewList from "../sections/home/ReviewSection/ReviewList";

export default function Home() {
  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-11-25T23:59:59";
    return (
    <>
      <Box dir={"rtl"}>
        <DiscountBanner
          startDate={startDate}
          endDate={endDate}
          promotionMessage="خصومات بنسبة 20% على الكورسات"
        />
      </Box>
      <Header/>
      <Hero></Hero>
      <Service></Service>
      <Dad></Dad>
    
      <main style={{ margin: "0", width: "100%", overflow: "hidden" }}>
        <Grid templateColumns={{  md: "repeat(4, 1fr)",sm:"repeat(4, 1fr)",base:"repeat(4, 1fr)" }} gap="4">
          <GridItem colSpan={{ base: 1, md: 1, sm: 1 }}>
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

          <GridItem colSpan={3} className="grid-item">
            <SearchBar placeholder="..... مقدمة لمحرك الألعاب اليونتي" />
          </GridItem>
        </Grid>

        <Suspense fallback={<Loading />}>
          <Courses data={[
    {
      id: 1,
      name: "دورة بايثون المتقدمة",
      price: "$30",
      image: "./images/7c8b39cf40000f1df8cf455fa1a43cd3.png",
      duration: "40 فيديو، 30 ساعة و 20 دقيقة",
      trainer: "محمود يوسف",
      description:
        "تعلم مهارات متقدمة في لغة بايثون بما في ذلك تحليل البيانات وبناء التطبيقات.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 2,
      name: "دورة تطوير تطبيقات iOS باستخدام Swift",
      price: "$35",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "48 فيديو، 27 ساعة و 15 دقيقة",
      trainer: "ليلى فؤاد",
      description:
        "أساسيات تطوير التطبيقات للآيفون باستخدام لغة Swift من البداية حتى نشر التطبيق.",
      level: "متوسط",
      isComingSoon: false,
    },
    {
      id: 3,
      name: "دورة علوم البيانات باستخدام Python",
      price: "$50",
      image: "./images/73cc5aa029afdcdb49d30ce957150dec.png",
      duration: "60 فيديو، 45 ساعة و 10 دقائق",
      trainer: "أيمن جابر",
      description:
        "تعلّم كيفية استخدام بايثون لتحليل البيانات وتطبيقات التعلم الآلي.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 4,
      name: "دورة التحليل الإحصائي باستخدام R",
      price: "$32",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "38 فيديو، 26 ساعة و 15 دقيقة",
      trainer: "رانيا سمير",
      description:
        "تعلّم التحليل الإحصائي باستخدام لغة R وتحليل البيانات الإحصائية.",
      level: "متوسط",
      isComingSoon: false,
    },
    {
      id: 5,
      name: "دورة أساسيات البرمجة باستخدام JavaScript",
      price: "$20",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "30 فيديو، 20 ساعة",
      trainer: "سامي القاضي",
      description: "مدخل إلى البرمجة باستخدام JavaScript للمبتدئين.",
      level: "مبتدئ",
      isComingSoon: false,
    },
    {
      id: 6,
      name: "دورة أساسيات البرمجة الكائنية باستخدام C++",
      price: "$28",
      image: "./images/7c8b39cf40000f1df8cf455fa1a43cd3.png",
      duration: "35 فيديو، 25 ساعة",
      trainer: "منى الحسن",
      description: "تعلم أساسيات البرمجة الكائنية باستخدام لغة C++.",
      level: "مبتدئ",
      isComingSoon: false,
    },
    {
      id: 7,
      name: "دورة تطوير واجهات المستخدم المتقدمة باستخدام Angular",
      price: "$45",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "65 فيديو، 50 ساعة",
      trainer: "عبد الله سعيد",
      description: "تقنيات متقدمة في بناء واجهات المستخدم باستخدام Angular.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 8,
      name: "دورة الذكاء الاصطناعي",
      price: "$40",
      image: "./images/73cc5aa029afdcdb49d30ce957150dec.png",
      duration: "55 فيديو، 42 ساعة",
      trainer: "هالة محمد",
      description: "مقدمة إلى الذكاء الاصطناعي وكيفية بناء نماذج تعلم الآلة.",
      level: "متقدم",
      isComingSoon: false,
    },
    {
      id: 9,
      name: "دورة Ruby المتقدمة",
      price: "$40",
      image: "./images/73cc5aa029afdcdb49d30ce957150dec.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "أحمد الشاذلي",
      description: "تعلم مهارات متقدمة في تطوير البرمجيات باستخدام Ruby.",
      level: "متقدم",
      isComingSoon: true,
    },
    {
      id: 10,
      name: "دورة Bootstrap لتصميم الواجهات",
      price: "$25",
      image: "./images/bootStrap.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "خالد محمود",
      description:
        "كيفية استخدام Bootstrap لإنشاء مواقع تفاعلية وسريعة الاستجابة.",
      level: "متوسط",
      isComingSoon: true,
    },
    {
      id: 11,
      name: "دورة C# الشاملة",
      price: "$45",
      image: "./images/c.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "منى الحسن",
      description: "كل ما تحتاج معرفته عن C# لتطوير تطبيقات سطح المكتب والويب.",
      level: "متقدم",
      isComingSoon: true,
    },
    {
      id: 12,
      name: "دورة PHP للمبتدئين",
      price: "$20",
      image: "./images/php.png",
      duration: "52 فيديو، 24 ساعة و 45 دقيقة",
      trainer: "أمل علي",
      description: "أساسيات البرمجة باستخدام PHP لبناء المواقع الديناميكية.",
      level: "مبتدئ",
      isComingSoon: true,
    },
    {
      id: 13,
      name: "دورة بايثون المتقدمة",
      price: "$30",
      image: "./images/7c8b39cf40000f1df8cf455fa1a43cd3.png",
      duration: "40 فيديو، 30 ساعة و 20 دقيقة",
      trainer: "محمود يوسف",
      description:
        "تعلم مهارات متقدمة في لغة بايثون بما في ذلك تحليل البيانات وبناء التطبيقات.",
      level: "متقدم",
      isComingSoon: true,
    },
    {
      id: 14,
      name: "دورة تطوير تطبيقات iOS باستخدام Swift",
      price: "$35",
      image: "./images/85ec0a9778292af7f20d1502a6ed0702.png",
      duration: "48 فيديو، 27 ساعة و 15 دقيقة",
      trainer: "ليلى فؤاد",
      description:
        "أساسيات تطوير التطبيقات للآيفون باستخدام لغة Swift من البداية حتى نشر التطبيق.",
      level: "متوسط",
      isComingSoon: true,
    },
  
    ]}  />
        </Suspense>
      </main>

      <Quiz></Quiz>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <ReviewList></ReviewList>
      <Footer></Footer>
    </>
  );
}
