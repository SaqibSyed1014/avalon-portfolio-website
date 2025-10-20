import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";
import { Button } from "@/components/ui";

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

          <div className="flex justify-center gap-5">
            <div className="relative group/item p-5 border border-white/25 rounded-md custom-gradient hover:scale-[1.02] hover:translate-y-[-10px] transition-all">
              <div className="space-y-[26px] relative z-10">
                <div className="space-y-3">
                  <h4 className="text-2xl">Landing Page Design</h4>
                  <h3 className="text-[46px] leading-[110%]">€999-1999</h3>
                  <p>Get noticed with a sleek and engaging landing page.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>Fast Turnaround</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>Conversion Focused</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>Custom Design</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>48 hour delivery</p>
                  </div>
                </div>

                <Button fullWidth={true}>Get in touch</Button>
              </div>

              <div className="absolute inset-0 secondary-gradient opacity-0 group-hover/item:opacity-40 transition"></div>
            </div>

            <div className="relative group/item p-5 border border-white/25 rounded-md custom-gradient hover:scale-[1.02] hover:translate-y-[-10px] transition-all">
              <div className="space-y-[26px] relative z-10">
                <div className="space-y-3">
                  <h4 className="text-2xl">Multi-page Design</h4>
                  <h3 className="text-[46px] leading-[110%]">€1999+</h3>
                  <p>Get noticed with a sleek and engaging landing page.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>Responsive Design</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>SEO Optimized</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>Ongoing Support</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="white">
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#fff" />
                    </svg>
                    <p>48 hour delivery</p>
                  </div>
                </div>

                <Button fullWidth={true}>Get in touch</Button>
              </div>

              <div className="absolute inset-0 secondary-gradient opacity-0 group-hover/item:opacity-40 transition"></div>

            </div>
          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Pricing;
