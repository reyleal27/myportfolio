
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LayoutProvider } from "@/components/context/LayoutContex";

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
  title: "My portfolio",
  description: "Welcome to my personal portfolio! I am a passionate and skilled Web Developer, Full-Stack Developer, with a strong foundation in creating modern, responsive, and user-friendly websites. This portfolio showcases my skills, experience, and the projects I've worked on. Here, you can explore my technical expertise in web development, design, and digital solutions that empower businesses and individuals to succeed online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
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
