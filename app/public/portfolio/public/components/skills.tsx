import { portlang } from "../constants/skills";
import Heading from "./heading";
import { motion } from "motion/react";

const Skills: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full p-4 rounded-lg border-gray-200/50 dark:border-gray-800/50 border shadow-sm dark:shadow-lg dark:shadow-black/10 items-start h-fit mt-4 bg-white dark:bg-dark-secondary"
    >
      <Heading heading="Skills" linkto="skills" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-2 pt-3"
      >
        {portlang.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="flex gap-2 items-center bg-gray-50 dark:bg-dark-tertiary/50 rounded-lg px-3.5 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100/80 dark:hover:bg-dark-tertiary transition-all"
          >
            <motion.div 
              className={`w-2 h-2 rounded-full ${skill.color} dark:opacity-75 dark:mix-blend-screen`}
              whileHover={{ scale: 1.2 }}
            />
            <motion.p className="text-sm tracking-wide">
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
