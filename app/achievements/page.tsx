"use client";

import React from "react";
import CustomNavbar from "@/components/customNavbar";
import { presidio } from "../public/static";
import experience from "../public/constants/experience";

export default function Page() {
  return (
    <div>
      <CustomNavbar />
      <div className="px-36">
        <h1 className="text-5xl font-light text-center mt-12 pb-6">
          Achievements
        </h1>
        <hr></hr>

      </div>
    </div>
  );
}
