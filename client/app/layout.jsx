import { Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/app/provider";
import Head from "next/head";
const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mukundmaidjewellers.com"),
  title: {
    default: "Mukund Maid Jewellers",
    template: "%s | Mukund Maid Jewellers",
  },
  description:
    "Discover Exquisite Jewellery at Mukund Maid Jewellers. Your trusted source for gold, diamonds, and gemstones, combining tradition with modern elegance. Shop now for handcrafted pieces that define luxury.",
  twitter: {
    card: "summary_large_image",
    site: "@MukundMaidJewellers",
  },
  openGraph: {
    title: "Mukund Maid Jewellers",
    description:
      "Explore the finest collection of gold, diamond, and gemstone jewellery at Mukund Maid Jewellers. Tradition meets modern craftsmanship in every piece. Experience luxury redefined.",
    images: [
      {
        url: "./opengraph-image.png",
      },
    ],
  },
  keywords: [
    "Mukund Maid Jewellers",
    "Gold Jewellery",
    "Diamond Jewellery",
    "Gemstone Jewellery",
    "Luxury Jewellery",
    "Handcrafted Jewellery",
    "Jewellery Store",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0a2975" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className={open_sans.className}>
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
