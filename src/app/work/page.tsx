"use client";

import React from "react";

import Hero from "@/app/work/components/Hero";

import PageWrapper from "@/components/layout/PageWrapper";
import WorkList from "@/app/work/components/WorkList";


const Page = () => {
  return (
    <PageWrapper>
      <Hero />
      <WorkList />
    </PageWrapper>
  );
};

export default Page;
