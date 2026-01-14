import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 1. Import it here

export const metadata: Metadata = {
  title: "HomeCare Plus | Professional Care at Home",
  description: "Quality homecare services for your loved ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer /> {/* 2. Add it here */}
      </body>
    </html>
  );
}