"use client";

import React, { FC } from "react";

type TProps = Readonly<ISectionHead>;
const SectionHead: FC<TProps> = ({ subText, heading, description, isCentered = false, descWidth = 'max-w-[800px]' }) => {
  return (
    <div className={`${isCentered ? "text-center" : ""} space-y-[10px]`}>
      {subText?.length && <span className="text-secondary font-extralight">{subText}</span>}
      <div className="space-y-5">
        <h2 className="section-heading">{heading}</h2>
        {description && (
          <p
            className={`text-md w-full leading-[130%] lg:text-xl ${descWidth} ${isCentered ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHead;
