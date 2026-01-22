"use client";

import React, { useState } from "react";
import { allProjects } from "../public/constants/projects";
import { IProject } from "@/app/public/models/projects";
import { useRouter } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import tagToImage from "../public/constants/project_tags";
import { motion } from "motion/react";

interface IProjectCardProps {
  project: IProject;
  key: number;
}

type FilterCategory = "Featured" | "All" | "Web" | "Python" | "AWS" | "App" | "Extension";

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const router = useRouter();

  const isBuyTime = project.key === "BuyTime";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      onClick={() => router.push(`/projects/${project.key}`)}
      className={`relative bg-white dark:bg-neutral-950 rounded-xl p-6 border cursor-pointer group min-h-[300px] flex flex-col transition-colors ${
        isBuyTime
          ? "border-amber-400 dark:border-amber-500 hover:border-amber-500 dark:hover:border-amber-400"
          : "border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"
      }`}
    >

      {/* Content */}
      <div className="flex flex-col h-full">
        {/* Year badge */}
        <div className="mb-3">
          <span className="text-xs font-medium text-gray-500 dark:text-neutral-500">
            {project.when}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-neutral-400 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-neutral-800">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-neutral-400 bg-gray-50 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-gray-100 dark:border-neutral-800"
            >
              {tagToImage[tag] && (
                <img src={tagToImage[tag]} className="w-3.5 h-3.5 object-contain" alt={tag} />
              )}
              <span>{tag}</span>
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="flex items-center text-xs font-medium text-gray-400 dark:text-neutral-500 px-2.5 py-1">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Featured");

  const filterCategories: FilterCategory[] = ["Featured", "All", "Web", "Python", "AWS", "App", "Extension"];

  // Filter logic based on tags - projects can appear in multiple categories
  const filterProjects = (category: FilterCategory) => {
    if (category === "Featured") return allProjects.filter((project) => project.featured === true);
    if (category === "All") return allProjects;

    return allProjects.filter((project) => {
      const projectTags = project.tags.join(" ").toLowerCase();

      switch (category) {
        case "Web":
          // Any project with React, Next.js, Node.js, JavaScript, TypeScript, HTML, Vite, Express
          return project.tags.some((tag: string) =>
            ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "HTML", "Vite", "Express.js"].includes(tag)
          );

        case "Python":
          // Any project with Python or FastAPI
          return project.tags.some((tag: string) =>
            ["Python", "FastAPI"].includes(tag)
          );

        case "AWS":
          // Any project with AWS or AWS services (S3, DynamoDB, Lambda, EC2, etc.)
          return project.tags.some((tag: string) => tag === "AWS") ||
                 projectTags.includes("s3") ||
                 projectTags.includes("dynamodb") ||
                 projectTags.includes("lambda") ||
                 projectTags.includes("ec2");

        case "App":
          // Only Flutter or Swift tagged projects qualify as apps
          return project.tags.some((tag: string) =>
            ["Flutter", "Swift"].includes(tag)
          );

        case "Extension":
          // Chrome Extension projects
          return project.tags.some((tag: string) =>
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === category
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category === "Featured" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-amber-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
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
