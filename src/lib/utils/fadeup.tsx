import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useFadeUpAnimation = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".fade-up");
    const fadeInElements = gsap.utils.toArray<HTMLElement>(".fade-in");

    elements.forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay") || "0");

      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    fadeInElements.forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay") || "0");

      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}

export default useFadeUpAnimation;
