import portExperience from "../constants/experience";
import Heading from "./heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarDay, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

interface IExperience {
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  length: string;
  description?: string;
  skills: string[];
  logo: string;
}
const Experience = () => {
  return (
    <div className="p-0">
      <Heading heading="Professional Experience"></Heading>
      <div className="flex gap-4 flex-col p-6 rounded-md  border-2 w-full">
      {portExperience.map((experience: IExperience, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-14 h-14 rounded-md border-2 border-gray-100 shadow-md object-cover"
            />
            <div>
              <h1 className="font-semibold">{experience.company}</h1>
              <p className="text-base text-gray-500">{experience.role}</p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-400 items-center pl-0">
            <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" size="xs" />
            <p className="text-sm">{experience.duration}</p>
          </div>
          <p className="text-base text-gray-500">{experience.description}</p>
          <div className="flex gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-gray-200 rounded-md p-1"
              >
                {skill}
              </span>
            ))}
          </div>
          {index < portExperience.length - 1 && <hr className="my-4" />}
        </div>
      ))}
      </div>

    </div>
  );
};

export default Experience;
