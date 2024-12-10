"use client";

import React from "react";
import { face, github, githubicon, linkedin } from "./public/static";
import BlobMover from "@/components/Blob";
import { useRouter } from "next/navigation";
import { recentProjects } from "./public/constants/projects";
import FontAwesome from "react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "./public/myresume.pdf";
import HomeCard from "@/components/HomeCard";
interface FadeCardProps {
  children?: React.ReactNode;
  className?: string;
  fadeDuration: number;
  onClick?: () => void;
  cardName?: string;
}

const FadeCard: React.FC<FadeCardProps> = ({
  children,
  className,
  fadeDuration,
  onClick,
  cardName,
}) => {
  const intervalIdRef = React.useRef<NodeJS.Timeout | null>(null);

  let style: React.CSSProperties = {
    animation: `fadeIn ${fadeDuration - 1.6 || 1}s`,
    backgroundPosition: "center",
  };

  return (
    <div
      className={`p-2 lg:p-5 bg-gray-50 w-full rounded-md shadow-md font-light text-2xl flex fade-card  ${className} duration-300 transition-all font-normal cursor-pointer bg-repeat`}
      style={style}
      onClick={onClick}
      onMouseLeave={() => {
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
      }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  let router = useRouter();

  return (
    // can you center the content inside the div
    <>
      {/* --------------- */}
      {/* Web UI */}
      {/* --------------- */}
      <div className="hidden lg:grid grid-cols-7 grid-rows-7 gap-8 w-11/12 m-auto h-screen py-8 overflow-hidden">
        <BlobMover />
        <FadeCard
          className="col-span-2 row-span-3 items-start"
          fadeDuration={2.3}
          cardName="about"
        >
          <div className="flex flex-col p-4 h-full justify-between">
            <span className="text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-8xl pb-0 font-semibold">
              Hello!
            </span>
            <span className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-normal  ">
              I'm Baalavignesh A
            </span>
            <span className="text-sm 2xl:text-base 3xl:text-xl font-light">
              Full-stack developer with professional experience in cloud
              computing, web, and mobile development. Proficient in designing
              scalable solutions and collaborating effectively within teams.
            </span>
            <div className="flex justify-center items-center gap-4  text-sm 2xl:text-base 3xl:text-xl mt-2">
              <a
                className="p-4 text-center outline outline-none  h-full outline-gray-800 rounded-xl w-full cursor-pointer bg-gray-200 text-black hover:outline-2 hover:scale-[102%] transition-all duration-300"
                onClick={(e) => {
                  window.location.href = "mailto:baalavignesh21@gmail.com";
                  e.preventDefault();
                }}
              >
                Contact Me
              </a>
              <a
                className="p-4 text-center outline outline-2 h-full outline-gray-600 rounded-xl w-full cursor-pointer bg-black text-white hover:outline-2 hover:scale-[102%] transition-all duration-300"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </FadeCard>
        <FadeCard
          className="col-span-2 row-span-2 row-start-4 text-lg 2xl:text-3xl 3xl:text-6xl font-semibold items-center justify-center"
          fadeDuration={2.3}
          cardName="experience"
          onClick={() => {
            router.push("/experience");
          }}
        >
          Work Experience
        </FadeCard>
        <FadeCard
          className="col-span-1 row-span-2 row-start-6 text-lg 2xl:text-3xl 3xl:text-6xl font-semibold items-center justify-center"
          fadeDuration={2.3}
          cardName="experience"
          onClick={() => {
            router.push("/skills");
          }}
        >
          Skills
        </FadeCard>
        <FadeCard
          className="col-span-1 row-span-2 row-start-6 text-lg 2xl:text-2xl 3xl:text-4xl  font-semibold items-center justify-center"
          fadeDuration={3.2}
          onClick={() => {
            router.push("/achievements");
          }}
        >
          Achievements
        </FadeCard>
        <FadeCard
          className="col-span-2 col-start-6 row-span-1 items-center justify-center"
          fadeDuration={3}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/baalavignesh21/",
              "_blank"
            );
          }}
        >
          <img src={linkedin.src} alt="linkedin" className="w-1/2" />
        </FadeCard>
        <FadeCard
          className="col-span-2 col-start-6 row-start-2 row-span-1 items-center justify-center"
          fadeDuration={4}
          onClick={() => {
            window.open("https://github.com/Baalavignesh", "_blank");
          }}
        >
          <img src={githubicon.src} alt="linkedin" className="w-16" />
          <img src={github.src} alt="linkedin" className="w-1/2" />
        </FadeCard>
        <FadeCard
          className="flex row-span-7 col-span-3 row-start-1 bg-gray-200 text-7xl font-normal 3xl:text-8xl  justify-center items-center dotbg"
          fadeDuration={4}
        >
          <HomeCard />
        </FadeCard>
        <FadeCard
          className="row-span-5 col-span-2 text-3xl w-full"
          fadeDuration={4.5}
          onClick={() => {
            router.push("/projects");
          }}
        >
          <div className="flex flex-col gap-12 w-full relative">
            <div className="flex w-96 flex-between items-end">
              <p>Recent Projects</p>
              <p className="text-sm absolute right-0">View More</p>
            </div>
            <div className="overflow-scroll flex flex-col gap-10">
              {recentProjects.map((project: IProject, index) => {
                const [showIcon, setShowIcon] = React.useState(false);
                return (
                  <div
                    key={index}
                    className="flex gap-8"
                    onMouseOver={() => {
                      setShowIcon(true);
                    }}
                    onMouseLeave={() => {
                      setShowIcon(false);
                    }}
                  >
                    <div className="relative">
                      <div className="w-24 h-24">
                        <img
                          src={project.bg}
                          alt=""
                          className={`rounded-lg cursor-pointer z-40 object-cover h-full  transition-all duration-300 ${
                            showIcon ? "brightness-75" : "blur-none"
                          }`}
                          onClick={() => {
                            router.push(`/projects/${project.key}`);
                          }}
                        />
                      </div>
                      {showIcon && (
                        <FontAwesomeIcon
                          icon={faUpRightFromSquare}
                          className={`z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 text-white opacity-0 ${
                            showIcon ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-semibold">{project.title}</p>
                      <p className="text-base text-gray-500 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeCard>

        {/* <FadeCard className="col-span-1 row-span-2" fadeDuration={1}>
        Dark Mode
      </FadeCard> */}
      </div>

      {/* --------------- */}
      {/* Mobile UI */}
      {/* --------------- */}

      <div className="lg:hidden flex flex-col justify-center items-center">
        <div className="flex flex-col  gap-4 my-12">
          <div className="flex flex-col p-4 h-full bg-gray-100 rounded-md m-4">
            <span className="text-3xl pb-0 font-semibold">Hello!</span>
            <span className="text-2xl font-normal  ">I'm Baalavignesh A</span>
            <span className="text-sm font-light w-fit mt-4">
              Full-stack developer with over two years of experience in cloud
              computing, mobile, and web development. Hackathon winner with
              teamwork and problem-solving skills.
            </span>
            <div className="flex gap-4  text-sm mt-4">
              <a
                className="p-2 text-center border-2 rounded-xl w-full shadow-lg"
                onClick={(e) => {
                  window.location.href = "mailto:baalavignesh21@gmail.com";
                  e.preventDefault();
                }}
              >
                Contact Me
              </a>
              <a
                className="p-2 text-center border-2 rounded-xl w-full shadow-xl"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex  gap-2 justify-center items-center">
            <div
              className="flex items-center justify-center h-20 bg-gray-50 rounded-md  p-4 w-full"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/baalavignesh21/",
                  "_blank"
                );
              }}
            >
              <img src={linkedin.src} alt="linkedin" className="w-28 mx-auto" />
            </div>
            <div
              className="flex items-center justify-center  h-20 bg-gray-50 rounded-md  p-4 w-full"
              onClick={() => {
                window.open("https://github.com/Baalavignesh", "_blank");
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={githubicon.src}
                  alt="github icon"
                  className="w-8 h-8 mx-auto"
                />
                <img src={github.src} alt="github" className="w-24 mx-auto" />
              </div>
            </div>
          </div>
          <div
            className=" text-lg font-semibold items-center justify-center bg-gray-50 rounded-md mx-4 p-4 text-center"
            onClick={() => {
              router.push("/experience");
            }}
          >
            Work Experience
          </div>
          <div
            className=" text-lg font-semibold items-center justify-center bg-gray-50 rounded-md mx-4 p-4 text-center"
            onClick={() => {
              router.push("/skills");
            }}
          >
            Skills
          </div>
          <div
            className=" text-lg  font-semibold items-center justify-center bg-gray-50 rounded-md mx-4 p-4 text-center"
            onClick={() => {
              router.push("/achievements");
            }}
          >
            Achievements
          </div>

          <div className="flex flex-col gap-4 text-lg  font-semibold items-center justify-center bg-gray-50 rounded-md mx-4 p-4 text-center">
            <div className="flex w-full flex-between items-end text-xl border-b-2 p-2">
              <p>Recent Projects</p>
            </div>
            <div className="overflow-scroll flex flex-col gap-10">
              {recentProjects.map((project: IProject, index) => {
                const [showIcon, setShowIcon] = React.useState(false);
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-8 justify-start items-start"
                    onMouseOver={() => {
                      setShowIcon(true);
                    }}
                    onMouseLeave={() => {
                      setShowIcon(false);
                    }}
                  >
                    <img
                      src={project.bg}
                      alt=""
                      className={`rounded-lg cursor-pointer object-cover w-full h-full  transition-all duration-300`}
                      onClick={() => {
                        router.push(`/projects/${project.key}`);
                      }}
                    />
                    <div className="flex flex-col gap-2 justify-start items-start text-left">
                      <p className="text- font-semibold">{project.title}</p>
                      <p className="text-base text-gray-500 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
