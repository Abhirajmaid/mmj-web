import Image from "next/image";
import Link from "next/link";
import React from "react";

const StoreLocationSec = () => {
  return (
    <section
      id="storeLocation"
      className="w-full flex gap-[60px] items-center justify-center bg-primary text-white"
    >
      <Image
        src="/mmjstore.png"
        width={500}
        height={500}
        className="w-[50%]"
        alt="Mukund Maid Jewellers"
      />
      <div className="flex flex-col justify-start gap-5">
        <h2 className="w-full text-[32px] flex flex-col">
          Come and Say Hi!
          <span className="w-[7%] h-[3px] bg-white"></span>
        </h2>
        <p className="text-[18px] font-thin w-[60%]">
          Explore iconic traditional jewellery, gold and diamond engagement
          rings, silver classics, elegant accessories, and precious gifts for
          any occasion at our MMJ store.
        </p>
        <Link href="https://maps.app.goo.gl/ttGrwNSfCm5hRny49" target="_blank">
          <button className="bg-sec w-[20%] text-black p-3 uppercase cursor-pointer">
            Store Location
          </button>
        </Link>
      </div>
    </section>
  );
};

export default StoreLocationSec;
