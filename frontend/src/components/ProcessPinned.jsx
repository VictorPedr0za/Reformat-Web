import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GALLERY = [
  { seed: "reformat-rooftop-shoot", label: "Rodaje audiovisual" },
  { seed: "reformat-frame-by-frame", label: "Animación cuadro a cuadro" },
  { seed: "reformat-projection-test", label: "Pruebas de mapping" },
  { seed: "reformat-dev-standup", label: "Sprints de producto" },
];

export default function ProcessPinned() {
  const sectionRef = useRef(null);
  const imgRefs = useRef([]);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      imgRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { scale: 0.82, opacity: 0.25 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 88%", end: "top 45%", scrub: true },
          }
        );
        gsap.to(el, {
          opacity: 0.2,
          filter: "brightness(0.35) saturate(0.6)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "bottom 45%", end: "bottom 5%", scrub: true },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="md:sticky md:top-28 md:h-fit">
          <Reveal className="flex flex-col gap-6">
            <h2 className="max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              De la idea al render final, en equipo.
            </h2>
            <p className="max-w-md text-neutral-400">
              Cada proyecto pasa por guion, producción y postproducción con integrantes de las
              cinco líneas trabajando codo a codo, desde la primera reunión hasta la entrega.
            </p>
            <ul className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-6">
              {["Concepto y guion", "Producción y rodaje", "Postproducción", "Entrega y difusión"].map(
                (step, i) => (
                  <li key={step} className="flex items-center gap-4 text-sm text-neutral-300">
                    <span className="font-mono text-xs text-[var(--color-primary)]">0{i + 1}</span>
                    {step}
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          {GALLERY.map((item, i) => (
            <div
              key={item.seed}
              ref={(el) => (imgRefs.current[i] = el)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/1000/750`}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-5 text-sm font-semibold text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
