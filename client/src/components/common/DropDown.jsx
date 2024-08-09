"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Dropdown = ({ subLinks }) => {
  return (
    <motion.div
      className="z-[99] bg-white text-black p-6 rounded-sm shadow-lg w-[100%]"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <ul className="gap-[20px] flex flex-col">
        {subLinks?.map(({ id, linkText, url }) => (
          <Link
            key={id}
            end
            href={url}
            className="opacity-100 text-[16px] hover:opacity-70 uppercase flex flex-col justify-center items-center"
          >
            {linkText}
            <span className="w-full h-[1px] bg-[#424242]/20 mt-4"></span>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};

export default Dropdown;
