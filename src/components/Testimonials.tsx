import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import SectionHead from "@/components/ui/SectionHead";

const Testimonials = () => {
  return (
    <section className="section-v-space">
      <div>
        <SectionLayout>
          <SectionHead
            subText="(5) Testimonials"
            heading="What others think?"
            description="Hearing from my clients directly is the best way to understand the impact of my work."
            isCentered={true}
          />

          <div className="flex gap-5">

          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Testimonials;
