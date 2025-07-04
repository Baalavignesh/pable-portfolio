"use client";

import React from "react";
import { allProjects } from "../public/constants/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import tagToImage from "../public/constants/project_tags";

interface IProjectCardProps {
  project: IProject;
  key: number;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project, key }) => {
  let router = useRouter();

  return (
    <div className="border-2 border-gray-50 rounded-md p-4 group">
      <img
        src={project.bg}
        alt={project.title}
        className="h-56 object-cover w-full rounded-md cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
        onClick={() => {
          router.push(`/projects/${project.key}`);
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="border-b-2 py-4">
          <h1
            className="text-lg lg:text-xl font-medium cursor-pointer"
            onClick={() => {
              router.push(`/projects/${project.key}`);
            }}
          >
            {project.title}
          </h1>
          <p className="text-gray-600 text-xs lg:text-sm mt-1">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, index: number) => {
            return (
              <div 
                key={index}
                className="rounded-md flex items-center  justify-center cursor-default bg-white p-1 border-2 border-gray-50 text-sm text-gray-900 transition-all "
              >
                {tagToImage[tag] ? (
                  <img src={tagToImage[tag]} className="w-4 h-4 object-contain mr-2" alt={tag} />
                ) : (
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-slate-500 mr-2"
                  />
                )}
                <span className="text-xs text-gray-600">{tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <PageTemplate heading="Projects">
      <div className="flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {allProjects.map((project: IProject, index: number) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
    </PageTemplate>
  );
}
