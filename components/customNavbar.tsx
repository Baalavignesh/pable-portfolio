"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CustomNavbar: React.FC = () => {
  let [pathname, setPathname] = useState<string>("");
  let [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    console.log(path);
    setPathname(path.toLowerCase());
  }, []);
  let router = useRouter();

  return (
    <div className="flex justify-between items-center px-12 xl:px-36 py-4 shadow-sm sticky bg-white bg-opacity-60 top-0 z-50 backdrop-filter backdrop-blur-2xl hover:bg-white transition-all duration-300">
      <div className="flex gap-4 justify-between xl:justify-start items-center w-full">
        <h1
          className="text-xl 2xl:text-3xl font-light cursor-pointer"
          onClick={() => router.replace("/")}
        >
          Home
        </h1>
        <div className="hidden lg:flex text-base xl:text-xl gap-12 w-full justify-center" id="items">
          <a
            onClick={() => router.replace("/projects")}
            className={`h-fit  font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${
              pathname.includes("projects") ? "font-normal text-gray-800" : ""
            }`}
          >
            Projects
          </a>
          <a
            onClick={() => router.replace("/skills")}
            className={`h-fit  font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${
              pathname.includes("skills") ? "font-normal text-gray-800" : ""
            }`}
          >
            Skills
          </a>
          <a
            onClick={() => router.replace("/experience")}
            className={`h-fit  font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${
              pathname.includes("experience") ? "font-normal text-gray-800" : ""
            }`}
          >
            Work Experience
          </a>
          <a
            onClick={() => router.replace("/achievements")}
            className={`h-fit  font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${
              pathname.includes("achievements")
                ? "font-normal text-gray-800"
                : ""
            }`}
          >
            Achievements
          </a>

          <a
            onClick={() => router.replace("/hobbies")}
            className={`h-fit  font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${
              pathname.includes("hobbies")
                ? "font-normal text-gray-800"
                : ""
            }`}
          >
            Hobbies
          </a>
        </div>


 
<div className="lg:hidden">
<FontAwesomeIcon
            icon={faBars}
            className="text-2xl cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <a
          onClick={() => {
            router.replace("/projects");
            setDropdownOpen(false);
          }}
          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
            pathname.includes("projects") ? "font-normal text-gray-800" : ""
          }`}
              >
          Projects
              </a>
              <a
          onClick={() => {
            router.replace("/skills");
            setDropdownOpen(false);
          }}
          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
            pathname.includes("skills") ? "font-normal text-gray-800" : ""
          }`}
              >
          Skills
              </a>
              <a
          onClick={() => {
            router.replace("/experience");
            setDropdownOpen(false);
          }}
          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
            pathname.includes("experience") ? "font-normal text-gray-800" : ""
          }`}
              >
          Work Experience
              </a>
              <a
          onClick={() => {
            router.replace("/achievements");
            setDropdownOpen(false);
          }}
          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
            pathname.includes("achievements") ? "font-normal text-gray-800" : ""
          }`}
              >
          Achievements
              </a>
              <a
          onClick={() => {
            router.replace("/hobbies");
            setDropdownOpen(false);
          }}
          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
            pathname.includes("hobbies") ? "font-normal text-gray-800" : ""
          }`}
              >
          Hobbies
              </a>
            </div>
          )}
</div>
        </div>

      </div>
  );
};
export default CustomNavbar;
