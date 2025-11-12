"use client";

import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import SectionHead from "@/components/ui/SectionHead";
import Marquee from "@/components/ui/Marquee";

interface Testimonial {
  review: string;
  name: string;
  designation: string;
  image: string
}

const TestimonialItem :React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div>
      <div className="card-style flex flex-col justify-between h-[233px] w-[363px]">
        <p className="text-secondary text-wrap">&#34;{testimonial.review}&#34;</p>
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
  const testimonials: Testimonial[] = [
    {
      review: "Abdul was a fantastic partner to work with. He brought strong product design skills, great attention to detail, and thoughtful problem-solving to every project.",
      name: "Tristan",
      designation: "Chief Operating Officer",
      image: 'https://framerusercontent.com/images/DzmsX9RY7ZMcxnS0VDE8nrEMJwk.jpg'
    },
    {
      review: "Great professional work, always finding solutions to ensure to provide optimal user experience to our we app. Highly recommended.",
      name: "Nadim",
      designation: "Director of Engineering",
      image: 'https://framerusercontent.com/images/GLRr9uvTdE0X3XmXVEeXLdXHgS8.jpg'
    },
    {
      review: "Rehired Abdul and tasked him in turning Figma into React. His commitment to excellence and the timely delivery of high-quality results has earned our trust and for future projects.",
      name: "Jessica Lee",
      designation: "VP of Marketing Strategy",
      image: 'https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg'
    },
    {
      review: "Fantastic front end developer skills. Followed instructions clearly. Great communication. Efficient delivery.",
      name: "Alex Ramirez",
      designation: "Senior Solutions Architect",
      image: 'https://framerusercontent.com/images/Dq0D8YrZ8rWDXAualtz8984Y1cg.jpg'
    },
    {
      review: "Abdul delivered exceptional work. He genuine care about our project with excellent communication. Without a doubt, we will definitely hire him again in the future!",
      name: "Anna",
      designation: "CEO, Tech Innovation Ltd.",
      image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
    },
    {
      review: "Abdul Wahab Is a fantastic product designer. I am shocked that his process is super simple, and he provides proper results even though my internee developer has no problem understanding it.",
      name: "Anna",
      designation: "CEO, Tech Innovation Ltd.",
      image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
    },
    {
      review: "Thank you, abdul, for my luxury restaurant landing page. You have never disappointed me. I surely recommend Abdul. He is the best",
      name: "Anna",
      designation: "CEO, Tech Innovation Ltd.",
      image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
    },
    {
      review: "OMG, Abdul, you are amazing. I never thought you could make such massive changes with proper spacing and colors. You have made my day. I will recommend you and hire you again for all design work.",
      name: "Maggie",
      designation: "CEO, Tech Innovation Ltd.",
      image: 'https://framerusercontent.com/images/ZFX2ljkzvDEzlePf7lzdxzPbxXA.jpg'
    },
  ];

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
            <Marquee speed={120} gap={10} scrollBoost={false}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
            </Marquee>
            <Marquee speed={120} gap={10} direction="right" scrollBoost={false}>
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
