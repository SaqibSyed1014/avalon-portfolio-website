"use client";
// Optimized component using clean, semantic Tailwind CSS classes and TypeScript.

import Link from "next/link";
import React from "react";

// Define the shape of props for the NavLink component
interface NavLinkProps {
  href: string;
  text: string;
  isExternal?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, isExternal = false }) => {
  // Consolidating all link styles into commonClasses
  const commonClasses = "text-xl font-light uppercase transition duration-200 group relative";

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
  return (
    <nav
      className="fixed top-0 right-0 left-0 z-10 w-full py-5 px-6 md:p-8 xl:py-10"
      style={{ background: "transparent" }}
    >
      <div className="mx-auto xl:px-16">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Link */}
          <Link
            href="/"
            className="text-xl font-light tracking-wider uppercase transition duration-150 hover:text-gray-300"
          >
            Mark Avalon
          </Link>

          {/* Navigation Links */}
          <div className="hidden xl:flex space-x-8 md:space-x-[22px]">
            <NavLink href="/" text="Work" />
            <NavLink href="/" text="About" />
            <NavLink href="https://calendly.com" text="Get in touch" isExternal={true} />
          </div>

          <div className="flex xl:hidden h-11 w-11 overflow-hidden relative">
            <div className="h-0.5 w-full absolute left-0 top-[35%] bg-white"></div>
            <div className="h-0.5 w-full absolute left-0 top-[65%] bg-white"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
