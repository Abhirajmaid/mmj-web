import React from "react";

const SectionTitle = ({ title, subTitle, txtColor }) => {
  return (
    <div
      className={`flex gap-[10px] w-full flex-col items-center text-${txtColor}`}
    >
      <h1 className="md:text-[32px] text-[22px] flex flex-col">
        {title}
        <span className={`w-[30%] h-[3px] bg-${txtColor}`}></span>
      </h1>
      {subTitle && (
        <h3 className="md:text-[18px] text-[12px] text-center">{subTitle}</h3>
      )}
    </div>
  );
};

export default SectionTitle;
