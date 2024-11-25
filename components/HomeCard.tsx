import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {  profile } from "@/app/public/static";
import {
  faBars,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeCard = () => {
  return (
    <div
      className="grid w-full place-content-center  px-4 py-12 text-slate-900"
      style={{
        width: "450px",
        height: "600px",
      }}
    >
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
          width: "450px",
          height: "600px",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-gray-100 to-slate-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p className="absolute right-0 p-6 text-sm font-semibold">
          Fairfax, VA
        </p>

        <FontAwesomeIcon
          icon={faBars}
          className="absolute top-64 left-6 w-12 text-gray-200"
        />

        <div>
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="absolute top-16 right-20 w-10 text-gray-200"
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            className="absolute top-16 right-6 w-10 text-gray-200"
          />
        </div>
        <div className="absolute top-0 p-24 h-full w-full flex flex-col items-center justify-center">
          <div className="absolute bottom-12 text-base w-full text-center font-semibold">
            <img src={profile.src} className="w-48 h-48 mx-auto mb-24 rounded-full object-cover border-8 border-gray-200 opacity-90"></img>
            <h1 className="text-base 2:xl:text-xl 3xl:text-3xl pb-6">
              Baalavignesh Arunachalam
            </h1>
            <p>George Mason University</p>
            <p className="font-normal">MS, Computer Science</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeCard;
