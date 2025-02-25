"use client";

import AboutMe from "./public/portfolio/public/components/aboutme";
import Badges from "./public/portfolio/public/components/badges";
import Achievements from "./public/portfolio/public/components/achievements";
import Experience from "./public/portfolio/public/components/experience";
import Profile from "./public/portfolio/public/components/profile";
import Projects from "./public/portfolio/public/components/projects";
import Skills from "./public/portfolio/public/components/skills";
import React from "react";

export default function Home() {



  return (
    <>
      <div className="text-xl flex justify-center fade-card">
        <div className="container max-w-screen-lg mx-auto px-4 py-8 flex gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 ">
              <Profile />
              <Skills />
              <Badges />
              <Achievements />
            </div>
            <div className="md:col-span-2">
              <AboutMe />
              <Projects />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
