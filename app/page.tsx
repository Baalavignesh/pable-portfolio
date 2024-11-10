"use client";

import React, { useEffect, useState } from "react";
import {
  achievements,
  convchey,
  github,
  githubicon,
  hobbies,
  linkedin,
  miresume,
  projects,
  skillagent,
  skills,
  workexperience,
  youtube,
} from "./public/static";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import BlobMover from "@/components/Blob";

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
  let [currentIndex, setCurrentIndex] = useState<number>();
  let projectImages = [convchey.src, miresume.src, skillagent.src];
  let [showText, setShowText] = useState<boolean>(true);
  const intervalIdRef = React.useRef<NodeJS.Timeout | null>(null);

  let style: React.CSSProperties = {
    animation: `fadeIn ${fadeDuration || 1}s`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: (() => {
      switch (cardName) {
        case "Projects":
          return `url(${projectImages[currentIndex!]})`;
        case "Skillsa":
          return `url(${miresume.src})`;
        case "Achievements":
          return `url(${miresume.src})`;
        case "Work Experience":
          return `url(${convchey.src})`;
        case "Hobbies":
          return `url(${youtube.src})`;
        default:
          return "none";
      }
    })(),
  };

  let getIndex = (prev: number, totalImg: number) => {
    console.log("inside get index - ", currentIndex, prev, totalImg);
    if (prev === undefined) {
      return 0;
    } else {
      if (prev < totalImg - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    }
  };

  let onMouseEnter = () => {
    setShowText(false);
    console.log("inside");
    let prevIndex = 0;
  };

  return (
    <div
      className={`p-5 bg-gray-50 rounded-md shadow-md font-light text-2xl flex items-center justify-center ${className} hover:scale-[1.03] duration-300 transition-all font-normal cursor-pointer bg-repeat`}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        setShowText(true);
        setCurrentIndex(undefined);
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
      }}
    >
      {children}
      {/* <p className="text-5xl"> {showText && cardName}</p> */}
    </div>
  );
};



export default function Home() {
  return (
    // can you center the content inside the div
    <div className="grid grid-cols-7 grid-rows-7 gap-8 w-11/12 m-auto h-screen py-12 overflow-hidden max-h-screen">
      <BlobMover />
      <FadeCard
        className="col-span-2 row-span-3 text-5xl"
        fadeDuration={2.3}
        cardName="Projects"
      >
        <img src={projects.src} alt="achievements" className="w-36 mr-4" />
        Projects
      </FadeCard>
      <FadeCard
        className="col-span-2 row-span-2 text-4xl"
        fadeDuration={2.7}
        cardName="Skills"
        
      >
        <div className="flex  gap-4 justify-center items-center">
          <img src={skills.src} alt="achievements" className="w-28 mr-4" />
          Skills
        </div>
      </FadeCard>
      <FadeCard className="col-span-3 row-span-2 text-4xl" fadeDuration={4.2}>
        Achievements
        <img src={achievements.src} alt="achievements" className="w-48 ml-12" />
      </FadeCard>
      <FadeCard
        className="col-span-2 row-start-4"
        fadeDuration={3}
        onClick={() => {
          window.open("https://www.linkedin.com/in/baalavignesh21/", "_blank");
        }}
      >
        <img src={linkedin.src} alt="linkedin" className="w-1/2" />
      </FadeCard>
      <FadeCard
        className="col-span-2 row-start-5"
        fadeDuration={4}
        onClick={() => {
          window.open("https://github.com/Baalavignesh", "_blank");
        }}
      >
        <img src={githubicon.src} alt="linkedin" className="w-16" />
        <img src={github.src} alt="linkedin" className="w-1/2" />
      </FadeCard>
      <FadeCard
        className="row-span-3 col-span-3 text-7xl font-normal"
        fadeDuration={5}
      >
        <p onMouseEnter={() => console.log('hi')}>
        Baalavignesh A

        </p>
      </FadeCard>
      <FadeCard className="row-span-5 col-span-2 text-3xl" fadeDuration={4.5}>
        <div className="flex flex-col gap-12 justify-center items-center">
          <img
            src={workexperience.src}
            alt="achievements"
            className="w-48 mr-4"
          />
          Work Experience
        </div>
      </FadeCard>
      <FadeCard className="row-span-2 col-span-3 text-2xl" fadeDuration={1.4}>
        <img src={hobbies.src} alt="achievements" className="w-20 mr-12" />
        Hobbies
      </FadeCard>
      <FadeCard
        className="col-span-1 row-span-2"
        fadeDuration={2.9}
        onClick={() => {
          window.open("https://www.youtube.com/@PAbleBoo", "_blank");
        }}
      >
        <div className="flex flex-col gap-4 items-center">
          <img src={youtube.src} alt="linkedin" className="" />
          PAbleBoo
        </div>
      </FadeCard>
      <FadeCard className="col-span-1 row-span-2" fadeDuration={1}>
        Baalavignesh
      </FadeCard>
    </div>
  );
}
