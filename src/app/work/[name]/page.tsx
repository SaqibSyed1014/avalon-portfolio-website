"use client";

import React from "react";

import Content from "@/app/work/components/Content";
import Gallery from "@/app/work/components/Gallery";
import Hero from "@/app/work/components/Hero";
import RelevantWork from "@/app/work/components/RelevantWork";

import PageWrapper from "@/components/layout/PageWrapper";


const Page = () => {
  return (
    <PageWrapper>
      <Hero />
      <Content />
      <Gallery />
      <RelevantWork />
    </PageWrapper>
  );
};

export default Page;
