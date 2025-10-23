"use client";

import React from "react";

const Content = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <div className="space-y-[70px]">
          <div className="flex gap-10">
            <div className="space-y-1.5">
              <p className="opacity-80">Year</p>
              <p className="text-2xl">Duration</p>
            </div>
            <div className="space-y-1.5">
              <p className="opacity-80">Duration</p>
              <p className="text-2xl">6 weeks</p>
            </div>
            <div className="space-y-1.5">
              <p className="opacity-80">Category</p>
              <p className="text-2xl">Business</p>
            </div>
          </div>

          <div className="w-full max-w-[850px]">
            <div className="space-y-5 text-xl">
              <p>
                Quantum struggled with an outdated website that did not reflect their cutting-edge products and
                services.
                The old site was difficult to navigate and failed to engage visitors, leading to a high bounce rate and
                low conversion rate.
              </p>
              <p>
                We started by conducting a thorough analysis of their existing site and competitors. Based on our
                findings, we created a new design that was both visually appealing and user-friendly. We streamlined the
                navigation and incorporated interactive elements to keep visitors engaged.
              </p>
              <p>
                The design focused on a clean, modern aesthetic with a tech-savvy feel. We used bold colors, sleek
                fonts,
                and high-quality images to create a professional and dynamic look. The layout was designed to highlight
                key products and services, making it easy for visitors to find what they were looking for.
              </p>
              <p>
                The new website resulted in a 40% increase in user engagement and a 25% boost in conversion rates.
                Visitors praised the new design for its ease of use and professional appearance, helping Quantum its
                brand
                and grow its business.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Content;
