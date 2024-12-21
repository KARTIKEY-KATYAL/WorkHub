"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutIcon } from "lucide-react";
import Link from "next/link";
function WorkSpaceList() {
  const { user } = useUser();
  const [workSpaces, setWorkSpaces] = useState([]); // Initialize workspace state

  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52 bg-[#00004D] text-white">
      {/* Greeting Section */}
      <div className="flex justify-between items-center bg-green-300 text-black w-full rounded-lg px-5 py-3 shadow-md">
        <h2 className="font-bold text-2xl">
          Hello,{" "}
          <span className="text-primary">{user?.fullName || "Guest"}</span>
        </h2>
        <Link href="/createworkspace">
          <Button className="text-2xl font-extrabold hover:bg-blue-700 transition duration-300 items-center justify-between">
            +
          </Button>
        </Link>
      </div>

      {/* Workspaces Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-primary text-2xl">Workspaces</h2>
          <div className="flex gap-2">
            <LayoutIcon className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300" />
            <AlignLeft className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300" />
          </div>
        </div>

        {/* List of Workspaces */}
        <div className="mt-6 space-y-4">
          {workSpaces.length > 0 ? (
            <div>Workspaces</div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/workspace.png"
                alt="No workspaces available"
                width={400}
                height={400}
                className="mb-4"
              />
              <p className="text-gray-400 text-lg">
                No workspaces added yet. Click "+" to create one!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkSpaceList;
