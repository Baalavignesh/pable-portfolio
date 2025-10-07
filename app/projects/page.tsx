"use client";

import React, { useState } from "react";
import { allProjects } from "../public/constants/projects";
import { useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import tagToImage from "../public/constants/project_tags";
import { motion } from "motion/react";

interface IProjectCardProps {
  project: IProject;
  key: number;
}

type FilterCategory = "All" | "Web" | "Python" | "AWS" | "App" | "Extension";

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", transition: { duration: 0 } }}
      onClick={() => router.push(`/projects/${project.key}`)}
      className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-2xl p-8 border border-gray-200 dark:border-gray-700 cursor-pointer group overflow-hidden min-h-[340px] flex flex-col"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32  opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Year badge */}
        <div className="mb-5">
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
            {project.when}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {tagToImage[tag] && (
                <img src={tagToImage[tag]} className="w-4 h-4 object-contain" alt={tag} />
              )}
              <span>{tag}</span>
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 px-3 py-1.5">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filterCategories: FilterCategory[] = ["All", "Web", "Python", "AWS", "App", "Extension"];

  // Filter logic based on tags - projects can appear in multiple categories
  const filterProjects = (category: FilterCategory) => {
    if (category === "All") return allProjects;

    return allProjects.filter((project) => {
      const projectTags = project.tags.join(" ").toLowerCase();

      switch (category) {
        case "Web":
          // Any project with React, Next.js, Node.js, JavaScript, TypeScript, HTML, Vite, Express
          return project.tags.some(tag =>
            ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "HTML", "Vite", "Express.js"].includes(tag)
          );

        case "Python":
          // Any project with Python or FastAPI
          return project.tags.some(tag =>
            ["Python", "FastAPI"].includes(tag)
          );

        case "AWS":
          // Any project with AWS or AWS services (S3, DynamoDB, Lambda, EC2, etc.)
          return project.tags.some(tag => tag === "AWS") ||
                 projectTags.includes("s3") ||
                 projectTags.includes("dynamodb") ||
                 projectTags.includes("lambda") ||
                 projectTags.includes("ec2");

        case "App":
          // Only Flutter or Swift tagged projects qualify as apps
          return project.tags.some(tag =>
            ["Flutter", "Swift"].includes(tag)
          );

        case "Extension":
          // Chrome Extension projects
          return project.tags.some(tag =>
            tag === "Chrome Extension API" || tag.toLowerCase().includes("extension")
          );

        default:
          return true;
      }
    });
  };

  const filteredProjects = filterProjects(activeFilter);

  return (
    <PageTemplate heading="Projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 w-full"
      >
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex flex-wrap gap-3 pb-2"
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project: IProject, index: number) => (
              <ProjectCard project={project} key={index} />
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-gray-500 dark:text-gray-400">
              No projects found for this category.
            </div>
          )}
        </motion.div>
      </motion.div>
    </PageTemplate>
  );
}
