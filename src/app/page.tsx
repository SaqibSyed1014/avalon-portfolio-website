"use client";

import About from "@/components/About";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import PageWrapper from "@/components/layout/PageWrapper";
import Pricing from "@/components/Pricing";
import Process from "@/components/process";
import Testimonials from "@/components/Testimonials";
import Works from "@/components/Works";

const Home = () => {
  return (
      <PageWrapper>
        <Hero />
        <About />
        <Works />
        <Benefits />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
      </PageWrapper>
  );
};

export default Home;
