"use client";

import React, { FC } from "react";

type TProps = Readonly<IClassNameWithChildren>;
const SectionLayout: FC<TProps> = ({ children, className }) => {
  return (
    <div className="container">
      <div className={`flex flex-col gap-[42px] lg:gap-[60px] ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
