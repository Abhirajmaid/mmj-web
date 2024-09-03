import Image from "next/image";
import React from "react";

const Divider = () => {
  return (
    <div className="w-full h-auto md:my-[60px] my-2">
      <Image
        src="/statics/divider.svg"
        width={800}
        height={300}
        className="md:w-[70%] w-[90%] h-[80px] mx-auto"
        alt="MMJ divider"
      />
    </div>
  );
};

export default Divider;
