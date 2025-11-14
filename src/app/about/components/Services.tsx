"use client";

import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

import { services } from "@/lib/const";

const Services = () => {
  const customGradient =
    "radial-gradient(41%_95%_at_50%_99.9%,_rgb(78,78,117)_0%,_rgb(40,40,61)_100%)";

  return (
    <section className="pt-[60px] pb-[120px] relative z-20">
      <div>
        <SectionLayout>
          <SectionHead
            heading="Services"
            description="As a freelance web designer, I provide a comprehensive range of services tailored to meet the unique needs of startups and small businesses."
            descWidth="max-w-[640px] lg:max-w-[550px] xl:max-w-[710px]"
          />

          <div className="flex flex-col xl:flex-row gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`benefit-gradient flex-1 space-y-[33px] rounded-md border border-white/25 p-5 shadow-[0_5px_40px_1px_#232D26_inset] bg-[${customGradient}]`}
              >
                <h4 className="heading-style-2">{service.title}</h4>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Services;
