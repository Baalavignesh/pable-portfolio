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
} from "../public/static";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import BlobMover from "@/components/Blob";
import { useRouter } from 'next/navigation'

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
    animation: `fadeIn ${fadeDuration-1.6 || 1}s`,
    backgroundPosition: "center",
  };

  return (
    <div
      className={`p-5 bg-gray-50 rounded-md shadow-md font-light text-2xl flex items-center fade-card justify-center ${className} hover:scale-[1.03] duration-300 transition-all font-normal cursor-pointer bg-repeat`}
      style={style}
      onClick={onClick}
      onMouseLeave={() => {
        setShowText(true);
        setCurrentIndex(undefined);
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
    <div className="grid grid-cols-7 grid-rows-7 gap-8 w-11/12 m-auto h-screen py-12 overflow-hidden max-h-screen">
      <BlobMover />
      <FadeCard
        className="col-span-2 row-span-3 text-5xl 3xl:text-6xl"
        fadeDuration={2.3}
        cardName="Projects"
        onClick={() => {
          router.push("/projects");
        }}
      >
        <img src={projects.src} alt="achievements" className="w-36 mr-4 3xl:w-48" />
        Projects
      </FadeCard>
      <FadeCard
        className="col-span-2 row-span-2 text-4xl"
        fadeDuration={2.7}
        cardName="Skills"
        onClick={() => {
          router.push("/skills");
        }}
      >
        <div className="flex  gap-4 justify-center items-center 3xl:text-6xl">
          <img
            src={skills.src}
            alt="achievements"
            className="md:w-32 w-28 mr-4 3xl:w-40"
          />
          Skills
        </div>
      </FadeCard>
      <FadeCard
        className="col-span-3 row-span-2 3xl:text-5xl text-4xl"
        fadeDuration={3.2}
        onClick={() => {
          router.push("/achievements");
        }}
      >
        Achievements
        <img src={achievements.src} alt="achievements" className="3xl:w-64 w-48 ml-12 " />
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
        className="row-span-3 col-span-3 text-7xl font-normal 3xl:text-8xl"
        fadeDuration={4}
      >
        <p onMouseEnter={() => console.log("hi")}>Baalavignesh A</p>
      </FadeCard>
      <FadeCard className="row-span-5 col-span-2 text-3xl" fadeDuration={4.5} onClick={() => {
          router.push("/experience");
        }}>
        <div className="flex flex-col gap-12 justify-center items-center 3xl:text-5xl text-4xl">
          <img
            src={workexperience.src}
            alt="work experience"
            className="w-48 mr-4 3xl:w-64"
          />
          Work Experience
        </div>
      </FadeCard>
      <FadeCard className="row-span-2 col-span-3 text-3xl" fadeDuration={1.4}>
        <img src={hobbies.src} alt="hobbies" className="w-24 mr-12 3xl:w-24" />
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
        Hmm...
      </FadeCard>
    </div>
  );
}
