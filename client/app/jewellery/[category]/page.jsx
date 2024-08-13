"use client";
import { ItemList, PaginationControls } from "@/src/components";
import { goldItems } from "@/src/data/data";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const param = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const product_type = searchParams.get("product_type");

  const goldItemsFiltered = goldItems.filter((item) => {
    if (product_type) {
      return (
        item.categtory === param.category && item.product_type === product_type
      );
    } else return item.categtory === param.category;
  }); // DATA FROM API

  const data = goldItemsFiltered.slice(start, end);

  if (data.status === 404) {
    notFound();
  }

  return (
    <>
      <ItemList data={data} />
      <PaginationControls count={goldItemsFiltered.length} />
    </>
  );
};

export default page;
