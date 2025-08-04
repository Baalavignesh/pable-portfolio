import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => router.push(link)}
      className="flex flex-col p-4 rounded-lg cursor-pointer select-none border-gray-200/50 dark:border-gray-800/50 border shadow-sm dark:shadow-lg dark:shadow-black/10 w-full hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-black/20 bg-white dark:bg-dark-secondary"
    >
      <div className="flex justify-between items-center">
        <motion.h1 
          className="text-lg font-semibold text-gray-900 dark:text-white "
        >
          {title}
        </motion.h1>
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push(link)}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-150 cursor-pointer"
        >
          View Project
          <motion.span 
            className="ml-2 w-2 h-2"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </motion.span>
        </motion.div>
      </div>
      <motion.p 
        className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 pt-4 "
      >
        {description}
      </motion.p>
      <div className="flex gap-2 pt-4 float-end">
        {tags.map((tag: string, index: number) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-xs  text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-dark-tertiary rounded-md p-[6px] flex gap-1 items-center hover:bg-gray-200 dark:hover:bg-dark-primary transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
