import { Link } from "react-router-dom";
import { lineas } from "../data/lineas.js";
import LineaCard from "../components/LineaCard.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
          <span className="stagger-item rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            Semillero creativo
          </span>
          <h1 className="stagger-item mt-6 text-4xl font-extrabold leading-tight sm:text-6xl" style={{ animationDelay: "60ms" }}>
            Bienvenido a <span className="text-[var(--color-primary)]">Reformat</span>
          </h1>
          <p className="stagger-item mt-6 max-w-xl text-lg text-white/70" style={{ animationDelay: "120ms" }}>
            Transformamos ideas en proyectos audiovisuales, de animación, mapping, videomapping
            y desarrollo web/app.
          </p>
          <div className="stagger-item mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "180ms" }}>
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900">Nuestras líneas</h2>
          <p className="mt-3 text-neutral-500">
            Cada línea tiene sus propios proyectos, integrantes y un formulario para unirte.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lineas.map((linea, i) => (
            <LineaCard key={linea.slug} linea={linea} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-neutral-50">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900">¿Quieres ser parte del semillero?</h2>
          <p className="max-w-xl text-neutral-500">
            Únete a Reformat y desarrolla proyectos reales junto a un equipo multidisciplinario.
          </p>
          <Link
            to="/conocenos#unete"
            className="btn-press rounded-lg bg-[var(--color-primary)] px-7 py-3 font-semibold text-white shadow-sm"
          >
            Únete a nosotros
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
