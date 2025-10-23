import React, { FC } from "react";

type TProps = Readonly<ISectionHead>;
const SectionHead: FC<TProps> = ({ subText, heading, description, isCentered = false, descWidth = 'max-w-[800px]' }) => {
  return (
    <div className={`${isCentered ? "text-center" : ""} space-y-2.5`}>
      <span className="text-secondary">{subText}</span>
      <div className="space-y-5">
        <h2 className="section-heading">{heading}</h2>
        {description && (
          <p
            className={`w-full text-md lg:text-xl leading-[130%] ${descWidth} ${isCentered ? 'mx-auto':''}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHead;
