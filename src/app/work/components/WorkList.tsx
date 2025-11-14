"use client"

import Link from "next/link";
import React from "react";

import { projects } from "@/lib/const";

const WorkList = () => {
  return (
    <section className="pb-[105px]">
      <div className="container relative z-20">
        <div className="grid lg:grid-cols-2 gap-5 fade-up">
          {projects.map((project, index) => (
            <div key={index} className="relative group flex-none hover:scale-[1.02] hover:translate-y-[-10px] transition-all duration-700">
              <div className="relative z-10 flex h-full flex-col gap-2 rounded-md border border-white/25 p-0.5 md:p-1.5">
                <div className="overflow-hidden rounded-[2px] border border-white/15 h-[211px] md:h-[390px]">
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
                className="absolute inset-0 brand-gradient shadow-[0_0_60px_30px_#50507052,0_5px_40px_0_#515172_inset] opacity-0 transition-opacity group-hover:opacity-100 duration-700"
                style={{ boxShadow: "#232D26 0px 5px 40px 0px inset, #232D26 0px 0px 60px 2px" }}
              ></div>

              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-700">
                <Link href="/" target="_blank">
                  <div
                    className="flex justify-center gap-2 md:gap-3 items-center text-sm py-2 px-3 md:py-3 md:px-4 md:text-xl custom-gradient rounded-md border border-white/25 normal-case cursor-pointer">
                    View Figma

                    {/* Figma icon */}
                    <div className="max-sm:scale-[.7]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24"
                           fill="none">
                        <path
                          d="M0 20C0 17.7909 1.79086 16 4 16H8V20C8 22.2091 6.20914 24 4 24C1.79086 24 0 22.2091 0 20Z"
                          fill="#0ACF83" />
                        <path
                          d="M8 12C8 9.79089 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                          fill="#1ABCFE" />
                        <path d="M0 12C0 14.2091 1.79086 16 4 16L8 16L8 8L4 8C1.79086 8 0 9.79086 0 12Z"
                              fill="#A259FF" />
                        <path d="M8 0V8H12C14.2091 8 16 6.20914 16 4C16 1.79086 14.2091 0 12 0L8 0Z"
                              fill="#FF7262" />
                        <path d="M0 4C0 6.20914 1.79086 8 4 8H8L8 0L4 0C1.79086 0 0 1.79086 0 4Z"
                              fill="#F24E1E" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
