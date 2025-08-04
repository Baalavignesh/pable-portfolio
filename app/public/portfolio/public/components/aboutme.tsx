import Heading from "./heading";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full h-fit p-4 rounded-lg border-gray-300 dark:border-gray-800/50 border shadow-sm dark:shadow-lg dark:shadow-black/10 bg-white dark:bg-dark-secondary"
    >
      <Heading heading="About Me"></Heading>
      <p className="text-lg pt-2 text-gray-500 dark:text-gray-400">
        Full-stack developer with professional experience in cloud computing,
        web, and app development. Proficient in designing scalable solutions
        and collaborating effectively within teams.
      </p>
    </motion.div>
  );
};

export default AboutMe;
