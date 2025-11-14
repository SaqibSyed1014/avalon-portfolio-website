"use client";

import Image from "next/image";
import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

import { stack } from "@/lib/const";

const Stack = () => {
  const customGradient =
    "radial-gradient(41%_95%_at_50%_99.9%,_rgb(78,78,117)_0%,_rgb(40,40,61)_100%)";

  return (
    <section className="py-[60px]">
      <div>
        <SectionLayout className="!gap-[77px]">
          <SectionHead
            heading="Stack"
            descWidth="max-w-[640px] lg:max-w-[550px] xl:max-w-[750px]"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stack.map((stack, index) => (
              <div
                key={index}
                className={`relative flex items-end benefit-gradient h-[210px] flex-1 space-y-[33px] rounded-md border border-white/25 p-1.5 shadow-[0_5px_40px_1px_#232D26_inset] bg-[${customGradient}]`}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[74px]">
                  <Image src={stack.image} alt={stack.title} fill={true} />
                </div>
                <h4 className="text-xl">{stack.title}</h4>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Stack;
