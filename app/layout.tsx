import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import CustomCursor from "@/components/Gsap comps/CustomCursor";
import localFont from "next/font/local";
import Navbar from "@/components/Digital-Agency-Website/DGW-comps/Navbar";

const myFont = localFont({
  src: [
    {
      path: "./NeueMachina-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NeueMachina-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./NeueMachina-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myFont.className} antialiased `}
      >
        <Navbar />
        {children}
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}
