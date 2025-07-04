"use client";

import AboutMe from "./public/portfolio/public/components/aboutme";
import Badges from "./public/portfolio/public/components/badges";
import Achievements from "./public/portfolio/public/components/achievements";
import Experience from "./public/portfolio/public/components/experience";
import Profile from "./public/portfolio/public/components/profile";
import Projects from "./public/portfolio/public/components/projects";
import Skills from "./public/portfolio/public/components/skills";
import React from "react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl flex flex-col justify-center bg-white dark:bg-dark-primary"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="container max-w-screen-lg mx-auto px-4 py-8 flex gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:col-span-1 flex flex-col gap-4"
            >
              <Profile />
              <div className="hidden md:block">
                <Achievements />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="md:col-span-2 flex flex-col gap-4"
            >
              <AboutMe />
              <div className="block md:hidden">
                <Achievements />
              </div>
              <Skills />
              <Badges />
              <Projects />
              <Experience />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
