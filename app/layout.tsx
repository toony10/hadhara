import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./commponents/NavBar";
import Footer from "./commponents/Footer";

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
  title: "Hadarah",
  description: "انطلق معنا إلى أعماق حضارة أضاءت دروب التاريخ- موقع حضارة يقدم لكم معلومات عن الحضارات القديمة والتاريخ القديم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${geistSans.variable} ${geistMono.variable} antialiased` }>
        <NavBar />
        { children }
        <Footer />
      </body>
    </html>
  );
}
