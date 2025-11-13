"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

import ProjectsMarquee from "@/components/ProjectsMarquee";
import { Button } from "@/components/ui";

import useFadeUpAnimation from "@/lib/utils/fadeup";
import Image from "next/image";

import { freelancerName } from "@/lib/const";

const Hero: React.FC = () => {
  useFadeUpAnimation();

  useEffect(() => {
    gsap.to('.animate-pinging', {
      filter: 'blur(10px)',
      scale: 2,
      opacity: .7,
      repeat: -1,
      duration: .5,
      ease: "none",
      repeatDelay: 1,
    });
  }, []);

  return (
    <section className="relative z-20">
      <div className="section-v-space pb-[100px] !pt-[140px]">
        <div className="container">
          <div className="flex flex-col items-start gap-[36px] font-light">
              <div className="flex items-center gap-6 fade-up" data-delay={0.2}>
                {/* Image and Name/Status */}
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="relative h-11 w-11 lg:h-[50px] lg:w-[51px] flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/images/abdul-wahab.webp"
                      alt="Abdul Wahab Picture"
                      fill={true}
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-2xl xl:text-[32px] leading-[110%]">
                      {freelancerName}
                    </h3>

                    {/* Pulsing Dot */}
                    <div className="flex items-center gap-[10px]">
                      <div className="relative flex h-4 w-4">
                        <span
                          className="absolute inline-flex h-full w-full animate-pinging rounded-full bg-[#7cf47e] opacity-20"></span>
                        {/* Solid dot */}
                        <span
                          className="relative inline-flex justify-center items-center h-4 w-4 rounded-full overflow-hidden"
                          style={{
                            background: "radial-gradient(50% 50%, rgb(49, 238, 51) 0%, rgb(124, 244, 126) 100%)",
                            boxShadow: "rgba(124, 244, 126, 0.5) 0px 0px 20px 0px"
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g filter="url(#filter0_d_1248_19)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23106 9.45148H4.77206V8.79803H9.23106V9.45148ZM9.23806 8.14388H4.76436L3.85156 5.71068L5.59876 6.29308L7.00156 4.55078L8.40436 6.29308L10.1516 5.71068L9.23806 8.14388Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_1248_19" x="-16.1484" y="-15.4492" width="46.2998" height="44.9004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.956863 0 0 0 0 0.494118 0 0 0 0.5 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1248_19"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1248_19" result="shape"/>
                            </filter>
                            </defs>
                          </svg>
                        </span>
                      </div>
                      <p>Top Rated Plus</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-[46px] h-[51px] flex justify-center items-center">
                  <div className="absolute inset-0 z-[-1]">
                    <Image
                      src="/images/top-rated-plus-bg.png"
                      alt="Top Rated Plus Badge"
                      fill={true}
                      className="animate-[spin_12s_linear_infinite]"
                      unoptimized={true}
                    />
                  </div>
                  <div className="relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M19.9191 20.7994C20.3048 22.2073 18.7677 23.2333 17.6145 22.4638L12.363 19.0059L7.10953 22.4638C5.95624 23.2333 4.41917 22.08 4.80295 20.7994L6.21274 14.7784L1.34503 10.8056C0.19174 9.90879 0.832026 8.11521 2.24181 7.98986L8.51931 7.60414L10.8259 1.71043C11.337 0.429857 13.2597 0.429857 13.7708 1.71043L16.0774 7.60414M19.2827 7.98793V16.9558M23.892 12.4719H14.9241" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h1 className="heading-style-1 fade-up" data-delay={0.5}>
                <span className="hidden md:block">A Senior UX/UI Designer,<br/> Building Solutions for <span className="font-bold">Founders</span></span>
                <span className="block md:hidden">A Senior UX/UI Designer, Building Solutions for <span className="font-bold">Founders</span></span>
              </h1>

              {/* Description */}
              <div className="fade-up" data-delay={0.7}>
                <p className="hero-description">
                  I design fast, accessible, and brand-true experiences that improve conversion, SEO, and user satisfaction for startups and SMEs.
                </p>
              </div>
            </div>

            <div className="fade-up" data-delay={0.9}>
              <Button>Get a free strategy call</Button>
            </div>
          </div>
        </div>
      </div>

      <ProjectsMarquee />
    </section>
  );
};

export default Hero;
