import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

import { Button } from "@/components/ui";
import Marquee from "@/components/ui/Marquee";
import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

interface Project {
  image: string;
  alt: string;
  title: string;
}

const projects :Project[] = [
  {
    title: "Quantum",
    image: "https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg",
    alt: "Project 1",
  },
  {
    title: "Lora",
    image:
      "https://framerusercontent.com/images/NAJSIK5XnZdV1Y4SAp0lueMbA.jpg?scale-down-to=2048",
    alt: "Project 1",
  },
  {
    title: "Eciedge Store",
    image: "https://framerusercontent.com/images/rhrxm36efhkLLxhTgRh5oSvA3g.png",
    alt: "Project 1",
  },
  {
    title: "Zenith",
    image: "https://framerusercontent.com/images/rhrxm36efhkLLxhTgRh5oSvA3g.png",
    alt: "Project 1",
  },
];

const WorkProjects :React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (window.innerWidth < 1280) return;

    const section = sectionRef.current;
    const scrollContent = horizontalRef.current;
    if (!section || !scrollContent) return;

    const setupScroll = () => {
      // kill old animation if exists
      animationRef.current?.scrollTrigger?.kill();
      animationRef.current?.kill();

      const totalWidth = scrollContent.scrollWidth;
      const scrollDistance = totalWidth - totalWidth/4;

      if (scrollDistance <= 0) return;

      // horizontal scroll tied to vertical scroll
      animationRef.current = gsap.to(scrollContent, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    setupScroll();

    // update when resizing
    const handleResize = () => {
      ScrollTrigger.refresh();
      setupScroll();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      animationRef.current?.kill();
    };
  }, []);


  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="">
        <div className="flex flex-col gap-[100px] xl:gap-[250px]">
          <div className="lg:pt-[100px]">
            <SectionLayout>
              <SectionHead subText="(1) Work" heading="My Recent Projects" />

              {/*Scroll this section horizontally when user scrolls*/}
              <div ref={horizontalRef} className="hidden xl:flex h-[403px] gap-5 will-change-transform">
                {projects.map((project, index) => (
                  <div key={index} className="h-full w-[49%] flex-none">
                    <div className="flex h-full flex-col gap-2 rounded-md border border-white/25 p-1.5">
                      <div className="overflow-hidden rounded-[2px] border border-white/15">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-secondary text-xl">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:hidden gap-2.5">
                {projects.map((project, index) => (
                  <div key={index} className="">
                    <div className="flex h-full flex-col gap-2 rounded-md border border-white/25 p-1.5 max-lg:h-[263px]">
                      <div className="overflow-hidden rounded-[2px] border border-white/15">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-secondary text-xl">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button>View more</Button>
              </div>
            </SectionLayout>
          </div>

          <div className="bg-secondary flex items-center overflow-hidden h-[78px] lg:h-[160px]">
            <div className="flex gap-16 text-[30px] lg:text-[36px] xl:text-[46px] leading-[110%] text-black [&_li]:shrink-0">
              <Marquee gap={64} scrollBoost={false}>
                <div>Achieve measurable results with stunning, uniquely designed websites</div>
                <div>Achieve measurable results with stunning, uniquely designed websites</div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProjects;
