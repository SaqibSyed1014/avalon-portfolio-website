"use client";

import About from "@/components/About";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/process";
import Testimonials from "@/components/Testimonials";
import Works from "@/components/Works";

const Home = () => {
  return (
    <div className="font-light uppercase">
      <div className="fixed top-0 right-0 left-0 z-50 h-[90px] backdrop-filter-[20px]" style={{ mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)" }}></div>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Benefits />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 rotate-y-180"
         style={{ mask: "linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 38.73873873873874%,rgba(0,0,0,1) 73.87387387387388%,rgba(0,0,0,0) 100%) add" }}
        >
          <div className="absolute top-[-214px] bottom-[109px] right-[-398px] opacity-10 w-[446px] blur-[100px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="absolute top-[-214px] bottom-[-116px] left-[595px] opacity-10 w-[154px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="absolute top-[-228px] bottom-[-211px] left-[-378px] opacity-10 w-[112px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="absolute top-[-227px] bottom-[-107px] left-[-267px] opacity-10 w-[172px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
          <div className="absolute top-[-215px] bottom-[-115px] left-[222px] opacity-10 w-[218px] blur-[44px] bg-[#a6a6a6] rotate-[-36deg] skew-y-[36deg]"></div>
        </div>
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
