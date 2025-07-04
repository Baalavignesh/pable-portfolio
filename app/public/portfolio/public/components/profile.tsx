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
      className="flex flex-col w-full p-3 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        src={profilepic.src}
        className="w-56 h-56 mt-4 rounded-full object-cover border-gray-200 border-4 self-center"
      />
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="py-2 pt-4 font-semibold text-3xl text-left"
      >
        Baalavignesh A
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="text-gray-500 text-base"
      >
        <p>George Mason University</p>
        <p>Masters in Computer Science</p>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="p-2 text-center outline outline-2 h-fit text-lg outline-gray-300 rounded-lg w-full cursor-pointer bg-white text-black transition-all duration-300 mt-4"
        href={resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="p-2 text-center outline outline-2 h-fit text-lg outline-white rounded-lg w-full cursor-pointer bg-black text-white transition-all duration-300 mt-3"
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
        transition={{ delay: 0.8, duration: 0.3 }}
        className="my-4 w-full" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.3 }}
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
            transition={{ delay: 1 + (index * 0.1), duration: 0.3 }}
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => item.url !== "#" && window.open(item.url)}
          >
            <img src={item.icon.src} className="w-4 h-4" alt="" />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Profile;
