"use client";

import myskills from "../public/constants/skills";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <PageTemplate heading="Skills and Technologies">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-10 w-full"
        >
          {/* Daily Stack Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-300 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
          >
            <h2 className="text-lg lg:text-xl font-bold mb-1 text-gray-900 dark:text-white">Daily Stack</h2>
    <p className="text-sm lg:text-base font-bold mb-3 text-gray-100 dark:text-gray-500">The bread and butter that I eat everyday</p>
            <div className="flex flex-col">
              {myskills.daily.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 py-3"
                >
                  <img
                    src={skill.image}
                    alt={skill.heading}
                    className="w-8 h-8 object-contain flex-shrink-0 dark:opacity-90"
                  />
                  <p className="text-sm lg:text-base text-gray-900 dark:text-gray-200">
                    <span className="font-semibold">{skill.heading}</span>
                    {skill.oneliner && (
                      <span className="font-normal text-gray-600 dark:text-gray-400"> — {skill.oneliner}</span>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Other Technologies Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-300 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
          >
            <h2 className="text-md font-normal mb-3 text-gray-900 dark:text-gray-200">Other Technologies</h2>
              <p className="text-sm lg:text-base mb-3 text-gray-500 dark:text-gray-500">Tech Stack that I have worked with during my past projects, work and internship</p>
            <div className="flex flex-wrap gap-2">
              {myskills.other.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.03, duration: 0.2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs lg:text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-full"
                >
                  <img
                    src={skill.image}
                    alt={skill.heading}
                    className="w-4 h-4 object-contain dark:opacity-80"
                  />
                  {skill.heading}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </PageTemplate>
    </>
  );
}
