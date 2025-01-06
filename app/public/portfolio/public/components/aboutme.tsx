import Heading from "./heading";

const AboutMe = () => {
  return (
    <div className="flex flex-col w-full h-fit p-6 rounded-md border-gray-200 shadow-sm border-2">
      <Heading heading="About Me"></Heading>
      <p className="text-lg pt-2 text-gray-500">
        Full-stack developer with professional experience in cloud computing,
        web, and app development. Proficient in designing scalable solutions
        and collaborating effectively within teams.
      </p>
    </div>
  );
};

export default AboutMe;
