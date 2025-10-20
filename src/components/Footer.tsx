import React from "react";

const Footer = () => {
  return (
    <footer className="px-16 py-[60px]">
      <div className="">
        <div className="flex justify-between items-start">
          <div className="space-y-[18px]">
            <div className="uppercase text-2xl">
              Mark Avalon
            </div>
            <div>
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
              <p className="cursor-pointer">About Me</p>
              <p className="cursor-pointer">404</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
