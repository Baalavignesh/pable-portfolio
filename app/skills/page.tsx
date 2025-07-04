"use client";

import React from "react";
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
          className="flex flex-col gap-6 w-full"
        >
          {/* Daily Stack Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
          >
            <div className="border-b border-gray-200/50 dark:border-gray-800/50 mb-4">
              <h2 className="text-lg lg:text-xl font-medium mb-1 text-gray-900 dark:text-white">Daily Stack</h2>
              <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mb-3">
                Tools, resources, and technologies I use daily
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {myskills.daily.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    className="w-8 h-8 lg:w-9 lg:h-9 flex-shrink-0"
                  >
                    <img
                      src={skill.image}
                      alt={skill.heading}
                      className="w-full h-full object-contain dark:opacity-90 dark:group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.2 }}
                  >
                    <h3 className="font-medium text-sm lg:text-base text-gray-900 dark:text-white">
                      {skill.heading}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">
                      {skill.subheading}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Other Technologies Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
          >
            <div className="border-b border-gray-200/50 dark:border-gray-800/50 mb-4">
              <h2 className="text-lg lg:text-xl font-medium mb-1 text-gray-900 dark:text-white">Other Technologies</h2>
              <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mb-3">
                Tools, resources, and technologies I have used in the past
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {myskills.other.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors"
                > 
                  <div className="w-8 h-8 lg:w-9 lg:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.image}
                      alt={skill.heading}
                      className="w-full h-full object-contain dark:opacity-90 dark:group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm lg:text-base text-gray-900 dark:text-white">
                      {skill.heading}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">
                      {skill.subheading}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </PageTemplate>
    </>
  );
}
