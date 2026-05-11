"use client";

import { Carousel } from "@/registry/aliimam/components/carousel";
import ByTimeCarousel from "@/components/ByTimeCarousel";

interface MediaCarouselProps {
  projectKey: string;
}

const folderMapping: Record<string, string> = {
  ByTime: "bytime",
  Aegis: "aegis",
  SkillAgent: "skillagent",
  HealthBridgeAI: "healthbridge",
  Pager2077: "pager2077",
  TheDiggerMan: "thediggerman",
  StudyQuest: "studyquest",
  MiResume: "miresume",
};

const projectImages: Record<string, string[]> = {
  bytime: [
    "Screen 1.png",
    "Screen 2.png",
    "Screen 3.png",
    "Screen 4.png",
    "Screen 5.png",
    "Screen 6.png",
    "Screen 7.png",
    "Screen 8.png",
  ],
  aegis: ["aegis1.png", "aegis2.png", "aegis3.png", "aegis4.png"],
  skillagent: [
    "skillagent1.png",
    "skillagent2.png",
    "skillagent3.png",
    "skillagent4.png",
    "skillagent5.png",
    "skillagent6.png",
    "skillagent7.png",
  ],
  healthbridge: [
    "healthbridge1.png",
    "healthbridge2.png",
    "healthbridge3.png",
    "healthbridge4.png",
    "healthbridge5.png",
    "healthbridge6.png",
    "healthbridge7.png",
  ],
  pager2077: [
    "pager20773.png",
    "pager20774.png",
    "pager20775.png",
    "pager20776.gif",
    "pager20772.jpeg",
  ],
  thediggerman: [
    "thediggerman1.png",
    "thediggerman2.png",
    "thediggerman3.png",
    "thediggerman4.png",
    "thediggerman5.png",
    "thediggerman6.png",
  ],
  studyquest: [
    "studyquest1.png",
    "studyquest2.png",
    "studyquest3.png",
    "studyquest4.png",
    "studyquest5.png",
    "studyquest6.png",
    "studyquest7.png",
    "studyquest8.png",
    "studyquest9.png",
    "studyquest10.png",
  ],
  miresume: [
    "miresume1.png",
    "miresume2.png",
    "miresume3.png",
    "miresume4.png",
    "miresume5.png",
    "miresume6.png",
    "miresume7.png",
  ],
};

const MediaCarousel: React.FC<MediaCarouselProps> = ({ projectKey }) => {
  if (projectKey === "ByTime") return <ByTimeCarousel />;

  const folderName = folderMapping[projectKey];
  const imageFiles =
    folderName && projectImages[folderName] ? projectImages[folderName] : [];
  const imagePaths = imageFiles.map((f) => `/projects/${folderName}/${f}`);

  if (imagePaths.length === 0) return null;

  const slides = imagePaths.map((src) => (
    <img
      key={src}
      src={src}
      alt="Project screenshot"
      className="w-full h-auto rounded-xl"
    />
  ));

  const thumbnails = imagePaths.map((src) => (
    <img key={src} src={src} alt="" className="h-full w-full object-cover" />
  ));

  return (
    <Carousel
      slides={slides}
      thumbnails={thumbnails}
      autoplayDelay={4000}
      showPlay={false}
      showDots={false}
      showProgress
    />
  );
};

export default MediaCarousel;
