"use client";
import {
  CTA,
  Divider,
  FeaturedSec,
  JewelleryDetails,
  Loader,
  SectionTitle,
} from "@/src/components";
import { goldItems } from "@/src/data/data";
import jewelleryAction from "@/src/lib/action/jewellery.action";
import { useParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const page = () => {
  const param = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    getJewelleryDetails();
  }, []);

  const getJewelleryDetails = () => {
    jewelleryAction.getJewelleryByProductCode(param.id).then((resp) => {
      console.log(param.id, resp.data.data);
      setData(resp.data.data);
    });
  };

  return (
    <div className="w-full">
      {data ? (
        <>
          <JewelleryDetails data={data} />
        </>
      ) : (
        <Loader />
      )}
      <Divider />
      <SectionTitle title="You May Like This" txtColor="black" />
      <Divider />
      <FeaturedSec />
      <CTA />
    </div>
  );
};

export default page;
