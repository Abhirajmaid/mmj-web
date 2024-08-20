"use client";
import { ItemList, Loader, PaginationControls } from "@/src/components";
import { goldItems } from "@/src/data/data";
import jewelleryAction from "@/src/lib/action/jewellery.action";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const param = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const product_type = searchParams.get("product_type");

  const [data, setData] = useState();

  useEffect(() => {
    getJewelleryList();
  }, []);

  const getJewelleryList = () => {
    jewelleryAction.getJewellery().then((resp) => {
      console.log(resp.data.data);
      setData(resp.data.data);
    });
  };

  const dataFiltered = data?.filter((item) => {
    if (product_type) {
      console.log(item);

      return (
        item?.attributes?.categories?.data[0]?.attributes?.category ===
          param.category && item?.attributes?.product_type === product_type
      );
    } else
      return (
        item?.attributes?.categories?.data[0]?.attributes?.category ===
        param.category
      );
  });

  const dataSliced = dataFiltered?.slice(start, end);

  console.log("filter", dataFiltered);

  console.log("haa", dataSliced);

  return (
    <>
      {data ? (
        <>
          <ItemList data={dataSliced} />
          <PaginationControls count={data?.length} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default page;
