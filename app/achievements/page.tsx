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
            <h1 className="text-3xl 2xl:text-4xl 3xl:text-6xl font-bold mt-10 2xl:mt-12 3xl:mt-28 pb-6 w-fit">Achievements &nbsp;&nbsp;&nbsp;</h1>
          <hr className="w-full" />
        </div>

      </div>
    </div>
  );
}
