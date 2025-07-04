import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  tagImg: any[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  tags,
  tagImg,
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col p-4 rounded-md border-gray-200 shadow-sm border-2 w-full hover:shadow-md"
    >
      <div className="flex justify-between items-center">
        <motion.h1 
          className="text-lg font-semibold"
        >
          {title}
        </motion.h1>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-150"
        >
          View Project
          <motion.span 
            className="ml-2 w-2 h-2"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </motion.span>
        </motion.a>
      </div>
      <motion.p 
        className="text-sm text-gray-500 line-clamp-3 pt-4"
      >
        {description}
      </motion.p>
      <div className="flex gap-2 pt-4 float-end">
        {tags.map((tag: string, index: number) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-gray-800 bg-gray-100 rounded-md p-[6px] flex gap-1 items-center"
          >
            <motion.img 
              whileHover={{ rotate: 10 }}
              src={tagImg[index]} 
              className="w-4 h-4"
              alt={tag}
            />
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
