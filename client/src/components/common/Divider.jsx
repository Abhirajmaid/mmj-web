import Image from "next/image";
import React from "react";

const Divider = () => {
  return (
    <div className="w-full h-auto my-[60px]">
      <Image
        src="/divider.svg"
        width={800}
        height={200}
        className="w-[70%] h-[80px] mx-auto"
        alt="MMJ divider"
      />
    </div>
  );
};

export default Divider;
