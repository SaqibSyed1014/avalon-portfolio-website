import React from "react";

const SectionLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-[60px]">{children}</div>
    </div>
  );
};

export default SectionLayout;
