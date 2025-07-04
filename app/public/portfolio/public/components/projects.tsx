import { portProjects } from "../constants/projects";
import Heading from "./heading";
import ProjectCard from "./smallcomponents/projectcard";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-4"
    >
      <Heading heading="Featured Projects" linkto="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-2">
        {portProjects.map((project: PortProjects, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.github}
              tags={project.tags}
              tagImg={project.tagImg}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
