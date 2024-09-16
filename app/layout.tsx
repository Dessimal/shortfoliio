import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// const clashDisplayExtraLight = localFont({
//   src: "./fonts/ClashDisplay-Bold.woff",
//   variable: "--font-clash-display-extralight",
//   weight: "200",
// });
// const clashDisplayLight = localFont({
//   src: "./fonts/ClashDisplay-Bold.woff",
//   variable: "--font-clash-display-light",
//   weight: "300",
// });
const clashDisplayRegular = localFont({
  src: "./fonts/ClashDisplay-Regular.woff",
  variable: "--font-clash-display-regular",
  weight: "400",
});

const clashDisplayMedium = localFont({
  src: "./fonts/ClashDisplay-Medium.woff",
  variable: "--font-clash-display-medium",
  weight: "500",
});

const clashDisplayVariable = localFont({
  src: "./fonts/ClashDisplay-Variable.woff",
  variable: "--font-clash-display-variable",
  weight: "200 700",
});

const clashDisplaySemibold = localFont({
  src: "./fonts/ClashDisplay-Semibold.woff",
  variable: "--font-clash-display-semi-bold",
  weight: "600",
});

const clashDisplayBold = localFont({
  src: "./fonts/ClashDisplay-Bold.woff",
  variable: "--font-clash-display-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Shortfolio",
  description: "Your Ideal Shortstay Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplayVariable.variable} ${clashDisplaySemibold.variable} ${clashDisplayRegular.variable} ${clashDisplaySemibold.variable} ${clashDisplayBold.variable} ${clashDisplayMedium.variable} antialiased overflow-x-hidden relative font-customRegular`}>
        <Navbar />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
