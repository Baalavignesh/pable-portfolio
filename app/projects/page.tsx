"use client";

import React from "react";
import allProjects from "../public/constants/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCode } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "@/components/customNavbar";
import { useRouter } from "next/navigation";

interface IProjectCardProps {
  project: IProject;
  key: number;
}
const ProjectCard: React.FC<IProjectCardProps> = ({project, key}) => {
  let router = useRouter();

  return (
    <div className="bg-gray-50 rounded-lg  pb-6">
      <img
        src={project.logo}
        alt=""
        className="h-56 object-cover w-full rounded-lg cursor-pointer"
        onClick={() => {
          router.push(`/projects/${project.key}`);
        }}
      />
      <div className="px-4">
        <h1
          className="font-light py-4 text-3xl pt-6 cursor-pointer"
          onClick={() => {
            router.push(`/projects/${project.key}`);
          }}
        >
          {" "}
          {project.title}{" "}
        </h1>
        <p>{project.description}</p>

        <div className="flex justify-between items-center pt-4 pr-4">
          <div className="flex gap-2">
            {project.tags.map((tag: string) => {
              return (
                <div className="rounded-md flex items-center cursor-default bg-white py-0.5 px-2.5 border border-transparent text-sm text-gray-900 transition-all shadow-sm">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-slate-500 mr-1"
                  />

                  <span>{tag}</span>
                </div>
              );
            })}
          </div>
          <div className="animate-pulse flex gap-1 justify-center items-center cursor-pointer">
            <p
              className="font-light"
              onClick={() => {
                router.push(`/projects/${project.key}`);
              }}
            >
              Learn More
            </p>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div>
      <CustomNavbar />
      <div className="px-36">
        <h1 className="text-5xl font-light text-center mt-12 pb-4">Projects</h1>
        <hr></hr>
        <div className="grid grid-cols-3 gap-12 mt-8">
          {allProjects.map((project:IProject, index: number) => {
            return (
              <ProjectCard
                project={project}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
