"use client";

import React from "react";

import Hero from "@/app/about/components/Hero";
import LogosMarquee from "@/app/about/components/LogosMarquee";
import Services from "@/app/about/components/Services";
import Stack from "@/app/about/components/Stack";

import PageWrapper from "@/components/layout/PageWrapper";


const Page = () => {


  return (
    <PageWrapper>
      <Hero />
      <Services />
      <LogosMarquee />
      <Stack />
    </PageWrapper>
  );
};

export default Page;
