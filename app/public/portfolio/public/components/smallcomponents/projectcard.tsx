import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  tagImg: any[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  tags,
  tagImg,
}) => {
  return (
    <div className="flex flex-col p-4 rounded-md border-gray-200 shadow-sm border-2 w-full">
      <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">{title}</h1>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-150"
      >
        View Project
        <span className="ml-2 w-2 h-2">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs"></FontAwesomeIcon>
        </span>
      </a>
      </div>
      <p className="text-sm text-gray-500 line-clamp-3 pt-4">{description}</p>
      <div className="flex gap-2 pt-4 float-end">
      {tags.map((tag: string, index: number) => (
        <span
        key={index}
        className="text-xs text-gray-800 bg-gray-100 rounded-md p-[6px] flex gap-1 items-center"
        >
        <img src={tagImg[index]} className="w-4 h-4"></img>
        {tag}
        </span>
      ))}
      </div>
    </div>
  );
};

export default ProjectCard;
