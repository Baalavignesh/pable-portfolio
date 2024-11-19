"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import { presidio } from "../public/static";
import experience from "../public/constants/experience";
import myskills from "../public/constants/skills";

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden">
      <CustomNavbar />
      <div className="px-36 h-full">
        <h1 className="text-5xl font-light text-center mt-12 pb-6">Skills</h1>
        <hr></hr>
        <div className=" mt-12 grid grid-cols-2 grid-rows-2 gap-12">
          <div className="flex flex-col gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <p className="p-2 m-4 text-4xl font-light border-b-2 w-fit">
              Language
            </p>
            <div className="p-4 flex gap-12 flex-wrap">
              {myskills.languages.map((lang, index) => {
                return (
                  <img
                    src={lang}
                    alt="language"
                    key={index}
                    className="3xl:h-32 h-24 hover:scale-110 duration-300 cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-gray-50   fade-projects py-8">
            <p className="p-2 m-4 text-4xl font-light border-b-2 w-fit">
              Framework{" "}
            </p>
            <div className="p-4 flex gap-12 flex-wrap">
              {myskills.frameworks.map((lang, index) => {
                return (
                  <img
                    src={lang}
                    alt="framwork"
                    key={index}
                    className="3xl:h-32 h-24 hover:scale-110 duration-300 cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 col-span-2 rounded-lg bg-gray-50 fade-projects py-8">
            <p className="p-2 m-4 text-4xl font-light border-b-2 w-fit">
              Tools and Services
            </p>
            <div className="p-4 flex gap-12 flex-wrap">

            {myskills.tools.map((tool, index) => {
              return (
                <img
                  src={tool}
                  alt="tools"
                  key={index}
                  className="3xl:h-32 h-24 hover:scale-110 duration-300 cursor-pointer"
                />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
