import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

const Process = () => {
  return (
    <div>
      <section className="section-v-space">
        <div>
          <SectionLayout>
            <SectionHead
              subText="(3) Process"
              heading="How it goes"
              description="Crafting a standout website involves a detailed and collaborative process. Here’s how we achieve your vision:"
            />

            <div className="flex gap-5">
              {/*{benefits.map((benefit, index) => (*/}
              {/*  <div*/}
              {/*    key={index}*/}
              {/*    className={`p-5 flex-1 space-y-[33px] rounded-md border border-white/25 custom-gradient shadow-[${customShadow}] bg-[${customGradient}]`}*/}
              {/*  >*/}
              {/*    <h4 className="heading-style-2">{benefit.title}</h4>*/}
              {/*    <p>{benefit.text}</p>*/}
              {/*  </div>*/}
              {/*))}*/}
            </div>
          </SectionLayout>
        </div>
      </section>
    </div>
  );
};

export default Process;
