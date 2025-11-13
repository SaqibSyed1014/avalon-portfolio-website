"use client";

import React from "react";

import { aboutText } from "@/lib/const";

const About = () => {
  return (
    <section className="pt-[100px] lg:pt-40 pb-[100px]">
      <div className="container">
        <p className="w-full lg:max-w-[816px] text-xl lg:text-2xl leading-[110%]">
          {aboutText}
        </p>
      </div>
    </section>
  );
};

export default About;
