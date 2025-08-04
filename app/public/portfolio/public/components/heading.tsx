import React from "react";

interface IHeading {
  heading: string;
  linkto?: string;
}

const Heading: React.FC<IHeading> = ({ heading, linkto }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="md:text-xl font-medium text-gray-900 dark:text-white">{heading}</p>
      {linkto && (
        <p
          className="text-gray-800 dark:text-gray-200 animate-pulse text-sm font-medium cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
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
