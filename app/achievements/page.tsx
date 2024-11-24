"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import {
  badges,
  certificates,
  hackathons,
} from "../public/constants/achievements";
import PageHeading from "@/components/̦PageHeading";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <PageTemplate heading="Achievements &nbsp;&nbsp;&nbsp;">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col xl:flex-row w-full gap-0 lg:gap-12">
          <div className="flex flex-col w-1/2 justify-start p-6 mt-4 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <h1 className="text-2xl xl:text-5xl my-4 xl:my-12 border-b-2 pb-2 lg:pb-4">2X Hackathon Winner</h1>

            <div className="p-0 flex flex-col gap-6">
              {hackathons.map((hackathon: Hackathon, index) => {
                return (
                  <div className="flex gap-4 justify-start items-start" key={index}>
                    <p className="w-1/3 text-sm lg:text-2xl xl:text-3xl"> {hackathon.title}</p>
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
          <div className="flex flex-col w-1/2 justify-start p-6 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8 ">
          <h1 className="text-2xl xl:text-5xl my-4 xl:my-12 border-b-2 pb-4">Badges</h1>

          <div className="p-4 flex gap-6 flex-wrap lg:flex-row">
            {badges.map((badge, index) => {
              return (
                <img
                  src={badge.badge}
                  alt={badge.name}
                  className="w-52 h-52"
                  key={index}
                ></img>
              );
            })}
          </div>
        </div>
        </div>


        <div className="flex flex-col w-full justify-start p-6 mt-4 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <h1 className="text-2xl xl:text-5xl my-4 xl:my-12 border-b-2 pb-4">Certificates</h1>

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
