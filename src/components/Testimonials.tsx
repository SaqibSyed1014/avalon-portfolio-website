"use client";

import React from "react";

import Marquee from "@/components/ui/Marquee";
import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

import { testimonials } from "@/lib/const";

import { Testimonial } from "@/types/const";

const TestimonialItem :React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div>
      <div className="card-style flex flex-col justify-between h-[233px] w-[363px]">
        <p className="text-secondary text-wrap line-clamp-4">&#34;{testimonial.review}&#34;</p>
        <div className="flex gap-3 items-center">
          <div className="size-[55px] rounded-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={testimonial.image} alt="Testimonial Image" className="size-full object-cover" />
          </div>

          <div>
            <p>{testimonial.name}</p>
            <p className="text-sm">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="section-v-space">
      <div className="flex flex-col gap-10">
        <SectionLayout>
          <SectionHead
            subText="(5) Testimonials"
            heading="What others think?"
            description="Hearing from my clients directly is the best way to understand the impact of my work."
            descWidth="max-w-full lg:max-w-[400px] xl:max-w-[800px]"
          />
        </SectionLayout>

        <div className="flex flex-col gap-2.5"
          style={{ maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgb(0, 0, 0) 23%, rgb(0, 0, 0) 77%, rgba(0, 0, 0, 0.2) 100%)" }}
        >
            <Marquee speed={50} gap={10} scrollBoost={false}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
            </Marquee>
            <Marquee speed={50} gap={10} direction="right" scrollBoost={false}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
            </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
