"use client";

import React from "react";
import {
  badges,
  certificates,
  hackathons,
} from "../public/constants/achievements";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "motion/react";

export default function Page() {
  return (
    <PageTemplate heading="Achievements">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 w-full"
      >
        {/* Badges Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
        >
          <div className="border-b border-gray-200/50 dark:border-gray-800/50 mb-4">
            <h2 className="text-lg lg:text-xl font-medium mb-1 text-gray-900 dark:text-white">Professional Badges</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mb-3">
              Certifications and professional achievements
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(badge.link, "_blank")}
              >
                <img
                  src={badge.badge}
                  alt={badge.name}
                  className="w-48 h-auto object-contain dark:opacity-90 dark:hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hackathons Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
        >
          <div className="border-b border-gray-200/50 dark:border-gray-800/50 mb-4">
            <h2 className="text-lg lg:text-xl font-medium mb-1 text-gray-900 dark:text-white">Hackathon Achievements</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mb-3">
              Notable hackathon wins and participations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {hackathons.map((hackathon, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-50/50 dark:hover:bg-dark-tertiary transition-all"
              >
                <div className="sm:w-1/3">
                  <h3 className="font-medium text-sm lg:text-base text-gray-900 dark:text-white">
                    {hackathon.title}
                  </h3>
                </div>
                <div className="sm:w-2/3">
                  <h4 className="font-semibold text-sm lg:text-base text-gray-800 dark:text-gray-200">
                    {hackathon.award}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {hackathon.company} - {hackathon.issuedBy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white dark:bg-dark-secondary rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
        >
          <div className="border-b border-gray-200/50 dark:border-gray-800/50 mb-4">
            <h2 className="text-lg lg:text-xl font-medium mb-1 text-gray-900 dark:text-white">Certificates</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm mb-3">
              Educational and professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certificates.map((certificate, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                className="px-3 py-2 rounded-md border border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-50/50 dark:hover:bg-dark-tertiary transition-all"
              >
                <h3 className="font-medium text-sm lg:text-base text-gray-900 dark:text-white">
                  {certificate.title}
                </h3>
                <div className="flex items-center mt-1 gap-2">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {certificate.issuedBy} | {certificate.instructor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </PageTemplate>
  );
}
