import React from "react";
import { cn } from "@/src/lib/utils";
import "../globals.css";
import { NotificationContainer, SideNavbar } from "@/src/components";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen max-h-screen w-full overflow-hidden bg-white flex">
      <SideNavbar />
      <div className="w-[82%] p-8 ">{children}</div>
      <NotificationContainer />
    </div>
  );
};

export default DashboardLayout;
