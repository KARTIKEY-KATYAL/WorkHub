import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="WorkHub Logo" width={100} height={40} />
      <span className="text-lg font-semibold text-gray-800 kanit-bold">
        WorkHub
      </span>
    </div>
  );
};

export default Logo;
