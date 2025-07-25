import portExperience from "../constants/experience";
import Heading from "./heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

interface IExperience {
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  length: string;
  description?: string;
  skills: string[];
  logo: string;
  url: string;
}

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-0 mt-4"
    >
      <Heading heading="Professional Experience" linkto="experience" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-4 flex-col p-6 rounded-lg border border-gray-200/50 dark:border-gray-800/50 w-full bg-white dark:bg-dark-secondary shadow-sm dark:shadow-lg dark:shadow-black/10"
      >
        {portExperience.map((experience: IExperience, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            className="flex flex-col gap-2 cursor-pointer"
            onClick={() => window.open(experience.url, "_blank")}
          >
            <motion.div 
              className="flex gap-3 items-center"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={experience.logo}
                alt={experience.company}
                className="w-14 h-14 mb-2 rounded-md border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-md dark:shadow-black/20 object-cover bg-white dark:bg-dark-tertiary"
              />
              <div>
                <motion.h1 className="font-semibold text-gray-900 dark:text-white">
                  {experience.company}
                </motion.h1>
                <motion.p className="text-base text-gray-500 dark:text-gray-400">
                  {experience.role}
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-2 text-gray-400 dark:text-gray-500 items-center pl-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400 dark:text-gray-500" size="xs" />
              <p className="text-sm">{experience.duration}</p>
            </motion.div>
            <motion.p 
              className="text-base text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
            >
              {experience.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.3 }}
            >
              {experience.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark-tertiary hover:bg-gray-200 dark:hover:bg-dark-primary rounded-md px-2 py-1 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            {index < portExperience.length - 1 && (
              <motion.hr 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
                className="my-4 border-gray-200 dark:border-gray-800" 
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
