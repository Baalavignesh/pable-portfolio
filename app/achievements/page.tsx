"use client";

import React from "react";
import {
  badges,
  certificates,
  hackathons,
} from "../public/constants/achievements";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <PageTemplate heading="Achievements &nbsp;&nbsp;&nbsp;">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row w-full  gap-6">
          <div className="flex flex-col w-full lg:w-1/2 justify-start p-6  pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <h1 className="text-2xl xl:text-4xl xl:py-6 my-4 border-b-2 pb-1">2X Hackathon Winner</h1>

            <div className="p-0 flex flex-col gap-6">
              {hackathons.map((hackathon: Hackathon, index) => {
                return (
                  <div className="flex gap-4 justify-start items-start" key={index}>
                    <p className="w-1/3 text-sm lg:text-xl"> {hackathon.title}</p>
                    <div className="">
                      <h1 className="font-semibold text-sm 2xl:text-base 3xl:text-2xl">
                        {hackathon.award}
                      </h1>
                      <p className="text-sm font-light text-gray-500">
                        {hackathon.company} - {hackathon.issuedBy}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 justify-start p-6 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8 ">
          <h1 className="text-2xl xl:text-4xl xl:py-6 my-4 border-b-2 pb-1">Badges</h1>

          <div className="p-4 flex gap-2 flex-wrap lg:flex-row lg:justify-start">
            {badges.map((badge, index) => {
              return (
                <img
                  src={badge.badge}
                  alt={badge.name}
                  className="w-28 h-28 lg:w-44 lg:h-44"
                  key={index}
                ></img>
              );
            })}
          </div>
        </div>
        </div>


          <div className="flex flex-col w-full  justify-start p-6  pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <h1 className="text-2xl xl:text-4xl xl:py-6 my-4 border-b-2 pb-1">Certificates</h1>

            <div className="p-4 flex flex-col gap-2 w-full">
              {certificates.map((certificate: Certificate, index) => {
                return (
                  <div className="flex flex-col gap-2 bg-gray-100 rounded-md p-4" key={index}>
                    <p className="text-sm lg:text-xl xl:text-2xl">
                      {" "}
                      {certificate.title} - {certificate.issuedBy}
                    </p>

                    <p className="text-sm lg:text-lg font-light text-gray-500">
                      {certificate.instructor}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

      </div>
    </PageTemplate>
  );
}
