import React, { ReactNode } from "react";
import PageHeading from "./̦PageHeading";

interface PageTemplateProps {
  children: ReactNode;
  heading: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, heading }) => {
  return (
    <div className="min-h-screen overflow-hidden noselect">
      <div className="px-8 2xl:px-32 3xl:px-72 h-full">
        <PageHeading title={heading} />
        <p></p>
        {/* <hr></hr> */}
        <div className="mt-6 gap-12 flex">{children}</div>
      </div>
    </div>
  );
};

export default PageTemplate;
