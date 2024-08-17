import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <div className="relative w-[1300px] mx-auto bg-primary p-14 flex justify-between rounded-lg mt-[200px] mb-[70px]">
      <div className="flex flex-col gap-6 w-1/2">
        <h1 className="text-[30px] font-bold text-white">
          Share Your Contact:
        </h1>
        <div className="w-full flex">
          <div className="px-4 py-[10px] bg-[#D9D9D9] font-semibold text-[18px] rounded-l-md">
            +91
          </div>
          <input
            type="number"
            placeholder="12345 12345"
            className="input !bg-white w-[60%] rounded-r-md text-[18px] !border-none input-number"
          />
        </div>
        <p className="text-[14px] text-white">
          Share your WhatsApp number, <br />
          it will be used to share you new jewellery designs each week!
        </p>
      </div>
      <Image
        src="/cta.svg"
        width={500}
        height={500}
        alt="MMJ"
        className="absolute right-0 -top-[153px] w-auto h-auto"
      />
    </div>
  );
};

export default CTA;
