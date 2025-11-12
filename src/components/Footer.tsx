"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-[60px] pb-6 lg:pb-[60px] xl:px-16">
      <div className="container xl:max-w-[1600px] relative z-10">
        <div className="flex flex-col gap-[42px] lg:gap-[60px]">
          <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-[42px]">
            <div className="space-y-[18px] hidden xl:block">
              <div className="uppercase text-3xl">
                Abdul Wahab
              </div>
              <div className="opacity-60 w-full max-w-[243px]">
                <p>Senior UI/UX Designer focused on clean interfaces, measurable results, and delightful UX.</p>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="uppercase text-xl">
                Contact
              </div>
              <div className="flex flex-col text-white gap-3">
                <Link href="mailto:ab.wahab192@gmail.com" className="normal-case">
                  ab.wahab192@gmail.com
                </Link>
                <Link href="https://www.upwork.com/freelancers/abduluiux" target="_blank" className="normal-case">
                  upwork.com/abduluiux
                </Link>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="uppercase text-xl">
                Socials
              </div>
              <div className="flex flex-col text-white gap-3">
                <Link href="https://www.behance.net/abdul_uiux" target="_blank" className="normal-case">
                  Behance
                </Link>
                <Link href="https://dribbble.com/abdul_uiux" target="_blank" className="normal-case">
                  Dribbble
                </Link>
                <Link href="https://www.pinterest.com/abdul_uiux/" target="_blank" className="normal-case">
                  Pinterest
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-secondary w-full max-md:text-sm">
            <p>© 2025 Abdul. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
