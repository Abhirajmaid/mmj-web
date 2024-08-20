import { Open_Sans } from "next/font/google";
import "../globals.css";
import { Footer, Nav } from "@/src/components";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "M M Jewellers",
  description: "Mukund Maid Jewellers",
};

export default function PrimaryLayout({ children }) {
  return (
    <>
      <Nav />
      <div className="mt-[137px]" />
      {children}
      <Footer />
    </>
  );
}
