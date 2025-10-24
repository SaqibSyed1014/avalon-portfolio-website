"use client";

import React from "react";

import { Button } from "@/components/ui";

import useFadeUpAnimation from "@/lib/utils/fadeup";

const Hero = () => {
  useFadeUpAnimation();

  return (
    <section>
      <div className="section-v-space pb-[100px] !pt-[140px]">
        <div className="container relative z-20 ">
          <div className="flex flex-col items-start gap-[36px] font-light fade-up">
            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h1 className="heading-style-1">
                Quantum
              </h1>

              {/* Description */}
              <p className="hero-description !opacity-100">
                I design unique websites that turn start-ups into market leaders. Let&#39;s create a
                digital presence that not only looks amazing but also drives real results for your
                business.
              </p>
            </div>

            <Button>See Live</Button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-style !p-1.5 bg-[#151518] fade-up shadow-[inset_-1px_1px_#ffffff80]">
          <div className="overflow-hidden rounded-[2px] h-[260px] lg:h-[550px] xl:h-[670px] border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg?scale-down-to=4096" alt=""
                  className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
