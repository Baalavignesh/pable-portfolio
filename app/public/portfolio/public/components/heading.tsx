import React from "react";

interface IHeading {
  heading: string;
}

const Heading: React.FC<IHeading> = ({ heading }) => {
  return <div className="text-2xl font-bold py-2">{heading}</div>;
};

export default Heading;
