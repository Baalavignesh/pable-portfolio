import { github, gmail, linkedin, profilepic } from "../static";
import Heading from "./heading";
import resume from "../../../myresume.pdf";
import { motion } from "motion/react";

const Profile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full p-4 rounded-lg border-gray-200/50 dark:border-gray-800/50 border shadow-sm dark:shadow-lg dark:shadow-black/10 items-start h-fit bg-white dark:bg-dark-secondary"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        src={profilepic.src}
        className="w-56 h-56 mt-4 rounded-full object-cover border-gray-200/50 dark:border-gray-700/50 border-2 self-center"
      />
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="py-2 pt-4 font-semibold text-3xl text-left text-gray-900 dark:text-white"
      >
        Baalavignesh A
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="text-gray-500 dark:text-gray-400 text-base"
      >
        <p>George Mason University</p>
        <p>Masters in Computer Science</p>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="p-2 text-center outline outline-1 h-fit text-lg outline-gray-300/50 dark:outline-gray-700/50 rounded-lg w-full cursor-pointer dark:bg-white bg-gray-900 text-white dark:text-gray-900 dark:hhover:bg-gray-50 over:bg-dark-primary transition-all duration-300 mt-4"
        href={resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="p-2 text-center outline outline-1 h-fit text-lg outline-white/50 dark:outline-gray-800/50 rounded-lg w-full cursor-pointer dark:bg-black bg-white dark:text-white text-gray-900  dark:hover:bg-dark-tertiary hover:bg-white  transition-all duration-300 mt-3 border-gray-300/50 dark:border-gray-800/50 border"
        onClick={(e) => {
          window.location.href = "mailto:baalavignesh21@gmail.com";
          e.preventDefault();
        }}
      >
        Contact Me
      </motion.a>

      <motion.hr 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="my-4 w-full border-gray-200/50 dark:border-gray-800/50" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="text-base flex flex-col gap-2 mt-4"
      >
        {[
          { icon: github, text: "Baalavignesh A", url: "https://github.com/Baalavignesh" },
          { icon: linkedin, text: "Baalavignesh Arunachalam", url: "#" },
          { icon: gmail, text: "baalavignesh21@gmail.com", url: "#" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
            className="flex gap-2 items-center cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => item.url !== "#" && window.open(item.url)}
          >
            <img src={item.icon.src} className="w-4 h-4 dark:invert" alt="" />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Profile;
