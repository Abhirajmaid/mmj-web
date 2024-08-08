import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ img, price, product_code }) => {
  return (
    <Link href={`${product_code}`} className="cursor-pointer">
      <div className="relative w-[280px] h-auto hover:bg-secondary_light flex flex-col overflow-hidden border-[0.7px] border-[#424242]/30 rounded-lg">
        <div className="w-full h-[280px]">
          <Image
            src={img}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            alt="MMJ"
          />
        </div>
        <div className="flex flex-col gap-1 items-start justify-center px-2 py-1 font-semibold">
          <h2 className="text-primary text-[18px]">₹{price}</h2>
          <span className="text-[13px] tracking-wider">SKU:{product_code}</span>
        </div>
        <div className="absolute w-[35px] h-[35px] bg-white flex items-center justify-center rounded-full cursor-pointer top-3 right-3">
          <Icon icon="bi:heart" width={18} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
