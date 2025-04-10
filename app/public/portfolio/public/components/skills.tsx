import { portlang } from "../constants/skills";
import Heading from "./heading";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col w-full  p-4 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit mt-4">
      <Heading heading="Skills" linkto="skills"></Heading>
      <div className="flex flex-wrap gap-2 pt-2">
          {portlang.map((skill, index) => (
            <div key={index} className="flex gap-2 items-center bg-gray-100/50 rounded px-3 py-1.5 text-gray-800 font-medium">
                <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
                <p className="text-sm">{skill.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
