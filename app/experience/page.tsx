"use client";

import React from "react";
import experience from "../public/constants/experience";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <PageTemplate heading="Experience">
      <div className="flex flex-col gap-6 w-full">
        <ol className="flex gap-4 lg:gap-8 flex-col relative text-gray-500 border-s border-gray-200">
          {experience.map((exp: IExperience, index) => (
            <li
              key={index}
              className={`ms-6 ${index + 1 === experience.length ? 'mb-0' : 'mb-4'}`}
            >
              <span className="absolute flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 bg-white border border-gray-200 rounded-full -start-8">
                <img src={exp.logo} className="w-full h-full rounded-full object-contain"></img>
              </span>
              <div className="ml-4 lg:ml-8 flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-3/4">
                  <h3 className="font-medium text-sm lg:text-base">
                    {exp.company}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500">
                    {exp.role} | {exp.type}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600 mt-2 text-justify">
                    {exp.description}
                  </p>
                </div>
                <div className="mt-2 lg:mt-0 lg:text-right text-xs lg:text-sm text-gray-500">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                  <span>{exp.length}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </PageTemplate>
  );
}
