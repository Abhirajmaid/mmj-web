"use client";
import { ItemList, PaginationControls } from "@/src/components";
import { goldItems } from "@/src/data/data";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const data = goldItems.slice(start, end);

  return (
    <>
      <ItemList data={data} />
      <PaginationControls count={goldItems.length} />
    </>
  );
};

export default page;
