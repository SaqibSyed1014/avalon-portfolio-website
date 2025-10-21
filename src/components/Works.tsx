import React from "react";

import { Button } from "@/components/ui";
import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";
import Marquee from "@/components/ui/Marquee";

const Works = () => {
  const projects = [
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
  return (
    <section>
      <div className="overflow-hidden pt-[100px]">
        <div className="flex flex-col gap-[250px]">
          <SectionLayout>
            <SectionHead subText="(1) Work" heading="My Recent Projects" />

            <div className="flex h-[403px] gap-5">
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

            <div className="flex justify-center">
              <Button>View more</Button>
            </div>
          </SectionLayout>

          <div className="bg-secondary flex h-[160px] items-center overflow-hidden">
            <div className="flex gap-16 text-[46px] leading-[110%] text-black [&_li]:shrink-0">
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

export default Works;
