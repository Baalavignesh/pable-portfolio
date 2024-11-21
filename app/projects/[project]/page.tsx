"use client";

import {allProjects} from "@/app/public/constants/projects";
import { inspiration, tech, what } from "@/app/public/static";
import CustomNavbar from "@/components/customNavbar";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

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
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CustomNavbar />
      <div className="h-screen flex flex-col items-center">
        {isLoaded && project ? (
          <>
            <div className="h-3/5 w-full">
              <img
                src={project.bg}
                className="h-full w-full object-cover cursor-pointer fade-projects-bg"
              />
            </div>
            <div className="flex flex-col gap-16 w-2/3 3xl:w-1/2 fade-projects">
              <div className="flex gap-0">
                <div className="flex flex-col mt-24 ">
                  <h1 className="text-3xl text-2xl 2xl:text-4xl 3xl:text-6xl font-bold">{project.title}</h1>
                  <div className="flex gap-2 mt-4">
                    {project.tags.map((tag: string, index: number) => {
                      return (
                        <div
                          className="rounded-md flex items-center cursor-default bg-white py-0.5 px-2.5 border border-transparent text-sm text-gray-900 transition-all shadow-sm"
                          key={index}
                        >
                          <FontAwesomeIcon
                            icon={faCode}
                            className="text-slate-500 mr-1"
                          />

                          <span>{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-2xl w-full pr-12 mt-12">
                    {project.description}
                  </p>
                </div>
                <div className="w-10/12  items-center flex justify-center mt-28">
                  <div className="w-full overflow-hidden rounded-lg ">
                    <img
                      src={project.logo}
                      className="w-full object-cover transform hover:scale-[3] transition-transform duration-500 scale-[2.8] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <hr></hr>

              <div className="flex justify-around items-center pt-0  gap-20">
                <img src={inspiration.src} className="h-52 w-72 " />
                <div className="flex flex-col gap-8">
                  <div className="text-4xl font-medium">Inspiration</div>

                  <p className="w-11/12 text-xl ">{project.inspiration}</p>
                </div>
              </div>
                    <hr></hr>
              <div className="flex justify-around items-center pt-0  gap-20">
                <div className="flex flex-col gap-8">
                  <div className="text-4xl font-medium">What it does</div>

                  <p className="w-11/12 text-xl ">{project.what}</p>
                </div>

                <img src={what.src} className="h-52 w-72 mr-12" />
              </div>
              <hr></hr>
              <div className="flex justify-around items-center pt-0  gap-20 mb-16">
                <img src={tech.src} className="h-52 w-72" />

                <div className="flex flex-col gap-8">
                  <div className="text-4xl font-medium">Technologies</div>

                  <p className="w-11/12 text-xl ">{project.technologies}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>hi</>
        )}
      </div>
    </div>
  );
};

export default IndividualProject;
