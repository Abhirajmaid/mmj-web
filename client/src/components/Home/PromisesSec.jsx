import React from "react";
import { SectionTitle } from "..";
import Image from "next/image";

const PromisesSec = () => {
  return (
    <section className="w-full p-6 flex flex-col items-center gap-4 bg-primary">
      <div>
        <SectionTitle
          title="MMJ Promises"
          subTitle="Incredible rationales to shop with us!"
          txtColor="white"
        />
      </div>
      <Image
        src="/promises.svg"
        width={500}
        height={500}
        className="w-[85%] h-[170px]"
        alt="MMJ"
      />
    </section>
  );
};

export default PromisesSec;
