import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

const SPANS = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function LineasBento({ lineas }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-flow-dense md:auto-rows-[220px] md:grid-cols-6">
      {lineas.map((linea, i) => {
        const span = SPANS[i % SPANS.length];
        const isFeature = span.includes("row-span-2");

        return (
          <Reveal key={linea.slug} className={span} delay={i * 90}>
            <Link
              to={`/lineas/${linea.slug}`}
              className="bento-tile group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={`https://picsum.photos/seed/${linea.image}/1200/1200`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="bento-tile-img absolute inset-0 h-full w-full object-cover grayscale contrast-125"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${linea.gradient} opacity-70 mix-blend-multiply`}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" aria-hidden="true" />

              <div className="relative flex flex-col gap-2 p-6 sm:p-7">
                <h3 className={`font-extrabold text-white ${isFeature ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
                  {linea.nombre}
                </h3>
                {isFeature && (
                  <p className="max-w-sm text-sm text-white/75 sm:text-base">{linea.resumen}</p>
                )}
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-white">
                  Ver línea
                  <svg
                    className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
