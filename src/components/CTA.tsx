"use client";

import React from "react";

import { Button } from "@/components/ui";

const Cta = () => {
  return (
    <section className="section-v-space pb-[100px]">
      <div className="container">
        <div className="flex justify-center relative z-10">
          <div className="mx-auto inline-flex w-full lg:max-w-[720px] flex-col items-center gap-[36px] text-center">
            <div className="space-y-5">
              <h1 className="heading-style-1 max-lg:max-w-[520px] max-lg:mx-auto">Ready to Transform Your Online Presence?</h1>
              <p className="mx-auto xl:max-w-[600px] text-md xl:text-xl">
                Let’s collaborate to create a website that drives results and reflects your
                brand&#39;s unique identity. Contact me today to get started.
              </p>
            </div>
            <Button>Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
