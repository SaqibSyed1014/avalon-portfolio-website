"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="pt-[60px] pb-6 lg:pb-[60px] xl:px-16">
      <div className="container xl:max-w-[1600px] relative z-10">
        <div className="flex flex-col gap-[42px] lg:gap-[60px]">
          <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-[42px]">
            <div className="space-y-[18px] hidden xl:block">
              <div className="uppercase text-3xl">
                Mark Avalon
              </div>
              <div className="opacity-60">
                <p>© 2025 Avalon. All rights reserved.</p>
                <p>Designed by Josiah Bhanghoyer</p>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="uppercase text-xl">
                Contact
              </div>
              <div className="text-white space-y-3">
                <p className="cursor-pointer">Markavalon@mail.com</p>
                <p className="cursor-pointer">0123456789</p>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="uppercase text-xl">
                Socials
              </div>
              <div className="text-white space-y-3">
                <p className="cursor-pointer">X (Formerly Twitter)</p>
                <p className="cursor-pointer">Dribbble</p>
                <p className="cursor-pointer">Behance</p>
              </div>
            </div>
            <div className="space-y-[18px]">
              <div className="uppercase text-xl">
                Pages
              </div>
              <div className="text-white space-y-3">
                <p className="cursor-pointer">Work</p>
                <p className="cursor-pointer">About me</p>
                <p className="cursor-pointer">404</p>
              </div>
            </div>
          </div>

          <div className="flex xl:hidden justify-between lg:items-center max-lg:flex-col text-secondary opacity-60 w-full">
            <p>@2025 Display. All rights reserved.</p>
            <p>Designed by Abdul Wahab</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
