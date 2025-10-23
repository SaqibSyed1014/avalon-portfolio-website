"use client";

import React from "react";

import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <section>
      <div className="section-v-space !pt-[140px]">
        <div className="container">
          <div className="relative z-20 flex flex-col items-start gap-[36px] font-light">
            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h1 className="heading-style-1">
                Quantum
              </h1>

              {/* Description */}
              <p className="hero-description">
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
        <div className="card-style !p-1.5">
          <div className="overflow-hidden rounded-md h-[670px]">
            <img src="https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg?scale-down-to=4096" alt=""
                  className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
