"use client";

import React from "react";

import Hero from "@/app/work/components/Hero";

import PageWrapper from "@/components/layout/PageWrapper";
import Content from "@/app/work/components/Content";
import RelevantWork from "@/app/work/components/RelevantWork";
import Gallery from "@/app/work/components/Gallery";


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
