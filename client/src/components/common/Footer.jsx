import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { customerLinks, jewelleryCatLinks } from "@/src/lib/navLinks";
import { SingleLink } from "..";

const Footer = () => {
  return (
    <footer className="relative w-full h-full pt-[45px] px-[130px] bg-[#e9b020]/50 overflow-hidden">
      <Image
        src="/footer_bg.png"
        width={400}
        height={500}
        className="absolute object-cover w-full top-0 left-0 opacity-10"
        alt="footer"
      />
      <div className="flex w-full opacity-100 z-50">
        <div className="w-[25%]">
          <Logo />
          <h3 className="text-[22px] flex flex-col mt-[50px]">
            Connect Us!
            <span className="w-[10%] h-[2px] bg-black"></span>
          </h3>
        </div>
        <div className="w-[20%]">
          <h3 className="text-[22px] flex flex-col">
            For Customers
            <span className="w-[10%] h-[2px] bg-black"></span>
          </h3>
          <ul className="flex flex-col gap-1 items-start w-[80%] justify-start mt-3">
            {customerLinks.map((link) => (
              <SingleLink {...link} key={link.id} />
            ))}
          </ul>
        </div>
        <div className="w-[30%]">
          <h3 className="text-[22px] flex flex-col">
            Jewellery Categories
            <span className="w-[10%] h-[2px] bg-black"></span>
          </h3>
          <ul className="flex flex-col gap-1 items-start w-[80%] justify-start mt-3">
            {jewelleryCatLinks.map((link) => (
              <SingleLink {...link} key={link.id} />
            ))}
          </ul>
        </div>
        <div className="w-[20%]">
          <h3 className="text-[22px] flex flex-col">
            Get in Touch
            <span className="w-[10%] h-[2px] bg-black"></span>
          </h3>
          <p className="mt-3 text-[16px]">
            customerservice@mmj.com
            <br />
            +919822672923/+917385302967
            <br />
            (10am to 6pm) Tuesday to Sunday
            <br />
            *Monday Closed
          </p>
        </div>
      </div>
      <div className="w-full justify-center items-center flex mt-[60px] mb-[30px]">
        <span>©2024 MM Jewellery. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
