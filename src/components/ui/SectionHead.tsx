import React, { FC } from "react";

type TProps = Readonly<ISectionHead>;
const SectionHead: FC<TProps> = ({ subText, heading, description }) => {
  return (
    <div className="space-y-2.5">
      <span className="text-secondary">{subText}</span>
      <div className="space-y-5">
        <h2 className="text-[46px] leading-[110%]">{heading}</h2>
        {description && (
          <p className="w-full max-w-[800px] text-xl leading-[130%]">{description}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHead;
