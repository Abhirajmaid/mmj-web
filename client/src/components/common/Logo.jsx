import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/Primary_Logo.png"
        width={300}
        height={300}
        className="w-[130px] h-[110px]"
        alt="MMJ"
      />
    </Link>
  );
};

export default Logo;
