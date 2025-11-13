"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

import { Button } from "@/components/ui";
import Marquee from "@/components/ui/Marquee";
import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

import { projects, certifications, socialLinks } from "@/lib/const";


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
        <div className="flex flex-col gap-[100px] xl:gap-[250px]">
          <div className="lg:pt-[100px]">
            <SectionLayout>
              <SectionHead subText="(1) Work" heading="My Recent Projects" />

              <div ref={horizontalRef} className="hidden xl:flex h-[403px] gap-5 will-change-transform">
                {projects.map((project, index) => (
                  <Link key={index} href={`/work/${project.id}`} className="h-full w-[49%] flex-none relative group cursor-pointer hover:scale-[1.02] hover:translate-y-[-10px] transition-all duration-700">
                      <div className="relative z-10 flex h-full flex-col gap-2 rounded-md border border-white/25 p-1.5">
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

                      {/*BG gradient*/}
                      <div
                        className="absolute inset-0 secondary-gradient opacity-0 transition-opacity group-hover:opacity-100 duration-700"
                        style={{ boxShadow: "rgb(81, 81, 114) 0px 5px 40px 0px inset, rgba(69, 69, 97, 0) 0px 0px 60px 2px, rgba(80, 80, 112, 0.32) 0px 0px 60px 30px" }}
                      ></div>
                  </Link>
                ))}
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:hidden gap-2.5">
                {projects.map((project, index) => (
                    <Link key={index} href={`/work/${project.id}`} className="flex h-full flex-col gap-2 rounded-md border border-white/25 p-1.5 md:h-[263px] lg:h-[300px]">
                      <div className="overflow-hidden rounded-[2px] border border-white/15">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-secondary text-xl">{project.title}</h3>
                    </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <Button href={socialLinks.upwork}>
                  Get a free strategy call
                </Button>
              </div>
            </SectionLayout>
          </div>

          <BadgesMarquee />
        </div>
    </section>
  );
};

const BadgesMarquee :React.FC = () => {
  return (
    <div className="bg-secondary flex items-center overflow-hidden h-[78px] lg:h-[160px]">
      <div className="flex gap-16 text-[30px] lg:text-[36px] xl:text-[46px] leading-[110%] text-black [&_li]:shrink-0">
        <Marquee gap={30} scrollBoost={false}>
          <div></div>
          {certifications.map((certificate, index) => (
            <div key={index} className="flex items-center gap-2">
              {certificate}
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                <path d="M27.6297 8.27917L32.1297 6.83917C32.5892 6.69532 33.0846 6.71797 33.529 6.90314C33.9734 7.0883 34.3384 7.42415 34.5597 7.85167L36.6747 12.0142C36.8706 12.3895 37.1769 12.6958 37.5522 12.8917L41.7147 15.0067C42.1464 15.2244 42.487 15.5877 42.6764 16.0325C42.8659 16.4772 42.8918 16.9746 42.7497 17.4367L41.3097 21.9367C41.1742 22.3457 41.1742 22.7876 41.3097 23.1967L42.7497 27.6967C42.8936 28.1561 42.8709 28.6516 42.6858 29.096C42.5006 29.5404 42.1648 29.9053 41.7372 30.1267L37.5747 32.2417C37.1994 32.4375 36.8931 32.7438 36.6972 33.1192L34.5822 37.2817C34.3609 37.7092 33.9959 38.045 33.5515 38.2302C33.1071 38.4154 32.6117 38.438 32.1522 38.2942L27.6522 36.8542C27.2432 36.7186 26.8013 36.7186 26.3922 36.8542L21.8922 38.2942C21.4328 38.438 20.9374 38.4154 20.493 38.2302C20.0486 38.045 19.6836 37.7092 19.4622 37.2817L17.3472 33.1192C17.1514 32.7438 16.8451 32.4375 16.4697 32.2417L12.3072 30.1267C11.8447 29.9059 11.4805 29.5214 11.2852 29.0476C11.0898 28.5737 11.0772 28.0443 11.2497 27.5617L12.6897 23.0617C12.8253 22.6526 12.8253 22.2107 12.6897 21.8017L11.2497 17.4367C11.1059 16.9772 11.1285 16.4818 11.3137 16.0374C11.4989 15.593 11.8347 15.228 12.2622 15.0067L16.4247 12.8917C16.8001 12.6958 17.1064 12.3895 17.3022 12.0142L19.4172 7.85167C19.6254 7.38783 19.9987 7.01803 20.4645 6.81425C20.9303 6.61046 21.4553 6.58727 21.9372 6.74917L26.4372 8.18917C26.8156 8.34283 27.2326 8.3743 27.6297 8.27917Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30.4886 37.754L34.7861 47.249L37.3511 41.4665L43.3811 43.3115L38.2511 32.0615M16.1561 32.084L10.6211 43.334L16.6511 41.489L19.1936 47.249L24.1211 37.574M26.9786 30.3965C29.0672 30.3965 31.0702 29.5668 32.5471 28.0899C34.0239 26.6131 34.8536 24.6101 34.8536 22.5215C34.8536 20.4329 34.0239 18.4299 32.5471 16.953C31.0702 15.4762 29.0672 14.6465 26.9786 14.6465C24.89 14.6465 22.887 15.4762 21.4101 16.953C19.9333 18.4299 19.1036 20.4329 19.1036 22.5215C19.1036 24.6101 19.9333 26.6131 21.4101 28.0899C22.887 29.5668 24.89 30.3965 26.9786 30.3965Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default WorkProjects;
