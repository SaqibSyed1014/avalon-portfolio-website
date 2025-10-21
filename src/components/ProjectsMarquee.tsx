import React from "react";

import Marquee from "@/components/ui/Marquee";

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

  return (
    <ul className="flex gap-5">
      <Marquee speed={50} gap={40} scrollBoost={true}>
        {projectsSecreenshots.map((ss, index) => {
          return (
          <div key={index}>
            <div className="w-[926px] h-[524px] bg-[#151518] p-1.5 border border-white/25 rounded-md">
              <div className="border border-white/25 rounded-md overflow-hidden h-full">
                <img src={ss.image} alt={ss.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          )
        })
        }
      </Marquee>
    </ul>
  )
};

export default ProjectsMarquee;
