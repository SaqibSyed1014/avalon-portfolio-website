"use client";

import Link from "next/link";
import React, { useState } from "react";

interface NavLinkProps {
  href: string;
  text: string;
  isExternal?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, isExternal = false }) => {
  // Consolidating all link styles into commonClasses
  const commonClasses = "text-xl lg:text-2xl xl:text-xl font-light uppercase transition duration-200 group relative";

  // Underline span styles
  const underlineClasses =
    "absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        {text}
        {/* Animated underline for hover state */}
        <span className={underlineClasses}></span>
      </a>
    );
  }

  return (
    <a href={href} className={commonClasses}>
      {text}
      {/* Animated underline for hover state */}
      <span className={underlineClasses}></span>
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isNavOpened, setNavOpened] = useState<boolean>(false);
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 w-full z-30 h-8 backdrop-blur-[10px]"></div>

      <nav
        className={
          `fixed top-0 right-0 left-0 z-50 w-full px-6 py-5 lg:p-8 xl:px-16 xl:py-10 xl:mix-blend-difference transition-all ${isNavOpened ? "!pb-[60px] lg:!pb-20" : ""}`
        }
        style={{ background: "transparent" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="flex flex-col gap-[82px]">
            <div className="flex items-center justify-between">
              {/* Logo/Brand Link */}
              <Link
                href="/"
                className="text-xl font-light tracking-wider uppercase transition duration-150 hover:text-gray-300"
              >
                Abdul Wahab
              </Link>

              {/* Navigation Links */}
              <div className="hidden space-x-8 md:space-x-[22px] xl:flex">
                <Link href="https://www.linkedin.com/in/abdul-uiux/" target="_blank" className="flex items-center gap-1.5 text-white">
                  <div className="w-6 h-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/linkedin.png" alt="Linkedin Logo" className="w-full h-full object-cover" />
                  </div>
                  Linkedin
                </Link>
                <Link href="https://dribbble.com/abdul_uiux" target="_blank" className="flex items-center gap-1.5 text-white">
                  <div className="w-6 h-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/dribbble.svg" alt="Dribbble Logo" />
                  </div>
                  Dribbble
                </Link>
                <Link href="https://www.behance.net/abdul_uiux" target="_blank" className="flex items-center gap-1.5 text-white">
                  <div className="w-6 h-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/behance.svg" alt="Behance Logo" />
                  </div>
                  Behance
                </Link>
              </div>

              <div
                onClick={() => setNavOpened(!isNavOpened)}
                className="relative flex h-11 w-11 overflow-hidden xl:hidden"
              >
                <div
                  className={`absolute left-0 h-0.5 w-full bg-white transition-all ${isNavOpened ? "top-1/2 rotate-[30deg]" : "top-[38%]"}`}
                ></div>
                <div
                  className={`absolute left-0 h-0.5 w-full bg-white transition-all ${isNavOpened ? "top-1/2 rotate-[-30deg]" : "top-[63%]"}`}
                ></div>
              </div>
            </div>

            <div
              className={`flex flex-col items-center gap-9 transition-all duration-700 ${isNavOpened ? "" : "max-h-0 overflow-hidden"}`}
            >
              <NavLink href="/" text="Work" />
              <NavLink href="/" text="About" />
              <NavLink href="https://calendly.com" text="Get in touch" isExternal={true} />
            </div>
          </div>
        </div>
        <div className={`absolute inset-0 ${isNavOpened ? "bg-black" : "mobile-nav-bg"}`}></div>
      </nav>
    </div>
  );
};

export default Navbar;
