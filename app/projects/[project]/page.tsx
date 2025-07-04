"use client";

import tagToImage from "@/app/public/constants/project_tags";
import { allProjects } from "@/app/public/constants/projects";
import { githubdark, inspiration, tech, what } from "@/app/public/static";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PageTemplate from "@/components/PageTemplate";

interface IndividualProjectProps {
  params: {
    project: string;
  };
}

const IndividualProject: React.FC<IndividualProjectProps> = ({ params }) => {
  let [project, setProject] = useState<IProject>();
  let [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let index = allProjects.findIndex((proj) => proj.key === params.project);
    setProject(allProjects[index]);
    setIsLoaded(true);
  }, []);

  if (!isLoaded || !project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Full-width image section */}
      <div className="w-full h-[40vh] relative">
        <img
          src={project.bg}
          className="h-full w-full object-cover"
          alt={project.title}
        />
      </div>

      {/* Content section using PageTemplate */}
        <div className="flex flex-col gap-8 px-96 mx-auto py-12">
          {/* Header section with buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <span className="text-lg text-gray-500">{project.when}</span>
            <div className="flex gap-4">
              {project.other && (
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() => window.open(project.other, "_blank")}
                >
                  DevPost
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
                </button>
              )}
              <button
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => window.open(project.github, "_blank")}
              >
                GitHub
                <img src={githubdark.src} className="h-5 w-5" alt="GitHub" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag: string, index: number) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border text-sm text-gray-900 shadow-sm">
                {tagToImage[tag] ? (
                  <img src={tagToImage[tag]} className="w-5 h-5 object-contain" alt={tag} />
                ) : (
                  <FontAwesomeIcon icon={faCode} className="text-gray-500" />
                )}
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="text-gray-600 text-justify">
            {project.description}
          </div>

          <hr className="my-4" />

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {/* Inspiration */}
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl font-medium mb-4">Inspiration</h2>
                <p className="text-gray-600 text-justify">{project.inspiration}</p>
              </div>
              <div className="hidden lg:block ">
                <img src={inspiration.src} className="w-48 object-contain" alt="Inspiration" />
              </div>
            </div>

            {/* What it does */}
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="hidden lg:block ">
                <img src={what.src} className="w-48 object-contain" alt="What it does" />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl font-medium mb-4">What it does</h2>
                <p className="text-gray-600 text-justify">{project.what}</p>
              </div>
             
            </div>

            {/* Technologies */}
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl font-medium mb-4">Technologies</h2>
                <p className="text-gray-600 text-justify">{project.technologies}</p>
              </div>
              <div className="hidden lg:block ">
                <img src={tech.src} className="w-48 object-contain" alt="Technologies" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default IndividualProject;
