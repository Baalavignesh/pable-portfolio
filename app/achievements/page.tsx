"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import { presidio } from "../public/static";
import experience from "../public/constants/experience";

export default function Page() {
  return (
    <div>
      <CustomNavbar />
      <div className="px-72 h-full">
      <div className="w-fit">
            <h1 className="text-6xl font-bold mt-28 pb-6 w-fit">Achievements &nbsp;&nbsp;&nbsp;</h1>
          <hr className="w-full" />
        </div>

      </div>
    </div>
  );
}
