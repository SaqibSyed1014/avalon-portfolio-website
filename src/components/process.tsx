"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepProps {
  index: number;
  step: ProcessStep;
}

const processSteps :ProcessStep[] = [
  {
    title: 'Analyse',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.'
  },
  {
    title: 'Design',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.'
  },
  {
    title: 'Development',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.'
  },
  {
    title: 'Iteration',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.'
  }
];


const ProcessStep :React.FC<ProcessStepProps> = ({ index, step }) => {
  return (
    <div className="card-style relative xl:w-[490px] h-[242px] shrink-0">
      <div className="flex flex-col justify-between relative z-10 h-full">
        <div className="flex justify-between">
          <div className="h-8 w-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/QQ8Ta0XApGQug7OqXmDapa7BIA.svg"
              alt=""
            />
          </div>

          <span className="text-2xl text-secondary">0{index+1}</span>
        </div>

        <div className="space-y-2.5">
          <h3 className="heading-style-2">{step.title}</h3>
          {/*Description text*/}
          <div className="desc overflow-hidden xl:h-0">
            <p>{step.description}</p>
          </div>
        </div>
      </div>

      {/*BG gradient*/}
      <div
        className="absolute inset-0 secondary-gradient opacity-0 transition-opacity"
        style={{ boxShadow: "rgb(81, 81, 114) 0px 5px 40px 0px inset, rgba(69, 69, 97, 0) 0px 0px 60px 2px, rgba(80, 80, 112, 0.32) 0px 0px 60px 30px" }}
      ></div>
    </div>
  )
}

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1280) return;

    const section = sectionRef.current;
    const cards = cardsRef.current;
    const bg = bgRef.current;
    if (!section || !cards || !bg) return;

    const cardsWidth = cards.scrollWidth;
    const scrollDistance = cardsWidth - cardsWidth/4;

    const ctx = gsap.context(() => {
      // Background slight parallax
      gsap.to(bg, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: `+=${scrollDistance}`,
          scrub: true,
        },
      });

      // Pin the section in middle of viewport
      const horizontal = gsap.to(cards, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "bottom+=400vh top",
          pin: true,
          scrub: true,
        },
      });

      // Description + gradient reveal animations per card
      const cardElems = gsap.utils.toArray<HTMLElement>(".card-style");

      cardElems.forEach((card, i) => {
        const gradient = card.querySelector(".secondary-gradient");
        const desc = card.querySelector(".desc");

        if (i === 0) {
          // First card reveal when section starts pinning
          gsap.to([gradient, desc], {
            opacity: 1,
            duration: 0.5,
            height: "auto",
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "center bottom-=10%",
              end: "center center",
              toggleActions: "play none none reverse"
            },
          });
        } else {
          // Other cards reveal when centered
          ScrollTrigger.create({
            trigger: card,
            containerAnimation: horizontal,
            start: "center center",
            end: "center+=100 center",
            onEnter: () => {
              gsap.to(gradient, { opacity: 1, duration: 0.5, ease: "power2.out" });
              gsap.to(desc, { height: "auto", duration: 0.8, ease: "power2.out" });
            },
            onLeaveBack: () => {
              gsap.to(gradient, { opacity: 0, duration: 0.5, ease: "power2.out" });
              gsap.to(desc, { height: 0, duration: 0.8, ease: "power2.out" });
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="section-v-space lg:!pb-[160px] overflow-hidden relative">
        <div className="relative z-10">
          <SectionLayout>
            <SectionHead
              subText="(3) Process"
              heading="How it goes"
              description="Crafting a standout website involves a detailed and collaborative process. Here’s how we achieve your vision:"
              descWidth="max-w-[450px] lg:max-w-[550px] xl:max-w-[800px]"
            />

            <div className="relative z-10">
              <div ref={cardsRef} className="hidden xl:flex gap-[90px]">
                {processSteps.map((step, i) => (
                  <ProcessStep key={i} step={step} index={i} />
                ))}
              </div>

              <div className="flex flex-col xl:hidden gap-5">
                {processSteps.map((step, i) => (
                  <ProcessStep key={i} step={step} index={i} />
                ))}
              </div>
            </div>

            <div className="hidden xl:block h-0.5 absolute bg-[#29293d] left-[-100px] right-[-100px] bottom-[119px] overflow-hidden ">
              <div className="absolute h-0.5 bg-white left-0 w-[40%]"></div>
            </div>
          </SectionLayout>
        </div>

        {/*BG Image*/}
        <div ref={bgRef} className="max-lg:hidden opacity-60 absolute top-0 bottom-0 left-0 right-[-960px]">
          <img
              src="https://framerusercontent.com/images/3vmeJmumAbTG3fibdczaTt2VJt8.png"
               alt=""
               className="object-cover w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Process;
