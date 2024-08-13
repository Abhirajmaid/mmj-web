"use client";
import {
  CTA,
  Divider,
  FeaturedSec,
  ProductImages,
  SectionTitle,
} from "@/src/components";
import { goldItems } from "@/src/data/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const gold_rate = 6984;

const page = () => {
  const param = useParams();

  const [price, setPrice] = useState("");
  const [netTax, setNetTax] = useState("");

  const item = goldItems.find((item) => {
    return item.product_code == param.id;
  });

  const {
    id,
    title,
    img,
    product_code,
    categtory,
    product_type,
    meatel_purity,
    metal_color,
    collection,
    feature,
    availability,
    weight,
    making_charges,
    tax,
  } = item;

  useEffect(() => {
    var gold_price = gold_rate * weight;
    gold_price += gold_price * (making_charges / 100);
    var net_tax = gold_price * (tax / 100);
    gold_price += gold_price * (tax / 100);

    return () => {
      setNetTax(net_tax);
      setPrice(gold_price);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-[1430px] mx-auto p-3 pt-[80px] gap-10">
        <div className="relative w-[50%] flex items-end flex-col">
          <ProductImages images={img} />
          <div className="absolute w-[50px] h-[50px] bg-[#f5f5f5] p-[2px] flex items-center justify-center rounded-full cursor-pointer top-5 right-5">
            <Icon icon="bi:heart" width={28} />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[24px] font-semibold mb-3">{title}</h1>
          <h2 className="text-[18px] mb-3">Product Code : {product_code}</h2>
          <p className="text-[15px] mb-5">Availability: {availability}</p>
          <div className="flex flex-col mb-5">
            <div className="text-[27px] text-primary font-bold">
              ₹{Math.round(price)}
            </div>
            <span className="text-[11px]">(Including all charges)</span>
          </div>
          <div className="flex items-center w-[80%] mb-6">
            <div className="flex flex-col gap-2 w-1/2">
              <p className="text-[16px]">Metal Purity</p>
              <div className="w-[80%] p-3 bg-[#f5f5f5] border-[0.7px] border-primary text-center font-semibold">
                {meatel_purity}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <p className="text-[16px]">Metal Color</p>
              <div className="w-[80%] p-3 bg-[#f5f5f5] border-[0.7px] border-primary text-center font-semibold">
                {metal_color}
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f5] w-full mb-6 border border-primary p-4">
            <h3 className="text-[14px] pb-4">View price breakup</h3>
            <ul className="gap-[10px] flex flex-col w-full mb-[22px] text-[14px]">
              <div className="flex w-full gap-[120px] items-center">
                <span className="w-1/3">Metal Price</span>
                <span className="w-1/3 text-center">{weight}gm</span>
                <span className="w-1/3 text-end">
                  ₹{Math.round(gold_rate * weight * 100) / 100}
                </span>
              </div>
              <div className="flex w-full gap-[120px] items-center">
                <span className="w-1/3">Stone Price</span>
                <span className="w-1/3 text-center">-</span>
                <span className="w-1/3 text-end">₹200</span>
              </div>
              <div className="flex w-full gap-[120px] items-center">
                <span className="w-1/3">Making Charges</span>
                <span className="w-1/3 text-center">{making_charges}%</span>
                <span className="w-1/3 text-end">
                  ₹{gold_rate * weight * (making_charges / 100)}
                </span>
              </div>
              <div className="flex w-full gap-[120px] items-center">
                <span className="w-1/3">Tax (GST)</span>
                <span className="w-1/3 text-center">{tax}</span>
                <span className="w-1/3 text-end">
                  ₹{Math.round(netTax * 100) / 100}
                </span>
              </div>
              <span className="w-[100%] my-[10px] h-[1px] bg-black"></span>
              <div className="flex w-full gap-[120px] items-center">
                <span className="w-1/3">Net Price</span>
                <span className="w-1/3 text-center"></span>
                <span className="w-2/3 text-end">₹{Math.round(price)}</span>
              </div>
            </ul>
          </div>
          <div className="flex w-[90%] gap-5 text-[15px] mb-6">
            <Link href="/" className="w-[40%]">
              <button className="btn btn-primary w-full !rounded-none !p-4">
                💛 Add to Favorite
              </button>
            </Link>
            <Link href="/" className="w-[40%]">
              <button className="btn btn-primary w-full !rounded-none !p-4">
                Buy Now
              </button>
            </Link>
          </div>
          <Image
            src="/contact_details.svg"
            width={700}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      <Divider />
      <SectionTitle title="You May Like This" txtColor="black" />
      <Divider />
      <FeaturedSec />
      <CTA />
    </div>
  );
};

export default page;
