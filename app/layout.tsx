import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavbar from "../components/share/HomeNavbar/index.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood Labs",
  description: "Blood Labs for identifying blood types as well as other blood related tests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-indigo-300">
      <body className={inter.className}>
        <HomeNavbar/>
        {children}
      </body>
    </html>
  );
}
