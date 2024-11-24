
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LayoutProvider } from "@/components/context/LayoutContex";
import Head from "next/head";

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
  title: "Portfolio of Rey Vincent Leal - Web Developer & Full-Stack Developer",
  description: "Explore the personal portfolio of Rey Vincent Leal, a passionate and skilled Web Developer and Full-Stack Developer. Discover modern, responsive, and user-friendly websites, showcasing a strong foundation in web development, design, and digital solutions that empower businesses and individuals to succeed online.",
  keywords: "Web Developer, Full-Stack Developer, Portfolio, Responsive Websites, User-Friendly Websites, Web Development, Design, Digital Solutions",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
     <Head>
        <link rel="icon" href="/dev.png" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <LayoutProvider>
          {children}
          
        </LayoutProvider>
      </body>
    </html>
  );
}
