"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import { presidio } from "../public/static";
import experience from "../public/constants/experience";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <PageTemplate heading="Experience &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
      <div className="mx-4 lg:mx-32 mt-12">
        <ol className="flex gap-12 lg:gap-24 flex-col relative text-gray-500 border-s border-white lg:border-gray-200 mb-24">
          {experience.map((exp: IExperience, index) => {
            console.log(experience.length, index);
            return (
              <li
                className={`mb-10 ms-6   ${
                  index + 1 == experience.length && "mb-0"
                }`}
              >
                <span className=" lg:absolute flex items-center justify-center w-16 h-16 lg:w-32 lg:h-32 bg-white border-2 border-gray-200 rounded-full lg:-start-16 fade-projects">
                  <img src={exp.logo} className="w-32 rounded-full"></img>
                </span>
                <div className="lg:ml-24 mt-3 flex justify-between fade-projects">
                  <div className="w-3/5">
                    <h3 className="font-medium leading-tight text-4xl">
                      {exp.company}
                    </h3>
                    <p className="text-xl">
                      {exp.role} | {exp.type}
                    </p>

                    <p className="hidden lg:block text-md mt-4 text-justify">{exp.description}</p>
                  </div>

                  <div className="w-fit text-right">
                    <p className="text-lg">{exp.duration}</p>
                    <p className="text-lg">{exp.location}</p>
                    <span className="text-sm">{exp.length}</span>
                  </div>
                </div>
                <p className=" lg:hidden text-md mt-4 text-justify">{exp.description}</p>

              </li>
            );
          })}
        </ol>
      </div>
    </PageTemplate>
  );
}
