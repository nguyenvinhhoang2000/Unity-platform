import React from "react";
import { Inter } from "next/font/google";

import "@/public/styles/css/resets.css";
import "@/public/styles/css/globals.css";
import "@/public/styles/scss/utils.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
