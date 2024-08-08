import { categories } from "@/src/data/data";
import React from "react";
import { SectionTitle } from "..";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category, btnLink, detail, img }) => {
  return (
    <div className="w-[300px] h-auto p-6 hover:bg-secondary_light flex flex-col justify-between items-center">
      <div>
        <Image
          src={img}
          width={500}
          height={500}
          className="w-full h-full object-cover"
          alt="mmj"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-[21px] font-semibold">{category}</h2>
        <p>{detail}</p>
        <Link href={`${btnLink}`}>
          <button className=" uppercase p-3 px-4 border-black border-[0.7px] text-black  hover:bg-primary hover:text-txt_light tracking-wider text-[12px]">
            Discover More
          </button>
        </Link>
      </div>
    </div>
  );
};

const CategorySec = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-12">
      <div>
        <SectionTitle
          title="Shop by Category"
          subTitle="A one-stop shop for all of your jewellery needs!"
          txtColor="black"
        />
      </div>
      <div className="flex gap-7 w-[70%] justify-between mt-[20px]">
        {categories.map((item, id) => {
          return <CategoryCard {...item} key={id} />;
        })}
      </div>
    </section>
  );
};

export default CategorySec;
