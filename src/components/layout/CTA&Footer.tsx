"use client";

import React from "react";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FooterBG from "@/components/FooterBG";

const CtaFooter = () => {
  return (
    <div className="relative overflow-hidden">
      <FooterBG />
      <CTA />
      <Footer />
    </div>
  );
};

export default CtaFooter;
