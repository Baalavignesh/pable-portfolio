"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import { presidio } from "../public/static";
import experience from "../public/constants/experience";

export default function Page() {
  return (
    <div>
      <CustomNavbar />
      <div className="px-8 2xl:px-32 3xl:px-72 h-full">
      <div className="w-fit">
            <h1 className="text-3xl 2xl:text-4xl 3xl:text-6xl font-bold mt-2 2xl:mt-12 3xl:mt-28 pb-6 w-fit">Experience &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <hr className="w-full" />
        </div>
        <div className="mx-32 mt-12">
          <ol className="flex gap-24 flex-col relative text-gray-500 border-s border-gray-200 mb-24">
            {experience.map((exp: IExperience, index) => {
              console.log(experience.length, index);
              return (
                <li
                  className={`mb-10 ms-6   ${
                    index + 1 == experience.length && "mb-0"
                  }`}
                >
                  <span className="absolute flex items-center justify-center w-32 h-32 bg-white border-2 border-gray-200 rounded-full -start-16 fade-projects">
                    <img src={exp.logo} className="w-32 rounded-full"></img>
                  </span>
                  <div className="ml-24 mt-3 flex justify-between fade-projects">
                    <div className="w-3/5">
                      <h3 className="font-medium leading-tight text-4xl">
                        {exp.company} 
                      </h3>
                      <p className="text-xl">
                        {exp.role} | {exp.type}
                      </p>

                      <p className="text-md mt-4">{exp.description}</p>
                    </div>

                    <div className="w-fit text-right">
                      <p className="text-lg">{exp.duration}</p>
                      <p className="text-lg">{exp.location}</p>
                      <span className="text-sm">{exp.length}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
