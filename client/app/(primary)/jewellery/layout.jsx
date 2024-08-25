import { Banner, Filters } from "@/src/components";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Filters />
      {children}
    </>
  );
};

export default layout;
