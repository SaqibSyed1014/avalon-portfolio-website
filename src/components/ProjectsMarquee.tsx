"use client";

import React from "react";

// import Marquee from "@/components/ui/Marquee";

import useFadeUpAnimation from "@/lib/utils/fadeup";

import VideoPlayer from "@/components/ui/VideoPlayer";

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

      <div className="w-[555px] h-[314px] lg:w-[911px] lg:h-[538px] mx-auto bg-[#151518] p-1.5 border border-white/25 rounded-md [2px]">
        <div className="relative border border-white/25 rounded-[2px] overflow-hidden h-full">

          <VideoPlayer
            src="/video/testimonial-for-abdul.mp4"
          />

          <div className="absolute bottom-3 left-3">
            <div className="flex justify-center gap-3 items-center py-3 px-4 text-xl custom-gradient rounded-md border border-white/25">
              Tristen
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_1248_853)">
                  <mask id="mask0_1248_853" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0"
                        width="20" height="20">
                    <path d="M20 0H0V20H20V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1248_853)">
                    <path
                      d="M5.4332 0C5.4332 0 6.46727 5.84265 5.36168 9.96867C4.25608 14.0946 0.439106 18.6375 0.439106 18.6375C0.439106 18.6375 -0.594966 12.7948 0.510632 8.66883C1.61623 4.54287 5.4332 0 5.4332 0Z"
                      fill="#C5F222" />
                    <path
                      d="M16.0875 3.91406C16.0875 3.91406 14.0616 9.49098 11.041 12.5114C8.02048 15.5318 2.44336 17.5576 2.44336 17.5576C2.44336 17.5576 4.46927 11.9808 7.48982 8.96028C10.5104 5.93989 16.0875 3.91406 16.0875 3.91406Z"
                      fill="#C5F222" />
                    <path
                      d="M19.9995 14.567C19.9995 14.567 15.4565 18.3838 11.3303 19.4894C7.2042 20.5949 1.36133 19.5609 1.36133 19.5609C1.36133 19.5609 5.90437 15.7441 10.0305 14.6385C14.1567 13.533 19.9995 14.567 19.9995 14.567Z"
                      fill="#C5F222" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1248_853">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/*<Marquee speed={100} gap={24} scrollBoost={true}>*/}
      {/*  {projectsSecreenshots.map((ss, index) => {*/}
      {/*    return (*/}
      {/*    <div key={index}>*/}
      {/*      <div className="w-[555px] h-[314px] lg:w-[925px] lg:h-[524px] bg-[#151518] p-1.5 border border-white/25 rounded-md [2px]">*/}
      {/*        <div className="border border-white/25 rounded-[2px] overflow-hidden h-full">*/}
      {/*          /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
      {/*          <img src={ss.image} alt={ss.alt} className="h-full w-full object-cover" />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    )*/}
      {/*  })*/}
      {/*  }*/}
      {/*</Marquee>*/}
    </div>
  )
};


export default ProjectsMarquee;
