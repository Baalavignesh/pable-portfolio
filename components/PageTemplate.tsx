import React, { ReactNode } from "react";

interface PageTemplateProps {
  children: ReactNode;
  heading: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, heading }) => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-8 flex gap-4">
      <div className="h-full w-full">
      <h1 className="text-3xl font-bold pb-4">{heading}</h1>
        <div className="mt-6 gap-12 flex">{children}</div>
      </div>
    </div>
  );
};

export default PageTemplate;
