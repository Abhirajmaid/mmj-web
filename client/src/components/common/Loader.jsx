import { Icon } from "@iconify/react";
import React from "react";

const Loader = () => {
  return (
    <div className="text-primary w-full h-[50vh] flex justify-center items-center">
      <Icon icon="svg-spinners:180-ring" width={50} />
    </div>
  );
};

export default Loader;
