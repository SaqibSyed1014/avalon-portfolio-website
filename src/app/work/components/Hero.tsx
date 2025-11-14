"use client";

import React from "react";

import { Button } from "@/components/ui";

import useFadeUpAnimation from "@/lib/utils/fadeup";

const Hero = () => {
  useFadeUpAnimation();

  return (
    <section>
      <div className="section-v-space pb-[100px] !pt-[140px]">
        <div className="container relative z-20">
          <div className="flex flex-col items-start gap-[36px] font-light fade-up">
            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h1 className="heading-style-1">
                Work
              </h1>

              {/* Description */}
              <p className="hero-description short !opacity-100]">
                Here’s a glimpse of the diverse range of websites I’ve designed for various clients.
                Each project reflects my commitment to quality and my ability to create tailored
                solutions that meet unique business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
