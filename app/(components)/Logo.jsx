import React from 'react'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="WorkHub Logo" width={30} height={30} />
      <span className="text-2xl font-semibold text-gray-800 kanit-bold ">
        WorkHub
      </span>
    </div>
  );
}

export default Logo
