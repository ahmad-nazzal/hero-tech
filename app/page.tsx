"use client";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import ReviewList from "../sections/home/ReviewSection/ReviewList";
import Hero from "../sections/home/Hero/Hero";
import Quiz from "../sections/home/Quiz/Quiz";

export default function Home() {


  return (
    <>
      <Hero />
      <Quiz />
      <AboutUs />
      <ContactUs />
      <ReviewList />
    </>
  );
}
