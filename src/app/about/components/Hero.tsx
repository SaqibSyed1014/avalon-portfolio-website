"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useFadeUpAnimation from "@/lib/utils/fadeup";
import Image from "next/image";

const Hero = () => {
  useFadeUpAnimation();

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    gsap.fromTo(".about-image img", {
      scale: 1.25,
    }, {
      scale: 1,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  return (
    <section ref={sectionRef}>
      <div className="section-v-space !pt-[140px]">
        <div className="container relative z-20 fade-up">
          <div className="flex flex-col items-start gap-[36px] font-light pb-[46px]">
            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h1 className="heading-style-1">
                About me
              </h1>
            </div>
          </div>

          <div className="card-style !p-1.5 bg-[#151518] fade-up shadow-[inset_-1px_1px_#ffffff80]">
            <div className="about-image relative overflow-hidden rounded-[2px] h-[550px] md:h-[260px] lg:h-[550px] xl:h-[612px] border border-white/10">
              <Image
                src="/images/abdul-wahab.webp"
                alt="Abdul Wahab"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>

          <div className="py-[100px]">
            <p className="w-full lg:max-w-[990px] text-xl lg:text-2xl leading-[110%]">
              I&#39;m a web designer passionate about my craft, desired to achieve amazing results. Stand out from your competitors and present your brand with quality.
              <br/><br/>
              I specialize in creating unique yet functional websites by adding “soul”. Instead of only focusing on solving problems I know how to express your brand with visuals which leads to sells better to your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
