import { UserButton } from "@clerk/nextjs";
import React from "react";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-100 shadow-md">
      {/* Left Section: Logo */}
      <Logo />

      {/* Middle Section: Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#features" className="text-gray-600 hover:text-gray-800">
          Features
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-800">
          Pricing
        </a>
        <a href="#about" className="text-gray-600 hover:text-gray-800">
          About
        </a>
      </div>

      {/* Right Section: User Button */}
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
