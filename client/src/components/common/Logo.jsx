import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="h-full w-full">
      <Image
        src="/Primary_Logo.png"
        width={300}
        height={300}
        className="w-full h-full"
        alt="MMJ"
      />
    </Link>
  );
};

export default Logo;
