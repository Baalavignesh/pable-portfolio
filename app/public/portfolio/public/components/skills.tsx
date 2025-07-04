import { portlang } from "../constants/skills";
import Heading from "./heading";
import { motion } from "motion/react";

const Skills: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full p-4 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit mt-4"
    >
      <Heading heading="Skills" linkto="skills" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-2 pt-2"
      >
        {portlang.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="flex gap-2 items-center bg-gray-100/50 rounded px-3 py-1.5 text-gray-800 font-medium"
          >
            <motion.div 
              className={`w-2 h-2 rounded-full ${skill.color}`}
              whileHover={{ scale: 1.2 }}
            />
            <motion.p className="text-sm">
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
