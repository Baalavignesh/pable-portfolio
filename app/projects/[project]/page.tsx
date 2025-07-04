"use client";

import tagToImage from "@/app/public/constants/project_tags";
import { allProjects } from "@/app/public/constants/projects";
import { githubdark, githublight, inspiration, tech, what } from "@/app/public/static";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

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
    <div className="flex flex-col bg-white dark:bg-dark-primary min-h-screen">
      {/* Full-width image section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[40vh] relative"
      >
        <img
          src={project.bg}
          className="h-full w-full object-cover dark:opacity-90"
          alt={project.title}
        />
      </motion.div>

      {/* Content section using PageTemplate */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 max-w-7xl mx-auto w-full py-12"
      >
          {/* Header section with buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
          >
            <span className="text-lg text-gray-500 dark:text-gray-400">{project.when}</span>
            <div className="flex gap-4">
              {project.other && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 dark:bg-gray-100 bg-gray-900 text-white dark:text-gray-900 rounded-md  transition-colors"
                  onClick={() => window.open(project.other, "_blank")}
                >
                  DevPost
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 dark:bg-gray-900 bg-white dark:text-white text-gray-900 rounded-md    transition-colors"
                onClick={() => window.open(project.github, "_blank")}
              >
                GitHub
                <img 
                  src={githublight.src} 
                  className="h-5 w-5 block dark:hidden" 
                  alt="GitHub Light" 
                />
                <img 
                  src={githubdark.src} 
                  className="h-5 w-5 hidden dark:block" 
                  alt="GitHub Dark" 
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex gap-2 flex-wrap"
          >
            {project.tags.map((tag: string, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-dark-secondary rounded-md border border-gray-200/50 dark:border-gray-800/50 text-sm text-gray-900 dark:text-white shadow-sm dark:shadow-lg dark:shadow-black/10"
              >
                {tagToImage[tag] ? (
                  <img src={tagToImage[tag]} className="w-5 h-5 object-contain dark:opacity-90" alt={tag} />
                ) : (
                  <FontAwesomeIcon icon={faCode} className="text-gray-500 dark:text-gray-400" />
                )}
                <span>{tag}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-gray-600 dark:text-gray-300 text-justify"
          >
            {project.description}
          </motion.div>

          <motion.hr 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="border-gray-200/50 dark:border-gray-800/50" 
          />

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {/* Inspiration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex flex-col lg:flex-row items-center gap-8 justify-between"
            >
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">Inspiration</h2>
                <p className="text-gray-600 dark:text-gray-300 text-justify">{project.inspiration}</p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="hidden lg:block"
              >
                <img src={inspiration.src} className="w-48 object-contain dark:opacity-90" alt="Inspiration" />
              </motion.div>
            </motion.div>

            {/* What it does */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex flex-col lg:flex-row items-center gap-8 justify-between"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
                className="hidden lg:block"
              >
                <img src={what.src} className="w-48 object-contain dark:opacity-90" alt="What it does" />
              </motion.div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">What it does</h2>
                <p className="text-gray-600 dark:text-gray-300 text-justify">{project.what}</p>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="flex flex-col lg:flex-row items-center gap-8 justify-between"
            >
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">Technologies</h2>
                <p className="text-gray-600 dark:text-gray-300 text-justify">{project.technologies}</p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="hidden lg:block"
              >
                <img src={tech.src} className="w-48 object-contain dark:opacity-90" alt="Technologies" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
    </div>
  );
};

export default IndividualProject;
