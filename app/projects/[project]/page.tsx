"use client";

import { allProjects } from "@/app/public/constants/projects";
import { githubicon, inspiration, tech, what } from "@/app/public/static";
import CustomNavbar from "@/components/customNavbar";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
      <div className="h-screen flex flex-col items-center text-center lg:text-left">
        {isLoaded && project ? (
          <>
            <div className="h-3/5 w-full">
              <img
                src={project.bg}
                className="h-full w-full object-cover cursor-pointer fade-projects-bg"
              />
            </div>

            <div className="flex flex-col gap-8 px-12 w-full lg:w-3/4 2xl:w-2/3 fade-projects">
              {/* description and image */}
                <div className="flex flex-col w-full pt-24 ">
                  <div className="flex gap-4 items-center justify-between flex-wrap">
                    <h1 className="text-3xl 2xl:text-4xl 3xl:text-6xl font-bold">
                      {project.title}{" "}
                      <span className="text-lg font-light pl-2">
                        {project.when}
                      </span>
                    </h1>

                    <div className="flex gap-1">
                      {project.other && (
                        <div
                          className="flex  items-center text-sm xl:text-lg bg-gray-100 p-2 lg:p-4 rounded-md  mr-4 cursor-pointer"
                          onClick={() => {
                            window.open(project.other, "_blank");
                          }}
                        >
                          DevPost
                          <FontAwesomeIcon
                            icon={faUpRightFromSquare}
                            className={`transition-opacity duration-500 text-black ml-4 `}
                          />
                        </div>
                      )}
                      <div
                        className="flex gap-4 items-center text-sm xl:text-lg bg-gray-100 p-2 lg:p-4 rounded-md  cursor-pointer"
                        onClick={() => {
                          window.open(project.github, "_blank");
                        }}
                      >
                        <h1>Take me to Github</h1>
                        <img
                          src={githubicon.src}
                          className="h-8 w-8 inline-block"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
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
                </div>
              <div className="flex gap-0">
                <div className="flex flex-col mt-2 w-full lg:w-3/4">
                  <p className="text-xl 2xl:text-2xl w-full pr-0 lg:pr-12 ">
                    {project.description}
                  </p>
                </div>
                <div className="w-1/4 items-center justify-center mt-2 hidden lg:flex">
                  <div className="w-full overflow-hidden rounded-lg ">
                    <img
                      src={project.bg}
                      className="w-full object-cover transform hover:scale-[3] transition-transform duration-500 scale-[2.8] cursor-pointer "
                    />
                  </div>
                </div>
              </div>
              <hr></hr>

              <div className="flex justify-around items-center pt-0  gap-20">
                <img
                  src={inspiration.src}
                  className="h-52 w-72 hidden lg:block "
                />
                <div className="flex flex-col gap-8">
                  <div className="text-4xl font-medium">Inspiration</div>

                  <p className=" text-xl ">{project.inspiration}</p>
                </div>
              </div>
              <hr></hr>
              <div className="flex justify-around items-center pt-0  gap-20">
                <div className="flex flex-col gap-8">
                  <div className="text-4xl font-medium">What it does</div>

                  <p className=" text-xl ">{project.what}</p>
                </div>

                <img
                  src={what.src}
                  className="h-52 w-72 hidden lg:block mr-12"
                />
              </div>
              <hr></hr>
              <div className="flex justify-around items-center pt-0  gap-20 mb-16">
                <img src={tech.src} className="h-52 w-72 hidden lg:block" />

                <div className="flex flex-col gap-8">
                  <div className="text-4xl font-medium">Technologies</div>

                  <p className=" text-xl ">{project.technologies}</p>
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
