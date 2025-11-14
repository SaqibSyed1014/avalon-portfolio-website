"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

interface ProcessStep {
  title: string;
  description: string;
  points: string[];
  duration: string;
}

interface ProcessStepProps {
  step: ProcessStep;
}

const processSteps :ProcessStep[] = [
  {
    title: 'Discovery & Alignment',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.',
    points: [
      'Lead stakeholder talks & workshops (WBS)',
      'Analyze competitors & user insights (SWOT)',
      'Map journeys to set goals & metrics. (Network Diagram)'
    ],
    duration: 'Week #1'
  },
  {
    title: 'UX/UI Design & Prototyping',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.',
    points: [
      'Design high-fidelity, user-focused mockups.',
      'Build interactive prototypes for feedback.',
      'Refine UI for better experience & conversion.'
    ],
    duration: 'Week #2-5'
  },
  {
    title: 'Development & Design Handoff',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.',
    points: [
      'Build pixel-perfect sites in Webflow & Framer.',
      'Add custom interactions & animations.',
      'Deliver smooth handoffs with full docs.'
    ],
    duration: 'Week #6'
  },
  {
    title: 'Optimization & Deployment',
    description: 'We kick things off by diving deep into your business. Understanding your goals, audience, and competition is crucial for building a website that stands out.',
    points: [
      'Test across all devices & browsers.',
      'Optimize speed for smooth UX.',
      'Launch & refine based on feedback.'
    ],
    duration: 'Week #7'
  }
];


const ProcessStep :React.FC<ProcessStepProps> = ({ step }) => {
  return (
    <div className="card-style relative xl:w-[490px] xl:h-[242px] shrink-0">
      <div className="flex flex-col justify-between relative z-10 h-full">
        <div className="flex justify-between">
          <div className="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M-11.0078 16.4001L14.0722 16.7921L-3.38181 34.8141L-2.81681 35.3791L15.2052 17.9261L15.5972 43.0061H16.3972L16.7892 17.9261L34.8122 35.3801L35.3772 34.8151L17.9242 16.7931L43.0042 16.4011V15.6011L17.9242 15.2091L35.3782 -2.81386L34.8132 -3.37886L16.7912 14.0741L16.3982 -11.0059H15.5982L15.2062 14.0741L-2.81581 -3.37986L-3.38081 -2.81486L14.0722 15.2071L-11.0078 15.5991V16.4001Z" fill="#F9F4F4" stroke="#F9F4F4" stroke-width="0.8"/>
            </svg>
          </div>

          <span className="text-2xl text-secondary">{step.duration}</span>
        </div>

        <div className="space-y-2.5 max-lg:mt-12">
          <h3 className="heading-style-2">{step.title}</h3>
          {/*Description text*/}
          <div className="desc overflow-hidden xl:h-0">
            <ul className="list-disc normal-case pl-2 max-md:text-sm">
              {step.points.map((point, i) => (
                <li key={i} className="ml-3">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*BG gradient*/}
      <div
        className="absolute inset-0 benefit-gradient opacity-0 transition-opacity"
        style={{ boxShadow: "#232D26 0px 5px 40px 0px inset, #232D26 0px 0px 60px 2px" }}
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
        const gradient = card.querySelector(".benefit-gradient");
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
              heading="A simple, transparent process"
              description="Crafting a standout website involves a detailed and collaborative process. Here’s how we achieve your vision:"
              descWidth="max-w-[450px] lg:max-w-[550px] xl:max-w-[800px]"
            />

            <div className="relative z-10">
              <div ref={cardsRef} className="hidden xl:flex gap-[90px]">
                {processSteps.map((step, i) => (
                  <ProcessStep key={i} step={step} />
                ))}
              </div>

              <div className="flex flex-col xl:hidden gap-5">
                {processSteps.map((step, i) => (
                  <ProcessStep key={i} step={step} />
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
              src="https://framerusercontent.com/images/3vmeJmumAbTG3fibdczaTt2VJt8.png"
               alt="BG Image"
               className="object-cover w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Process;
