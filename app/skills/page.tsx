"use client";

import React from "react";
import myskills from "../public/constants/skills";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <>
      <PageTemplate heading="Skills and Technologies">
        <div className="flex flex-col gap-6 w-full">
          {/* Daily Stack Section */}
          <section className="bg-gray-50 rounded-lg p-4">
            <div className="border-b-2 mb-4">
              <h2 className="text-lg lg:text-xl font-medium mb-1">Daily Stack</h2>
              <p className="text-gray-600 text-xs lg:text-sm mb-3">
                Tools, resources, and technologies I use daily
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {myskills.daily.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.image}
                      alt={skill.heading}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm lg:text-base">
                      {skill.heading}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm">
                      {skill.subheading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Technologies Section */}
          <section className="bg-gray-50 rounded-lg p-4">
            <div className="border-b-2 mb-4">
              <h2 className="text-lg lg:text-xl font-medium mb-1">Other Technologies</h2>
              <p className="text-gray-600 text-xs lg:text-sm mb-3">
                Tools, resources, and technologies I have used in the past
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {myskills.other.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.image}
                      alt={skill.heading}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                      <h3 className="font-medium text-sm lg:text-base">
                      {skill.heading}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm">
                      {skill.subheading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageTemplate>
    </>
  );
}
