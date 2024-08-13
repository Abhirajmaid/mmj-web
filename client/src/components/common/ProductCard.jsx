"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const gold_rate = 6984;

const ProductCard = ({ img, weight, product_code, making_charges, tax }) => {
  const [price, setPrice] = useState("");

  useEffect(() => {
    var gold_price = gold_rate * weight;
    gold_price += gold_price * (making_charges / 100);
    gold_price += tax / 100;

    return () => {
      setPrice(gold_price);
    };
  }, []);

  return (
    <Link href={`/items/${product_code}`} className="cursor-pointer">
      <div className="relative w-full h-auto hover:bg-secondary_light flex flex-col overflow-hidden border-[0.7px] border-[#424242]/30 rounded-lg">
        <div className="w-full h-[280px]">
          <Image
            src={img[0]}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            alt="MMJ"
          />
        </div>
        <div className="flex flex-col gap-1 items-start justify-center px-2 py-1 font-semibold">
          <h2 className="text-primary text-[18px]">₹{Math.round(price)}</h2>
          <span className="text-[13px] tracking-wider">SKU:{product_code}</span>
        </div>
        <div className="absolute w-[35px] h-[35px] bg-white flex items-center justify-center rounded-full cursor-pointer top-3 right-3">
          <Icon icon="bi:heart" width={22} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
