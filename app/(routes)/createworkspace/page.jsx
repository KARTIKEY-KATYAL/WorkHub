"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SmilePlus } from "lucide-react";
import CoverPicker from "./CoverPicker.jsx";

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png"); // Default cover image
  const [workspaceName, setWorkspaceName] = useState(""); // State for input field
  const [isPickerVisible, setIsPickerVisible] = useState(false); // Toggle CoverPicker visibility

  // Handle cancel action
  const handleCancel = () => {
    setWorkspaceName(""); // Reset the input field
  };

  return (
    <div className="px-10 md:px-36 lg:px-52 xl:px-80 py-20 bg-gray-50 rounded-xl shadow-2xl">
      {/* Workspace Card */}
      <div className="rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Cover Image Section */}
        <div
          className="relative group cursor-pointer"
          onClick={() => setIsPickerVisible(!isPickerVisible)} // Toggle CoverPicker visibility
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 via-black/25 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <h2 className="text-lg font-semibold">Change Image</h2>
          </div>

          {/* Image */}
          <Image
            src={coverImage} // Dynamic image source
            alt="Workspace Cover"
            width={400} // Provide appropriate width
            height={400} // Provide appropriate height
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
        </div>

        {/* Show CoverPicker Below Image */}
        {isPickerVisible && (
          <div className="p-4 bg-gray-100">
            <CoverPicker setCoverImage={setCoverImage} />
          </div>
        )}

        {/* Details Section */}
        <div className="p-6 bg-white rounded-b-lg">
          <h2 className="text-xl font-bold text-gray-800">
            Create a New Workspace
          </h2>
          <p className="text-gray-600 mt-2">
            Set up a new workspace to collaborate with your team effectively.
          </p>

          {/* Input and Button Section */}
          <div className="mt-4 flex items-center gap-4">
            {/* Input Field */}
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)} // Update state on input change
              placeholder="Workspace Name"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {/* Create Button */}
            <Button
              className={`px-6 py-2 font-semibold rounded-md flex items-center gap-2 transition-all duration-300 ${
                workspaceName.trim()
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!workspaceName.trim()} // Disable if no text
            >
              <SmilePlus size={20} />
              Create
            </Button>

            {/* Cancel Button */}
            <Button
              onClick={handleCancel}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all duration-300"
            >
              Cancel
            </Button>
          </div>

          {/* Optional: Inline Error Message */}
          {!workspaceName.trim() && (
            <p className="mt-2 text-sm text-red-500">
              Workspace name cannot be empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
