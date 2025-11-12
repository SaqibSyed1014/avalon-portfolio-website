"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const Navbar: React.FC = () => {
  const [isNavOpened, setNavOpened] = useState<boolean>(false);
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 w-full z-30 h-8 backdrop-blur-[10px]"></div>

      <nav
        className={
          `fixed top-0 right-0 left-0 z-50 w-full px-6 py-5 lg:p-8 xl:px-16 xl:py-10 xl:mix-blend-difference transition-all ${isNavOpened ? "!pb-[60px]" : ""}`
        }
        style={{ background: "transparent" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="flex flex-col gap-[60px]">
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
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/linkedin.png"
                      alt="Linkedin Logo"
                      fill={true}
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                  Linkedin
                </Link>
                <Link href="https://dribbble.com/abdul_uiux" target="_blank" className="flex items-center gap-1.5 text-white">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/dribbble.svg"
                      alt="Dribbble Logo"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                  Dribbble
                </Link>
                <Link href="https://www.behance.net/abdul_uiux" target="_blank" className="flex items-center gap-1.5 text-white">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/behance.svg"
                      alt="Behance Logo"
                      fill={true}
                      className="object-cover"
                    />
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
              className={`flex xl:hidden flex-col items-center gap-9 transition-all duration-700 ${isNavOpened ? "" : "max-h-0 overflow-hidden"}`}
            >
              <div className="flex flex-col gap-6">
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
            </div>
          </div>
        </div>
        <div className={`block xl:hidden absolute inset-0 ${isNavOpened ? "bg-black" : "mobile-nav-bg"}`}></div>
      </nav>
    </div>
  );
};

export default Navbar;
