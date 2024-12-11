import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Tajawal } from "next/font/google";
import { Providers } from "../components/Providers";
import Header from "../sections/header/header";
import Footer from "../sections/Footer/Footer";
import DiscountBanner from "../sections/DiscountBanner/DiscountBanner";

const tajawal = Tajawal({
  weight: ["400", "700"],
  subsets: ["arabic"],
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "الرئيسية - الأكاديمية العربية للبرمجة",
  description:
    "تقدم الأكاديمية العربية للبرمجة دورات متخصصة لتعليم البرمجة باللغة العربية، حيث يمكن للطلاب اكتساب المهارات التقنية وتعلمة لغات البرمجة من خلال محتوى تعليمي مميز ومناسب للناطقين باللغة العربية",
  icons: {
    icon: "./images/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //TODO we need to get these values from an API
  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-11-25T23:59:59";
  const promotionMessage ="خصومات بنسبة 20% على الكورسات";

  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.className} antialiased`}
      >
         <DiscountBanner
          startDate={startDate}
          endDate={endDate}
          promotionMessage = {promotionMessage}
        />
        {/*<Header /> */}
        <Providers>{children}</Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
