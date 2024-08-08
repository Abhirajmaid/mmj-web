import React from "react";
import { SectionTitle } from "..";
import { mensCat } from "@/src/data/data";
import Image from "next/image";
import Link from "next/link";

const SectionCard = ({ category, btnLink, img }) => {
  return (
    <div className="w-[300px] h-auto p-3 pb-5 hover:bg-secondary_light flex flex-col justify-between items-center">
      <Image
        src={img}
        width={500}
        height={500}
        className="w-full h-full object-cover mb-6"
        alt="mmj"
      />
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-[21px]">{category}</h2>
        <Link href={`${btnLink}`}>
          <button className=" uppercase p-3 px-4 border-black border-[0.7px] text-black  hover:bg-primary hover:text-txt_light tracking-wider text-[12px]">
            Discover More
          </button>
        </Link>
      </div>
    </div>
  );
};

const MensSec = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-12">
      <div>
        <SectionTitle
          title="Men’s Jewellery"
          subTitle="Prepare to elevate your sense of style with our latest collection!"
          txtColor="black"
        />
      </div>
      <div className="flex gap-7 w-[70%] justify-between mt-[30px]">
        {mensCat.map((item, id) => {
          return <SectionCard {...item} key={id} />;
        })}
      </div>
    </section>
  );
};

export default MensSec;
