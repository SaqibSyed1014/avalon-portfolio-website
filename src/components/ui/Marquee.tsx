"use client";

import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
  scrollBoost?: boolean;
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const Marquee = ({
                                  children,
                                  direction = "left",
                                  speed = 100,
                                  gap = 40,
                                  scrollBoost = true,
                                }: MarqueeProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [ready, setReady] = useState(false);

  const setup = () => {
    const track = wrapperRef.current;
    const content = contentRef.current;
    if (!track || !content) return;

    const itemsWidth = content.scrollWidth;
    const totalWidth = Math.round(itemsWidth + gap);

    if (tlRef.current) tlRef.current.kill();
    if (stRef.current) stRef.current.kill();

    const dirIsLeft = direction === "left";
    const fromX = dirIsLeft ? 0 : -totalWidth;
    const toX = dirIsLeft ? -totalWidth : 0;
    const duration = Math.max(4, totalWidth / Math.max(1, Math.abs(speed)));

    tlRef.current = gsap.fromTo(
      track,
      { x: fromX },
      {
        x: toX,
        ease: "none",
        duration,
        repeat: -1,
      }
    );

    tlRef.current.timeScale(1);
    setReady(true);

    if (scrollBoost) {
      stRef.current = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate(self) {
          if (!tlRef.current) return;

          const v = self.getVelocity();
          // Ignore small scroll jitter
          if (Math.abs(v) < 20) return;

          const sensitivity = 0.007; // increase for stronger response
          const boost = clamp(Math.abs(v) * sensitivity, 0, 2.5);

          const dirIsLeft = direction === "left";

          // When scrolling down (v > 0): speed up in base direction
          // When scrolling up (v < 0): speed up in opposite direction
          const scrollDown = v > 0;

          const reverseBoost = boost * 0.4;

          const targetScale = dirIsLeft
            ? scrollDown
              ? 1 + boost // down → faster left
              : -1 - reverseBoost // up → faster right
            : scrollDown
              ? -1 - boost // down → faster right
              : 1 + reverseBoost; // up → faster left

          gsap.to(tlRef.current, {
            timeScale: targetScale,
            duration: 0.25,
            ease: "power2.out",
            overwrite: true,
            onComplete: () => {
              // smoothly return to base speed
              gsap.to(tlRef.current!, {
                timeScale: dirIsLeft ? 1 : -1,
                duration: 1,
                ease: "power3.out",
              });
            },
          });
        },
      });
    }
  };

  useLayoutEffect(() => {
    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, speed, gap]);

  useEffect(() => {
    const onResize = () => requestAnimationFrame(() => setup());
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      if (tlRef.current) tlRef.current.kill();
      if (stRef.current) stRef.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%", display: "block" }}>
      <div
        ref={wrapperRef}
        style={{
          display: "flex",
          gap: `${gap}px`,
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        <div
          ref={contentRef}
          style={{ display: "flex", gap: `${gap}px`, alignItems: "center" }}
        >
          {children}
        </div>
        <div style={{ display: "flex", gap: `${gap}px`, alignItems: "center" }}>
          {children}
        </div>
      </div>

      {!ready && (
        <div style={{ position: "absolute", left: -99999, top: -99999, visibility: "hidden" }}>
          <div style={{ display: "flex", gap: `${gap}px` }}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Marquee;
