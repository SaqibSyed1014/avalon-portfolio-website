import React from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

const Benefits = () => {
  const benefits = [
    {
      title: "Unique Designs",
      text: "I don't do cookie-cutter. Every design is tailored to your brand's identity and goals.",
    },
    {
      title: "Results-Driven",
      text: "Your success is my success. I design with the end user in mind, ensuring your website achieves your business objectives.",
    },
    {
      title: "Ongoing Support",
      text: "The launch is just the beginning. I provide continuous support to keep your website running smoothly.",
    },
  ];

  const customGradient =
    "radial-gradient(41%_95%_at_50%_99.9%,_rgb(78,78,117)_0%,_rgb(40,40,61)_100%)";
  const customShadow =
    "rgb(81,81,114)_0px_5px_40px_0px_inset,rgba(69,69,97,0)_0px_0px_60px_2px,rgba(80,80,112,0.32)_0px_0px_60px_30px";

  return (
    <section className="section-v-space">
      <div>
        <SectionLayout>
          <SectionHead
            subText="(2) Benefits"
            heading="Why Choose Me?"
            description="When it comes to web design, I understand that every business is unique, and so should be its online presence. Here’s why partnering with me can take your startup to the next level:"
          />

          <div className="flex gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`custom-gradient flex-1 space-y-[33px] rounded-md border border-white/25 p-5 shadow-[${customShadow}] bg-[${customGradient}]`}
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
