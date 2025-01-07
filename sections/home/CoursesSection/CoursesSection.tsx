"use client";
import React, { Suspense } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Loading from "./loading";
import SearchBar from "../../../components/SearchBar";
import Courses from "./courses";
import { useTheme } from "../../../hooks/useTheme";

interface Trainer {
  first_name: string;
  last_name: string;
  leader: boolean;
}

interface Course {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  total_videos: number;
  total_duration: string;
  trainers: Trainer[];
  original_price: number;
  currency: string;
  status: string;
}

interface FormattedCourse {
  id: number;
  name: string;
  price: string;
  image: string;
  duration: string;
  trainer: string;
  description: string;
  level: string;
  isComingSoon: boolean;
}

// Fetch data function
export const fetchCoursesData = async (): Promise<FormattedCourse[]> => {
  try {
    const response = await fetch(
      "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/courses",
      { next: { revalidate: 2 * 24 * 60 * 60 } } // Ensure revalidation for ISR in Next.js
    );
    if (!response.ok) {
      throw new Error("Failed to fetch courses data");
    }

    const result = await response.json();

    return result.courses.map((course: Course) => ({
      id: course.id,
      name: course.title,
      price: `$${course.price}`,
      image: course.imageURL,
      duration: `${course.total_videos} فيديو، ${course.total_duration}`,
      trainer: course.trainers
        .filter((trainer) => trainer.leader)
        .map((trainer) => `${trainer.first_name} ${trainer.last_name}`)
        .join(", "),
      description: `السعر الأصلي: ${course.original_price} ${course.currency}`,
      level: "غير محدد",
      isComingSoon: course.status === "coming_soon",
    }));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

const CoursesPage = () => {
  const { color } = useTheme();

  // Client-side fetching (React Hook)
  const [courses, setCourses] = React.useState<FormattedCourse[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchCoursesData();
      setCourses(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main style={{ margin: "0", width: "100%", overflow: "hidden" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr",
          lg: "repeat(4, 1fr)",
        }}
        gap="4"
      >
        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <Text
            className="recommended"
            marginRight="237px"
            marginBottom="84px"
            paddingTop="153px"
            color={color}
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

      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Courses data={courses} />
        </Suspense>
      )}
    </main>
  );
};

export default CoursesPage;
