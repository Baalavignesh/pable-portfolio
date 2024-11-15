"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ICustomNavbarProps {
  current?: string;
}
const CustomNavbar: React.FC<ICustomNavbarProps> = ({ current }) => {
  useEffect(() => {
    console.log(current);
  }, []);
    let router = useRouter();
  return (
    <div className="flex justify-between items-center px-36 py-4 shadow-sm sticky bg-white bg-opacity-60 top-0 z-50 backdrop-filter backdrop-blur-2xl hover:bg-white transition-all duration-300">
      <div className="flex gap-4 items-center w-full">
      <h1 className="text-3xl font-light cursor-pointer" onClick={() => router.replace("/")}>Home</h1>
      <div className="flex gap-12 w-full justify-center" id="items">
          <a
            onClick={() => router.replace("/projects")}
            className={`h-fit text-xl font-light text-gray-500 hover:text-black transition-all duration-200 cursor-pointer ${current === "projects" ? "font-normal text-gray-600" : ""}`}
          >
            Projects
          </a>
          <a
            onClick={() => router.replace("/skills")}
            className={`h-fit text-xl font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${current === "skills" ? "font-normal text-gray-600" : ""}`}
          >
            Skills
          </a>
          <a
            onClick={() => router.replace("/experience")}
            className={`h-fit text-xl font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${current === "workexperience" ? "font-normal text-gray-600" : ""}`}
          >
            Work Experience
          </a>
          <a
            onClick={() => router.replace("/achievements")}
            className={`h-fit text-xl font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer ${current === "achievements" ? "font-normal text-gray-600" : ""}`}
          >
            Achievements
          </a>

          <a
            href="hobbies"
            className="h-fit text-xl font-light text-gray-500 hover:text-gray-900 transition-all duration-200"
          >
            Hobbies
          </a>
        </div>
      </div>
    </div>
  );
};
export default CustomNavbar;
