import React from "react";
import ReviewList from "./ReviewList";
export const revalidate = 2 * 24 * 60 * 60;
async function getReviews() {
  try {
    const res = await fetch(
      "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/reviews"
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}
const ReviewSection = async () => {
  const { reviews } = await getReviews();
  return <ReviewList reviews={reviews} />;
};

export default ReviewSection;
