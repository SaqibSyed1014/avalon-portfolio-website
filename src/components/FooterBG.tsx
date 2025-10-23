'use client';

import React from "react";

const FooterBg = () => {
  return (
    <div className="absolute inset-0 rotate-y-180"
         style={{ mask: "linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 38%,rgba(0,0,0,1) 74%,rgba(0,0,0,0) 100%) add" }}
    >
      <div className="absolute top-[-214px] bottom-[109px] right-[-398px] opacity-10 w-[446px] blur-[100px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
      <div className="absolute top-[-214px] bottom-[-116px] left-[595px] opacity-10 w-[154px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
      <div className="absolute top-[-228px] bottom-[-211px] left-[-378px] opacity-10 w-[112px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
      <div className="absolute top-[-227px] bottom-[-107px] left-[-267px] opacity-10 w-[172px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
      <div className="absolute top-[-215px] bottom-[-115px] left-[222px] opacity-10 w-[218px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
    </div>
  );
};

export default FooterBg;
