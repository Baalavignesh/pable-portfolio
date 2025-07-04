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
}

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-0"
    >
      <Heading heading="Professional Experience" linkto="experience" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-4 flex-col p-6 rounded-md border-2 w-full"
      >
        {portExperience.map((experience: IExperience, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <motion.div 
              className="flex gap-3 items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={experience.logo}
                alt={experience.company}
                className="w-14 h-14 rounded-md border-2 border-gray-100 shadow-md object-cover"
              />
              <div>
                <motion.h1 className="font-semibold">
                  {experience.company}
                </motion.h1>
                <motion.p className="text-base text-gray-500">
                  {experience.role}
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-2 text-gray-400 items-center pl-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" size="xs" />
              <p className="text-sm">{experience.duration}</p>
            </motion.div>
            <motion.p 
              className="text-base text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
            >
              {experience.description}
            </motion.p>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.3 }}
            >
              {experience.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs text-gray-500 bg-gray-200 rounded-md p-1"
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
                className="my-4" 
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
