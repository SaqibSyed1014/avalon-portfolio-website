import React, { FC } from "react";

type TProps = Readonly<IChildren>;
const SectionLayout: FC<TProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-[60px]">{children}</div>
    </div>
  );
};

export default SectionLayout;
