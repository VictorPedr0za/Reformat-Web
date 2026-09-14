import { useEffect, useRef } from "react";
import { animate } from "animejs";

const BLOBS = [
  { pos: "-top-40 -left-32 h-[34rem] w-[34rem]", color: "bg-[var(--color-primary)]/20", depth: 0.08, drift: 26 },
  { pos: "top-1/4 -right-40 h-[30rem] w-[30rem]", color: "bg-orange-500/15", depth: 0.16, drift: -22 },
  { pos: "bottom-0 left-1/4 h-[28rem] w-[28rem]", color: "bg-fuchsia-500/10", depth: 0.05, drift: 18 },
  { pos: "bottom-1/3 -right-24 h-[22rem] w-[22rem]", color: "bg-red-600/15", depth: 0.2, drift: -16 },
];

export default function GlowBackground() {
  const parallaxRefs = useRef([]);
  const floatRefs = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    floatRefs.current.forEach((el, i) => {
      if (!el) return;
      animate(el, {
        translateX: [0, BLOBS[i].drift],
        translateY: [0, BLOBS[i].drift * -0.7],
        duration: 8000 + i * 1400,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true,
      });
    });

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        parallaxRefs.current.forEach((el, i) => {
          if (!el) return;
          animate(el, {
            translateY: -y * BLOBS[i].depth,
            duration: 900,
            easing: "easeOutQuad",
          });
        });
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {BLOBS.map((blob, i) => (
        <div key={i} ref={(el) => (parallaxRefs.current[i] = el)} className={`absolute ${blob.pos}`}>
          <div
            ref={(el) => (floatRefs.current[i] = el)}
            className={`h-full w-full rounded-full ${blob.color} blur-3xl`}
          />
        </div>
      ))}
    </div>
  );
}
