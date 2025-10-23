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
import HeroBGAnimation from "@/components/HeroBGAnimation";
import FooterBG from "@/components/FooterBG";

const Home = () => {
  return (
    <div className="font-light uppercase">
      <div className="fixed top-0 right-0 left-0 w-full z-30 h-8 backdrop-blur-[10px]"></div>
      <HeroBGAnimation />

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
        <FooterBG />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
