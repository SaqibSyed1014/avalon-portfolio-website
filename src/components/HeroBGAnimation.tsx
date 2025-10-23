"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

const HeroBgAnimation = () => {
  useEffect(() => {
    const animations = [
      { target: ".line-1", x: -600 },
      { target: ".line-2", x: 300 },
      { target: ".line-3", x: 400 },
      { target: ".line-4", x: 100 },
      { target: ".line-5", x: 200 },
    ];

    animations.forEach(({ target, x }) => {
      gsap.to(target, {
        x,
        duration: 10,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div>
      <div className="absolute top-0 right-0 left-0 z-10 h-[1750px] rotate-y-180"
           style={{ mask: "linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 45%) add" }}
      >
        <div className="hero-bg overflow-hidden absolute inset-0"
             style={{ background: "linear-gradient(180deg,rgba(255,255,255,.08) 0%,rgba(21,32,34,0) 100%)" }}
        >
          <div className="line-1 absolute top-[-224px] bottom-[-217px] right-[-398px] opacity-10 w-[446px] blur-[60px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="line-2 absolute top-[-224px] bottom-[-225px] left-[595px] opacity-10 w-[154px] blur-[60px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="line-3 absolute top-[-239px] bottom-[-329px] left-[-378px] opacity-10 w-[112px] blur-[60px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="line-4 absolute top-[-238px] bottom-[-215px] left-[-267px] opacity-10 w-[172px] blur-[60px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="line-5 absolute top-[-225px] bottom-[-224px] left-[222px] opacity-10 w-[218px] blur-[60px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBgAnimation;
