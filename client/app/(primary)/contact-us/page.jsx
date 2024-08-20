// import { InfiniteMarquee } from "@src/components/common";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "Got questions or feedback? Reach out to us! Our team is here to assist you.",
};

const page = () => {
  return (
    <>
      <div className="relative w-full md:h-[110vh] h-[150vh]">
        <Image
          src="/contact_us.png"
          width={1500}
          height={1500}
          alt="MMJ"
          className="w-full h-full object-cover blur-[6px]"
        />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-black/50 md:px-[6%]">
          <div className="mt-14 md:w-[60%] w-[90%] md:h-[72vh] h-fit rounded-xl mx-auto flex md:flex-row flex-col items-center gap-6 bg-white overflow-hidden">
            <Image
              src="/contact_us.png"
              width={1500}
              height={1500}
              alt="MMJ"
              className="md:w-[40%] w-full h-full object-cover"
            />
            <form
              className="flex flex-col md:w-[60%] w-full p-8 px-6  gap-6 mx-auto"
              // onSubmit={handleSubmit}
            >
              <h1 className="font-semibold text-[40px]">Contact Us</h1>
              <input
                type="text"
                className="p-4 bg-slate-200 rounded-md focus:outline-[#00000052]"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="p-4 bg-slate-200 rounded-md focus:outline-[#00000052]"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="p-4 bg-slate-200 rounded-md focus:outline-[#00000052]"
                placeholder="Phone"
              />
              <textarea
                placeholder="Message"
                className="p-4 bg-slate-200 rounded-md resize-none focus:outline-[#00000052]"
                rows="6"
              ></textarea>
              <button className="btn btn-secondary !w-[40%]">Send</button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="h-fit -mt-6">
        <InfiniteMarquee txt="CHAI" />
      </div> */}
    </>
  );
};

export default page;
