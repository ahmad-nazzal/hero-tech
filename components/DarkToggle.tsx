"use client";

import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      fontWeight="bold"
      variant="ghost" // بدون خلفية
      _hover={{
        transform: "scale(1.05)", // يمكنك إلغاء هذا إذا كنت لا تريده
      }}
      _active={{
        transform: "scale(0.95)",
      }}
      display="inline-flex" // لضبط العرض مع الأيقونة فقط
      alignItems="center"
      justifyContent="center"
      p={0} // لإلغاء المسافة الداخلية
      width="fit-content" // لضبط العرض ليناسب حجم الأيقونة
      height="fit-content" // لضبط الارتفاع ليناسب حجم الأيقونة
      transition="all 0.3s ease"
    >
      {/* الأيقونة */}
      <span
        style={{
          display: "inline-block", // لكي تأخذ الأيقونة مساحتها الخاصة
          color: colorMode === "light" ? "#000000" : "#FFD700", // لون القمر أسود في الوضع الفاتح والشمس ذهبية في الوضع الداكن
          fontSize: "1.5rem", // ضبط حجم الأيقونة
        }}
      >
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </span>

      {/* النص بجانب الأيقونة */}
      <span
        style={{
          color: "white", // النص سيكون دائمًا باللون الأبيض
          marginLeft: "8px", // لإضافة مسافة بين الأيقونة والنص
          fontSize: "1rem",
          paddingRight: "5px",
          // حجم النص
        }}
      >
        {colorMode === "light" ? "الوضع الليلي" : "الوضع النهاري"}
      </span>
    </Button>
  );
}
