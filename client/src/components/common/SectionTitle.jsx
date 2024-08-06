import React from "react";

const SectionTitle = ({ title, subTitle, txtColor }) => {
  return (
    <div
      className={`flex gap-[10px] w-full flex-col items-center text-${txtColor} `}
    >
      <h1 className="text-[32px] flex flex-col">
        {title}
        <span className={`w-[20%] h-[2px] bg-${txtColor} mt-1`}></span>
      </h1>
      {subTitle && <h3 className="text-[18px]">{subTitle}</h3>}
    </div>
  );
};

export default SectionTitle;
