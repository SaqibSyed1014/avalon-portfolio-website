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
      <div className="card-style flex flex-col justify-between h-[203px] w-[363px]">
        <p className="text-secondary text-wrap">&#34;{testimonial.review}&#34;</p>
        <div className="flex gap-3 items-center">
          <div className="size-[55px] rounded-full overflow-hidden">
            <img src={testimonial.image} alt="" className="size-full object-cover" />
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
      review: "Our new site is a masterpiece. Mark understood our vision perfectly and executed it flawlessly. Our user engagement has skyrocketed.",
      name: "Sarah Chen",
      designation: "Chief Operating Officer",
      image: 'https://framerusercontent.com/images/DzmsX9RY7ZMcxnS0VDE8nrEMJwk.jpg'
    },
    {
      review: "The new design has transformed our online presence. Our customers love the site, and it has significantly improved our sales.",
      name: "Michael Brandt",
      designation: "Director of Engineering",
      image: 'https://framerusercontent.com/images/GLRr9uvTdE0X3XmXVEeXLdXHgS8.jpg'
    },
    {
      review: "Our new site is a masterpiece. Mark understood our vision perfectly and executed it flawlessly. Our user engagement has skyrocketed.",
      name: "Jessica Lee",
      designation: "VP of Marketing Strategy",
      image: 'https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg'
    },
    {
      review: "Working with Mark was a pleasure. The process was smooth, and the end result is a site that we’re incredibly proud of.",
      name: "Alex Ramirez",
      designation: "Senior Solutions Architect",
      image: 'https://framerusercontent.com/images/Dq0D8YrZ8rWDXAualtz8984Y1cg.jpg'
    },
    {
      review: "The website Mark Avalon designed for us exceeded our expectations. It’s beautiful and highly functional, bringing in more clients than ever before.",
      name: "Lucy Allie",
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
            <Marquee speed={80} gap={10} scrollBoost={false}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
              {testimonials.map((testimonial, index) => (
                <TestimonialItem testimonial={testimonial} key={index} />
              ))}
            </Marquee>
            <Marquee speed={80} gap={10} direction="right" scrollBoost={false}>
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
