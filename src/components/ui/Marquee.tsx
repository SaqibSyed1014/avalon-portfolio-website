"use client";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // pixels per second
  gap?: number; // px gap between items
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);
  const [ready, setReady] = useState(false);
  const widthRef = useRef<number>(0);
  const lastScrollY = useRef<number>(0);
  const resizeRaf = useRef<number | null>(null);

  // measure sizes and (re)create animation
  const setup = () => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // ensure children are laid out before measuring
    const contentRect = content.getBoundingClientRect();
    const itemsWidth = Math.round(contentRect.width);
    const totalWidth = itemsWidth + gap;

    // store measured width
    widthRef.current = totalWidth;

    // kill previous
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    // place two copies inline (we render them in JSX); animate the track (container's first child)
    // For left: x goes 0 -> -totalWidth
    // For right: x goes -totalWidth -> 0
    const dirIsLeft = direction === "left";
    const fromX = dirIsLeft ? 0 : -totalWidth;
    const toX = dirIsLeft ? -totalWidth : 0;
    const duration = totalWidth / Math.max(1, Math.abs(speed)); // seconds

    // create tween on container's inner track
    tlRef.current = gsap.fromTo(
      container,
      { x: fromX },
      {
        x: toX,
        ease: "none",
        repeat: -1,
        duration,
        overwrite: true,
      }
    );

    // ensure it moves immediately
    tlRef.current.timeScale(1);

    setReady(true);
  };

  useLayoutEffect(() => {
    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, speed, gap]);

  useEffect(() => {
    const handleResize = () => {
      if (resizeRaf.current) cancelAnimationFrame(resizeRaf.current);
      resizeRaf.current = requestAnimationFrame(() => {
        setup();
      });
    };
    window.addEventListener("resize", handleResize);
    // initial measure after fonts/images load
    const loadHandler = () => setup();
    window.addEventListener("load", loadHandler);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", loadHandler);
      if (resizeRaf.current) cancelAnimationFrame(resizeRaf.current);
      if (tlRef.current) tlRef.current.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!scrollBoost) return;

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      lastScrollY.current = current;

      // scale delta to a usable boost number.
      // tuned so normal wheel produces gentle boost; clamp to avoid crazy values.
      const raw = delta * 0.02; // adjust sensitivity
      const boost = clamp(raw, -1.2, 1.2); // can go negative -> negative timeScale -> temporary reverse

      // target timeScale: base 1 plus boost
      // positive boost -> speed up in current playback direction
      // negative boost -> can become negative -> brief reverse playback
      const target = 1 + boost;

      if (!tlRef.current) return;
      // animate timeScale smoothly, then ease back to 1
      gsap.killTweensOf(tlRef.current, "timeScale");
      gsap.to(tlRef.current, {
        timeScale: target,
        duration: 0.25,
        ease: "power2.out",
        onComplete: () => {
          // return to normal smoothly
          gsap.to(tlRef.current!, {
            timeScale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollBoost]);

  // Render two copies of content side-by-side so there's always a duplicate behind
  // Use visually-hidden measuring copy if not ready to avoid flicker
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        display: "block",
      }}
    >
      <div
        // this is the track we animate (moves horizontally). It contains two copies of the items.
        ref={containerRef}
        style={{
          display: "flex",
          gap: `${gap}px`,
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
        aria-hidden={false}
      >
        <div
          ref={contentRef}
          style={{ display: "flex", gap: `${gap}px`, alignItems: "center" }}
        >
          {children}
        </div>

        {/* duplicate copy for seamless loop */}
        <div style={{ display: "flex", gap: `${gap}px`, alignItems: "center" }}>
          {children}
        </div>
      </div>

      {/* protect against initial layout flash: until we measured width, keep track hidden offscreen but not with display:none */}
      {!ready && (
        <div style={{ position: "absolute", left: -99999, top: -99999, visibility: "hidden" }}>
          <div style={{ display: "flex", gap: `${gap}px` }}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Marquee;
