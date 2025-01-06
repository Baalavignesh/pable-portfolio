import Heading from "./heading";
import { achievements, badges } from "../constants/achievements";

interface IAchievements {
  title: string;
  image?: string;
  award?: string;
  link: string;
}

const Badges: React.FC = () => {
  return (
    <div className="flex flex-col w-full  p-4 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit mt-4">
      <Heading heading="2x Hackathon Winner"></Heading>

      <div className="flex flex-wrap gap-2 pt-2">
        {achievements.map((achievements: IAchievements, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-center rounded-md  font-light text-gray-600"
          >
            <p className="text-base">{achievements.title} - </p>
            <p className="text-base">{achievements.award}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
