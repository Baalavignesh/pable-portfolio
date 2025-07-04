"use client";

import React from "react";
import {
  badges,
  certificates,
  hackathons,
} from "../public/constants/achievements";
import PageTemplate from "@/components/PageTemplate";

export default function Page() {
  return (
    <PageTemplate heading="Achievements">
      <div className="flex flex-col gap-6 w-full">


        {/* Badges Section */}
        <section className="bg-gray-50 rounded-lg p-4">
          <div className="border-b-2 mb-4">
            <h2 className="text-lg lg:text-xl font-medium mb-1">Professional Badges</h2>
            <p className="text-gray-600 text-xs lg:text-sm mb-3">
              Certifications and professional achievements
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(badge.link, "_blank")}
              >
                <img
                  src={badge.badge}
                  alt={badge.name}
                  className="w-48 h-auto object-contain "
                />
              </div>
            ))}
          </div>
        </section>

        {/* Hackathons Section */}
        <section className="bg-gray-50 rounded-lg p-4">
          <div className="border-b-2 mb-4">
            <h2 className="text-lg lg:text-xl font-medium mb-1">Hackathon Achievements</h2>
            <p className="text-gray-600 text-xs lg:text-sm mb-3">
              Notable hackathon wins and participations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {hackathons.map((hackathon, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="sm:w-1/3">
                  <h3 className="font-medium text-sm lg:text-base text-gray-900">
                    {hackathon.title}
                  </h3>
                </div>
                <div className="sm:w-2/3">
                  <h4 className="font-semibold text-sm lg:text-base text-gray-800">
                    {hackathon.award}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {hackathon.company} - {hackathon.issuedBy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="bg-gray-50 rounded-lg p-4">
          <div className="border-b-2 mb-4">
            <h2 className="text-lg lg:text-xl font-medium mb-1">Certificates</h2>
            <p className="text-gray-600 text-xs lg:text-sm mb-3">
              Educational and professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certificates.map((certificate, index) => (
              <div 
                key={index}
                className="bg-white px-3 py-2 rounded-md"
              >
                <h3 className="font-medium text-sm lg:text-base text-gray-900">
                  {certificate.title}
                </h3>
                <div className="flex items-center mt-1 gap-2">
                  <p className="text-xs text-gray-600">
                    {certificate.issuedBy} | {certificate.instructor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
