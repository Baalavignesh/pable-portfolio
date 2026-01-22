import { allProjects } from "@/app/public/constants/projects";
import { IProject } from "@/app/public/models/projects";
import Heading from "./heading";
import ProjectCard from "./smallcomponents/projectcard";
import { motion } from "motion/react";

const Projects = () => {
  // Get first 6 featured projects for home page
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-4 w-full"
    >
      <Heading heading="Featured Projects" linkto="projects" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-6"
      >
        {featuredProjects.map((project: IProject, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={`projects/${project.key}`}
              tags={project.tags.slice(0, 3)}
              tagImg={[]}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
