"use client"

import React from "react";

const Gallery = () => {
  return (
    <section className="pb-16 lg:pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="card-style !p-1.5 shadow-[inset_-1px_1px_#ffffff80]">
            <div className="overflow-hidden rounded-[2px] h-[522px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg?scale-down-to=4096" alt=""
                   className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="card-style !p-1.5 shadow-[inset_-1px_1px_#ffffff80]">
            <div className="overflow-hidden rounded-[2px] h-[522px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/e633Jp9rA7J1z8Zq58eJTQNeco.jpg?scale-down-to=4096" alt=""
                   className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
