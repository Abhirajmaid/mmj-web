import React from "react";
import { SectionTitle } from "..";
import Image from "next/image";
import Link from "next/link";

const DiamondSec = () => {
  return (
    <section className="w-[80%] mx-auto">
      <div>
        <SectionTitle
          title="Diamond"
          subTitle="Discover the beauty of diamond with our timeless diamond collection"
          txtColor="black"
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 h-[650px] mt-[30px]">
        <Link
          href="/diamond?product_type=rings"
          className=" row-span-1 bg-black rounded-lg overflow-hidden"
        >
          <Image
            src="/1.png"
            width={500}
            height={500}
            className="object-cover h-full w-full"
            alt="mmj"
          />
        </Link>
        <Link
          href="/diamond?product_type=bangles"
          className=" row-span-1 bg-black rounded-lg overflow-hidden"
        >
          <Image
            src="/2.png"
            width={500}
            height={500}
            className="object-cover h-full w-full"
            alt="mmj"
          />
        </Link>
        <Link
          href="/diamond"
          className=" row-span-2 bg-black rounded-lg overflow-hidden"
        >
          <Image
            src="/3.png"
            width={500}
            height={500}
            className="object-cover h-full w-full"
            alt="mmj"
          />
        </Link>
        <Link
          href="/diamond?product_type=earrings"
          className=" row-span-1 bg-black rounded-lg overflow-hidden"
        >
          <Image
            src="/4.png"
            width={500}
            height={500}
            className="object-cover h-full w-full"
            alt="mmj"
          />
        </Link>
        <Link
          href="/diamond?product_type=mangalsutras"
          className=" row-span-1 bg-black rounded-lg overflow-hidden"
        >
          <Image
            src="/5.png"
            width={500}
            height={500}
            className="object-cover h-full w-full"
            alt="mmj"
          />
        </Link>
      </div>
    </section>
  );
};

export default DiamondSec;
