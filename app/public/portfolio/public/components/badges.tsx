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
<motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-dark-secondary rounded-lg p-4 mt-4 border border-gray-300 dark:border-gray-800/50 shadow-sm dark:shadow-lg dark:shadow-black/10"
        >
          <Heading heading="Professional Badges" linkto="achievements" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 pl-0">
            {badges.map((badge, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(badge.link, "_blank")}
              >
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-40 h-auto object-contain dark:opacity-90 dark:hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
  );
};

export default Badges;
