"use client";

import tagToImage from "@/app/public/constants/project_tags";
import { allProjects } from "@/app/public/constants/projects";
import { githubdark, githublight, devpost } from "@/app/public/static";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Meteors } from "@/app/components/ui/meteors";

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
    return <div className="text-gray-900 dark:text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Full-screen hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-screen min-h-[65vh] relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-950 flex items-center"
      >
        {/* Meteors Background */}
        <Meteors number={30} />

        {/* Content overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 max-w-7xl mx-auto pt-36 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-full text-gray-900 dark:text-white text-sm font-medium">
                {project.when}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-800 dark:text-white/90 max-w-3xl leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              className="flex gap-2 flex-wrap"
            >
              {project.tags.map((tag: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-full text-sm text-gray-900 dark:text-white"
                >
                  {tagToImage[tag] && (
                    <img
                      src={tagToImage[tag]}
                      className="w-4 h-4 object-contain dark:brightness-0 dark:invert"
                      alt={tag}
                    />
                  )}
                  <span>{tag}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex gap-3 mb-8 items-center">
              {project.other && (
                <motion.a
                  href={project.other}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-transparent hover:bg-gray-900/5 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-lg text-lg font-medium transition-all duration-200 border-2 border-gray-900 dark:border-white"
                >
                  <img src={devpost.src} alt="DevPost" className="w-6 h-6 object-contain flex-shrink-0" />
                  <span className="leading-none">DevPost</span>
                </motion.a>
              )}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-lg font-medium transition-all duration-200"
              >
                <img src={githubdark.src} alt="GitHub" className="w-6 h-6 object-contain flex-shrink-0 dark:hidden" />
                <img src={githublight.src} alt="GitHub" className="w-6 h-6 object-contain flex-shrink-0 hidden dark:block" />
                <span className="leading-none">GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
            className="flex flex-col gap-6 w-full py-6 pt-0"
          >
                      <div className="border-t border-gray-200 dark:border-gray-800"></div>

            <div>
              <h3 className="text-2xl md:text-4xl font-bold py-4 text-gray-900 dark:text-white leading-tight max-w-4xl">
                Inspiration
              </h3>
              <p className="text-md lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                {project.inspiration}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.8 }}
            className="flex flex-col gap-6 w-full py-6 pt-0"
          >
            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-800"></div>

            {/* What it does Section */}
            <div>
              <h3 className="text-2xl md:text-4xl font-bold py-4 text-gray-900 dark:text-white leading-tight max-w-4xl">
                What it does
              </h3>
              <p className="text-md lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                {project.what}
                <br />
                <br />
                {project.technologies}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content section */}
    </div>
  );
};

export default IndividualProject;
