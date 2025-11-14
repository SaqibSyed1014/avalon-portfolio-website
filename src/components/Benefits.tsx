"use client";

import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

import { benefits } from "@/lib/const";

const Benefits = () => {
  const customGradient =
    "radial-gradient(41%_95%_at_50%_99.9%,_rgb(78,78,117)_0%,_rgb(40,40,61)_100%)";

  return (
    <section className="section-v-space lg:pb-[160px]">
      <div>
        <SectionLayout>
          <SectionHead
            subText="(2) Benefits"
            heading="Why Choose Me?"
            description="When it comes to web design, I understand that every business is unique, and so should be its online presence. Here’s why partnering with me can take your startup to the next level:"
            descWidth="max-w-[640px] lg:max-w-[550px] xl:max-w-[800px]"
          />

          <div className="flex flex-col xl:flex-row gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`benefit-gradient flex-1 space-y-[33px] rounded-md border border-white/25 p-5 shadow-[0_5px_40px_1px_#232D26_inset] bg-[${customGradient}]`}
              >
                <h4 className="heading-style-2">{benefit.title}</h4>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Benefits;
