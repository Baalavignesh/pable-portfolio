"use client";

import React from "react";
import { allProjects } from "../public/constants/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCode } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "@/components/customNavbar";
import { useRouter } from "next/navigation";
import PageHeading from "@/components/̦PageHeading";
import PageTemplate from "@/components/PageTemplate";
import tagToImage from "../public/constants/project_tags";

interface IProjectCardProps {
  project: IProject;
  key: number;
}
const ProjectCard: React.FC<IProjectCardProps> = ({ project, key }) => {
  let router = useRouter();

  return (
    <div className="bg-gray-50 rounded-lg  pb-6 fade-projects">
      <img
        src={project.bg}
        alt=""
        className="h-56 object-cover w-full rounded-lg cursor-pointer"
        onClick={() => {
          router.push(`/projects/${project.key}`);
        }}
      />
      <div className="px-4 flex flex-col justify-between">
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

        <div className="flex flex-col h-full justify-between items-start pt-4 pr-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => {
              return (
                <div className="rounded-md flex items-center justify-center cursor-default bg-white py-2 px-3 border border-transparent text-sm text-gray-900 transition-all shadow-sm">
                  {tagToImage[tag] ? (
                      <img src={tagToImage[tag]} className="w-6 h-6  object-contain mr-2"></img>
                  ) : (
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-slate-500 mr-2"
                    />
                  )}

                  <span>{tag}</span>
                </div>
              );
            })}
          </div>
          {/* <div className="m-4 p-2 border-[1px] border-gray-200 rounded-lg animate-pulse flex gap-1 justify-center items-center cursor-pointer self-end">
            <p
              className="font-light"
              onClick={() => {
                router.push(`/projects/${project.key}`);
              }}
            >
              Learn More
            </p>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <PageTemplate heading="Projects &nbsp;&nbsp;&nbsp;">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mt-8 mb-12">
        {allProjects.map((project: IProject, index: number) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </PageTemplate>
  );
}
