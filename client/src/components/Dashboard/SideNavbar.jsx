"use client";
import React, { useEffect, useState } from "react";
import { Navlinks } from "..";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../common/Logo";

const SideNavbar = ({ links }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // const onlyWidth = useWindowWidth();
  // const mobileWidth = onlyWidth < 768;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    windowWidth < 768 ? setIsCollapsed(true) : setIsCollapsed(false);
  }, []);

  const mobileWidth = windowWidth < 768;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`relative ${
        isCollapsed ? "min-w-[80px]" : "min-w-[200px]"
      }  border-r px-3 pb-10 bg-white`}
    >
      {console.log(windowWidth)}
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2 bg-bg_dark text-center"
          >
            {isCollapsed == false ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>
      )}
      <Navlinks isCollapsed={mobileWidth ? true : isCollapsed} links={links} />
    </div>
  );
};

export default SideNavbar;
