import { Footer, Nav } from "@/src/components";

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
