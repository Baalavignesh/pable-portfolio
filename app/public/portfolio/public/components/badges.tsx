import { portlang } from "../constants/skills";
import Heading from "./heading";
import { badges } from "../constants/achievements";
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
      <Heading heading="Badges" linkto="achievements"></Heading>
      <div className="flex flex-wrap gap-4 pt-2">
        {badges.map((achievements: IAchievements, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex gap-2 items-center justify-center rounded-md p-2 py-1"
          >
            <motion.a 
              href={achievements.link} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={achievements.image} 
                className="w-32 h-32 transition-all duration-300 dark:opacity-90 dark:hover:opacity-100"
                alt={achievements.title}
              />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Badges;
