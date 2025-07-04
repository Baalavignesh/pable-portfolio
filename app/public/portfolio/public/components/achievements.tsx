import Heading from "./heading";
import { achievements, badges } from "../constants/achievements";
import { motion } from "motion/react";

interface IAchievements {
  title: string;
  image?: string;
  award?: string;
  link: string;
}

const Badges: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full p-4 rounded-lg border-gray-200/50 dark:border-gray-800/50 border shadow-sm dark:shadow-lg dark:shadow-black/10 items-start h-fit mt-4 bg-white dark:bg-dark-secondary"
    >
      <Heading heading="2x Hackathon Winner"></Heading>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-2 pt-2"
      >
        {achievements.map((achievement: IAchievements, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), duration: 0.3 }}
            className="flex gap-2 items-center rounded-md font-light text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <p className="text-base">{achievement.title} - </p>
            <p className="text-base">{achievement.award}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Badges;
