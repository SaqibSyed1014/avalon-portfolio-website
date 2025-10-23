"use client";

import React from "react";
import { Button } from "@/components/ui";
import Link from "next/link";

interface Project {
  id: string;
  image: string;
  alt: string;
  title: string;
}

const projects :Project[] = [
  {
    id: "quantum",
    title: "Quantum",
    image: "https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg",
    alt: "Project 1",
  },
  {
    id: "lora",
    title: "Lora",
    image:
      "https://framerusercontent.com/images/NAJSIK5XnZdV1Y4SAp0lueMbA.jpg?scale-down-to=2048",
    alt: "Project 1",
  },
  {
    id: "eciedge-store",
    title: "Eciedge Store",
    image: "https://framerusercontent.com/images/rhrxm36efhkLLxhTgRh5oSvA3g.png",
    alt: "Project 1",
  }
];

const RelevantWork = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h2 className="section-heading">More Projects</h2>
            <Button>View More</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
                <Link key={index} href={`/work/${project.id}`} className="h-full rounded-md border border-white/25 p-1.5 relative group hover:scale-[1.02] hover:translate-y-[-10px] transition-all duration-700">
                  <div className="flex flex-col gap-2 h-full relative z-10">
                    <div className="overflow-hidden rounded-[2px] border border-white/15 h-[248px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-secondary text-xl">{project.title}</h3>
                  </div>
                  {/*BG gradient*/}
                  <div
                    className="absolute inset-0 secondary-gradient opacity-0 transition-opacity group-hover:opacity-100 duration-700"
                    style={{ boxShadow: "rgb(81, 81, 114) 0px 5px 40px 0px inset, rgba(69, 69, 97, 0) 0px 0px 60px 2px, rgba(80, 80, 112, 0.32) 0px 0px 60px 30px" }}
                  ></div>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelevantWork;
