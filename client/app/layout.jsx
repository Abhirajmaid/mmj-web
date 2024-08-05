import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "@/src/components";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "M M Jewellers",
  description: "Mukund Maid Jewellers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
