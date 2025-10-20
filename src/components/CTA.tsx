import React from "react";

import { Button } from "@/components/ui";

const Cta = () => {
  return (
    <section className="section-v-space">
      <div className="flex justify-center">
        <div className="mx-auto inline-flex w-full max-w-[720px] flex-col items-center gap-[36px] text-center">
          <div className="space-y-5">
            <h1 className="heading-style-1">Ready to Transform Your Online Presence?</h1>
            <p className="mx-auto max-w-[600px] text-xl">
              Let’s collaborate to create a website that drives results and reflects your
              brand&#39;s unique identity. Contact me today to get started.
            </p>
          </div>
          <Button>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
