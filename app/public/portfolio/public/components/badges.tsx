import { portlang } from "../constants/skills";
import Heading from "./heading";
import { badges } from "../constants/achievements";

interface IAchievements {
    title: string;
    image?: string;
    award?: string;
    link: string;
}


const Badges: React.FC = () => {
  return (
    <div className="flex flex-col w-full  p-4 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit mt-4">
      <Heading heading="Badges" linkto="achievements"></Heading>
      <div className="flex flex-wrap gap-2 pt-2">
      {
        
        badges.map((achievements:IAchievements, index) => (
            <div key={index} className="flex gap-2 items-center justify-center rounded-md p-2 py-1 text-black font-medium">
                {/* <p className="text-sm">{achievements.title}</p> */}
                <a href={achievements.link} target="_blank" rel="noreferrer">
                    <img src={achievements.image} className="w-28 h-28"></img>
                </a>
            </div>  
            
            ))
      }
      </div>
    </div>
  );
};

export default Badges;
