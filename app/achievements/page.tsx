"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import {
  badges,
  certificates,
  hackathons,
} from "../public/constants/achievements";
import PageHeading from "@/components/̦PageHeading";

export default function Page() {
  return (
    <div>
      <CustomNavbar />
      <div className="px-8 2xl:px-32 3xl:px-72 h-full">
      <PageHeading title="Achievements &nbsp;&nbsp;&nbsp;" />


        <div className=" mt-6 gap-12 flex">
          <div className="flex flex-col w-full justify-start p-6 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <h1 className="text-6xl py-12">2X Hackathon Winner</h1>

            <div className="p-4 grid grid-cols-1 gap-6 flex-wrap">
              {hackathons.map((hackathon, index) => {
                return (
                  <div className="flex gap-4 items-start" key={index}>
                    <p className="w-1/3 text-4xl"> {hackathon.title}</p>
                    <div>
                      <h1 className="font-semibold text-sm 2xl:text-base 3xl:text-2xl">
                        {hackathon.award}
                      </h1>
                      <p className="text-lg font-light text-gray-500">
                        {hackathon.company} - {hackathon.issuedBy}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col w-full justify-start p-6 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
            <h1 className="text-6xl py-12">Badges</h1>

            <div className="p-4 flex gap-6  ">
              {badges.map((badge, index) => {
                return (
                  <img
                    src={badge.badge}
                    alt={badge.name}
                    className="w-1/3"
                    key={index}
                  ></img>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start p-6 mt-4 pt-2 gap-2 rounded-lg bg-gray-50  fade-projects py-8">
          <h1 className="text-6xl py-12 pb-4">Certificates</h1>

          <div className="p-4 flex flex-col gap-2">
            {certificates.map((certificate, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <p className="text-2xl">
                    {" "}
                    {certificate.title} - {certificate.issuedBy}
                  </p>

                  <p className="text-lg font-light text-gray-500">
                    {certificate.instructor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
