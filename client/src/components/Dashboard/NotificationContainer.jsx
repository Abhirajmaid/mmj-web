import React from "react";
import { SectionTitle } from "..";

const data = [
  {
    notify:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, sapiente",
    urgent: true,
  },
];

const NotificationCard = ({ data }) => {
  return (
    <div className="bg-bg_dark p-3 rounded-lg relative flex w-full">
      <h2 className="text-black">{data[0].notify}</h2>
      {data[0].urgent ? (
        <>
          <span className="animate-ping absolute h-4 w-4 -top-1 -left-1 rounded-full bg-red-500 opacity-75"></span>
          <span className="absolute  h-4 w-4 -top-1 -left-1 rounded-full bg-red-500"></span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const NotificationContainer = () => {
  return (
    <div className="relative w-[18%] border-l px-3 pb-10 pt-10">
      <div className="mb-10">
        <SectionTitle title="Notifications" txtColor="black" />
      </div>
      <NotificationCard data={data} />
    </div>
  );
};

export default NotificationContainer;
