import React from "react";

interface IHeading {
  heading: string;
  linkto?: string;
}

const Heading: React.FC<IHeading> = ({ heading, linkto }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-2xl font-bold py-2">{heading}</p>
      {linkto && (
        <p
          className="text-gray-800 animate-pulse text-sm font-medium cursor-pointer"
          onClick={() => {
            window.location.pathname = `/${linkto.toLowerCase()}`;
          }}
        >
          View More
        </p>
      )}
    </div>
  );
};

export default Heading;
