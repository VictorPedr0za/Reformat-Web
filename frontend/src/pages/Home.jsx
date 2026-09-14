import { Link } from "react-router-dom";
import { lineas } from "../data/lineas.js";
import Reveal from "../components/Reveal.jsx";
import Marquee from "../components/Marquee.jsx";
import LineasBento from "../components/LineasBento.jsx";
import ProcessPinned from "../components/ProcessPinned.jsx";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Attention */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div
          className="pointer-events-none absolute left-1/2 top-[-20%] h-[42rem] w-[64rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/25 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-20 text-center sm:pb-36 sm:pt-24">
          <h1 className="stagger-item text-[clamp(2.75rem,5vw,5.5rem)] font-extrabold leading-[1.05] text-white">
            Ideas que se transforman en proyectos reales.
          </h1>
          <p className="stagger-item mt-8 max-w-xl text-lg text-white/70" style={{ animationDelay: "80ms" }}>
            Semillero audiovisual que une cine, animación, mapping, videomapping y desarrollo
            web/app bajo un mismo equipo creativo.
          </p>
          <div
            className="stagger-item mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "160ms" }}
          >
            <Link
              to="/lineas"
              className="btn-press rounded-lg bg-[var(--color-primary)] px-7 py-3 font-semibold text-white shadow-lg shadow-red-900/30"
            >
              Conoce nuestras líneas
            </Link>
            <Link
              to="/conocenos"
              className="btn-press rounded-lg border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white/5"
            >
              Conócenos
            </Link>
          </div>
        </div>
      </section>

      {/* Interest — texture strip */}
      <Marquee />

      {/* Interest — bento grid */}
      <section className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Nuestras líneas</h2>
          <p className="mt-3 text-neutral-400">
            Cada línea tiene sus propios proyectos, integrantes y un formulario para unirte.
          </p>
        </Reveal>

        <div className="mt-14">
          <LineasBento lineas={lineas} />
        </div>
      </section>

      {/* Desire — pinned scroll gallery */}
      <ProcessPinned />

      {/* Action */}
      <section className="grain-surface relative border-t border-white/10 bg-neutral-950">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-32 text-center md:py-40">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight text-white">
            ¿Listo para unirte al semillero?
          </h2>
          <p className="max-w-xl text-neutral-400">
            Únete a Reformat y desarrolla proyectos reales junto a un equipo multidisciplinario.
          </p>
          <Link
            to="/conocenos#unete"
            className="btn-press rounded-lg bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-900/30"
          >
            Únete a nosotros
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
