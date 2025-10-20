import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

const Pricing = () => {
  return (
    <section className="section-v-space">
      <div>
        <SectionLayout>
          <SectionHead
            subText="(4) Pricing"
            heading="How much does it cost?"
            description="Investing in a professional, custom-designed website is a crucial step for any startup looking to establish a strong online presence. "
            isCentered={true}
            descWidth={'580px'}
          />

          <div className="flex gap-5">

          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Pricing;
