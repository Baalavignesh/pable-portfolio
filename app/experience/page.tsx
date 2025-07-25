"use client";

import React from "react";
import experience from "../public/constants/experience";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "motion/react";

export default function Page() {
  return (
    <PageTemplate heading="Experience">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 w-full"
      >
        <motion.ol 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex gap-8 lg:gap-12 flex-col relative text-gray-500 dark:text-gray-400 border-s border-gray-200/50 dark:border-gray-700/50"
        >
          {experience.map((exp: IExperience, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              className={`ms-6 relative ${index + 1 === experience.length ? '' : 'pb-8'}`}
            >
              <motion.span 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.2 }}
                className="absolute flex items-center justify-center w-12 h-12 lg:w-20 lg:h-20 bg-white dark:bg-dark-secondary border border-gray-200/50 dark:border-gray-700/50 rounded-full -start-9 lg:-start-16 shadow-sm dark:shadow-lg dark:shadow-black/10"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  onClick={() => window.open(exp.url, "_blank")}
                  className="w-[80%] h-[80%] rounded-full cursor-pointer object-contain dark:opacity-90 dark:hover:opacity-100 transition-all"
                />
              </motion.span>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.2 }}
                className="ml-6 lg:ml-10 p-4 lg:p-6 bg-white dark:bg-dark-secondary rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-base lg:text-lg text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium mt-1">
                      {exp.role}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                      {exp.type}
                    </p>
                  </div>
                  <div className="lg:text-right text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <p className="font-medium">{exp.duration}</p>
                    <p>{exp.location}</p>
                    <p className="text-gray-400 dark:text-gray-500">{exp.length}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </PageTemplate>
  );
}
