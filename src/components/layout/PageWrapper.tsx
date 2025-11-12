"use client";

import React, { FC } from "react";

import HeroBGAnimation from "@/components/HeroBGAnimation";
import CTAFooter from "@/components/layout/CTA&Footer";
import Navbar from "@/components/Navbar";

type TProps = Readonly<IChildren>;

const PageWrapper: FC<TProps> = ({ children }) => {
  return (
    <div className="antialiased font-light uppercase">
      <HeroBGAnimation />
      <Navbar />
      {children}
      <CTAFooter />
    </div>
  );
};

export default PageWrapper;
