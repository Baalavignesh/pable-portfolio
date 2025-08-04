"use client";

import React from "react";
import { allProjects } from "../public/constants/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import tagToImage from "../public/constants/project_tags";
import { motion } from "motion/react";

interface IProjectCardProps {
  project: IProject;
  key: number;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => router.push(`/projects/${project.key}`)}
      className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm border border-gray-300 dark:border-gray-800/50 overflow-hidden cursor-pointer group hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-black/30 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          src={project.bg}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="text-xs bg-gray-50 dark:bg-dark-tertiary text-gray-600 dark:text-gray-200 px-2 py-1 rounded flex items-center"
            >
              <img src={tagToImage[tag]} className="w-4 h-4 object-contain mr-2" alt={tag} />
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Page() {
  return (
    <PageTemplate heading="Projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 w-full"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {allProjects.map((project: IProject, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} key={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageTemplate>
  );
}
