"use client";

import About from "@/components/About";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/process";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

const Home = () => {
  return (
    <div className="font-light uppercase">
      <div className="fixed top-0 right-0 left-0 z-50 h-7 backdrop-blur-md"></div>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Benefits />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
