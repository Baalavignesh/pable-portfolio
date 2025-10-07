"use client";

import tagToImage from "@/app/public/constants/project_tags";
import { allProjects } from "@/app/public/constants/projects";
import { githubdark, githublight } from "@/app/public/static";
import { faCode, faUpRightFromSquare, faLightbulb, faCog, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="flex flex-col min-h-screen">
      {/* Full-screen hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-screen min-h-[65vh] relative bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-950 flex items-center"
      >
        {/* Meteors Background */}
        <Meteors number={30} />

        {/* Content overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 max-w-7xl mx-auto py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-full text-gray-900 dark:text-white text-sm font-medium">
                {project.when}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-800 dark:text-white/90 max-w-3xl leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                    <img src={tagToImage[tag]} className="w-4 h-4 object-contain dark:brightness-0 dark:invert" alt={tag} />
                  )}
                  <span>{tag}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-3 mt-4"
            >
              {project.other && (
                <motion.a
                  href={project.other}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-900/5 dark:bg-white/5 hover:bg-gray-900/10 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-all duration-200 border border-gray-900/10 dark:border-white/10"
                >
                  <span>DevPost</span>
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="text-xs" />
                </motion.a>
              )}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-900/5 dark:bg-white/5 hover:bg-gray-900/10 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-all duration-200 border border-gray-900/10 dark:border-white/10"
              >
                <span>GitHub</span>
                <FontAwesomeIcon icon={faCode} className="text-xs" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 max-w-6xl mx-auto w-full py-12 pt-0"
      >
          {/* Information Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inspiration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-white dark:bg-dark-secondary rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600 dark:text-yellow-400 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Inspiration</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.inspiration}
              </p>
            </motion.div>

            {/* What it does Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-white dark:bg-dark-secondary rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FontAwesomeIcon icon={faRocket} className="text-blue-600 dark:text-blue-400 text-lg" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">What it does</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.what}
              </p>
            </motion.div>
          </div>

          {/* Technologies - Full Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="bg-white dark:bg-dark-secondary rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <FontAwesomeIcon icon={faCog} className="text-purple-600 dark:text-purple-400 text-lg" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies Used</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.technologies}
            </p>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default IndividualProject;
