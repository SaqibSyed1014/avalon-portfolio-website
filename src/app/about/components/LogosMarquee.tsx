import Image from "next/image";
import React from "react";

import Marquee from "@/components/ui/Marquee";

const LogosMarquee = () => {
  const logos = [
    'https://framerusercontent.com/images/yIqX8RoJ3UMi4dh4lcxaWQoxlQ.png',
    'https://framerusercontent.com/images/oqrkaKTvZzttmeHIo7pBdnNgotA.png',
    'https://framerusercontent.com/images/yIqX8RoJ3UMi4dh4lcxaWQoxlQ.png',
    'https://framerusercontent.com/images/XxHKTaEHJgdRXO8Gk2DbGW4eIJ4.png',
    'https://framerusercontent.com/images/lCrnSNVSRYLHK93uDKGCfxeRSY.png',
    'https://framerusercontent.com/images/XxHKTaEHJgdRXO8Gk2DbGW4eIJ4.png',
    'https://framerusercontent.com/images/lCrnSNVSRYLHK93uDKGCfxeRSY.png',
    'https://framerusercontent.com/images/jr9DR2LoFR4xBtHMuNaxt6Hb0I.png',
    'https://framerusercontent.com/images/XxHKTaEHJgdRXO8Gk2DbGW4eIJ4.png',
    'https://framerusercontent.com/images/yIqX8RoJ3UMi4dh4lcxaWQoxlQ.png',
    'https://framerusercontent.com/images/lCrnSNVSRYLHK93uDKGCfxeRSY.png',
    'https://framerusercontent.com/images/XxHKTaEHJgdRXO8Gk2DbGW4eIJ4.png',
    'https://framerusercontent.com/images/lCrnSNVSRYLHK93uDKGCfxeRSY.png',
  ]
  return (
    <section>
      <div className="h-[132px]">
        <Marquee speed={70} gap={50} scrollBoost={true}>
          {logos.map((logo, i) => (
            <div key={i} className="relative h-[36px] opacity-60 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            ))
          }
          {logos.map((logo, i) => (
            <div key={i} className="relative w-[150px] h-[36px] opacity-60 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))
          }
        </Marquee>
      </div>
    </section>
  );
};

export default LogosMarquee;
