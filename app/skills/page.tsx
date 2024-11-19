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
      <div className="px-72 h-full">
        <div className="w-fit">
            <h1 className="text-6xl font-bold mt-28 pb-6 w-fit">Skills and Technologies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
          <hr className="w-full" />
        </div>

        <p></p>
        {/* <hr></hr> */}
        <div className=" mt-12 gap-12 flex">
          <div className="flex flex-col w-full justify-start p-12 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <div className=" border-b-2 p-2 m-4 flex flex-col gap-2">
              <p className=" text-4xl font-normal w-fit">Stack</p>
              <p className="text-xl font-light text-gray-700">
                Tools, resources, and technologies I use daily
              </p>
            </div>

            <div className="p-4 grid grid-cols-2 gap-6 flex-wrap">
              {myskills.daily.map((skill, index) => {
                return (
                  <div className="flex gap-4 items-center">
                    <div className="3xl:h-20 3xl:w-20 h-24 w-24">
                      <img
                        src={skill.image}
                        alt="language"
                        key={index}
                        className="hover:scale-110 duration-300 cursor-pointer object-contain h-full w-full"
                      />
                    </div>

                    <div>
                      <h1 className="font-semibold text-xl">{skill.heading}</h1>
                      <p className="text-lg font-light text-gray-500">
                        {skill.subheading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col w-full justify-start p-12 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <div className=" border-b-2 p-2 m-4 flex flex-col gap-2">
              <p className=" text-4xl font-normal w-fit">Other Technologies</p>
              <p className="text-xl font-light text-gray-700">
                Tools, resources, and technologies I have used in the past
              </p>
            </div>

            <div className="p-4 grid grid-cols-2 gap-6 flex-wrap">
              {myskills.other.map((skill, index) => {
                return (
                  <div className="flex gap-4 items-center">
                    <div className="3xl:h-20 3xl:w-20 h-24 w-24">
                      <img
                        src={skill.image}
                        alt="language"
                        key={index}
                        className="hover:scale-110 duration-300 cursor-pointer object-contain h-full w-full"
                      />
                    </div>
                    <div>
                      <h1 className="font-semibold text-xl">{skill.heading}</h1>
                      <p className="text-lg font-light text-gray-500">
                        {skill.subheading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
