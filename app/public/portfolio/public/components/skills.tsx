import { portlang } from "../constants/skills";
import Heading from "./heading";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col w-full  p-4 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit mt-4">
      <Heading heading="Skills" linkto="skills"></Heading>
      <div className="flex flex-wrap gap-2 pt-2">
      {
        portlang.map((skill: string, index:number) => (
            <div key={index} className="flex gap-2 items-center bg-gray-200 rounded-md p-2 py-1 text-black font-medium">
                <p className="text-sm">{skill}</p>
            </div>
            ))
      }
      </div>
     
    </div>
  );
};

export default Skills;
