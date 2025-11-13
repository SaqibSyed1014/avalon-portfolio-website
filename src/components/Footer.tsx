"use client";

import Link from "next/link";
import React from "react";

import { freelancerName, socialLinks } from "@/lib/const";

const Footer :React.FC = () => {
  return (
    <footer className="pt-[60px] pb-6 lg:pb-[60px] xl:px-16">
      <div className="relative z-10 container xl:max-w-[1600px]">
        <div className="flex flex-col gap-[42px] lg:gap-[60px]">
          <div className="flex items-start justify-between max-lg:flex-col max-lg:gap-[42px]">
            <div className="hidden space-y-[18px] xl:block">
              <div className="text-3xl uppercase">{freelancerName}</div>
              <div className="w-full max-w-[243px] opacity-60">
                <p>
                  Senior UI/UX Designer focused on clean interfaces, measurable results, and
                  delightful UX.
                </p>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="text-xl uppercase">Contact</div>
              <div className="flex flex-col gap-3 text-white">
                <Link href={`mailto:${socialLinks.email}`} className="normal-case">
                  ab.wahab192@gmail.com
                </Link>
                <Link href={socialLinks.upwork} target="_blank" className="normal-case">
                  upwork.com/abduluiux
                </Link>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="text-xl uppercase">Socials</div>
              <div className="flex flex-col gap-3 text-white">
                <Link href={socialLinks.behance} target="_blank" className="normal-case">
                  Behance
                </Link>
                <Link href={socialLinks.dribbble} target="_blank" className="normal-case">
                  Dribbble
                </Link>
                <Link href={socialLinks.pinterest} target="_blank" className="normal-case">
                  Pinterest
                </Link>
              </div>
            </div>
          </div>

          <div className="text-secondary flex w-full justify-center max-md:text-sm">
            <p>© 2025 Abdul. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
