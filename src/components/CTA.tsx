"use client";

import React from "react";

import { Button } from "@/components/ui";

const Cta = () => {
  return (
    <section className="section-v-space pb-[100px]">
      <div className="container">
        <div className="flex justify-center relative z-10">
          <div className="mx-auto inline-flex w-full flex-col items-center gap-[36px] text-center">
            <div className="space-y-3 md:space-y-5">
              <h1 className="heading-style-1 max-sm:!text-2xl lg:max-w-[790px] w-full lg:mx-auto">
                📩 Ready to Elevate Your Digital Experience?
              </h1>
              <p className="max-sm:text-sm mx-auto xl:max-w-[600px] text-md xl:text-xl">
                Tell me about your product and goals. I’ll reply within one business day with next steps and a rough plan.
              </p>
            </div>
            <Button>
              Get a free 30-minute strategy call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
