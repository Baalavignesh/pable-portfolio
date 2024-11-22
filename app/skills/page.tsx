"use client";

import React from "react";
import myskills from "../public/constants/skills";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <>
      <PageTemplate heading="Skills and Technologies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <div className="flex flex-col xl:flex-row gap-8 justify-center w-full">
          <div className="flex flex-col w-full justify-start p-6 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <div className=" border-b-2 p-2 m-2 flex flex-col gap-2">
              <p className="text-2xl lg:text-4xl font-normal w-fit">Stack</p>
              <p className="text-base lg:text-xl font-light text-gray-700">
                Tools, resources, and technologies I use daily
              </p>
            </div>

            <div className="p-4 grid grid-cols-2 gap-6 flex-wrap">
              {myskills.daily.map((skill, index) => {
                return (
                  <div className="flex gap-4 items-center" key={index}>
                    <div className="h-6 w-6 md:h-14 md:w-14 3xl:h-20 3xl:w-20 ">
                      <img
                        src={skill.image}
                        alt="language"
                        className="hover:scale-110 duration-300 cursor-pointer object-contain h-full w-full"
                      />
                    </div>

                    <div>
                      <h1 className="font-normal md:font-semibold text-sm md:text-lg xl:text-lg 2xl:text-base 3xl:text-2xl">
                        {skill.heading}
                      </h1>
                      <p className="text-lg hidden lg:block font-light text-gray-500">
                        {skill.subheading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col w-full justify-start p-6 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <div className=" border-b-2 p-2 m-2 flex flex-col gap-2">
              <p className="text-2xl lg:text-4xl font-normal w-fit">Other Technologies</p>
              <p className="text-base lg:text-xl font-light text-gray-700">
                Tools, resources, and technologies I have used in the past
              </p>
            </div>

            <div className="p-4 grid grid-cols-2 gap-6 flex-wrap">
              {myskills.other.map((skill, index) => {
                return (
                  <div className="flex gap-4 items-center" key={index}>
                    <div className="h-6 w-6 md:h-14 md:w-14 3xl:h-20 3xl:w-20 ">
                    <img
                        src={skill.image}
                        alt="language"
                        key={index}
                        className="hover:scale-110 duration-300 cursor-pointer object-contain h-full w-full"
                      />
                    </div>
                    <div>
                    <h1 className="font-normal md:font-semibold text-sm md:text-lg xl:text-lg 2xl:text-base 3xl:text-2xl">
                    {skill.heading}
                      </h1>
                      <p className="text-lg hidden lg:block font-light text-gray-500">
                        {skill.subheading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
