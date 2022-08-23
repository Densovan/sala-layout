import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useTheme } from "next-themes";

const MainLayout = () => {
  const [modal, setModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("");
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className=" p-4 items-center bg-base-300">
      {modal && (
        <div className="bg-base-200 p-4 absolute right-40 top-20 w-48 rounded-lg">
          <button
            onClick={() => setTheme("light")}
            className="bg-base-300 py-1 px-8 rounded-lg font-bold w-full"
          >
            Default
          </button>
          <br />
          <button
            onClick={() => setTheme("dark")}
            className="bg-base-300 py-1 px-8 rounded-lg font-bold mt-2 w-full"
          >
            Dark
          </button>
          <br />
          <button
            onClick={() => setTheme("coffee")}
            className="bg-base-300 py-1 px-8 rounded-lg font-bold mt-2 w-full"
          >
            Coffee
          </button>
          <br />
          <button
            onClick={() => setTheme("synthwave")}
            className="bg-base-300 py-1 px-8 rounded-lg font-bold mt-2 w-full"
          >
            Synthwave
          </button>
        </div>
      )}
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <div className="max-w-xl">
              <label className="flex justify-center w-full h-10 px-4 transition bg-base-200 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop your logo file here
                    {/* <span className="text-blue-600 underline">browse</span> */}
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
          </div>
          <button
            className="bg-base-100 px-12 rounded-lg  font-bold text-md py-1"
            onClick={() => setModal(!modal)}
          >
            Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
