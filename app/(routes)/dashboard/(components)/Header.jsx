"use client"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import { useAuth } from "@clerk/clerk-react";

const Header = () => {
    const orgId = useAuth()
    // console.log(orgId)
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-100 shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="WorkHub Logo" width={30} height={30} />
        <span className="text-2xl font-semibold text-gray-800 kanit-bold ">
          WorkHub
        </span>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="hidden md:flex space-x-4">
            <OrganizationSwitcher
            afterLeaveOrganizationUrl={"/dashboard"}
            afterSelectOrganizationUrl={"/dashboard"}
            />
      </div>

      {/* Right Section: User Button */}
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
