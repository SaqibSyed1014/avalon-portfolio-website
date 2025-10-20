import React, { FC } from "react";

type TProps = Readonly<ISectionHead>;
const SectionHead: FC<TProps> = ({ subText, heading, description, isCentered = false, descWidth = '800px' }) => {
  return (
    <div className={`${isCentered ? "text-center" : ""} space-y-2.5`}>
      <span className="text-secondary">{subText}</span>
      <div className="space-y-5">
        <h2 className="text-[46px] leading-[110%]">{heading}</h2>
        {description && (
          <p
            className={`w-full text-xl leading-[130%] ${isCentered ? 'mx-auto':''}`}
            style={{ maxWidth: descWidth }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHead;
