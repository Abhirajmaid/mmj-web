import { Banner, Filters, PaginationControls } from "@/src/components";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Filters />
      {children}
      <PaginationControls />
    </>
  );
};

export default layout;
