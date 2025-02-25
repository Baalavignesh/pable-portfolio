import { github, gmail, linkedin, profilepic } from "../static";
import Heading from "./heading";
import resume from "../../../myresume.pdf";

const Profile = () => {
  return (
    <div className="flex flex-col w-full  p-3 rounded-md border-gray-200 border-2 shadow-sm items-start h-fit">
      <img
        src={profilepic.src}
        className="w-56 h-56 mt-4 rounded-full object-cover border-gray-200 border-4 self-center"
      ></img>
      <p className="py-2 pt-4 font-semibold text-3xl text-left">
        Baalavignesh A
      </p>
      <div className="text-gray-500 text-base">
        {/* <p>Software Developer</p> */}
        <p>George Mason University</p>
        <p>Masters in Computer Science</p>
      </div>
      <a
        className="p-2 text-center outline outline-2 h-fit text-lg outline-gray-300 rounded-lg w-full cursor-pointer bg-white text-black   transition-all duration-300 mt-4"
        href={resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
      <a
        className="p-2 text-center outline outline-2 h-fit text-lg outline-white rounded-lg w-full cursor-pointer bg-black text-white   transition-all duration-300 mt-3"
        onClick={(e) => {
          window.location.href = "mailto:baalavignesh21@gmail.com";
          e.preventDefault();
        }}
      >
        Contact Me
      </a>

      <hr className="my-4 w-full" />
      <div className="text-base flex flex-col gap-2 mt-4">
        <div
          className="flex gap-2  items-center cursor-pointer"
          onClick={() => window.open("https://github.com/Baalavignesh")}
        >
          <img src={github.src} className="w-4 h-4"></img>
          <span>Baalavignesh A</span>
        </div>
        <div className="flex gap-2  items-center cursor-pointer">
          <img src={linkedin.src} className="w-4 h-4"></img>
          <span> Baalavignesh Arunachalam</span>
        </div>
        <div className="flex gap-2  items-center cursor-pointer">
          <img src={gmail.src} className="w-4 h-4"></img>
          <span> baalavignesh21@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
