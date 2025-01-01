import DiscountBanner from "../sections/DiscountBanner/DiscountBanner";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import ReviewSection from "../sections/home/ReviewSection/ReviewSection";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";
import Header from "../sections/header/header";
import Quiz from "../sections/home/Quiz/Quiz";
import { Box } from "@chakra-ui/react";
import { Service } from "../sections/home/ServiceSection/Service";
import Dad from "../sections/home/DadSection/Dad";
import CoursesSecion from "../sections/home/CoursesSection/CoursesSection";
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
      <Header />
      <Hero />
      <Service />
      <Dad />
      <CoursesSecion />
      <Quiz />
      <AboutUs />
      <ContactUs />
      <ReviewSection />
      <Footer />
    </>
  );
}
