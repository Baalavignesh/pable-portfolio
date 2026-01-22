"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MediaCarouselProps {
  projectKey: string;
}

// YouTube video mapping (project key -> video ID)
const youtubeVideos: Record<string, string> = {
  SkillAgent: "Z1d8rlRH4zw",
  HealthHub: "Lmo4kDVMPK8",
  Pager2077: "f03pyZ7Q3pA",
  TheDiggerMan: "lqVn8JcZ6rs",
  StudyQuest: "h1Yd4YYL3EQ",
  DonateLife: "RQsK3dMSqi4",
};

// LinkedIn post mapping (project key -> array of activity URNs)
const linkedinPosts: Record<string, string[]> = {
  BuyTime: [
    "urn:li:activity:7416611638776111104",
    "urn:li:activity:7417608651588145154",
  ],
};

// Project key to folder name mapping
const folderMapping: Record<string, string> = {
  SkillAgent: "skillagent",
  HealthBridgeAI: "healthbridge",
  Pager2077: "pager2077",
  TheDiggerMan: "thediggerman",
  StudyQuest: "studyquest",
  MiResume: "miresume",
};

// Project images configuration (folder name -> array of image filenames)
const projectImages: Record<string, string[]> = {
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
    "pager20772.jpeg"
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

type MediaItem =
  | { type: "youtube"; videoId: string }
  | { type: "linkedin"; activityUrn: string }
  | { type: "image"; src: string };

const MediaCarousel: React.FC<MediaCarouselProps> = ({ projectKey }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Build media items array
  const getMediaItems = useCallback((): MediaItem[] => {
    const items: MediaItem[] = [];

    // Add YouTube video first if available
    const videoId = youtubeVideos[projectKey];
    if (videoId) {
      items.push({ type: "youtube", videoId });
    }

    // Add LinkedIn posts if available
    const posts = linkedinPosts[projectKey];
    if (posts) {
      posts.forEach((activityUrn) => {
        items.push({ type: "linkedin", activityUrn });
      });
    }

    // Add images if available
    const folderName = folderMapping[projectKey];
    if (folderName && projectImages[folderName]) {
      projectImages[folderName].forEach((filename) => {
        items.push({
          type: "image",
          src: `/projects/${folderName}/${filename}`,
        });
      });
    }

    return items;
  }, [projectKey]);

  const mediaItems = getMediaItems();

  // Auto-advance carousel every 4 seconds (pause when on YouTube/LinkedIn or when hovering)
  useEffect(() => {
    if (mediaItems.length <= 1 || isPaused) return;

    // Pause auto-advance when on YouTube video or LinkedIn post
    const currentItem = mediaItems[currentIndex];
    if (currentItem?.type === "youtube" || currentItem?.type === "linkedin") return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mediaItems, currentIndex, isPaused]);

  // Don't render if no media
  if (mediaItems.length === 0) {
    return null;
  }

  const currentItem = mediaItems[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const isLinkedIn = currentItem.type === "linkedin";

  return (
    <div
      className={`transition-all duration-300 ${isLinkedIn ? "w-fit mx-auto" : "w-full"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-gray-800">
        {/* Media Display */}
        <div className={`relative ${isLinkedIn ? "w-[22rem] h-[22rem] sm:w-[42rem] sm:h-[42rem]" : "aspect-video"}`}>
          <AnimatePresence mode="wait">
            {currentItem.type === "youtube" ? (
              <motion.div
                key={`youtube-${currentItem.videoId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${currentItem.videoId}?rel=0`}
                  title="Project Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ) : currentItem.type === "linkedin" ? (
              <motion.div
                key={`linkedin-${currentItem.activityUrn}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/${currentItem.activityUrn}`}
                  title="LinkedIn Post"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </motion.div>
            ) : (
              <motion.img
                key={`image-${currentItem.src}`}
                src={currentItem.src}
                alt="Project screenshot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-700 shadow-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-700 shadow-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {mediaItems.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-900 dark:bg-white w-4"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to ${item.type === "youtube" ? "video" : item.type === "linkedin" ? "LinkedIn post" : `image ${index}`}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;
