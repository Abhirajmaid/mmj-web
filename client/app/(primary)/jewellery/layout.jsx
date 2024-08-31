import { Banner, Filters, HeroMobile } from "@/src/components";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Banner />
      <HeroMobile />
      <Filters />
      {children}
    </>
  );
};

export default layout;
