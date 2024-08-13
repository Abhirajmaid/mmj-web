"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { navLinks } from "../../data/navLinks";
import { SingleLink } from "..";
import Logo from "./Logo";
import Link from "next/link";
import { RateLink } from "./RateDropDown";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname == href;
  return (
    <nav className="w-full fixed z-50 top-0 left-0">
      <div className="w-full px-10 py-1 flex justify-between items-center text-[13px] bg-primary text-txt_light">
        <div className="w-[40%] flex gap-4 items-center">
          <Link
            href="https://wa.me/7385302967"
            target="_blank"
            className="flex items-center gap-1 font-semibold"
          >
            <Icon icon="ic:sharp-whatsapp" width="20" />
            <span>WhatsApp</span>
          </Link>
          <Link
            href="#storeLocation"
            className="flex items-center gap-1 font-semibold"
          >
            <Icon icon="ic:outline-store" width="20" />
            <span>Store Locator</span>
          </Link>
        </div>
        <RateLink />
      </div>
      <div className="w-full flex justify-between bg-white text-black ">
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-3 w-[35%] justify-center items-center">
          <input
            type="text"
            className="w-[100%] p-[10px] px-6 border border-[#C1C1C1] rounded-3xl placeholder:italic placeholder:text-sm"
            placeholder="What are you looking for?"
          />
          <ul className="flex gap-8 items-center w-auto justify-center">
            {navLinks.map((link) => (
              <SingleLink {...link} key={link.id} isActive={isActive} />
            ))}
          </ul>
        </div>
        <div className="flex gap-6 mr-10 text-[15px]">
          <div className="flex items-center gap-1">
            <Icon icon="line-md:account" width={20} />
            <span>Account</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="bi:heart" width={18} />
            <span>Favorites</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
