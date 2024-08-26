import { Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/app/provider";
const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "M M Jewellers",
  description: "Mukund Maid Jewellers",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
