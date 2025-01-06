import { portProjects } from "../constants/projects";
import Heading from "./heading";
import ProjectCard from "./smallcomponents/projectcard";

const Projects = () => {
  return (
    <div className="pt-4">
      <Heading heading="Featured Projects"></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-2">
        {portProjects.map((project: PortProjects, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.github}
            tags={project.tags}
            tagImg={project.tagImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
