"use client";
import { ItemList, Loader, PaginationControls } from "@/src/components";
import jewelleryAction from "@/src/lib/action/jewellery.action";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const [data, setData] = useState();

  useEffect(() => {
    getJewelleryList();
  }, []);

  const getJewelleryList = () => {
    jewelleryAction.getJewellery().then((resp) => {
      // console.log(resp.data.data);
      setData(resp.data.data);
    });
  };

  const dataSliced = data?.slice(start, end);

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
