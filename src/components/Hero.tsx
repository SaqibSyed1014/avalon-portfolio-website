"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

import ProjectsMarquee from "@/components/ProjectsMarquee";
import { Button } from "@/components/ui";

const Hero: React.FC = () => {
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
    <section>
      <div className="section-v-space !pt-[140px]">
        <div className="container">
          <div className="relative z-20 flex flex-col items-start gap-[36px] font-light">
            <div className="flex items-center gap-6">
              {/* Stack: Image and Name/Status */}
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="h-11 w-11 lg:h-[50px] lg:w-[50px] flex-shrink-0 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://framerusercontent.com/images/vZADFl4NEYLJ11AxhBHI0iET1U.png"
                    alt="Mark Avalon Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl lg:text-2xl xl:text-[32px] leading-[110%]">
                    Mark Avalon
                  </h3>

                  {/* Available for work Status (Pulsing Dot) */}
                  <div className="flex items-center gap-[10px]">
                    <div className="relative flex h-2.5 w-2.5">
                      <span
                        className="absolute inline-flex h-full w-full animate-pinging rounded-full bg-[#7cf47e] opacity-20"></span>
                      {/* Solid dot */}
                      <span
                        className="relative inline-flex h-2.5 w-2.5 rounded-full"
                        style={{
                          background: "radial-gradient(50% 50%, rgb(49, 238, 51) 0%, rgb(124, 244, 126) 100%)",
                          boxShadow: "rgba(124, 244, 126, 0.5) 0px 0px 20px 0px"
                        }}
                      ></span>
                    </div>
                    <p>Available for work</p>
                  </div>
                </div>
              </div>
              <div className="h-10 w-10 xl:h-[56px] xl:w-[56px] animate-[spin_7s_linear_infinite] duration-[8s]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://framerusercontent.com/images/QQ8Ta0XApGQug7OqXmDapa7BIA.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h1 className="heading-style-1">
                <span className="hidden xl:block">I&#39;m Mark Avalon, a freelancer designing<br/> standout websites for startups.</span>
                <span className="hidden md:block xl:hidden">I&#39;m Mark Avalon, a freelancer<br/> designing standout<br/> websites for startups.</span>
                <span className="block md:hidden">I&#39;m Mark Avalon,<br/> a freelancer<br/> designing<br/> standout<br/> websites<br/> for startups.</span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                I design unique websites that turn start-ups into market leaders. Let&#39;s create a
                digital presence that not only looks amazing but also drives real results for your
                business.
              </p>
            </div>

            <Button>Get in touch</Button>
          </div>
        </div>
      </div>

      <ProjectsMarquee />
    </section>
  );
};

export default Hero;
