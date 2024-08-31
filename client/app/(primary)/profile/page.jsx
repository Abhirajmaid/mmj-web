"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "ABHIRAJ MAID",
    email: "abhirajmaid@gmail.com",
    mobile: "7385302967",
    country: "India",
  });

  const onSignOut = () => {
    sessionStorage.clear();
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto md:p-6 p-2">
        {/* Header */}
        <div className="flex justify-between md:items-center gap-4 items-start border-b border-gray-300 pb-4 mb-6 md:flex-row flex-col">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <div onClick={() => onSignOut()} className=" cursor-pointer">
            <span className="flex items-center text-sm text-gray-600 hover:text-black">
              <Icon icon="lucide:log-out" className="h-5 w-5" />
              LOG OUT
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 grid-rows-2 gap-8">
          {/* Account Details */}
          <div className="border border-gray-300 p-6 bg-white">
            <h2 className="text-lg font-bold mb-4">ACCOUNT DETAILS</h2>
            <div className="text-sm text-gray-600">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
              <p>{user.country}</p>
            </div>
          </div>

          {/* Order History */}
          <div className="border border-gray-300 p-6 bg-white">
            <h2 className="text-lg font-bold mb-4">ORDER HISTORY</h2>
            <div className="text-sm text-gray-600">
              <p>YOU HAVEN'T PLACED ANY ORDERS YET.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
