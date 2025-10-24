"use client";

import React from "react";

import Marquee from "@/components/ui/Marquee";

import useFadeUpAnimation from "@/lib/utils/fadeup";

const ProjectsMarquee = () => {
  const projectsSecreenshots = [
    {
      image: 'https://framerusercontent.com/images/QjCaPNIrLqjYrTFSbztJcHqaKtc.png',
      alt: ''
    },
    {
      image: 'https://framerusercontent.com/images/lOTGnBtxicVl5zrA51INys6nMc.png',
      alt: ''
    },
    {
      image: 'https://framerusercontent.com/images/yPQmcSVdsVQjhOXIhubfpkTC4.png',
      alt: ''
    },
    {
      image: 'https://framerusercontent.com/images/4kLgsWFIZaMT8smUvv9ysUp2x7I.png',
      alt: ''
    }
  ]

  useFadeUpAnimation();

  return (
    <div className="flex gap-5 fade-in">
      <Marquee speed={100} gap={24} scrollBoost={true}>
        {projectsSecreenshots.map((ss, index) => {
          return (
          <div key={index}>
            <div className="w-[555px] h-[314px] lg:w-[925px] lg:h-[524px] bg-[#151518] p-1.5 border border-white/25 rounded-md [2px]">
              <div className="border border-white/25 rounded-[2px] overflow-hidden h-full">
                <img src={ss.image} alt={ss.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          )
        })
        }
      </Marquee>
    </div>
  )
};

export default ProjectsMarquee;
